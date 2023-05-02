# 1. Event

이벤트(event) 는 무언가 일어났다는 신호입니다. 모든 DOM 노드는 이런 신호를 만들어 냅니다. 참고로, 이벤트는 DOM에만 한정되진 않습니다.

다음은 자주 사용되는 DOM 이벤트입니다. 

마우스 이벤트:
- click – 요소 위에서 마우스 왼쪽 버튼을 눌렀을 때(터치스크린이 있는 장치에선 탭 했을 때) 발생합니다.
- contextmenu – 요소 위에서 마우스 오른쪽 버튼을 눌렀을 때 발생합니다.
- mouseover와 mouseout – 마우스 커서를 요소 위로 움직였을 때, 커서가 요소 밖으로 움직였을 때 발생합니다.
- mousedown과 mouseup – 요소 위에서 마우스 왼쪽 버튼을 누르고 있을 때, 마우스 버튼을 뗄 때 발생합니다.
- mousemove – 마우스를 움직일 때 발생합니다.

폼 요소 이벤트:
- submit – 사용자가` <form>`을 제출할 때 발생합니다.
- focus – 사용자가 `<input>`과 같은 요소에 포커스 할 때 발생합니다.

키보드 이벤트:
- keydown과 keyup – 사용자가 키보드 버튼을 누르거나 뗄 때 발생합니다.

문서 이벤트:
- DOMContentLoaded – HTML이 전부 로드 및 처리되어 DOM 생성이 완료되었을 때 발생합니다.

CSS 이벤트:
- transitionend – CSS 애니메이션이 종료되었을 때 발생합니다.

---

### ✔️ 이벤트 핸들러

이벤트에 반응하려면 이벤트가 발생했을 때 실행되는 함수인 핸들러(handler) 를 할당해야 합니다. 핸들러는 사용자의 행동에 어떻게 반응할지를 자바스크립트 코드로 표현한 것입니다. 

#### 📝 HTML 속성

```html
<input value = "클릭" onclick="alert('클릭하셨습니다.')" type = "button">

// 버튼을 클릭하면 onclick 안의 코드 실행
```

HTML 속성은 대, 소문자를 구분하지 않으며 대개 `onclick` 같이 소문자로 작성합니다. 그러나 DOM 프로퍼티는 대, 소문자를 구분하므로 주의해야 합니다.

#### 📝 DOM 프로퍼티

DOM 프로퍼티 `on<event>`을 사용해도 핸들러를 할당할 수 있습니다.

```html
<input id="elem" type="button" value="클릭">
<script>
  elem.onclick = function() {
    alert('감사합니다.'); 
  };
</script>

// 버튼 클릭시 "감사합니다." 출력
```

#### 📝 this로 요소에 접근

핸들러 내부에 쓰인 this의 값은 핸들러가 할당된 요소입니다.

```html
<button onclick="alert(this.innerHTML)">클릭해 주세요.</button>

// 여기서의 this는 button 의미, 따라서 버튼 안의 컨텐츠(클릭해 주세요.) 출력
```

---

### ✔️ addEventListner

`addEventListener` 와 `removeEventListener` 라는 특별한 메서드를 이용해 핸들러를 여러 개 할당할 수 있습니다. 

```js
element.addEventListener(event, handler, [options]);
```

- event : 이벤트 이름(예: "click")
- handler : 핸들러 함수
- options : 아래 프로퍼티를 갖는 객체

#### 📝 이벤트 객체

이벤트가 발생하면 브라우저는 `이벤트 객체(event object)`라는 것을 만듭니다. 여기에 이벤트에 관한 상세한 정보를 넣은 다음, 핸들러에 인수 형태로 전달합니다.

다음은 이벤트 객체에서 지원하는 프로퍼티들입니다.
- `event.type` : 이벤트 타입

- `event.currentTarget`: 이벤트를 처리하는 요소, 화살표 함수를 사용해 핸들러를 만들거나 다른 곳에 바인딩하지 않은 경우엔 this가 가리키는 값과 같음, 화살표 함수를 사용했거나 함수를 다른 곳에 바인딩한 경우엔` event.currentTarget`를 사용해 이벤트가 처리되는 요소 정보를 얻을 수 있음

- `evemt.clientX` / `event.clientY` : 포인터 관련 이벤트에서, 커서의 상대 좌표(모니터 기준 좌표가 아닌, 브라우저 화면 기준 좌표 – 옮긴이)

#### 📝 객체 형태의 핸들러와 handleEvent

`addEventListener`를 사용하면 함수뿐만 아니라 객체를 이벤트 핸들러로 할당할 수 있습니다. 이벤트가 발생하면 객체에 구현한 `handleEvent` 메서드가 호출됩니다.

addEventListener가 인수로 객체 형태의 핸들러를 받으면 이벤트 발생 시 `obj.handleEvent(event)`가 호출됩니다.