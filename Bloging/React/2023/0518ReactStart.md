# 1. 리액트?? 

### ✔️ React란 ?

프론트엔드 개발을 위한 JavaScript 오픈소스 라이브러리입니다. 리액트는 선언형, 컴포넌트 기반, 범용성의 특징을 지닙니다.

선언형이란 코드를 분석하지 않고도 쉽게 알아볼 수 있도록 작성하는 방식을 의미합니다. 리액트는 한 페이지를 보여주기 위해 HTML/CSS/JS로 나눠 적기 보다는 하나의 파일에 명시적으로 작성할 수 있게 JSX를 활용한 선언형 프로그래밍을 지향합니다.

컴포넌트란 하나의 기능 구현을 위해 여러 종류의 코드를 묶어둔 것을 의미하며, 컴포넌트로 분리하면 서로 독립적이고 재사용이 가능하여 기능 자체에 집중하여 개발할 수 있고, 유지보수에 유리합니다.

리액트는 JavaScript 프로젝트 어디에서든 사용 가능하고, FaceBook에서 관리되어 안정적이고, 가장 유명하며 리액트 네이티브로 모바일 개발도 가능합니다.

### ✔️ JSX란 ?

JSX란 JavaScript XML의 줄임말로 React에서 UI를 구성할 때 사용하는 JavaScript를 확장한 문법입니다. 이 문법을 이용해서 React 엘리먼트를 만들 수 있습니다.

JSX는 JavaSCript가 확장된 문법이지만, 브라우저가 바로 실행할 수 있는 JavaSCript 코드가 아니기에 `Babel(바벨)`을 이용하여 브라우저가 이해할 수 있는 JavaSCript로 변환 해줍니다. 

`Babel(바벨)`은 JSX를 브라우저가 이해할 수 있는 JavaScript로 컴파일하며, 컴파일 후, JavaScript를 브라우저가 읽고 화면에 렌더링할 수 있습니다.

React에서는 DOM과 다르게 CSS, JSX 문법으로 웹 애플리케이션을 개발할 수 있습니다. 즉, 컴포넌트 하나를 구현하기 위해 파일이 줄고, 한눈에 컴포넌트 확인이 가능합니다. JSX를 사용하면 JavaScript 만으로 마크업(markup) 형태의 코드를 작성하여 DOM에 배치할 수 있게 됩니다.


#### 😀 장점

- 한눈에 알아보기 쉽고, 익숙합니다.

    HTML코드를 작성하는 것과 비슷하여 가독성이 높습니다.

- 높은 활용도를 가지고 있습니다.

    기존의 `div`, `span`과 같은 태그들을 사용할 수 있습니다.

```JSX
import React from "react";
import "./styles.css";

function App() {
  const user = {
    firstName: "React",
    lastName: "JSX Activity"
  };

  function formatName(user) {
    return user.firstName + " " + user.lastName;
  }
  // JSX 없이 활용한 React
  return React.createElement("h1", null, `Hello, ${formatName(user)}!`);

  // JSX 를 활용한 React
  // return <h1>Hello, {formatName(user)}!</h1>;
}

export default App;
```

#### ⭐ JSX 문법

- JSX에서 여러 엘리먼트를 작성하고자 하는 경우, 최상위에서 `opening tag(<>)와 closing tag(</>)`로 감싸주어야 합니다.

```html
<!-- 올바르지 않은 코드 -->

<h1>Hello1</h1>
<h1>World</h1>

<!-- 올바른 코드 -->

<div>
    <h1>Hello</h1>
    <h1>World</h1>
</div>;
```

- React에서 CSS class 속성을 지정할 때 `className`으로 표기하며 만약 class로 작성하게 된다면 React에서는 html 클래스 속성 대신 javascript class로 받아들이기 때문에 주의해야 합니다!

```html
<div class = "greeting">Hello!</div>


<div className = "greeting">Hello!</div>
```

- JSX에서 JavaScript를 쓰고자 할 때, 꼭 `중괄호`를 이용하며 중괄호를 사용하지 않으면 일반 텍스트로 인식합니다.

```jsx
function App() {
    const name = "Josh Perez";

    return (
        <div>
        Hello, {name}
        </div>
    );
}
```

- React 엘리먼트가 JSX로 작성되면 `대문자`로 시작해야 합니다. 소문자로 시작하게 되면 일반적인 HTML로 인식하게 됩니다. 대문자로 작성된 JSX 컴포넌트를 사용자 정의 컴포넌트라고 부릅니다.

```jsx
// 올바르지 않은 코드
function hello() {
    return <div>Hello!</div>;
}

function HelloWorld() {
    return <hello/> // 일반적인 HTML 인식
}

// 올바른 코드
function Hello() {
    return <div>Hello!</div>;
}

function HelloWorld() {
    return <Hello/> // 사용자 정의 컴포넌트
}
```

- 조건부 렌더링에는 `삼항연산자`를 사용합니다.

```jsx
<div>
    {
        (1+1 === 2) ? <p>정답</p> : <p>탈락</p>
    }
</div>
```

- 여러 개의 HTML 엘리먼트를 표시할 때 `map()` 함수를 사용합니다. `map()` 함수를 사용할 때 반드시 `key` JSX 속성을 사용하며, 사용하지 않으면 리스트의 각 항목에 key를 넣어야 한다는 경고가 표시됩니다.

#### 📝 Key값이 필요한 이유  ?

 key를 사용하면 여러 목록들 사이에서 특정 목록을 고유하게 식별할 수 있습니다. 잘 선택한 key는 많은 정보를 제공합니다. 
 
 만약 재정렬로 인해 어떤 항목의 위치가 변경되더라도, 해당 항목이 사라지지 않는 한, React는 key를 통해 그 항목을 식별할 수 있습니다.

 key를 지정하지 않으면 React는 index를 key로 사용하며,  렌더링한 항목의 순서는 새 항목이 삽입되거나, 삭제되거나, 배열의 순서가 바뀌는 등에 따라 변경될 수 있습니다. 인덱스를 key로 사용하면 종종 혼란을 불러 일으키기도 합니다 !

컴포넌트는 key를 prop으로 받지 않으며, React 자체에서 힌트로만 사용됩니다. 컴포넌트에 ID가 필요한 경우 별도의 프로퍼티로 전달하는 것이 좋습니다.


```jsx
const posts = {
    {id: 1, title: "Hello, World", content: "Welcome to learning React !"}
    {id: 2, title: "Installation", content: "You can install React from npm."}
};

function Blog() {
    const content = posts.map((post) => 
    <div key = {post.id}>
        <h3>{post.title}</h3>
        <p>{post.content}</p>
    </div>
    );

    return (
        <div>
            {content}
        </div>
    );
}
```

#### ⭐ Component

컴포넌트란 하나의 기능 구현을 위한 여러 종류의 코드 묶음을 의미하며, UI를 구성하는 필수 요소입니다. 리액트를 이용하면, 각자 독립적인 기능을 가지며 UI의 한 부분을 담당하기도 하는 이러한 컴포넌트를 여러 개 만들고 조합하여 애플리케이션을 만들 수 있습니다.

<img src = "https://hyunseob.github.io/images/react-component-the-right-way/the-render-tree.jpg" width = 450px height = 250px>

<출처 : https://hyunseob.github.io/2019/06/02/react-component-the-right-way/>

리액트 애플리케이션은 최소 한 개의 컴포넌트를 가지고 있으며, 컴포넌트는 애플리케이션 내부적으로는 근원(root) 역할을 수행하고 최상위 컴포넌트는 근원의 역할을 하므로 다른 자식 컴포넌트를 가질 수 있습니다. 

```jsx
const Component = () => {
    return (
        <>
        <div>{정의 1}</div>
        <div>{정의 2}</div>
        </>
    )
};
 ```

#### 📝 Why Components ?

컴포넌트는 재사용 뿐만아니라 우려사항들을 분리할 수 있어 매우 유용합니다. 재사용 가능한 빌딩 블록은 반복을 피할 수 있게 해주고, 우려사항을 분리하는 것은 코드베이스를 작고 관리 가능한 단위로 유지할 수 있게 해줍니다. 

각각의 컴포넌트는 하나의 명확한 가제와 초점에 대해서만 집중할 수 있고, 코드를 여러파일로 분할하고, 유지관리하기 쉬운 코드를 가지게 될 것입니다. 리액트에서 컴포넌트 작업을 할 때는 최종 상태와 어떤 상태에서 어떤 상태가 사용되어야 하는지 정의하면 되고, 이 모든 작업을 리액트는 숨어서 처리합니다.

컴포넌트를 만들기 위해 리액트에서는 선언적 접근 방식을 사용합니다. 




 #### ⭐ create-react-app

 `create-react-app`은 리액트 SPA를 쉽고 빠르게 개발할 수 있도록 만들어진 툴 체인입니다. 

 ```
 npx create-react-app@latest 폴더이름
 ```