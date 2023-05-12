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

#### 📝 프로토타입 메서드 빌려오기 (join)

```js
let obj = {
    0: "Hi",
    1: "Everyone!",
    length : 2,
};

obj.join = Array.prototype.join; // Array 복사

alert(obj.join(',')); // Hi,Everyone!
```

다수의 내장 메서드가 join과 같이 제대로 된 인덱스가 있는지, length 프로퍼티가 있는지만 확인하기에 에러 없이 의도한 대로 동작합니다. obj.__proto__를 Array.prototype으로 설정해 배열 메서드를 상속 받는 방법도 있습니다. (obj에서 모든 Array 메서드 사용 가능.)

자바스크립트는 단일 상속만 허용하기에 obj가 다른 객체를 상속받고 있을 때는 사용할 수 없습니다.
메서드 빌리기는 여러 객체에 필요한 기능을 가져와 섞는 것이 가능하기에 유연한 개발을 이끌어낼 수 있습니다.

#### ⭐ 프로토타입 메서드와 __proto__가 없는 객체

__proto__는 다소 구식이기에 다음과 같은 메서드를 사용하는 것이 좋습니다.

- Object.create(proto, [descriptors]) : [[Prototype]]이 proto를 참조하는 빈 객체를 만들고, 이때 프로퍼티 설명자를 추가로 넘길 수 있습니다.

- Object.getPrototypeOf(obj) : obj의 [[Prototype]]을 반환합니다.

- Object.setPrototypeOf(obj, proto) : obj의 [[Prototype]]이 proto가 되도록 설정합니다.


```js
let human = {
    walks: true
};

let Tim = Object.create(human); // true;

alert(Tim.walks); // true

alert(Object.getPrototypeOf(Tim) === human); // true

Object.setPrototypeOf(Tim, {}); // Tim의 프로토타입 {}로 바꿈
```

- Object.prototype.hasOwnProperty() : 객체가 특정 프로퍼티를 가지고 있는지 불리언 값을 반환합니다.


```js
const object1 = {};
object1.property1 = 42;

console.log(object1.hasOwnProperty('property1'));
// expected output: true

console.log(object1.hasOwnProptery('toString'));
// expected output: false

console.log(object1.hasOwnProperty('hasOwnProperty'));
// expected output: false
```
hasOwnProperty 는 프로퍼티의 존재 유무를 판단하는 것이지, 프로퍼티의 값을 확인하는 것이 아니기 때문에 프로퍼티 값이 undefined나 null이어도 true를 반환합니다.

hasOwnProperty 라는 명칭의 property를 가지는 객체가 존재하면, 올바른 결과를 얻기 힘들지도 모른다. 올바른 결과를 얻기 위해선 외부 `hasOwnProperty를 사용해야합니다.
