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


## ✔️ useCallback