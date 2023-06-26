# 1. 컴포넌트 최적화

## ✔️ useMemo

useMemo 는 리액트에서 컴포넌트의 성능 최적화에 있어서 사용되는 훅입니다. 여기서 Memo는 Memoization을 의미하는데 "메모리에 넣기"의미를 나타냅니다. 즉, 동일한 계산이 반복될 때 이전에 계산한 값을 메모리에 저장하여 불필요한 반복 수행을 제거하고 프로그램 실행 속도를 빠르게하는 것을 의미합니다.

쉽게 말해 동일한 값을 반환하는 함수를 반복적으로 호출해야한다면 처음 값을 계산할 때 해당 값을 메모리에 저장해 필요할 때마다 다시 계산하지 않고 메모리에서 꺼내서 재사용합니다.

```js
function Component() {
    const value = calculate();
    return <div>{value}</div>
}
```

리액트에서 함수형 컴포넌트는 렌더링 → 컴포넌트 함수 호출 → 모든 내부 변수 초기화의 순서를 거칩니다.

컴포넌트가 렌더링 될 때마다 value 라는 변수가 초기화 되고, 즉 렌더링 될 때마다 calculate 함수가 불필요하게 재호출 되는 것을 의미합니다. 이 때 calculate 함수가 무겁고, 복잡한 함수라면 매우 비효율적일 것입니다.

이 때 우리는 `useMemo`라는 훅을 사용하여 해결할 수 있는데, 렌더링 → 컴포넌트 함수 호출 → memorize 된 함수 재사용의 순서를 거칩니다. 이 순서를 거치게 되면 calculate 함수를 반복적으로 실행할 필요 없이 처음에 계산된 값을 메모리에 저장하여 컴포넌트가 계속 렌더링 되어도 calculate를 다시 호출하지 않고 메모리에 저장되어있는 계산된 값을 가져와 재사용할 수 있게 됩니다.

```jsx
const value = useMemo(() => {
    return calculate();
}, [item]);
```

useMemo는 useEffect처럼 첫 번째 인자로 콜백 함수, 두 번째 인자로 의존성 배열(dependency Array)을 받습니다.

의존성 배열 안에있는 값이 업데이트 될 때에만 콜백 함수를 다시 호출하여 메모리에 저장된 값을 업데이트 해줍니다.

만약 빈 배열을 넣는다면 useEffect와 마찬가지로 마운트 될 때에만 값을 계산하고 그 이후론 계속 memoization된 값을 꺼내와 사용합니다.

#### 🤔 실전 예제 1. ( 어려운 계산기, 쉬운 계산기)

<iframe src="https://stackblitz.com/edit/stackblitz-starters-nnf2gc?embed=1&file=src%2FApp.js"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
   ></iframe>


위 예제에서 어려운 계산기는 99999999번 돌리고 값을 반환하기 때문에 숫자를 변경하고 누르면 1초 정도의 딜레이를 거친 후 값이 변경 되며 쉬운 계산기도 마찬가지 입니다.

그 이유는 쉬운 계산기의 input 값을 변경하면 함수형 컴포넌트인 App이 렌더링 되고, 이 때 내부 변수가 초기화 되기 때문에 hardCalculate가 다시 실행되기 때문입니다. 이를 useMemo를 이용하여 방지할 수 있습니다.

```jsx
const hardSum = useMemo(() => {
    return hardCalculate(hardNumber);
  }, [hardNumber]);
  const easySum = easyCalculate(easyNumber);
```

[참고자료](https://www.youtube.com/watch?v=e-CnI8Q5RY4&list=PLZ5oZ2KmQEYjwhSxjB_74PoU6pmFzgVMO&index=6_)_

---

## ✔️ useCallback

useCallback 은 특정 함수를 새로 만들지 않고 이미 생성된(메모제이션이 된) 함수를 재사용할 때 사용합니다.

위에서 메모이제이션된 함수는 콜백 함수의 의존성이 변경되었을 때에만 변경되며, 이는 불필요한 렌더링을 방지하기 위해 (ex. shouldComponentUpdate를 사용하여) 참조의 동일성을 보장하거나, 자식 컴포넌트에 의존적인 콜백 함수를 전달할 때 유용합니다.

```jsx
const memoizedCallback = useCallback(() => {
  doSomething(a, b)
}, [a, b])
```

### 🤔 why useCallback ??

현재 하위 컴포넌트에 전달하는 콜백 함수가 inline 함수로 사용되거나, 컴포넌트 내에서 함수를 생성하고 있을 때 새로운 함수가 만들어집니다. 함수를 재 선언 하는것은 CPU, 큰 메모리도 차지하지 않지만, 한번 만든 함수를 재 사용하고, 필요할 때만 재 생성 하는것은 중요합니다. 아래 예제에서 useCallback과 React.memo를 함께 사용한다면 컴포넌트를 최적화 할수 있습니다.

#### ✔️ 함수 동등성

자바스크립트에서 함수는 객체로 취급이 되기때문에, 함수를 동일하게 만들어도 메모리 주소가 다르면 다른 함수로 간주합니다. 바로 메모리 주소에 의한 참조 비교가 일어나기 때문인데, 콘솔창에서 아래와 같이 동일한 코드의 함수를 작성하시고 === 연산자로 비교를 해보면 false가 반환됩니다.

```js
const add1 = () => x + y; // undefined
const add2 = () => x + y; //undefined
add1 === add2 // false
```

만약 특정 함수를 다른 함수의 인자로 넘기거나, 자식 컴포넌트의 props로 넘길 때 함수의 참조가 달라서 예상하지 못한 성능 문제가 생길 수 있습니다.

이 경우, useCallback을 이용해 함수를 특정 조건이 변경되지 않는 이상 재생성하지 못하게 제한하여 함수 동등성을 보장할 수 있습니다. 

(만약 리액트가 함수가 동등하지 않다고 판단한다면 상황에 따라 성능이 악화되거나, 무한루프에 빠지는 등의 문제를 겪을 수 있습니다.)

#### 😀 실전 예제

```jsx
import React, { useState, useEffect } from 'react'

function Profile({ id }) {
  const [data, setData] = useState(null)

  const fetchData = () =>
    fetch(`https://test-api.com/data/${id}`)
      .then(response => response.json())
      .then(({ data }) => data)

  useEffect(() => {
    fetchData().then(data => setData(data))
  }, [fetchData])

  // ...
}
```

`fetchData`는 함수이기 때문에 id 값에 관계없이 컴포넌트가 렌더링 될 때마다 새로운 참조값으로 변경이 됩니다. 함수가 변경되었으므로, 매번 useEffect가 실행되어 다시 렌더링이 되고 무한루프에 빠지게 됩니다.

이 때 `useCallback`을 활용하여 함수의 동등성을 유지할 수 있습니다. 컴포넌트가 다시 렌더링 되더라도 `fetchData` 함수의 참조값을 동일하게 유지시킵니다. 따라서, `useEffect`에 의존성 배열 값에 있는 `fetchData` 함수는 id 값이 변경되지 않는 한, 재호출되지 않습니다.


```jsx
  const fetchData = useCallback(
    () =>
      fetch(`https://test-api.com/data/${id}`)
        .then(response => response.json())
        .then(({ data }) => data),
    [id],
  )
```

---

## ✔️ useMemo와 useCallback 을 언제 쓸까 ?

### 😱 useMemo와 useCallback을 사용하지 말아야 할 경우

1. 연산이 복잡하지 않은 함수에 useCallback 을 사용하는 것은 메모리 낭비이므로, 간단한 함수에는 사용하지 않습니다.

2. 단순히 함수 내부에서 setState나 dispatch 함수등을 호출하는 경우에는 useCallback을 사용하지 않는게 좋습니다. 이미 리액트 자체에서 useState 와 useDispatch에 대한 성능 최적화가 보장되기 때문에, 렌더링이 새로 되어도 해당 함수는 재생성되지 않습니다.

3. useCallback, useMemo의 의존성 배열에 완전히 새로운 객체나 배열을 전달해서는 안됩니다. 만약 useCallback 내부 함수나 useMemo 내부 값에서 사용하지 않는 props를 전달한다면 메모이제이션을 하는데 소용이 없다.

4. 의도적으로 매번 새로운 함수나 값을 계산해야 한다면 굳이 useCallback이나 useMemo를 사용할 필요가 없습니다.

5. DOM에서 다른 컴포넌트를 렌더링하지 않는 컴포넌트 (html 태그만 렌더링하는 컴포넌트)에서는 useMemo를 사용할 필요가 없습니다.

6. div, span, a, img와 같이 호스트 환경 (브라우저 / 모바일)에 속하는 플랫폼 컴포넌트에 전달하는 항목에는 useMemo와 useCallback을 사용할 필요가 없습니다. 리액트는 해당 컴포넌트들에 함수 참조가 변경되었는지 신경쓰지 않기 때문입니다. (ref는 제외)



### 😀 useMemo와 useCallback 을 사용해야 하는 경우

1. 연산 혹은 처리량이 매우 많아서 렌더링의 문제가 되는 경우, 리렌더시 비용 절감을 위해서 useMemo를 사용합니다.

2. 자식 컴포넌트에서 useEffect가 반복적으로 트리거 되거나, 무한 루프에 빠질 위험이 있을 때 useMemo, useCallback을 사용합니다.

3. 자식 컴포넌트에 함수를 props로 넘길 때, 불필요한 렌더링이 일어난다고 판단된다면 useCallback으로 함수 동등성을 유지해줍니다.

3. 함수 자체가 매우 복잡하거나, 다시 계산하는데 비용이 많이 드는 경우에 useCallback을 사용하며, 사용자의 입력값이 map 혹은 filter 등을 사용하여 이후 렌더링에서도 동일한 참조를 사용할 가능성이 높을 경우 useMemo를 사용해서 메모이제이션을 적용합니다.

4. 리액트 상위 트리에서, 부모가 리렌더링 될 때 자식 컴포넌트까지의 렌더링 전파를 막고 싶을 때 useMemo를 사용하고, 자식 컴포넌트가 useMemo로 메모이제이션 컴포넌트일 경우, 메모이제이션된 props를 사용해 필요한 부분만 리렌더링 할 수 있습니다.

5. ref 함수를 부수작용(side effect)와 함께 전달하거나, ref로 wrapper 함수를 만들 때 useMemo를 사용합니다. 리액트는 ref 함수가 변경될 때 마다 과거 값을 null로 호출하고 새로운 함수를 호출하기 때문인데, 이 경우 ref 함수의 이벤트 리스터가 변경되는 등의 불필요한 작업이 일어날 수 있습니다.

[참고자료](https://hayeondev.gatsbyjs.io/230202-usememo-and-usecallback/)