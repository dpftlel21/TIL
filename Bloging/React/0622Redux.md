# 1. Redux

### ✔️ Redux에 대해 알아봅시다 !

Redux는 React의 관련 라이브러리, 혹은 하위 라이브러리라는 대표적인 오해가 있는데, 전혀 그렇지 않다는 것입니다. Redux 는 React 없이도 사용할 수 있는 상태 관리 라이브러리를 의미합니다.

<img src ="https://postfiles.pstatic.net/MjAyMzA2MjJfMjQw/MDAxNjg3Mzk3ODg2NDUw.jxJjiNNltbOwmG7IJiXChSbhtLi70Fr7jMS6Uhv-Bvog.JKcAksjoxJeK0BPuwvCGENVGFdU5dxVzHTgkWzZS4z0g.PNG.dkdnmju/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7_2023-06-22_103705.png?type=w773" width = 400 height = 200>

#### 👀 React에서의 데이터 흐름

위 그림과 같이 최상위 컴포넌트에 상태를 배치시키게 되면 다음과 같은 이유로 비효율적이라고 느낄 수 있습니다.

> - 해당 상태를 직접 사용하지 않는 최상위 컴포넌트, 컴포넌트1, 컴포넌트2도 상태 데이터를 가짐
> - 상태 끌어올리기, Props 내려주기를 여러 번 거침
> - 애플리케이션이 복잡해질수록 데이터 흐름도 복잡
> - 컴포넌트 구조가 바뀐다면, 지금의 데이터 흐름을 완전히 바꿔야할 수도 있음

<img src ="https://postfiles.pstatic.net/MjAyMzA2MjJfNyAg/MDAxNjg3Mzk3ODg2NDgw.8qqzRHAbgTNyysEWFCoyGk56XLHPI4R-ypYpeSaLHyYg.dnPT8B6fSqkXN9p_qb3olYTntxR5yUupmbZg8cb8JPgg.PNG.dkdnmju/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7_2023-06-22_103713.png?type=w773" width = 400 height = 200>

#### 👀 Redux에서의 데이터 흐름

상태 관리 라이브러리인 Redux 는, 전역상태를 관리할 수 있는 저장소 `Store` 를 제공함으로써 이 문제들을 해결해주며, 기존 React에서의 데이터 흐름과, Redux를 사용했을 때의 데이터 흐름을 비교해 보면, Redux를 사용했을 때의 데이터 흐름이 보다 더 깔끔해지는 것을 알 수 있습니다.

<img src ="https://postfiles.pstatic.net/MjAyMzA2MjJfMjI5/MDAxNjg3Mzk4NDQ5ODEx.z9BrQolkPu4y4Q9Xr7Pctuoi0rwhHDAAX2BDVw2w_Tcg.O7CgbmzdpFidxFtacu-ul2E7F_kzUFVnJ1020rovmUMg.PNG.dkdnmju/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7_2023-06-22_104711.png?type=w773" width = 400 height = 200>

#### 👀 Redux 구조

Redux 는 다음과 같이 상태를 관리합니다.

> 1. 상태가 변경되어야 하는 이벤트 발생시, 변경될 상태에 대한 정보가 담긴 `Action` 객체 생성
> 2. `Action` 객체는 `Dispatch` 함수의 인자로 전달됨
> 3. `Dispatch` 함수는 `Reducer` 함수로 `Action`객체를 전달
> 4. `Reducer` 함수는 `Action` 객체의 값을 확인하고, 그 값에 따라 전역상태 저장소 `Store`의 상태 변경
> 5. 상태가 변경되면, React는 화면을 다시 렌더링

즉, Redux에서는 Action → Dispatch → Reducer → Store 순서로 데이터가 단방향으로 흐르게 됩니다.

---

### ✔️ Store

Store 는 상태가 관리되는 오직 하나뿐인 저장소를 의미하며, Redux 앱의 state가 저장되어 있는 공간입니다.

```jsx
import { createStore } from "redux";

const store = createStore(rootReducer);
```

#### 😀 전역 저장소 설정하기 !

<span style="color:#90caf9"><b>Step 1. Redux, react-redux 설치</b></span>

```js
npm i redux react-redux
```

`DEPENDENCIES` 에서 redux, react-redux가 설치되어 있는 것을 확인하실 수 있습니다.

<span style="color:#90caf9"><b>Step 2. index.js 완성</b></span>

```jsx
import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
// react-redux에서 Provider를 불러와야 합니다.
import { Provider } from "react-redux";
// redux에서 createStore를 불러와야 합니다.
import { legacy_createStore as createStore } from "redux";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
const store = createStore(reducer);

const reducer = () => {};

root.render(
  //  Store를 사용할 컴포넌트를 감싸준 후 Provider 컴포넌트의 props로 store를 설정
  //  전역 상태 저장소 store를 사용하기 위해서는 App 컴포넌트를 Provider로 감싸준 후 props로 변수 store를 전달
  <Provider store={store}>
    <App />
  </Provider>
);
```

---

### ✔️ Reducer

Reducer는 Dispatch에게서 전달받은 Action 객체의 `type`값에 따라 상태를 변경시키는 함수입니다. Reducer는 순수함수여야 합니다. 외부 요인으로 인해 기대한 값이 아닌 엉뚱한 값으로 상태가 변경되는 일이 없어야 하기 때문입니다.

```jsx
const count = 1;

// Reducer를 생성할 때에는 초기 상태를 인자로 요구합니다.
const counterReducer = (state = count, action) => {
  // Action 객체의 type 값에 따라 분기하는 switch 조건문입니다.
  switch (action.type) {
    //action === 'INCREASE'일 경우
    case "INCREASE":
      return state + 1;

    // action === 'DECREASE'일 경우
    case "DECREASE":
      return state - 1;

    // action === 'SET_NUMBER'일 경우
    case "SET_NUMBER":
      return action.payload;

    // 해당 되는 경우가 없을 땐 기존 상태를 그대로 리턴
    default:
      return state;
  }
};
// Reducer가 리턴하는 값이 새로운 상태가 됩니다.
```

#### 😀 여러 개의 Reducer를 사용하는 경우, Redux의 combineReducers 메서드를 사용해서 하나의 Reducer로 합쳐줄 수 있습니다.

```jsx

import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  counterReducer,
  anyReducer,
  ...
});
```

---

### ✔️ Action

Action은 말 그대로 어떤 액션, 행동을 취할 것인지 정의 해놓은 객체를 의미합니다.

```jsx
// payload가 필요 없는 경우
{ type: 'INCREASE' }

// payload가 필요한 경우
{ type: 'SET_NUMBER', payload: 5 }
```

여기서 `type`은 필수로 지정을 해주어야 하며, 그 외의 것들은 선택적으로 사용할 수 있습니다. 해당 Action 객체가 어떤 동작을 하는지 명시해 주는 역할을 하기 때문이며, 대문자와 Snake Case로 작성합니다.

보통 Action을 직접 작성하기보다는 Action 객체를 생성하는 함수를 만들어 사용하는 경우가 많습니다. 이러한 함수를 액션 생성자(Action Creator)라고도 합니다.

```jsx
// payload가 필요 없는 경우
const increase = () => {
  return {
    type: "INCREASE",
  };
};

// payload가 필요한 경우
const setNumber = (num) => {
  return {
    type: "SET_NUMBER",
    payload: num,
  };
};
```

이렇게 모든 변화를 `Action`을 통해 취하는 것은 우리가 만드는 앱에서 무슨 일이 일어나고 있는지 알기 쉽게 하는 역할을 합니다.

---

### ✔️ Dispatch

Dispatch는 Reducer로 Action 객체를 전달해 주는 함수를 의미하며, Dispatch의 전달 인자로 Action 객체가 전달됩니다.

```jsx
// Action 객체를 직접 작성하는 경우
dispatch( { type: 'INCREASE' } );
dispatch( { type: 'SET_NUMBER', payload: 5 } );

// 액션 생성자(Action Creator)를 사용하는 경우
dispatch( increase() );
dispatch( setNumber(5) );

// Action 객체를 전달받은 Dispatch 함수는 Reducer 호출
```

--- 



그림 및 내용 출처 : 코드스테이츠
