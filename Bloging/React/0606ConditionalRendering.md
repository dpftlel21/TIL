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

---

# 2. 목록 렌더링