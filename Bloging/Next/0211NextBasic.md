# 📚 Next.js 기본

Next.js는 Vercel에서 개발한 React 프레임워크이며, SSR(Server-Side Rendering), CSR(Client-Side Rendering), API라우팅 등의 다양한 최적화 기능을 제공합니다.

#### 🤔 CSR과 SSR이란?

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

#### 🤔 Sever vs Client

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
