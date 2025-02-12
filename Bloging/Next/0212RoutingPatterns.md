# 📚 고급 라우팅 패턴

### 🤔 경로 그룹

`/app` 폴더 내 기본적인 폴더는 항상 URL 경로로 매핑되지만, `()`를 사용해 URL 경로에 영향을 주지 않는 폴더를 만들 수 있습니다. 각자의 레이아웃(layout.tsx)을 가질 수 있기 때문에 경로에 맞는 여러 레이아웃을 제공할 수 있습니다.

```
# 구조
├─app/
│  ├─(details)/
│  │  ├─details/
│  │  │  ├─[detailId]/
│  │  │  │  ├─error.tsx
│  │  │  │  ├─loading.tsx
│  │  │  │  └─page.tsx
│  │  └─layout.tsx  <== (details) 그룹에서만 동작하는 레이아웃
│  ├─layout.tsx  <== 루트 레이아웃
│  └─page.tsx
```

```tsx
/app/(details) / layout.tsx;

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="border-2 px-3 py-2">
      <p className="text-gray-500">(movies) 경로 그룹의 레이아웃</p>
      {children}
    </div>
  );
}
```

---

### 🤔 경로 병렬 처리

`@` 접두사의 폴더는 URL 경로에 영향을 주지 않는 페이지로, 하나의 레이아웃에서 병렬로 경로를 처리할 수 있습니다.

이를 통해 여러 페이지나 컴포넌트를 병렬로 로드하고 렌더링할 수 있어, 순차적 로딩 대비 전체 로딩 시간이 단축되고 각 컴포넌트의 로딩 상태를 독립적으로 표시할 수 있어 더 나은 사용자 경험을 제공합니다.

```
# 구조
├─app
│  ├─async
│  │  ├─@abc
│  │  │  ├─loading.tsx
│  │  │  └─page.tsx
│  │  ├─@xyz
│  │  │  ├─loading.tsx
│  │  │  └─page.tsx
│  │  ├─layout.tsx
│  │  ├─loading.tsx
│  │  └─page.tsx
```

`http://localhost:3000/async` 주소로 접근하면, 로딩 애니메이션 및 페이지 결과가 출력되며, 병렬 경로 처리 방식을 사용하면 각 페이지 컴포넌트가 독립적으로 로딩하고 로딩/에러 상태를 각 컴포넌트별로 쉽게 분리할 수 있어 복잡한 컴포넌트의 분기 처리가 줄어들 수 있습니다.

```tsx
// /app/async/page.tsx

import { Suspense } from 'react';
import Loader from '@/components/Loader';
import wait from '@/utils/wait';
import Abc from './Abc';
import Xyz from './Xyz';

export default async function Page() {
  await wait(1000);
  return (
    <>
      <h1>비동기 페이지!</h1>
      <Suspense fallback={<Loader color="red" />}>
        <Abc />
      </Suspense>
      <Suspense fallback={<Loader color="blue" />}>
        <Xyz />
      </Suspense>
    </>
  );
}
```

---

### 🤔 경로 가로채기

Next.js에서는 경로 가로채기 기능을 통해 현재 레이아웃에서 다른 URL 경로를 출력할 수 있습니다. 경로 가로채기의 `(..)` 같은 이름 규칙은, 상대 경로 (`../`, `./`)와 유사하지만, 폴더가 아닌 세그먼트를 기준으로 합니다.

### 🤔 미들웨어

루트 경로에 생성하는 `/middleware.ts` 파일을 통해, 특정 경로로 이동하기 전에 서버 측에서 실행되는 코드를 제공할 수 있고, 주로 인증 및 권한 확인이 필요한 페이지를 구분하는데 사용합니다. 응답 헤더 및 쿠키 설정, Redirect, Rewrite 등의 작업을 수행할 수 있습니다.

1. Next.js Edge Runtime 초기화
2. 요청된 경로와 매칭되는 미들웨어 실행(export const config = { matcher: [`/dashboard{/*}`, `...`]})
3. 정적/동적 경로 매칭
4. 레이아웃과 페이지 렌더링

미들웨어는 호출이 끝나야 경로 접근이 가능하여, 복잡하거나 오래 걸리는 작업은 피해야하고, `next/headers`의 쿠키나 헤더는 미들웨어 실행 후에만 수정 가능하며, 외부 패키지 사용이 제한될 수 있습니다.

복잡한 경로 매칭과 처리를 위해 `path-to-regexp` 라이브러리를 사용합니다.

```tsx
// /app/middleware.ts

import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function middleware(request: NextRequest) {
  return NextResponse.next();
}

// matcher 속성에 일치하는 경로에서만 미들웨어가 호출됩니다.
// `config` 내보내기를 생략하면, 모든 경로에서 미들웨어가 호출됩니다.
export const config = {
  matcher: ['/dashboard', '...'], // 특정 경로만 일치
};
```

미들웨어는 기본적으로 모든 경로 요청에서 호출되며, 특정 경로를 제외하고 싶을때 source 속성에 정규표현식(RegExp)을 사용하여 제외할 수 있습니다. `(?!)` 표현은 특정 패턴을 제외하는 부정 전방 일치를 의미하고, 명시된 경로를 제외한 나머지 경로에서 호출됩니다.

- 미들웨어에서 제외 될 경로

  - `api/*`: API 라우트
  - `_next/static/*`: 정적 파일
  - `_next/image/*`: 이미지 최적화 파일
  - `favicon.ico`: 파비콘 파일

```ts
// ...
export const config = {
  matcher: [
    {
      source: `/((?!api|_next/static|_next/image|favicon.ico).*)`,
      // Prefetch 제외
      missing: [
        { type: 'header', key: 'next-router-prefetch' },
        { type: 'header', key: 'purpose', value: 'prefetch' },
      ],
    },
  ],
};
```

---

### 🤔 API

`/app/api` 폴더 내 구조를 통해 API 엔드포인트를 정의하고, `GET`, `POST`, `PUT`, `DELETE` 등의 메서드 요청을 처리할 수 있습니다.

```
# 구조
// route.ts 파일 사용

├─app
│  ├─api
│  │  ├─details
│  │  │  └─[detailId]
│  │  │     └─route.ts
│  │  └─users
│  │     └─route.ts
```

```tsx
// /app/api/details/[detailId]/route.ts

export async function GET(
  request: Request,
  { params }: { params: { detailId: string } },
) {
  const { detailId } = params;
  return NextResponse.json({ message: `Detail ID: ${detailId}` });
}
```

---

### 🤔 서버 액션

Next.js에서는 서버에서만 실행되는 함수를 작성할 수 있는데, 이 함수를 서버 액션이라고 합니다. `use server`를 추가하여 서버 액션을 정의할 수 있습니다.

서버 액션은 `form 테그`의 `action 속성`에서 불러와 사용할 수 있습니다.

```tsx
// /serverActions/index.ts

'use server';

export async function action(formData: FormData) {
  const name = formData.get('name');
  const email = formData.get('email');

  // 서버에서만 실행되는 콘솔 출력 - 터미널에 출력
  console.log('name', name);
  console.log('email', email);

  return { name, email };
}
```

### 🤔 최적화

#### 1. 이미지 최적화

`<Image />` 컴포넌트를 사용하여 이미지를 최적화할 수 있습니다. 지연 로딩, 브라우저 캐싱, 크기 최적화 등의 기능을 아주 간단하게 사용할 수 있고, src,alt,width,height 속성은 필수 속성입니다. 동일 소스 경로의 이미지는 자동으로 캐싱됩니다.

만약 원격의 이미지 경로를 사용하는 경우에 `remotePatterns` 속성을 next.config.js 파일에 추가해야 합니다. 여기에는 포트 번호나 하위 경로를 명시하는 것도 가능합니다.

```tsx
// /app/components/page.tsx
'use client';
import { useState } from 'react';
import Image from 'next/image';

export default function Page() {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div>
      <Image
        src="/images/profile.jpg"
        alt="Profile"
        width={144}
        height={144}
        onLoad={() => setIsLoading(true)} // onLoad 속성을 통해 콜백 호출
        quality={100} // 이미지 퀄리티 설정
        priority // LCP 최적화
      />
    </div>
  );
}
```

#### 2. 폰트

Next.js는 기본적으로 Google Fonts를 자체 호스팅으로 지원하며, 구글 API로 별도 요청을 전송하지 않아도 됩니다.

```tsx
// /styles/fonts.ts

import { Inter } from 'next/font/google';

export const inter = Inter({
  subsets: ['latin'], // 사용할 폰트 집합
  display: 'swap', // 폰트 다운 전까지 기본 폰트 표시 (최적화)
  weight: ['400', '700'], // 사용할 폰트 가중치
  variable: '--font-inter', // CSS 변수 이름
});

// /app/layout.tsx
// className 속성을 통해 폰트 적용
import { inter } from '@/styles/fonts';

export default function FontLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <h1 className={inter.className}>Hello World</h1>;
}
```
