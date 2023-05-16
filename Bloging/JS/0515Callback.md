# 1. 동기와 비동기

###  ⭐ 동기와 비동기 !!

- `동기`

    JavaScript 동기 처리란 "특정 코드의 실행이 완료될 때까지 기다리고 난 후 다음 코드를 수행하는 것"을 의미합니다.

- `비동기`

    비동기 처리는 동기랑 달리 "특정 코드의 실행이 완료될 떄까지 기다리지 않고 다음 코드들을 수행하는 것"을 의미합니다. 비동기 코드는 코드가 작성된 순서대로 작동되는 것이 아니라 동작이 완료되는 순서대로 작동하게 됩니다. 즉, 코드의 순서를 예측할 수 없습니다.

    이때, Callback 함수를 활용하여 Callback 함수를 통해 비동기 코드의 순서를 제어할 수 있습니다. 즉, 비동기를 동기화할 수 있다라고 보시면 됩니다.

####  📝 비동기 JavaScript, 콜백함수

- 타이머 관련 API `setTimeout(callback, millisecond) `: 일정 시간 후에 함수를 실행합니다.

1. 매개변수(parameter) : 실행할 콜백 함수, 콜백 함수 실행 전 기다려야 할 시간 (밀리초)
2. return 값 : 임의의 타이머 ID

```js
setTimeout(function(){
    console.log("1초 후 실행");
}, 1000);
```

- `clearTimeout(timerId)` : `setTimeout` 타이머를 종료합니다.

1. 매개변수(parameter) : 타이머 ID
2. return 값 : 값 x 

```js
const timer = setTimeout(function(){
    console.log("10초 후 실행");
}, 10000);

clearTimeout(timer); // setTimeout 종료
```

- `setInterval(callback, millisecond)` : 일정 시간의 간격을 가지고 함수 반복 실행

1. 매개변수(parameter) : 실행할 콜백 함수, 반복적으로 함수를 실행시키기 위한 시간 간격(밀리초)
2. return 값 : 임의의 타이머 ID

```js
setInterval(function(){
    console.log("1초마다 실행");
}, 1000);
```

- `clearInterval(timerID)` : `setInterval` 타이머를 종료

1. 매개변수(parameter) : 타이머 ID
2. return 값 : 값 x

```js
const timer = setInterval(function () {
  console.log('1초마다 실행');
}, 1000);
clearInterval(timer);
// setInterval 종료
```

- 이벤트 처리기 : 특정 이벤트가 발생했을 때 실행하도록 등록하는 함수

```js
button.addEventListener("click", function(){
    ...
}, false);
```

