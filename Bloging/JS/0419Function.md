# 1. 함수 (function)

함수는 프로그램을 구성하는 주요 '구성 요소(building block)'입니다. 함수를 이용하면 중복 없이 유사한 동작을 하는 코드를 여러 번 호출할 수 있습니다.

우리는 앞서 다양한 예시에서 `alert(message)`, `prompt(message, default)`, `confirm(question)`과 같은 내장 함수를 사용해 보았습니다.

### ✔️ 함수 선언

```js
function showMessage(parameter1, parameter2, .... parameterN) {
    alert("안녕하세요!"); //함수 본문
}
showMessage() // 함수 호출
```

`function` 키워드, 함수 이름, 괄호로 둘러싼 매개변수를 차례로 써주면 함수를 선언할 수 있습니다. 매개변수가 여러 개 있다면 각 매개변수(parameter1, 2, N)를 콤마로 구분해 줍니다. 이어서 함수를 구성하는 코드의 모임인 '함수 본문(body)'을 중괄호로 감싸 붙여줍시다. 그 후 새롭게 정의한 함수는 이름 옆에 `()`를 붙여 호출할 수 있습니다.

### ✔️ 지역 변수

함수 내에서 선언한 변수인 지역 변수는 함수 안에서만 접근할 수 있습니다.

```js
function showMessage() {
  let message = "안녕하세요!"; // 지역 변수

  alert(message);
}

showMessage(); // '안녕하세요!' 출력

alert(message); //  message는 함수 내 지역 변수이기 때문에 에러가 발생합니다.
```

### ✔️ 외부 변수

함수 내부에서 함수 외부의 변수인 외부 변수에 접근할 수 있습니다.

```js
let userName = '인우';

function showMessage() {
  let message = 'Hello, ' + userName;
  alert(message);
}
showMessage(); // 'Hello, 인우'
```
- 함수에선 외부 변수 접근과 수정이 가능합니다.
```js
let userName = '인우';

function showMessage() {
  let useName = "짱구" // 외부 변수 수정

  let message = 'Hello, ' + userName;
  alert(message);
}
alert(userName); // 함수 호출 전이므로 "인우" 출력

showMessage();

alert(userName); // 함수에 의해 "짱구"로 값 변경
```