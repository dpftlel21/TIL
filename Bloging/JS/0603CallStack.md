# 1. Call Stack, 이벤트 루프

### ✔️ 스택, 큐

<img src = "https://postfiles.pstatic.net/MjAyMzA2MDNfNzYg/MDAxNjg1NzkxODk3MDQz.ra56WG-LsRJpCmHjLoQ9cqKintTHgE1w2TeeqZkjnL4g.fjC8PF5LmqXrhO-kmU-CMvWFsQ5KAf3Cx1IoEAqLWhIg.PNG.dkdnmju/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7_2023-06-03_203048.png?type=w773" width = 400, height = 200>  <br><br>

스택이란 출입구가 하나인 데이터의 구조를 의미하며 예를들어 a, b, c 라는 데이터가 있다고 가정했을 때 a, b, c 순서대로 데이터를 넣었다면, 데이터가 빠져나올 때는 c, b, a 순서로 빠져나오게 됩니다.

큐란 일종의 선입선출 개념으로 이해하시면 됩니다. 종류에 따라 양쪽 모두 입 • 출력이 가능한 큐도 있고, 일반적으로 큐는 a, b, c 순서대로 데이터를 넣는다면, 빠져나올 때도 순서대로 a, b, c가 빠져나오게 됩니다.

---

### ✔️ Call Stack

call stack이란 js 코드가 실행되며 생성되는 실행 컨텍스트를 저장하는 자료구조입니다.

1. 함수를 호출하면 실행 컨텍스트가 생성되고, 이를 콜 스택에 추가하여 다음 함수를 실행합니다.

2. 함수에 의해 호출되는 모든 함수(내부 함수)는 콜 스택에 추가되고, 해당 위치에서 실행합니다.

3. 함수의 실행이 종료되면 해당 실행 컨텍스트를 콜 스택에서 제거한 후 중단된 시점부터 다시 시작합니다. 이때, 스택이할당 된 공간보다 많은 공간을 차지한다면 stack overflow 에러가 발생합니다.

```js
function a() {
    console.log("a");
}
function b() {
    console.log("b");
}
function c() {
    a();
    console.log("c");
    b();
}

c();
```

`c 함수`를 호출할 때까지 모든 함수를 무시하고 `c 함수`를 호출하여 생성 된 실행 컨텍스트를 콜 스택에 추가합니다.

그 뒤 `c 함수` 함수 내 모든 코드를 읽기 시작하고, `a 함수`를 호출하여 생성 된 실행 컨텍스트를 콜 스택에 추가합니다.

그 뒤에 `a 함수`를 읽기 시작하여 `a 함수` 내 모든 코드를 읽었다면 해당 실행 컨텍스트를 제거합니다. `a  함수`가 호출 된 라인으로 돌아와 나머지를 계속 실행하고 `b 함수`도 `a 함수`와 마찬가지로 실행됩니다.

그 뒤 `c 함수` 내 모든 코드를 읽었으므로 `c 함수`가 콜 스택에서 제거됩니다. 따라서 결과는 a, b, c 순서로 출력됩니다.

---

### ✔️ 브라우저 환경에서의 자바스크립트

대체적으로 js 엔진들은 아래 그림처럼 개념을 구현하고 최적화 하게 됩니다.

<img src = "https://postfiles.pstatic.net/MjAyMzA2MDNfMjUw/MDAxNjg1Nzk0NTE4ODIw.i1WOhTrhg3rnSq9rd_IEfLs23NV7sGENt_eeyvrzt6og.98djpviNqDdrSe8H_o1j3GXIu0n_UGrrpbHrebX_teQg.PNG.dkdnmju/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7_2023-06-03_211456.png?type=w773" width = 450, height = 300><br><br>

- Heap : 힙은 구조화되지 않은 넓은 메모리 영역을 지칭하고, js의 객체는 모두 Heap 안에 할당됩니다.

- Web API : 브라우저에서 제공하는 별도의 API이며, DOM, SVG, Fetch, Canvas, setTimeOut 모두 js가 아닌 브라우저에서 제공하는 API입니다.

- Callback Queue (Message Queue) : 비동기 함수가 실행된 후 콜백 함수가 대기하는 자료구조 입니다.

- Microtask Queue (Job Queue) : ES6에서 새로 도입한 개념이며, Callback Queue와 동일 계층에 존재하며 Promise를 통한 비동기 요청 시의 콜백 함수는 Microtask Queue에 대기하게 됩니다.

- Animation Frames : requestAnimationFrame에 의해 등록되는 자료구조로 requestAnimationFrame의 콜백함수가 대기하는 자료구조 입니다.

### ✔️ 이벤트 루프

이벤트 루프는 Call Stack과 각 큐를 감시하고 있다가 Call Stack이 비었을 경우 정해진 우선순위에 따라 큐에서 하나씩 꺼내 Call Stack에 추가해주는 역할을 합니다.

1. 호출 스택의 작업 모두 처리

2. 호출 스택이 비었을 경우, Microtask Queue 를 확인하고 처리해야 할 작업이 있다면 Call Stack에 넣고 처리합니다.

3. 만약 Microtask Queue가 비었을 경우, Animation Frames를 확인하고 마찬가지로 처리해야 할 작업이 있다면  Call Stack에 넣고 처리합니다.

4. 앞서 진행한 과정을 진행하고 난 뒤 마지막으로 Callback Queue를 확인하고 Call Stack에 넣고 처리합니다.

```js
// 첫 번째 실행
console.log("start");

// 마지막 실행
setTimeOuT(function () {
    console.log("TimeOut");
}, ());

// 세 번째 실행
Promise.resolve().then(function () {
    console.log("Promise");
});

// 네 번째 실행
requestAnimationFrame(function () {
    console.log("rAF");
});

// 두 번째 실행
console.log("end");

// Microtask Queue, Animation Frames, Callback Queue 순서로 비동기 함수의 콜백함수 처리
```


---

그림 및 내용 출처 : https://frontj.com/entry/8-Javascript%EC%9D%98-%EC%BD%9C-%EC%8A%A4%ED%83%9D%EA%B3%BC-%EC%9D%B4%EB%B2%A4%ED%8A%B8-%EB%A3%A8%ED%94%84