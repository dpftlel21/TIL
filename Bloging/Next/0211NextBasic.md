# 📚 Next.js 기본

Next.js는 Vercel에서 개발한 React 프레임워크이며, SSR(Server-Side Rendering), CSR(Client-Side Rendering), API라우팅 등의 다양한 최적화 기능을 제공합니다.

### 🤔 CSR과 SSR이란?

- CSR : 페이지를 로드할 때 모든 자바스크립트 코드를 다운로드하고 실행하여 페이지를 렌더링
- SSR : 페이지를 로드할 때 서버에서 렌더링된 HTML을 받아와 페이지를 렌더링

```js
# 설치 및 구성
npx create-next-app@latest <프로젝트이름>
    ✔ Would you like to use TypeScript? … Yes  # 타입스크립트 사용 여부
    ✔ Would you like to use ESLint? … Yes  # ESLint 사용 여부
    ✔ Would you like to use Tailwind CSS? … Yes  # Tailwind CSS 사용 여부
    ✔ Would you like your code inside a `src/` directory? … No  # src/ 디렉토리 사용 여부
    ✔ Would you like to use App Router? (recommended) … Yes  # App Router 사용 여부
    ✔ Would you like to use Turbopack for next dev? … No  # Turbopack 사용 여부
    ✔ Would you like to customize the import alias (@/* by default)? … No  # `@/*` 외 경로 별칭 사용 여부
```

---

### 🤔 Sever vs Client

Next.js는 서버 컴포넌트와 클라이언트 컴포넌트를 구분하여 코드 일부가 서버 혹은 클라이언트에서 출력될 수 있도록 만들 수 있습니다. 기본적으로 생성하는 모든 컴포넌트는 서버 컴포넌트이며 클라이언트 컴포넌트로 변경 및 사용 하려면 `use client` 디렉티브를 추가해야 합니다.

```js
'use client';

const ClientComponent = () => {
  return <div>Client Component</div>;
};
```

서버 컴포넌트와 클라이언트 컴포넌트는 사용할 수 있는 API가 다르며, 서버 컴포넌트에서는 캐싱, 성능, SEO 등의 장점, 클라이언트 컴포넌트에서는 상호작용 (버튼 클릭, 폼 제출, 모달 열기 등), 브라우저 API(window, document) 등의 장점이 있습니다.

- 서버 컴포넌트

  - cookies
  - headers
  - redirect
  - generateMetadata
  - revalidatePath .....

- 클라이언트 컴포넌트

  - useState
  - useEffect
  - onClick
  - onChange
  - useRouter
  - useSearchParams
    .....

---

### 🤔 CSS

Next.js는 Tailwind CSS를 기본적으로 지원하며, 다른 CSS 프레임워크를 사용할 수 있습니다.

`/app/ui/global.css` 파일을 생성하여 전역 CSS를 정의할 수 있습니다. (CSS 초기화, 폰트 등)

```tsx
// /app/layout.tsx

import '@/app/ui/global.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
```

CSS 모듈을 사용하여 자동으로 고유한 클래스 이름을 만들어 구성 요소에 CSS 범위를 지정할 수 있으므로 스타일에 대한 충돌을 방지할 수 있습니다.

```tsx
// /app/ui/module.css

.container {
  background-color: red;
}

// /app/page.tsx
import styles from './module.css';

export default function Page() {
  return <div className={styles.container}>Hello World</div>;
}
```

---

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
