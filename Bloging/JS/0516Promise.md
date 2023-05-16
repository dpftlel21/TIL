# 1. Promise

자바스크립트에서 제공하는 비동기를 간편하게 처리할 수 있도록 도와주는 Object입니다.

Promise는 class이기 때문에 `new` 키워드를 통해 Promise를 생성하고, 비동기 처리를 수행할 executor(콜백함수)를 인수로 전달 받습니다. 이때 콜백함수는 `resolve`, `reject` 함수를 인수로 받습니다.

새로운 프로미스가 만들어 질 때 executor(콜백함수)가 바로 자동으로 실행되므로 주의해야 합니다.
코드가 정상적으로 처리가 되었다면 `resolve` 함수를 호출하고 에러가 발생했을 경우에는 `reject` 함수를 호출하면 됩니다.

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

- Then


```js
// Promise chaining
const fetchNumber = new Promise((resolve, reject) => {
    setTimeout(() => resolve(1), 1000);
});

fetchNumber
.then(num => num*2)
.then(num => num*3)
.then(num => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(num - 1), 1000);
    })
})
.then(num => console.log(num)); // 5
```

```js
const getHen = () =>
    new Promise((resolve, reject) => {
        setTimeout(() => resolve("🐔"), 1000);
    });

const getEgg = hen =>
    new Promise((resolve, reject) => {
        setTimeout(() => reject(new Error(`error ! ${hen} => 🥚`)), 1000);
    });

const cook = egg =>
    new Promise((resolve, reject) => {
        setTimeout(() => resolve(`${egg} => 🍳`), 1000);
    });


getHen()
    .then(getEgg)
    .catch(error => {
        return "🍞";
    })
    .then(cook)
    .then(console.log)
    .catch(console.log);
```