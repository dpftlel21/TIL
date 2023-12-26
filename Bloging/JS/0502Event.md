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
<input value="클릭" onclick="alert('클릭하셨습니다.')" type="button" />

// 버튼을 클릭하면 onclick 안의 코드 실행
```

HTML 속성은 대, 소문자를 구분하지 않으며 대개 `onclick` 같이 소문자로 작성합니다. 그러나 DOM 프로퍼티는 대, 소문자를 구분하므로 주의해야 합니다.

#### 📝 DOM 프로퍼티

DOM 프로퍼티 `on<event>`을 사용해도 핸들러를 할당할 수 있습니다.

```html
<input id="elem" type="button" value="클릭" />
<script>
  elem.onclick = function () {
    alert("감사합니다.");
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

---

### ✔️ 버블링과 캡처링

#### 🧐 버블링이란?

한 요소에 이벤트가 발생하면, 이 요소에 할당된 핸들러가 동작하고, 이어서 부모 요소의 핸들러가 동작합니다. 가장 최상단의 조상 요소를 만날 때까지 이 과정이 반복되면서 요소 각각에 할당된 핸들러가 동작합니다.

```html
<style>
  body * {
    margin: 10px;
    border: 1px solid blue;
  }
</style>

<form onclick="alert('form')">
  FORM
  <div onclick="alert('div')">
    DIV
    <p onclick="alert('p')">P</p>
  </div>
</form>
```

가장 안쪽의 `<p>`에 할당된 `onclick` 핸들러 동작 → 바깥 `<div>`에 할당된 핸들러 동작 → 그 바깥의 `<form>`에 할당된 핸들러 동작 → `document` 객체를 만날 때까지 각 요소에 할당된 `onclick` 핸들러 동작

이런 동작 방식 때문에 `<p>` 요소를 클릭하면 p → div → form 순서로 3개의 얼럿 창이 뜨는것이며, 이런 흐름을 `'이벤트 버블링’`이라고 부릅니다.

#### 📝 버블링 중단

핸들러에게 이벤트를 완전히 처리하고 난 후 버블링을 중단하도록 명령할 수도 있습니다. 이벤트 객체의 메서드인 `event.stopPropagation()`를 사용하면 됩니다. 버블링을 멈추고, 요소에 할당된 다른 핸들러의 동작도 막으려면 `event.stopImmediatePropagation()`을 사용해야 합니다. 이 메서드를 사용하면 요소에 할당된 특정 이벤트를 처리하는 핸들러 모두가 동작하지 않습니다.

#### 📝 event.target

이벤트가 발생한 가장 안쪽의 요소는 타깃(target) 요소라고 불리고, `event.target`을 사용해 접근할 수 있습니다.

#### 🧐 캡쳐링??

이벤트가 최상위 조상에서 시작해 아래로 전파되고(캡처링 단계), 이벤트가 타깃 요소에 도착해 실행된 후(타깃 단계), 다시 위로 전파됩니다(버블링 단계). 이런 과정을 통해 요소에 할당된 이벤트 핸들러가 호출됩니다.

`on<event>` 프로퍼티나 HTML 속성, `addEventListener(event, handler)`를 이용해 할당된 핸들러는 캡처링에 대해 전혀 알 수 없습니다. 이 핸들러들은 두 번째 혹은 세 번째 단계의 이벤트 흐름(타깃 단계와 버블링 단계)에서만 동작합니다.

캡처링 단계에서 이벤트를 잡아내려면 `addEventListener`의 `capture` 옵션을 `true`로 설정해야 합니다. `false`일때는 핸들러는 캡처링 단계에서 동작합니다.

---

### ✔️ 이벤트 위임

이벤트 위임은 비슷한 방식으로 여러 요소를 다뤄야 할 때 사용됩니다. 이벤트 위임을 사용하면 요소마다 핸들러를 할당하지 않고, 요소의 공통 조상에 이벤트 핸들러를 단 하나만 할당해도 여러 요소를 한꺼번에 다룰 수 있습니다.

공통 조상에 할당한 핸들러에서 `event.target`을 이용하면 실제 어디서 이벤트가 발생했는지 알 수 있습니다. 이를 이용해 이벤트를 핸들링합니다.

```html
<div id="menu">
  <button data-action="save">저장하기</button>
  <button data-action="load">불러오기</button>
  <button data-action="search">검색하기</button>
</div>

<script>
  class Menu {
    constructor(elem) {
      this._elem = elem;
      elem.onclick = this.onClick.bind(this); // (*)
    }

    save() {
      alert("저장하기");
    }

    load() {
      alert("불러오기");
    }

    search() {
      alert("검색하기");
    }

    onClick(event) {
      let action = event.target.dataset.action;
      if (action) {
        this[action]();
      }
    }
  }

  new Menu(menu);
</script>
```

1. `data-action` 속성에 호출할 메서드 할당
2. `this.onClick`은 `this`에 바인딩

   - 이렇게 하지 않으면 this는 menu객체가 아닌 DOM 요소(elem)를 참조, this[action]에서 원하는 결과 얻지 못함.

> 🧐 이점
>
> - 버튼마다 핸들러를 할당해주는 코드를 작성할 필요 X, 메서드를 만들고 HTML에 그 메서드를 써주기만 하면 끝
> - 언제든지 버튼 추가/삭제 가능

#### 📝 행동패턴

1. 요소의 행동을 설명하는 커스텀 속성 추가
2. 문서 전체 감지 핸들러가 이벤트를 추적, 1에서 추가한 속성이 있는 요소에서 이벤트가 발생하면 작업 수행

- 카운터 구현 ( 버튼 클릭시 숫자 증가, `data-counter`)

```html
첫 카운터 : <input type="button" value="1" data-counter /> 두 번째 카운터 :
<input type="button" value="2" data-counter />

<script>
  document.addEventListener("click", function (event) {
    if (event.target.dataset.counter != undefined) {
      // 속성이 존재할 경우
      event.target.value++;
    }
  });
</script>
```

- 토글러 구현 (속성값이 id인 요소 나타나거나 사라짐, `data-toggle-id`)

```html
<button data-toggle-id="subscribe-mail">토글 버튼</button>

<form id="subscribe-mail" hidden>메일 주소: <input type="email" /></form>

<script>
  document.addEventListener("click", function (event) {
    let id = event.target.dataset.toggleId;
    if (!id) return;

    let elem = document.getElementById(id);

    elem.hidden = !elem.hidden;
  });
</script>
```

행동 패턴을 응용하면 토글 기능이 필요한 요소 전체에 자바스크립트로 해 해당 기능을 구현해 주지 않아도 되기 때문에 매우 편리합니다. '행동’을 선언해 주기만 하면 되기 때문입니다. 문서 레벨에 적절한 핸들러를 구현해주기만 하면 페이지 내 모든 요소에 행동을 쉽게 적용할 수 있습니다.

#### 📝 2023. 05. 02 기록

---
