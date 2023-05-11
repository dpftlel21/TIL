# 1. 프로토타입

### ✔️ 프로토타입(prototype)이란?

객체는 `[[Prototype]]`이라는 숨김 프로퍼티를 갖는데, 이 값은 `null`이나 다른 객체에 대한 참조가 되는데, 다른 객체를 참조하는 경우 참조하는 대상을 프로토타입이라고 합니다.

object에서 프로퍼티를 읽으려고 하는데 해당 프로퍼티가 없으면 자바스크립트는 자동으로 프로토타입에서 프로퍼티를 찾는데 이런 동작 방식을 프로토타입 상속이라고 합니다.

```js
let animal = {
    eats : true;
};
let rabbit = {
    jumps: true;
};

rabbit.__proto__ = animal;  //  프로토타입 설정

// rabbit에서 프로퍼티를 얻고싶은데, 해당 프로퍼티가 없다면 js는 자동으로 animal 객체에서 프로퍼티를 얻음
console.log( rabbit.eats ); // true
console.log( rabbit.jumps ); // true
```

위와 같이 `__proto__`를 사용하여 값을 설정할 수 있습니다. 따라서 rabbit의 프로토타입은 animal 혹은, rabbit은 animal을 상속받았다라고 표현할 수 있습니다.

```js
let animal = {
    eats : true;
    walk() {
        alert("동물이 걸어요!")
    }
};
let rabbit = {
    jumps: true;
};

rabbit.__proto__ = animal;  //  프로토타입 설정

// rabbit에서 프로퍼티를 얻고싶은데, 해당 프로퍼티가 없다면 js는 자동으로 animal 객체에서 프로퍼티를 얻음
rabbit.walk(); // 동물이 걸어요!, rabbit에서 walk() 호출 o
```

