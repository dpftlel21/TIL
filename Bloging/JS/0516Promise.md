# 1. Promise

자바스크립트에서 제공하는 비동기를 간편하게 처리할 수 있도록 도와주는 Object입니다.

Promise는 class이기 때문에 `new` 키워드를 통해 Promise를 생성하고, 비동기 처리를 수행할 executor(콜백함수)를 인수로 전달 받습니다. 이때 콜백함수는 `resolve`, `reject` 함수를 인수로 받습니다.

새로운 프로미스가 만들어 질 때 executor(콜백함수)가 바로 자동으로 실행되므로 주의해야 합니다.
코드가 정상적으로 처리가 되었다면 `resolve` 함수를 호출하고 에러가 발생했을 경우에는 `reject` 함수를 호출하면 됩니다.

```js
// 기본 문법

const promise = new Promise(function(resolve, reject) { ... });

// resolve : 함수 안의 처리가 끝났을 때 호출해야 하는 콜백함수, 어떠한 값도 인수로 넘길 수 있으며, 이 값은 다음 처리를 실행하는 함수에 전달

// reject : 함수 안의 처리가 실패할 때 호출해야 하는 콜백함수, 마찬가지로 어떠한 값도 인수로 넘길 수 있으며, 대부분의 경우 오류 메시지 문자열을 인수로 사용
```

- `Promise 객체의 내부 프로퍼티` : `new Promise`가 반환하는 Promise 객체는 state, result 내부 프로퍼티를 갖습니다. 직접 접근은 할 수 없고 then, catch, finally 메서드를 사용해야 접근할 수 있습니다.

- `State` : 기본은 pending(대기)이며, 비동기 처리를 수행할 콜백함수가 성공적으로 작동했다면 fulfilled(이행)로 변경이 되고, 에러가 발생했다면 rejected(거부)가 됩니다.

- `Result` : 처음은 undefined 이며 비동기 처리를 수행할 콜백 함수(executor)가 성공적으로 작동하여 resolve(value)가 호출되면 value로, 에러가 발생하여 reject(error)가 호출되면 error로 변합니다.

```js
// Producer
const promise = new Promise((resolve, reject) => {
    console.log("doing something...");
    setTimeout(() => {
       resolve("인우");

       reject(new Error("no network"));
    }, 2000);
});

// Consumer : then, catch, finally
promise
.then(value => {
    console.log(value);
}); // 인우

.catch(error => {
    console.log(error);
}); // no network

.finally(() => {
    console.log("finally");
}) // 실패와 성공의 유무와 관계없이 finally 출력
```

### ✔️ then, catch, finally

- Then : `executor`에 작성했던 코드들이 정상적 처리가 되면 `resolve` 함수를 호출하고 `.then` 메서드로 접근할 수 있습니다. `.then` 안에서 리턴한 값이 Promise면 Promise의 내부 프로퍼티 result를 `.then` 콜백함수의 인자로 받아오고, Promise가 아니라면 리턴한 값을 받아옵니다.

- catch : `executor`에 작성했던 코드들이 에러가 발생했을 경우, `reject(new Error("에러"))`함수를 호출하고 `.catch`메서드로 접근할 수 있습니다.

- finally : `executor`에 작성했던 코드들의 처리여부와 관계없이 `.finally` 메서드로 접근합니다.

```js
// Promise chaining
const fetchNumber = new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 1000);
});

fetchNumber
  .then((num) => num * 2)
  .then((num) => num * 3)
  .then((num) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(num - 1), 1000);
    });
  })
  .then((num) => console.log(num)); // 5
```

Promise chaining가 필요하는 경우는 비동기 작업을 순차적으로 진행해야 하는 경우인데, `.then, .catch, .finally` 의 메서드들은 Promise를 리턴하기 때문에 Promise chaining이 가능합니다. 따라서 `.then`을 통해 연결할 수 있고, 에러가 발생할 경우 `.catch` 로 처리하면 됩니다.

```js
const getHen = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve("🐔"), 1000);
  });

const getEgg = (hen) =>
  new Promise((resolve, reject) => {
    setTimeout(() => reject(new Error(`error ! ${hen} => 🥚`)), 1000);
  });

const cook = (egg) =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${egg} => 🍳`), 1000);
  });

getHen()
  .then(getEgg)
  .catch((error) => {
    return "🍞";
  })
  .then(cook)
  .then(console.log)
  .catch(console.log);
```

#### 🧐 `Promise.all()`

`Promise.all()`은 여러 개의 비동기 작업을 동시에 처리할 때 사용합니다. 인자로는 배열을 받고, 해당 배열의 모든 Promise에서 executor 내 작성했던 코드들이 정상적으로 처리가 되었다면 결과를 배열에 저장하고 새로운 Promise를 반환합니다.

```js
const promiseOne = () =>
  new Promise((resolve, reject) => setTimeout(() => resolve("1초"), 1000));
const promiseTwo = () =>
  new Promise((resolve, reject) => setTimeout(() => resolve("2초"), 2000));
const promiseThree = () =>
  new Promise((resolve, reject) => setTimeout(() => resolve("3초"), 3000));

// 기존
const result = [];
promiseOne()
  .then((value) => {
    result.push(value);
    return promiseTwo();
  })
  .then((value) => {
    result.push(value);
    return promiseThree();
  })
  .then((value) => {
    result.push(value);
    console.log(result);
    // ['1초', '2초', '3초']
  });
```

위와 같이 코드의 중복이 발생하고, 불필요한 코드를 Promise.all()을 통해 줄여보겠습니다.

```js
Promise.all([promiseOne(), promiseTwo(), promiseThree()])
  .then((value) => console.log(value))
  // ['1초', '2초', '3초']
  .catch((err) => console.log(err));
```

✔️ `Async/Await`

Async/Await 을 통해 Promise 코드를 간결하게 작성할 수 있습니다. 함수 앞에 async 함수 내에서만 await 키워드를 사용합니다. 

```js
// 함수 선언식

async function funcDeclarations() {
    await 작성할 코드
    ...
}

// 함수 표현식
const funcExpression = async function () {
	await 작성하고자 하는 코드
	...
}

// 화살표 함수
const ArrowFunc = async () => {
	await 작성하고자 하는 코드
	...
}
```