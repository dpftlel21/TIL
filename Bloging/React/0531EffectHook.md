# 1. Effect

Effect를 사용하면 특정 이벤트가 아닌 렌더링 자체로 인해 발생하는 사이드 이펙트(프로그램의 state 변경)를 명시할 수 있습니다. 서버 연결을 설정하는 것은 컴포넌트를 표시하게 만든 상호작용에 관계없이 발생해야 하기 때문에 하나의 Effect이며, Effect는 화면 업데이트 후 커밋이 끝날 때 실행됩니다.

Effect는 React 코드에서 벗어나 일부 외부 시스템과 동기화하는 데에 사용되며 브라우저 API, 서드파티 위젯, 네트워크 등이 포함됩니다. useEffect의 첫 번째 인자는 함수입니다. 해당 함수 내에서 side effect를 실행하면 됩니다. 이 함수는 다음과 같은 조건에서 실행됩니다.


### ✔️ Effect 작성

`1. Effect 선언 `

```jsx
import { useEffect } from "react";
// useEffect Hook import 하기

function MyComponent() {
  useEffect(() => {
    // 여기의 코드는 매 렌더링 후에 실행
  });
  // 컴포넌트의 최상위 레벨에서 호출하고 Effect 내부에 코드를 추가
  return <div />;
}

// useEffect는 해당 렌더링이 화면에 반영이 될 때까지 코드 조각의 실행을 지연
```

`2. Effect 의존성 명시`

가끔 속도가 느릴 수 있으며, 외부 시스템과의 동기화가 항상 즉각적이지 않아 꼭 필요한 경우가 아니면 동기화를 건너뛰는 게 좋습니다.

가끔 잘못된 경우도 있습니다. 예를 들어, 키 입력 시마다 컴포넌트 페이드인 애니메이션을 발동시키고 싶지 않을 수 있습니다. 애니메이션은 컴포넌트가 처음 나타날 때 한 번만 재생되어야 합니다.

```jsx
useEffect(() => {
  // ...
}, []);
```

useEffect 호출의 두 번째 인자로 의존성 배열을 지정하여 React가 불필요하게 Effect를 다시 실행하지 않도록 지시할 수 있습니다.

`3. 필요한 경우 클린업 추가`

일부 Effect는 수행중이던 작업을 중지, 취소 또는 정리하는 방법을 명시해야합니다. 예를 들어, “connect”에는 “disconnect”가 필요하고 “subscribe”에는 “unsubscribe”가 필요하며 “fetch”에는 “cancel”또는 “ignore”가 필요합니다.

클린업 함수를 구현하여 개발 환경에서 두 번씩 실행되는 Effect를 처리할 수 있습니다. 클린업 함수는 Effect가 수행 중이던 작업을 중지하거나 취소해야하며, 상용 환경에서 한 번만 실행되는 Effect와 (개발 환경에서의) 설정 → 정리 → 설정 시퀀스를 사용자가 구분할 수 없어야 합니다.

---

### ✔️ Side Effect

함수 내에서 어떤 구현이 함수 외부에 영향을 끼치는 경우 해당 함수는 Side Effect가 있다고 이야기하며, React에서는 컴포넌트 내에서 fetch를 사용해 API 정보를 가져오거나 이벤트를 활용해 DOM 직접 조작할 때 Side Effect가 발생했다고 말합니다.

```jsx
let animal = "tiger";

function animals() {
  animal = "lion";
}

animals(); // animals 는 Side Effect 발생 시킴
```
---

### ✔️ Pure Function (순수 함수)

순수 함수란, 오직 함수의 입력만이 함수의 결과에 영향을 주는 함수를 의미합니다. 함수의 입력이 아닌 다른 값이 함수의 결과에 영향을 미치는 경우, 순수 함수라고 부를 수 없습니다. 또한 순수 함수는, 입력으로 전달된 값을 수정하지 않습니다.

순수 함수에는 네트워크 요청과 같은 Side Effect가 없습니다. 순수 함수의 특징 중 하나는, 어떠한 전달 인자가 주어질 경우, 항상 똑같은 값이 리턴됨을 보장합니다. 그래서 예측 가능한 함수이기도 합니다.

```jsx
unction upper(str) {
  return str.toUpperCase(); // toUpperCase 메소드는 원본을 수정하지 않습니다 (Immutable)
}

upper('hello') // 'HELLO'
```
