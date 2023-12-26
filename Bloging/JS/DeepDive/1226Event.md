## 📝 2023. 12. 26 / 자바스크립트 딮다이브 공부

### ✔️ 이벤트 루프 (Event Loop)와 동시성 (Concurrency)

브라우저는 단일 쓰레드 (single-thread , 쓰레드가 하나 뿐 - 하나의 작업만 처리할 수 있음)에서 이벤트 드리븐 방식으로 동작합니다.

실제로 동작하는 웹 어플리케이션은 많은 작업이 동시에 처리되는 것 처럼 느끼며, 이때 자바스크립트의 동시성을 지원하는 것이 바로 이벤트 루프입니다.

<img src="https://postfiles.pstatic.net/MjAyMzEyMjZfMTI0/MDAxNzAzNTk4NzE2MTcx.bUQi_lHRMBLwObI-NcAUTJc7wzzumwLMCrxyhEJqZvIg.er3IRLMNz_RWQ1TpQJoT33TbKmv9Og-2z1W--G1upIkg.PNG.dkdnmju/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7_2023-12-26_225133.png?type=w773" width="400px">

대부분의 자바스크립트 엔진은 크게 2개의 영역으로 나뉩니다.

> 📝 Call Stack (호출 스택)
>
> - 작업이 요청되면 (함수가 호출되면) 요청된 작업은 순차적으로 Call Stack에 쌓이게 되고, 순차적으로 실행됩니다. 자바스크립트는 단 하나의 Call Stack을 사용하기 때문에 해당 작업이 종료하기 전까지는 다른 어떤 작업도 수행될 수 없습니다.
>
> 📝 Heap
>
> - 동적으로 생성된 객체 인스턴스가 할당되는 영역입니다.

자바 스크립트의 엔진은 단순히 작업이 요청되면 Call Stack을 사용하여 순차적으로 작업을 처리할 뿐이며, 동시성을 지원하기 위해 비동기 요청 처리는 엔진을 구동하는 환경인 브라우저 (Node.js)가 당당합니다.

> 📝 Event Queue
>
> - 비동기 처리 함수의 콜백 함수, 비동기식 이벤트 핸들러, 타이머 함수의 콜백 함수가 보관되는 영역으로 이벤트 루프에 의해 Call Stack이 비어졌을 때 순차적으로 Call Stack으로 이동되어 실행됩니다.
>
> 📝 Event Loop
>
> - Call Stack 내에서 현재 실행중인 작업이 있는지 그리고 Event Queue에 작업이 있는지 반복하여 확인합니다. 만약 Call Stack이 비어있다면 Event Queue 내의 작업이 Call Stack으로 이동하고 실행된다.

```js
function func1() {
  console.log("func1");
  func2();
}

function func2() {
  setTimeout(function () {
    console.log("func2");
  }, 0);

  func3();
}

function func3() {
  console.log("func3");
}

func1();
```

> #### 동작 과정
>
> 1. func1 호출 -> func1이 Call Stack에 쌓임
>
> 2. func1은 func2 호출 -> func2가 Call Stack에 쌓이고, setTimeOut 호출
>
> 3. setTimeout의 콜백함수는 즉시 실행되지 않고 지정 대기 시간만큼 기다림
>
> 4. “tick” 이벤트가 발생하면 태스크 큐로 이동한 후 Call Stack이 비어졌을 때 Call Stack으로 이동되어 실행

---

### ✔️ 이벤트의 종류

#### 📝 UI Event

| Event  | Description                                                              |
| ------ | ------------------------------------------------------------------------ |
| load   | 웹페이지의 로드가 완료되었을 때                                          |
| unload | 웹페이지가 언로드될 때(주로 새로운 페이지를 요청한 경우)                 |
| error  | 브라우저가 자바스크립트 오류를 만났거나 요청한 자원이 존재하지 않는 경우 |
| resize | 브라우저 창의 크기를 조절했을 때                                         |
| scroll | 사용자가 페이지를 위아래로 스크롤할 때                                   |
| select | 텍스트를 선택했을 때                                                     |

#### 📝 Keyboard Event

| Event    | Description            |
| -------- | ---------------------- |
| keydown  | 키를 누르고 있을 때    |
| keyup    | 누르고 있던 키를 뗄 때 |
| keypress | 키를 누르고 뗏을 때    |

#### 📝 Mouse Event

| Event     | Description                                                       |
| --------- | ----------------------------------------------------------------- |
| click     | 마우스 버튼을 클릭했을 때                                         |
| mousedown | 마우스 버튼을 누르고 있을 때                                      |
| mousemove | 마우스를 움직일 때 (터치스크린에서 동작하지 않는다)               |
| mouseover | 마우스를 요소 위로 움직였을 때 (터치스크린에서 동작하지 않는다)   |
| mouseout  | 마우스를 요소 밖으로 움직였을 때 (터치스크린에서 동작하지 않는다) |

#### 📝 Focus Event

| Event          | Description               |
| -------------- | ------------------------- |
| focus/focusin  | 요소가 포커스를 얻었을 때 |
| blur/foucusout | 요소가 포커스를 잃었을 때 |

#### 📝 Form Event

| Event  | Description                                               |
| ------ | --------------------------------------------------------- |
| input  | input 또는 textarea 요소의 값이 변경되었을 때             |
| change | select box, checkbox, radio button의 상태가 변경되었을 때 |
| submit | form을 submit할 때 (버튼 또는 키)                         |

#### 📝 Clipboard Event

| Event | Description            |
| ----- | ---------------------- |
| cut   | 콘텐츠를 잘라내기할 때 |
| copy  | 콘텐츠를 복사할 때     |
| paste | 콘텐츠를 붙여넣기할 때 |
