# 1. useRef 로 특정 DOM 선택

JavaScript를 사용 할 때에는 , 우리가 특정 DOM 을 선택해야 하는 상황에 `getElementById` , `querySelector` 같은 DOM Selector 함수를 사용해서 DOM을 선택합니다.

리액트에서도 특정 엘리먼트의 크기를 가져오는 경우, 스크롤바 위치를 가져오거나 설정하는 경우, 포커스 설정 등 다양한 상황과 Video.js, JWPlayer 같은 HTML5 Video 관련 라이브러리, 또는 D3, chart.js 같은 그래프 관련 라이브러리 등의 외부 라이브러리를 사용해야 할 때에도 특정 DOM 에다 적용하기 때문에 DOM 을 선택해야 하는 상황이 발생 할 수 있습니다.

이러한 상황에서 리액트는 `ref`라는 것을 사용하는데, 함수형 컴포넌트에서 `ref`를 사용할 때 `useRef`라는 Hook 함수를 사용합니다. 클래스형 컴포넌트에서는 콜백 함수를 사용하거나 `React.createRef` 라는 함수를 사용합니다.

```jsx
// 벨로퍼트 리액트 예제 ( 초기화 버튼을 클릭했을 때 이름 input에 포커스가 잡히도록 useRef  사용)

import React, { useState, useRef } from "react";

function InputSample() {
  const [inputs, setInputs] = useState({
    name: "",
    nickname: "",
  });
  const nameInput = useRef();

  const { name, nickname } = inputs; // 비구조화 할당을 통해 값 추출

  const onChange = (e) => {
    const { value, name } = e.target; // 우선 e.target 에서 name 과 value 를 추출
    setInputs({
      ...inputs, // 기존의 input 객체를 복사한 뒤
      [name]: value, // name 키를 가진 값을 value 로 설정
    });
  };

  const onReset = () => {
    setInputs({
      name: "",
      nickname: "",
    });
    nameInput.current.focus();
  };

  //  onReset 함수에서 input 에 포커스를 하는 focus() DOM API 를 호출

  return (
    <div>
      <input
        name="name"
        placeholder="이름"
        onChange={onChange}
        value={name}
        ref={nameInput}
      />
      <input
        name="nickname"
        placeholder="닉네임"
        onChange={onChange}
        value={nickname}
      />
      <button onClick={onReset}>초기화</button>
      <div>
        <b>값: </b>
        {name} ({nickname})
      </div>
    </div>
  );
}

export default InputSample;
```
useRef() 를 사용하여 Ref 객체를 만들고, 이 객체를 우리가 선택하고 싶은 DOM 에 ref 값으로 설정해주어야 합니다. 그러면, Ref 객체의 .current 값은 우리가 원하는 DOM 을 가르키게 됩니다.

출처 : https://react.vlpt.us/basic/10-useRef.html

---

# 2. useRef로 컴포넌트 안 변수 만들기

`useRef` Hook 은 DOM을 선택하는 용도 외에도, 컴포넌트 안에서 조회 및 수정할 수 있는 변수를 관리합니다. `useRef` 로 관리하는 변수는 값이 바뀐다고 해서 컴포넌트가 리렌더링 되지 않습니다. 리액트 컴포넌트에서의 상태는 상태를 바꾸는 함수를 호출하고 나서 그 다음 렌더링 이후로 업데이트 된 상태를 조회할 수 있는 반면, `useRef`로 관리하고 있는 변수는 설정 후 바로 조회할 수 있습니다.

> @ useRef로 관리 할 수 있는 값
> - `setTimeout` , `setInterval` 을 통해서 만들어진 `id`
> - 외부 라이브러리를 사용하여 생성된 인스턴스
> - scroll 위치

useRef는 일반적인 자바스크립트 객체이며, `heap` 영역에 저장됩니다. 그래서 어플리케이션이 종료되거나 가비지 컬렉팅 될 때 까지 참조할 때 마다 같은 메모리 주소를 가지게 되고 같은 메모리 주소를 가지기 때문에 `===` 연산이 항상 true를 반환하고, 값이 바뀌어도 리렌더링 되지 않습니다.
하지만 함수 컴포넌트 내부에 변수를 선언한다면, 렌더링 될 때마다 값이 초기화 됩니다.

출처 : https://react.vlpt.us/basic/12-variable-with-useRef.html