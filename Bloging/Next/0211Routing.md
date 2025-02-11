# 📚 Next.js 라우팅

### 🤔 파일 규칙

```jsx
<Layout>
  <Template>
    <ErrorBoundary fallback={<div>Error</div>}>
      <Suspense fallback={<div>Loading...</div>}>
        <ErrorBoundary fallback={<div>Error</div>}>
          <Page />
        </ErrorBoundary>
      </Suspense>
    </ErrorBoundary>
  </Template>
</Layout>
```

| 기본 파일   | 확장자                       | 설명                    |
| ----------- | ---------------------------- | ----------------------- |
| `error`     | `.js`, `.jsx`, `.ts`, `.tsx` | 에러 페이지             |
| `loading`   | `.js`, `.jsx`, `.ts`, `.tsx` | 로딩 페이지             |
| `not-found` | `.js`, `.jsx`, `.ts`, `.tsx` | 404 페이지              |
| `template`  | `.js`, `.jsx`, `.ts`, `.tsx` | 변화 레이아웃 (탐색 시) |
| `layout`    | `.js`, `.jsx`, `.ts`, `.tsx` | 고정 레이아웃           |
| `page`      | `.js`, `.jsx`, `.ts`, `.tsx` | 기본 페이지             |

---

### 🤔 페이지

Next.js는 폴더를 사용하여 경로를 정의하는 파일 시스템 기반 라우터 방식을 사용하기 때문에, `/app` 폴더 내에 생성하는 폴더는 기본적으로 URL 경로가 됩니다.

예를 들어, `/app/mypage` 폴더를 생성하면 `http://localhost:3000/mypage`로 접근할 수 있습니다. 그리고, 경로에서 출력할 부분은 각 폴더의 `page.tsx` 컴포넌트에 작성합니다.

또한, 라우팅 파일 규칙 (`page.tsx, route.tsx`)에 해당하는 이름이 아닌 파일은 경로로 정의되지 않기 때문에 같은 폴더 안에서 자유롭게 추가하여 사용하면 됩니다. (예: `button.tsx`, `layout.tsx` ....)

```jsx
// app/mypage/page.tsx
export default function MyPage() {
  return <div>My Page</div>;
}
```

---

### 🤔 레이아웃

여러 하위 경로에서 공통으로 사용하는 UI는, 각 라우팅 폴더의 layout.tsx 파일에 작성합니다. 슬롯 방식으로 `children Prop`을 사용하며, `{children}` 부분에는 같은 레벨에 있는 page.tsx 파일을 출력합니다. 레이아웃은 중첩 사용이 가능합니다.

```
# 구조
├─app/
│  ├─mypage/
│  │  ├─layout.tsx  // mypage의 page.tsx 레이아웃 정의
│  │  └─page.tsx    // mypage의 기본 페이지
│  ├─layout.tsx     // app의 page.tsx 레이아웃 정의
│  └─page.tsx       // 기본 페이지 (Home)
├─components/
│  └─Header.tsx
```

---

### 🤔 컴포넌트 방식의 탐색

Next.js에서는 페이지 이동을 위해 `Link` 컴포넌트를 사용하며, 이동하는 페이지 전체를 새로고침하지 않고 최적화된 번들만 일부 로드하거나 서버 렌더링 가능 등의 최적화된 페이지 탐색을 제공합니다.

```jsx
'use client';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const links = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'My Page',
    href: '/mypage',
  },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header>
      <nav>
        {links.map((link) => (
          <Link key={link.href} href={link.href}>
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
```

#### ✔️ 미리 가져오기 (production 모드에서만 활성화)

`<Link>` 컴포넌트는 `prefetch` 속성을 통해 뷰포트에 보여질 때, 연결된 경로의 데이터를 미리 가져와 탐색 성능을 향상시킬 수 있습니다.

- null (기본값): 정적 경로인 경우 모든 하위경로, 동적 경로인 경우 loading.tsx가 있는 가장 가까운 세그먼트까지만 가져옴
- true: 모든 하위 경로 미리 가져옴
- false: 미리 가져오지 않음

#### ✔️ 프로그래밍 방식의 탐색

useRouter 훅을 사용하여 페이지 이동을 구현할 수 있습니다.

- router 메서드

  - push(url): 새로운 페이지로 이동
  - replace(url): 페이지 이동(히스토리 남지 x)
  - refresh(): 새로고침
  - back(): 이전 페이지로 이동
  - forward(): 다음 페이지로 이동
  - prefetch(url): 페이지 미리 가져오기, useEffect와 같이 사용

```jsx
'use client';
import { useRouter } from 'next/navigation';

export default function Header() {
  const router = useRouter();

  return (
    <header>
      <nav>
        <button onClick={() => router.push('/mypage')}>My Page</button>
      </nav>
    </header>
  );
}
```

---

### 🤔 동적 경로

미리 정의할 수 없는 동적 경로는, `[]` 문자를 사용하여 폴더 이름을 작성합니다. URL의 세그먼트 값이, params Prop으로 전달되고, `[]` 사이의 퐆ㄹ더 이름이 속성 이름이 됩니다. 쿼리 스트링을 사용하는 경우에는 searchParams Prop으로 전달됩니다.

```
# 구조
├─app/
│  ├─detail/
│  │  ├─[detailId]/
│  │  │  └─page.tsx
│  │  │  └─layout.tsx
│  │  └─page.tsx
│  └─page.tsx
```

params와 searchParams는 모두 Promise 객체이며, 서버 컴포넌트의 경우 await 키워드를 통해 필요한 값을 추출합니다.

```tsx
// 서버 컴포넌트
// app/detail/[detailId]/page.tsx

interface data {
  title: string;
  content: string;
}

export default async function DetailPage({
  params,
  searchParams,
}: {
  params: Promise<{ detailId: string }>;
  searchParams: Promise<{ keyword: string }>;
}) {
  const { detailId } = await params;
  const { keyword } = await searchParams;

  const res = await fetch(
    `https://api.example.com/detail/${detailId}?keyword=${keyword}`,
  );
  const data: data = await res.json();

  return (
    <>
      <h1>{data.title}</h1>
      <p>{data.content}</p>
    </>
  );
}
```

클라이언트 컴포넌트의 경우 params와 searchParams 앞에 `use` 키워드를 붙여 사용합니다.

---

### 🤔 로딩

Next.js는 페이지 로딩을 위해 `loading.tsx` 파일을 사용합니다. 이 파일은 페이지 로딩 시 표시되는 페이지를 정의합니다.

```
# 구조
├─app/
│  ├─detail/
│  │  ├─[detailId]/
│  │  │  └─page.tsx
│  │  │  └─loading.tsx
│  │  └─page.tsx
│  └─page.tsx
```

```jsx
// app/detail/[detailId]/loading.tsx

export default function Loading() {
  return <Loader/>;
}

// components/Loader.tsx

export default function Loader() {
  return <div>Loading...</div>;
}
```

---

### 🤔 에러

Next.js는 에러 처리를 위해 `error.tsx` 파일을 사용합니다. 이 파일은 에러 발생 시 표시되는 페이지를 정의합니다.

```
# 구조
├─app/
│  ├─detail/
│  │  ├─[detailId]/
│  │  │  └─page.tsx
│  │  │  └─error.tsx
│  │  └─page.tsx
│  └─page.tsx
```

```jsx
// app/detail/[detailId]/error.tsx
'use client';
export default function Error({
  error,
}: {
  error: Error & { digest?: string },
}) {
  return <h2>{error.message}</h2>;
}
```

---

### 🤔 404

Next.js는 404 페이지를 위해 `not-found.tsx` 파일을 사용합니다. 이 파일은 404 페이지를 표시합니다.

```
# 구조
├─app/
│  └─not-found.tsx
```

```jsx
// app/not-found.tsx

export default function NotFound() {
  return <div>404, 찾을 수 없는 페이지입니다.</div>;
}
```

---
