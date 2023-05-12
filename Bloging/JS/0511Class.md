# 1. 클래스

### ✔️ 클래스

#### 📝 클래스란?

클래스는 일종의 원형(original form)으로, 객체를 생성하기 위한 아이디어나 청사진을 나타내며,
인스턴스는 클래스의 사례(instance object) 입니다. 클래스는 객체를 만들기 위한 생성자(constructor) 함수를 포함합니다.

JavaScript에서 사용하는 용어와 별개로 클래스를 통해 만들어진 객체를 특별히 인스턴스 객체, 줄여서 인스턴스라고 부릅니다.

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
  getName() {
    // 클래스의 메서드
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

- `objectName.methodName(args)` 구문을 사용하여 클래스의 메서드를 호출할 수 있습니다.

#### 📝 메서드 정의 (instance)

클래스의 메서드를 정의할 때는 객체 리터럴에서 사용한 문법과 유사한 문법을 사용합니다.
Getter 혹은 setter를 정의하고 싶을 때는 메소드 이름 앞에 get 또는 set을 붙여주면 됩니다.

- instance 

```js
class Calculator {
  add(x, y) {
    return x + y;
  }
  substract(x, y) {
    return x - y;
  }
}
```

- getter와 setter

```js
let user = {
  name : "이인우",
  age : 26,

  get selfIntroduce() {
    return `${this.name}는 ${this.age}살 입니다.`;
  }

};

alert(user.selfIntroduce); // 이인우는 26살 입니다.
```

getter 메서드는 obj.propName을 사용해 프로퍼티를 읽으려고 할 때 실행되고, setter 메서드는 obj.propName = value으로 프로퍼티에 값을 할당하려 할 때 실행됩니다.

#### 📝 생성자 함수

인스턴스를 만들 때 new 키워드를 사용하며, 즉시 생성자 함수가 실행되고, 변수에 클래스의 설계를 가진 새로운 객체(인스턴스)가 할당됩니다. 이때 각각의 인스턴스는 클래스의 고유한 속성과 메서드를 갖게됩니다.

```js
function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

person = new Person("이", "인우");
// person.firstName; // "이"
// person.lastName; //  "인우"

console.log(person.firstName); // 이
console.log(person.lastName); // 인우
```

- 새 빈 개체를 만들고, `this`변수에 할당
- 개체 및 속성에 `이` (firstName), `인우` (lastName) 할당
- `this` 값 반환, this는 자기 자신으로 생성자 함수를 호출한 객체를 의미

#### 📝 ES5 vs ES6

|                   |                                                                       ES5                                                                       |                                                                                                    ES6                                                                                                     |
| :---------------: | :---------------------------------------------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
|      생성자       | 일반 함수가 new 연산자와 함께 호출 시 생성자 함수로써 동작<br> 프로토타입 메서드 및 스태틱 메서드도 new 연산자와 함께 생성자 함수로써 사용 가능 | class 키워드로 선언된 클래스의 본문 영역내에 constructor 키워드를 통해 생성자 정의<br> 프로토타입 메서드 및 스태틱 메서드는 new 연산자와 함께 생성자 함수로 사용하려고 하면 해당 함수는 TypeError를 뱉어냄 |
|   스태틱 메서드   |                                                       생성자 함수에 바로 정의되는 메서드                                                        |                                                                                    static 키워드와 함께 선언되는 키워드                                                                                    |
| 프로토타입 메서드 |                                                 생성자 함수의 prototype 내부에 할당되는 메서드                                                  |                              클래스 본문 내 function이라는 키워드를 생략해도 모두 메서드로 인식 <br> constructor나 static 키워드가 없으면 자동으로 prototype 객체 내부에 할당                              |

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

#### 📝 클래스 상속

- `extends`

```js
class Animal {
  constructor(name) {
    this.speed = 0;
    this.name = name;
  }
  run(speed) {
    this.speed = speed;
    alert(`${this.name} 은/는 속도 ${this.speed}로 달립니다.`);
  }
  stop() {
    this.speed = 0;
    alert(`${this.name} 이/가 멈췄습니다.`);
  }
}

let animal = new Animal("동물");
```

`클래스 확장 문법 class Child extends Parent`를 사용해 클래스를 확장합니다. 따라서
class Rabbit은 Animal을 상속받는 코드는 다음과 같습니다.

클래스 Rabbit을 사용해 만든 객체는 rabbit.hide() 같은 Rabbit에 정의된 메서드에도 접근할 수 있고, rabbit.run() 같은 Animal에 정의된 메서드에도 접근할 수 있습니다.

extends는 프로토타입을 기반으로 동작하는데, extends는 `prototype.[[Prototype]]`을 Animal.prototype으로 설정하고 Rabbit.prototype에서 메서드를 찾지 못하면 Animal.prototype에서 메서드를 가져옵니다.

```js
class Rabbit extends Animal {
  hide() {
    alert(`${this.name} 이/가 숨었습니다!`);
  }
}

let rabbit = new Rabbit("토끼");

rabbit.run(5); // 토끼 은/는 속도 5로 달립니다.
rabbit.hide(); // 토끼 이/가 숨었습니다!
```

#### 📝 super()
서브(자식) 클래스에서 상위 클래스를 호출할 때 사용합니다.

```js
class 부모클래스 {
	constructor(변수1,변수2){
		this.변수1 = 변수1;
        this.변수2 = 변수2;
    }
    메소드(){
    	//기능
        ...
    }
}

class 자식클래스 extends 부모클래스 {
	constructor(변수1, 변수2, 변수3){
    	//super키워드로 부모클래스 생성자 호출
    	super(변수1,변수2);
        this.변수3 = 변수3;
    }
    메소드2(){
    	//부모 클래스의 메소드 호출
    	super.메소드();
        //추가할 자식 클래스만의 기능
        ...
    }
}
```

---

# 2. 객체 지향 프로그래밍 (Object Oriented Programming, OOP)

객체 지향 프로그래밍이 등장하면서, 단순히 별개의 변수와 함수로 순차적으로 작동하는 것을 넘어, 데이터의 접근과, 데이터의 처리 과정에 대한 모형을 만들어 내는 방식을 고안해냈고, 데이터와 기능이 별개로 취급되지 않고, 한 번에 묶여서 처리할 수 있게 되었습니다.

자바스크립트는 엄밀히 말해 객체 지향 언어는 아니지만, 객체 지향 패턴으로 작성할 수 있습니다.객체 지향 언어 "클래스"라고 부르는 데이터 모델의 청사진을 사용해 코드 작성 현대의 언어들은 대부분 객체 지향의 특징을 갖고 있습니다. (대표적으로 Java, C++, C# 등)

### ✔️ OOP 주요개념 4가지

OOP는 프로그램 설계 철학 중 하나입니다. OOP는 객체로 그룹화됩니다. 이 객체는 한번 만들고 나면, 메모리상에서 반환되기 전까지 객체 내의 모든 것이 유지됩니다. 객체 내에는 "데이터와 기능이 함께 있다"라는 원칙에 따라 메서드와 속성이 존재합니다.

#### 📝 Encapsulation (캡슐화)

데이터(속성)와기능(메서드)을 하나의 객체안에 넣어 묶는 것을 의미하며 절차적인 코드 작성이 아닌, 코드가 상징하는 실제 모습과 닮게 코드를 모아 결합하는 느슨한 결합에 유리합니다. (언제든 구현 수정이 O) 또한, 코드를 복잡하지 않게 만들고, 재사용성을 높입니다.

- 은닉화 : 내부 데이터 및 구현이 외부로 노출되지 않도록 숨기고, 동작(메서드)만 노출 시키는 것을 의미합니다.

#### 📝 Inheritance (상속)

부모 클래스의 특징을 자식 클래스가 물려받는 것을 의미하며, 기본 클래스의 특징을 파생 클래스가 상속받는다 라고 표현합니다. 또한 상속은 불필요한 코드를 줄여 재사용성을 높입니다.

사람이라는 클래스가 있다고 가정했을 때 사람은 기본적으로 이름과 성별, 나이와 같은 속성, 그리고 먹다, 자다 등과 같은 메서드가 있다고 볼 수 있습니다.

추가적으로 학생이라는 클래스를 작성할 때 앞서 구현했던 사람 클래스의 속성과 메서드를 다시 구현한다면 비효율적입니다. 학생의 본질은 결국 사람이므로, 상속을 이용하여 학생 클래스는 사람 클래스를 상속받을 수 있습니다. 학생은 추가적으로 학습 내용, 공부하다 와 같은 속성/메서드를 추가합니다.

#### 📝 Abstraction (추상화)

내부 구현은 복잡하지만, 실제 노출 부분은 단순하게 만든다의 의미를 지닙니다. 전화기를 예로 들면 전화기는 스피커, 마이크, 서킷 보드 등으로 내부 구현이 되어 있습니다. 하지만 실제로 사용할 때 단순히 수화기만 들고 번호를 눌러 해결하며 인터페이스를 단순화 할 수 있습니다.

추상화를 통해 인터페이스가 단순해집니다. 너무 많은 기능들이 노출되지 않은 덕분에 예기치 못한 사용상의 변화가 일어나지 않도록 만들 수 있습니다. 즉, 코드를 복잡하지 않게 만들고, 단순화된 사용으로 변화에 대한 영향을 최소화합니다.

은닉화에 초점인 캡슐화, 단순한 이름 정의에 초점인 추상화를 헷갈리지 않도록 주의하는 것이 좋습니다!

#### 📝 Polymorphism (다형성)

다양한 형태를 가질 수 있다고 생각하시면 됩니다. 즉, 객체를 똑같은 메서드라도 다른 방식으로 구현할 수 있습니다. 다형성으로 인해 동일한 메서드에 대해 if/else if와 같은 조건문 대신 객체의 특성에 맞게 달리 작성하는 것이 가능해집니다.

---
