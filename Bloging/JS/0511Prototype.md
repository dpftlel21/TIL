# 1. 프로토타입

### ✔️ 프로토타입(prototype)이란?

객체는 `[[Prototype]]`이라는 숨김 프로퍼티를 갖는데, 이 값은 `null`이나 다른 객체에 대한 참조가 되는데, 다른 객체를 참조하는 경우 참조하는 대상을 프로토타입이라고 합니다.

object에서 프로퍼티를 읽으려고 하는데 해당 프로퍼티가 없으면 자바스크립트는 자동으로 프로토타입에서 프로퍼티를 찾는데 이런 동작 방식을 프로토타입 상속이라고 합니다.

####  📝 `.prototype`

함수를 정의하면 다른 곳에 생성된 프로토타입 객체는 자신이 다른 객체의 원형이 되는 객체입니다. 모든 객체는 프로토타입 객체에 접근 할 수 있고, 프로토타입 객체도 동적으로 런타임에 멤버를 추가할 수 있습니다. 같은 원형을 복사로 생성된 모든 객체는 추가된 멤버를 사용할 수 있습니다.

객체 생성자 함수 아래에 `.prototype.[원하는키] = 코드`를 입력하여 설정 할 수 있습니다.

```js
function Animal(type, name, sound) {
  this.type = type;
  this.name = name;
  this.sound = sound;
}

Animal.prototype.say = function() {
  console.log(this.sound);
};

const dog = new Animal('개', '멍멍이', '멍멍');
const cat = new Animal('고양이', '야옹이', '야옹');

dog.say();
cat.say();

console.log(dog.say());
console.log(cat.say());
```

객체 생성자를 사용 할 때는 보통 함수의 이름을 대문자로 시작하고, 새로운 객체를 만들 때에는 new 키워드를 앞에 붙여주어야 합니다.

지금 위 코드를 보시면, dog 가 가지고 있는 say 함수와 cat 이 가지고 있는 수행하는 코드가 똑같음에도 불구하고 객체가 생성 될 때 마다 함수도 새로 만들어져서 this.say 로 설정이 되고 있습니다.

같은 객체 생성자 함수를 사용하는 경우, 특정 함수 또는 값을 재사용 할 수 있는데 바로 프로토타입입니다.

####  📝 `.__proto__`

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

#### 📝 클래스, 인스턴스, 프로토타입의 관계

- 클래스: 클래스는 객체를 생성하기 위한 템플릿으로 객체의 구조와 동작을 정의하며 생성자 함수로 구현할 수도 있고, ES6부터는 class 키워드를 이용하여 구현할 수 있습니다. 클래스는 constructor 메서드와 다양한 메서드 및 속성을 가질 수 있습니다.

- 인스턴스: 클래스를 이용하여 생성된 객체를 의미하며 각 인스턴스는 자신만의 속성을 가질 수 있습니다.

- 프로토타입: 프로토타입은 객체의 원형이며, 해당 객체의 메서드 및 속성을 포함합니다. 모든 객체는 Object 객체를 상속받고, Object 객체는 null을 상속받습니다. 따라서 모든 객체는 Object.prototype의 메서드와 속성을 사용할 수 있습니다.


클래스에서 생성자 함수를 호출하여 인스턴스를 생성하면, 해당 인스턴스는 클래스의 프로토타입을 상속받습니다. 이때, 프로토타입은 클래스의 prototype 속성에 정의됩니다.
