# 1. UseContext

### 🧐 Context ??

React 공식문서에는 "context"를 이용하면 단계마다 일일이 props를 넘겨주지 않고도 컴포넌트 트리 전체에 데이터를 제공할 수 있습니다" 라고 나와있습니다.

일반적인 React에서는 props를 통해서 부모에서 자식으로 데이터를 전달하지만, 여러 컴포넌트들에게 props를 전달해야 하는 경우 context를 이용하여 데이터가 필요할 때마다 props를 쓰지않고도 공유할 수 있습니다.

### 😀 실전 예제 !

- `createContext` : context 객체 생성
- `Provider` : 생성한 context를 하위 컴포넌트에 전달하는 역할
- `Consumer` : context의 변화 감시 컴포넌트

#### ✔️ App.js

```jsx
import React, { createContext } from "react";
import Children from "./Children";

// AppContext 객체 생성
export const AppContext = createContext();

const App = () => {
  const user = {
    name: "김코딩",
    job: "프론트엔드 개발자"
  };

  return (
    <>
      <AppContext.Provider value={user}>
        <div>
          <Children />
        </div>
      </AppContext.Provider>
    </>
  );
};

export default App;
```

#### ✔️ Children.js (1)

```jsx
import React from "react";
import { AppContext } from "./App";

const Children = () => {
  return (
      <AppContext.Consumer>
        {(user) => (
          <>
            <h3>이름은 {user.name}입니다.</h3>
            <h3>직업은 {user.job}입니다.</h3>
          </>
        )}
      </AppContext.Consumer>
  );
};

export default Children;
```

#### ✔️ Children.js (2)

```jsx
import React, { useContext } from "react";
import { AppContext } from "./App";

const Children = () => {
  // useContext를 이용해서 따로 불러옴
  const user = useContext(AppContext);
  return (
    <>
      <h3>이름은 {user.name}입니다.</h3>
      <h3>직업은 {user.job}입니다.</h3>
    </>
  );
};

export default Children;
```

`Children (1)`과 `Children (2)`의 결과 값은 동일합니다. 다만 Children.js에서 AppContext 를 사용하는 과정에서 `<AppContext.Consumer>` 같은 코드를 사용해서 복잡하게 작성하지 않고 Context를 직접 불러 온 후 바로 사용이 가능하다는 차이점이 존재합니다.

즉, 하나의 컴포넌트에서는 (1) 과 같은 방법을 사용할 수 있지만, 코드가 늘어나고, 컴포넌트도 그와 동시에 늘어나게 된다면 (2)과 같이 context를 바로 불러와서 사용하는 것이 직관적이고 깔끔합니다. 

#### ✔️ 실행 결과

<img src = "https://postfiles.pstatic.net/MjAyMzA2MjVfMTU2/MDAxNjg3Njk4NjM3ODc0.q4evlmB7dkTbHsX7JyCR6Tz2TVIvoU3GHfYZHrtrtIIg.pSKO7HNkyalGkmRwPujK_JVxJ5f9YEPXxqN8C6FAEgog.PNG.dkdnmju/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7_2023-06-25_221008.png?type=w773">

---

참고자료 : https://velog.io/@jminkyoung/TIL-6-React-Hooks-useContext-%EB%9E%80



