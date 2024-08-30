# 1. Redux toolkit

### ✔️ Redux toolkit 이란 ?

redux-toolkit은 redux의 여러 문제를 해결한 버전의 모듈이며, 본질은 동일하지만 보다 더 사용하기 편하게 개량한 버전을 의미합니다.

앞서 언급한 Redux의 3가지 문제는 다음과 같습니다.

> 1. 리덕스 스토어 설정 매우 복잡
> 2. 리덕스를 유용하게 사용하기 위해 너무 많은 패키지 필요
> 3. 리덕스는 너무 많은 보일러플레이트 코드 요구

---

### ✔️ toolkit 활용하기 !

<span style="color:#90caf9"><b>Step 1. 설치</b></span>

```js
// 프로젝트에 Redux Toolkit 및 React-Redux 패키지 추가 =

npm install @reduxjs/toolkit react-redux
```

<span style="color:#90caf9"><b> Step 2. 리덕스 스토어 설치   </b></span>

reducer가 포함된 객체를 configureStore에 전달하면 redux store가 만들어지고 이를 index.js에 적용합니다.

Step 3. Slice 사용 후 store로 돌아가 reducer에 counter를 추가합니다.
```jsx
// store.js

import { configureStore } from "@reduxjs/toolkit";
// counter.js에서 export default한 counterSlice.reducer
import counterReducer from "./counter";

// redux store 
export const store = configureStore({
    reducer : {
        // counterReducer 추가
        counter : counterReducer
    },
});
```

```jsx
// index.js

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

// Provider와 store추가
import { Provider } from "react-redux";
import { store } from "./store";

ReactDOM.render(
  // Provider에 store를 전달하고 App 감싸기
    <Provider store={store}>
      <App />
    </Provider>
);
```

<span style="color:#90caf9"><b>Step 3. Slice 사용</b></span>

####  👀 reducer 생성 방법 (switch)

```jsx
function counterReducer(state = initialState, action) {
  switch (action.type) { 
    case "counter/increment": 
      return { ...state, value: state.value + 1 }; 
    case "counter/decrement":
      return { ...state, value: state.value - 1 }; 
    default: 
      return state; 
  } 
}
```


####  👀 reducer 생성 방법 (toolkit 이용)

```jsx
// counter.js

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value : 0,
};

export const counterSlice = createSlice({
  // name은 각 action에 대한 prefix
  name: "counter",
  // 초기값
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
});

// actions
// dispatch할 때 액션을 전달해 상태를 어떻게 변화시킬지를 결정
export const { increment, decrement } = counterSlice.actions;

// reducer
export default counterSlice.reducer;
```

#### 🧐 위 2가지 방법의 차이

switch 구문으로 액션을 구분하여 정의한 것 보다 toolkit을 이용하여 정의한 것이 직관성이 더 좋습니다.

createSlice로 slice를 만들면, slice에 reducer, actions가 생성되어 외부에서 사용할 수 있게 됩니다.


<span style="color:#90caf9"><b>Step 4. 실행</b></span>

```jsx
// /components/Counter.js

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../Container/counter";

const Counter = () => {
  //useSelector를 통해 redux store에서 특정 값 관찰
  const count = useSelector((state) => state.counter.value);
  
  //dispatch에 action을 전달하면 해당 동작이 실행
  const dispatch = useDispatch();

  //increment(1증가) 동작
  const handleIncrement = () => dispatch(increment());
  //decrement(1감소) 동작
  const handleDecrement = () => dispatch(decrement());
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleIncrement}>increment</button>
      <button onClick={handleDecrement}>decrement</button>
    </div>
  );
};

export default Counter;
```
