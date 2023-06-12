# 1. Sass( Syntactically Awesome Style Sheets )

CSS pre-processor 로서, 복잡한 작업을 쉽게 할 수 있게 해주고, 코드의 재활용성을 높여줄 뿐 만 아니라 코드의 가독성도 높여주어 유지보수를 쉽게 해줍니다.

```js
// Sass 설치

yarn add node-sass
```

```scss
background: $blue; // 주석 사용
&:hover {
  background: lighten($blue, 10%); // 색상 10% 밝게
}

&:active {
  background: darken($blue, 10%); // 색상 10% 어둡게
}
```

기존 css와 달리 스타일 파일에서 사용할 수 있는 변수를 선언할 수도 있고, 색상을 밝게 or 어둡게 하는 함수도 사용할 수 있습니다.

### 🤔 classnames 라이브러리 이용하기!

```js
// classnames 라이브러리 설치

yarn add classnames
```

### 🤔 mixin

Sass 의 mixin 이라는 기능을 사용하여 쉽게 재사용 할 수 있습니다.

```scss
$blue: #228be6;
$gray: #495057;
$pink: #f06595;

@mixin button-color($color) {
  background: $color;
  &:hover {
    background: lighten($color, 10%);
  }
  &:active {
    background: darken($color, 10%);
  }
}
```

---

# 2. CSS Module

리액트 프로젝트에서 컴포넌트를 스타일링할 때 CSS Module 기술을 이용하여 CSS 클래스 중첩을 막을 수 있습니다. CRA로 만든 프로젝트에서 사용할 때는 CSS 파일의 확장자를 `.module.css`로 하면 됩니다.

```css
.Box {
  background: black;
  color: white;
  padding: 2rem;
}
```

리액트 컴포넌트에서 해당 CSS 파일을 불러올 때 선언한 클래스 이름이 모두 고유해지며 클래스 이름이 만들어지는 과정에서 파일 경로, 파일 이름, 클래스 이름, 해쉬값 등이 사용될 수 있습니다.

실수로 CSS 클래스 이름이 다른 관계 없는 곳에서 사용한 CSS 클래스 이름과 중복되는 일에 대하여 걱정 할 필요가 없습니다.

레거시 프로젝트에 리액트를 도입할 때 (기존 프로젝트에 있던 CSS 클래스와 이름이 중복되어도 스타일이 꼬이지 않게 해줍니다.), CSS 클래스를 중복되지 않게 작성하기 위하여 CSS 클래스 네이밍 규칙을 만들기 귀찮을 때 이 기술을 사용합니다.

CSS Module 을 사용 할 때에는 styles.icon 이런 식으로 객체안에 있는 값을 조회해야 하는데, 만약 클래스 이름에 - 가 들어가 있다면 다음과 같이 사용해야합니다: `styles['my-class']`
만약에 여러개가 있다면 다음과 같이 작성해합니다: `${styles.one}` `${styles.two}`

Sass 를 배울 때 썼었던 classnames 라이브러리에는 bind 기능이 있는데, 이 기능을 사용하면 CSS Module 을 조금 더 편하게 사용 할 수 있습니다.

// 2023. 06. 08

---

# 3. Styled Components

styled-components 란 JS안에 CSS를 작성하는 기술을 사용하는 라이브러리를 의미합니다.

```jsx
// styled-components 라이브러리 설치

// 1.
yarn add styled-components

// 2.
npm i styled-components
```

### ✔️ 기본 문법

```jsx
import styled from "styled-components";
import Button from "./Button";

styled.button`
  // <button> HTML 엘리먼트 스타일 정의
`;

// 컴포넌트 스타일링시 해당 컴포넌트 임포트 후 인자로 해당 컴포넌트 넘기기!
styled(Button)`
  // <Button> React 컴포넌트 스타일 정의
`
```

Styled Components를 이용해서 JavaScript 코드 안에 삽입된 CSS 코드는 글로벌 네임 스페이스를 사용하지 않습니다. 즉, 각 JavaScript 파일마다 고유한 CSS 네임 스페이스를 부여해주기 때문에, 각 React 컴포넌트에 완전히 격리된 스타일을 적용할 수 있게 됩니다.
