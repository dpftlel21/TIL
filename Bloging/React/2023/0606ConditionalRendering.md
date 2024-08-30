# 1. 조건부 렌더링

### ✔️ 조건부 렌더링이란 ?

React에서는 원하는 동작을 캡슐화하는 컴포넌트를 만들 수 있으며 이렇게 했을 때 애플리케이션의 상태에 따라 컴포넌트 중 몇 개만 렌더링할 수 있습니다.

예를들어 if문과 같은 조건문을 이용하여 원하는 어떤 컴포넌트를 렌더링할지 선택할 수 있습니다.

```jsx
// 공식문서의 예시
function UserGreeting(props) {
  return <h1>Welcome back!</h1>;
}

function GuestGreeting(props) {
  return <h1>Please sign up.</h1>;
}

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}

ReactDOM.render(
  // Try changing to isLoggedIn={true}:
  <Greeting isLoggedIn={false} />,
  document.getElementById("root")
);
```

### ✔️ if-else 문

```jsx
.
.
.
// 리액트 공식문서의 예시

if (isLoggedIn) {
    button = <LogoutButton onClick = {this.handleLogoutClick}/> ;
} else {
    button = <LoginButton onClick = {this.handleLoginClick}/> ;
}
```

if를 사용하여 조건에 따라 button에 대한 컴포넌트를 상황에 맞게 배치하면 되지만, 코드가 길어질 때 가독성이 떨어져 좀 더 짧게 코드를 만들 필요가 생깁니다. 그 때 이용하는 것이 `&&`입니다.

### ✔️ &&

`&&` 앞에 있는 조건이 참이라면 뒤에 있는 표현식을 렌더링하면 되며, 한눈에 보기 쉬울 뿐더러 만약 조건에 대해서 참이나 거짓에 대해서 하나의 컴포넌트를 구성하여 렌더링하고 싶을 때 굉장히 유용하게 쓸 수 있습니다.

하지만 주의해야할 점은 `&&` 앞의 조건이 0과 같은 형식의 falsy표현식이라면 false를 반환할 수 있다는 점을 유의하도록 해야합니다.

### ⭐ 삼항 연산자 `?`

```
condition ? true : false
```

조건이 참이면 true에 해당하는 부분을 렌더링 하고, 거짓이면 false에 해당하는 부분을 렌더링 합니다. 이 때 중첩으로 이용할 수 있으며 자바스크립트의 중괄호 형식으로 코드를 작성하여 참, 거짓의 경우를 이용하여 적절하게 렌더링할 수 있습니다.

출처 : https://react-ko.dev/learn/conditional-rendering (리액트 문서)

---

# 2. 목록 렌더링

### ✔️ 배열에서 데이터 렌더링

리액트에서 리스트를 렌더링 하려면 Array의 원소를 컴포넌트에서 props 로 받아 원소의 내용을 보여줄 컴포넌트를 만들고, 그 컴포넌트를 Array의 길이만큼 생성해주는 컴포넌트를 만들어야 합니다.

동적인 배열을 렌더링할 때는 자바스크립트의 `map()` 을 사용하며 `map()` 은 각 요소에 대하여 주어진 함수를 호출한 결과를 모아 새로운 배열을 반환하는 함수입니다. React 에서는 이를 활용하여 일반 데이터 배열을 React Element 로 이루어진 배열로 변환해줄 수 있습니다.

### 🤔 방법 1. listItems 변수를 선언하고 이를 JSX 에 포함

```jsx
// ListComponent,
// 배열을 반복 실행하여 각 요소에 대하여 element 를 반환하고 배열의 결과를 저장. 그리고 그 저장한 배열을 DOM에 렌더링

function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) =>
    <li>{number}</li>
  );

  return (
    <ul>{listItems}</ul>
  );
}

const numbers = [1, 2, 3, 4, 5];
ReactDOM.render(
  <NumberList numbers={numbers} />,
  document.getElementById('root')
);

// Warning: Each child in a list should have a unique “key” prop.
// List 의 각 항목에 key 를 넣어야 한다는 것을 의미

.
.
.

// 수정 결과

function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) =>
    <li key={number.toString()}>
      {number}
    </li>
  );
  return (
    <ul>{listItems}</ul>
  );
}

const numbers = [1, 2, 3, 4, 5];
ReactDOM.render(
  <NumberList numbers={numbers} />,
  document.getElementById('root')
);
```

Key 는 React 가 어떤 항목을 변경, 추가, 삭제 할지 식별하는 것을 돕는 값입니다. 그러므로 key는 element에 안정적인 고유성을 부여해야합니다. 대부분의 경우에는 데이터의 ID 를 key 로 사용하는데, ID 가 없다면 index를 key 로 사용하기도 합니다.

항목의 순서가 바뀔 수 있는 경우 key 에 index를 사용하는 것은 권장하지 않으며, 이로 인해 성능이 저하되거나 state 와 관련된 문제가 발생할 수 있기 때문입니다.

### 🤔 방법 2. jsx에 map() 포함

```jsx
// 중괄호를 활용하여 JSX 내에서 직접 map 을 인라인으로 처리

function NumberList(props) {
  const numbers = props.numbers;
  return (
    <ul>
      {numbers.map((number) => (
        <ListItem key={number.toString()} value={number} />
      ))}
    </ul>
  );
}
```

출처 : https://minjung-jeon.github.io/React-list-rendering-copy/
 