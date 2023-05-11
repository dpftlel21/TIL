# 1. 클래스

### ✔️ 클래스

#### 📝 생성자 함수 (new)

인스턴스를 만들 때 new 키워드를 사용하며, 즉시 생성자 함수가 실행되고, 변수에 클래스의 설계를 가진 새로운 객체(인스턴스)가 할당됩니다. 이때 각각의 인스턴스는 클래스의 고유한 속성과 메서드를 갖게됩니다.

```js
function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

person = new Person('이','인우');
// person.firstName; // "이"
// person.lastName; //  "인우"

console.log(person.firstName); // 이
console.log(person.lastName);  // 인우
```

- 새 빈 개체를 만들고, `this`변수에 할당
- 개체 및 속성에 `이` (firstName), `인우` (lastName) 할당
- `this` 값 반환 

#### 📝 클래스란?

```js
class MyClass {
  // 여러 메서드를 정의 O
  constructor() { ... }
  method1() { ... }
  method2() { ... }
  method3() { ... }
  ...
}
```

```js
class Person {
    constructor(name) {
        this.name = name;
    }

    getName() { // 클래스의 메서드
        return this.name;
    }
}

let user = new Person("이인우"); 
// Person 클래스를 자동으로 호출하는 새 객체를 생성
// constructor() 자동실행

let name = user.getName(); // 클래스 메서드 호출

console.log(name); // 이인우
console.log(typeof Person); // function, 클래스는 특수함수!
```

- Person 클래스에서 constructor() 인스턴스의 속성을 초기화 할 수 있으며, js는 constructor() 클래스의 개체를 인스턴스화 할 때 자동으로 메서드를 호출합니다.

- ``` objectName.methodName(args) ``` 구문을 사용하여 클래스의 메서드를 호출할 수 있습니다.

####  📝 메서드 정의 (instance)

클래스의 메서드를 정의할 때는 객체 리터럴에서 사용한 문법과 유사한 문법을 사용합니다.
Getter 혹은 setter를 정의하고 싶을 때는 메소드 이름 앞에 get 또는 set을 붙여주면 됩니다.

```js
class Calculator {
    add(x,y) { // ex) get add(x,y) or set add (x,y)
        return x + y;
    }

    substract(x,y) {
        return x - y;
    }
}
```

#### 📝 ES5 vs ES6

|| ES5| ES6|
|:---:|:---:|:---:|
|생성자|일반 함수가 new 연산자와 함께 호출 시 생성자 함수로써 동작<br> 프로토타입 메서드 및 스태틱 메서드도 new 연산자와 함께 생성자 함수로써 사용 가능| class 키워드로 선언된 클래스의 본문 영역내에 constructor 키워드를 통해 생성자 정의<br> 프로토타입 메서드 및 스태틱 메서드는 new 연산자와 함께 생성자 함수로 사용하려고 하면 해당 함수는 TypeError를 뱉어냄|
|스태틱 메서드| 생성자 함수에 바로 정의되는 메서드 | static 키워드와 함께 선언되는 키워드|
|프로토타입 메서드 | 생성자 함수의 prototype 내부에 할당되는 메서드 | 클래스 본문 내 function이라는 키워드를 생략해도 모두 메서드로 인식 <br> constructor나 static 키워드가 없으면 자동으로 prototype 객체 내부에 할당 |

- 스태틱 메서드 : 생성자 함수(클래스) 자신만이 호출 가능한 메서드

- 프로토타입 메서드 : 인스턴스가 프로토타입 체이닝을 통해 마치 자신의 것처럼 호출할 수 있는 메서드

 ```js
// ES5 클래스는 함수로 정의 O

funtion Car (brand, name, color) {
    // 인스턴스가 만들어질 때 실행되는 코드
}

// ES6 class를 통해 정의가 O

class User {
    constructor (brand, name, color) {
        //인스턴스가 만들어질 때 실행되는 코드
    }
}

// 생성자 함수는 return 값을 만들지 않습니다.
 ```

```js
// ES5

funtion Car (brand, name, color) {}

Car.prototype.refuel = function() {
    // 연료 공급 구하는 코드
}

Car.prototype.drive = function() {
    // 운전 구현 코드
}
// ES6

class User {
    constructor (brand, name, color) {
        //인스턴스가 만들어질 때 실행되는 코드
    }

    refuel() {

    }

    drive() {

    }
}
```
ES5는 prototype이라는 키워드를 사용해야 메서드를 정의할 수 있습니다. Car 클래스에 메서드를 추가하기 위해서는 `Car.prototype.refuel`과 같이 `prototype`을 이용해야 합니다.

ES6에서는 생성자 함수와 함께 class 키워드 안쪽에 묶어서 정의합니다. `refuel() {}`, drive() {}`와 같이 작성되어 있는 부분입니다.





