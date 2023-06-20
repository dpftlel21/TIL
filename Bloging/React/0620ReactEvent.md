# 1. 이벤트 핸들러

이벤트 핸들러를 추가하려면 먼저 함수를 정의하고, 적절한 JSX 태그에 prop으로 전달합니다.

```jsx
export default function Button() {
  function handleClick() {
    alert('You clicked me!');
  }

  return (
    <button onClick={handleClick}>
      Click me
    </button>
  );
}

// handleClick 함수를 정의하고, button에 prop으로 전달
```

이벤트 핸들러 함수는 일반적으로 컴포넌트에 정의되고, `handle`로 시작하는 이름 뒤에 이벤트 이름이 오도록 설정합니다. ex) `onClick={handleClick}` , ` onMouseEnter={handleMouseEnter}`

### ✔️ 이벤트 전파 

이벤트 핸들러는 컴포넌트에 있을 수 있는 모든 하위 컴포넌트의 이벤트도 포착하며, 이벤트가 트리 위로 버블 or 전파 되는 것을 이벤트가 발생한 곳에서 시작하여 트리 위로 올라간다고 합니다.

```jsx
export default function Toolbar() {
  return (
    <div className="Toolbar" onClick={() => {
      alert('You clicked on the toolbar!');
    }}>
      <button onClick={() => alert('Playing!')}>
        Play Movie
      </button>
      <button onClick={() => alert('Uploading!')}>
        Upload Image
      </button>
    </div>
  );
}
```

두 버튼 중 하나를 클릭하면 해당 버튼의 `onClick`이 먼저 실행되고, 그 후에 부모 `<div>`의 `onClick`이 실행됩니다. 따라서 두 개의 메시지가 나타나며 툴바를 클릭하면 부모 `<div>`의 `onClick`만 실행됩니다.

첨부한 JSX 태그에서만 작동하는 onScroll을 제외한 모든 이벤트는 React에서 전파됩니다.


### ✔️ 기본 동작 방지

- `e.stopPropagation()`은 위 태그에 연결된 이벤트 핸들러의 실행을 중지합니다.
- `e.preventDefault()`는 해당 이벤트가 있는 몇 가지 이벤트에 대해 기본 브라우저 동작을 방지합니다.