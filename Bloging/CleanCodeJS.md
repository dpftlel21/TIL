# 1. 클린코드 js !

### ✔️ var 지양하기 !

```js
var global = "전역";

if (global === "전역") {
  var global = "지역";

  console.log(global); // 지역
}

console.log(global); // 지역

// if 함수 내부의 지역만 바뀌길 기대했지만, 전역 스코프 즉, 전역 공간까지 영향
// var는 함수 단위 스코프이며, 함수는 아님
```

```js
let global = "전역";

if (global === "전역") {
  let global = "지역";

  console.log(global); // 지역
}

console.log(global); // 전역

// 블럭단위로 생성되는 let, const를 사용하여 더욱 안전하게 코드에 대한 결과 도출이 가능
```

#### 🤔 let < const ??

자바스크립트는 변수안에 변수 혹은 많은 것들을 담을 수 있다 보니까 헷갈릴 수 있습니다.

```js
const person = {
  name: "inwoo",
  age: "24",
};

// 틀린 코드
person = {
  name: "철수",
  age: "27",
}; // 재할당 금지, 에러 발생

// 옳은 코드
person.name = "진수";
person.age = "24";

console.log(person); // {name : "진수", age: "24"} , person 객체 내부의 값만 바꾼 것이기 때문에 동작이 가능
```

위 코드를 통해 const는 재할당이 금지된다는 것을 알 수 있고, 본연의 객체와 배열 같은 레퍼런스 객체들을 조작할 떄 이상이 없습니다.

---

### ✔️ 전역 공간 사용 최소화 !

전역공간은 Global, window라고도 합니다. 브라우저 환경에서 돌아가는 경우에는 Window가 최상위, Node Js 환경에서는 Global이 최상위입니다. 즉, 최상위 공간을 전역 공간이라고 이해하시면 됩니다.

```js
// index.js

var globalVar = "global";

console.log(globalVar); // global
```

```js
// index.js2

console.log(globalVar); // global
```

전역 공간을 사용하게 된다면 index.js와 index.js2의 코드가 겹칠 수 있습니다. 즉, 스코프 분리 위험이 있으므로 전역 변수를 사용하지 않고, 지역 변수를 사용하며 Window와 Global에 접근하며 조작하지 않는 것입니다.

전역 공간을 최소화 하기 위해 사용하는 방법중 대표적으로 IIFE(즉시 실행 함수), module, Closure, const & let 사용이 있습니다.

---

### ✔️ 임시변수 제거하기

임시 변수는 특정 공간에 Scope 안에서 전역변수처럼 활용되는 친구라고 생각합니다.

임시 변수는 명령형으로 가득한 로직이 나오며, 어디서 어떻게 잘못 되었는지 디버깅이 어려워 제거하는 것이 좋습니다. 추가적인 코드를 작성하게 되면 유지 보수가 어려워지게 됩니다.

해결책은 함수를 나누고, 바로 반환하며, 고차함수 (map, filter, reduce)를 사용하는 것이 좋습니다.

```js
function getElements() {
  const result = {}; // 이 임시 객체도 함수가 커지면 전역 공간이나 다름 없는 상황 발생 0

  result.title = document.querySelector(".title");
  result.text = document.querySelector(".text");
  result.value = document.querySelector(".value");

  return result;
}
```
위 코드를 다음과 같이 수정할 수 있습니다.

```js
function getElements() {
    const result = {
        title : document.querySelector(".title");
        text : document.querySelector(".text");
        value : document.querySelector(".value");
    };

return result;
}
```

---

### ✔️ 임시변수 제거하기

### ✔️ 임시변수 제거하기

### ✔️ 임시변수 제거하기

### ✔️ 임시변수 제거하기
