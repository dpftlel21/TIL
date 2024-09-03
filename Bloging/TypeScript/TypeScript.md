

### 📝 변수와 인터페이스

TypeScript에서 변수를 선언할 때 인터페이스를 아래와 같이 사용할 수 있습니다. TypeScript에서 인터페이스는 객체(Object)의 구조를 정의하기 위해 주로 사용되는 예약어입니다.

```ts
// User의 인터페이스 정의 - 유저 정보 쉽게 파악 o
interface User {
  id: number;
  name: string;
}

// greetingUser 함수에도 매개변수로 User 타입을 사용 -> 이 함수가 어떤 타입의 인자를 받 있는지 명확히 표현 o
function greetingUser(user: User) {
  console.log(`Hello, ${user.name}!`);
}

const parkUser = {
  id: 1,
  name: "박해커",
};

greetingUser(parkUser);
```

### 📝 함수와 인터페이스

인터페이스를 사용하여 객체의 프로퍼티 이름과 타입을 정의하고, 삼수의 매개변수 타입과 반환 타입도 정의할 수 있습니다.

```ts
interface User {
  name: string;
  age: number;
  job: string;
}

interface Greeting {
  (user: User, greeting: string): string;
}

const greet: Greeting = (user, greeting) => {
  return `${greeting}, ${user.name}! Your job : ${user.job}.`;
};

const user: User = {
  name: "anna",
  age: 30,
  job: "developer",
};

const message = greet(user, "Hi");

console.log(message);
```

`Greeting` 인터페이스는 `User` 타입과 문자열 타입을 매개변수로 받아 문자열 타입을 반환하며 `greet` 함수는 `Greeting`을 사용하여 구현되었으며, user 객체와 문자열 "hi"를 전달인자로 전달받아 문자열을 반환합니다.

### 📝 클래스와 인터페이스

```ts
interface Calculator {
  add(x: number, y: number): number;
  substract(x: number, y: number): number;
}

class SimpleCalculator implements Calculator {
  add(x: number, y: number) {
    return x + y;
  }

  substract(x: number, y: number) {
    return x - y;
  }
}

const caculator = new SimpleCalculator();

console.log(caculator.add(4, 9)); //13
console.log(caculator.substract(10, 5)); //5
```

Calculator 인터페이스는 add와 substract 메서드를 정의하고 있고, SimpleCaculator 클래스는 Calculator 인터페이스를 사용하여 작성되었습니다. Caculator 인터페이스를 사용하고 있기 때문에 SimpleCaculator 클래스 내에는 Calculator 인터페이스 내에 정의된 두 메서드를 반드시 작성해야 합니다.

또한 클래스를 구현할 때 인터페이스에서 정의된 함수나 메서드의 매개변수 타입과 반환 값과 일치하도록 구현해야 하므로, 클래스 내부에서 해당 메서드의 매개변수 타입을 다시 한번 더 명시해 주지 않으면 컴파일 에러가 발생하게 됩니다.

### 📝 인터페이스 상속

인터페이스도 extends라는 키워드를 사용하여 기존에 존재하던 인터페이스를 상속해 확장이 가능합니다. 이렇게 하면 기존에 존재하던 인터페이스의 프로퍼티를 다른 인터페이스에 복사하는 것을 가능하게 해 주며, 인터페이스의 재사용성을 높여줍니다.

```ts
interface Person {
  name: string;
  age: number;
}

interface Developer extends Person {
  language: string;
}

const person: Developer = {
  language: "TypeScript",
  age: 20,
  name: "Anna",
};
```

Person 인터페이스를 extends 키워드로 상속해 새로운 인터페이스인 Developer를 만들고, Developer 인터페이스를 사용하여 person이라는 객체를 구현했습니다. Developer 인터페이스는 Person 인터페이스를 상속하고 있으므로, Person 내부의 프로퍼티를 그대로 받아올 수 있습니다.

---


---

### ✅ 함수

TypeScript에서 함수를 표현할 때는 매개변수의 타입과 리턴값의 타입을 명시해야 합니다. 각 매개변수에 해당하는 타입을 작성하고, 리턴값의 타입을 괄호 뒤에 작성을 하면 됩니다. 반환되는 타입은 타입추론을 이용하여 생략할 수도 있습니다.

리턴값을 작성하지 않아도 TypeScript 컴파일이 스스로 판단해서 타입을 넣어주며, 이를 타입 추론이라고 부릅니다. 그리고 만약 함수에 리턴값이 없다면, void를 사용하여 작성할 수 있습니다.

```ts
function add(x: number, y: number) {
  return x + y;
}

let add1 = (x1: number, y1: number): number => {
  return x1 + y1;
};
```

---



---

### ✅ 클래스

```ts
class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  greet(): void {
    console.log(
      `안녕하세요, 제 이름은 ${this.name}이고, ${this.age}살 입니다.`
    );
  }
}
```

TypeScript에서 클래스를 정의할 때, constructor를 이용하여 초기화하는 멤버들은 전부 상단에서 정의를 해줘야 하며, contructor 내 인자로 받을 때도 정확히 타입을 명시해 줘야 합니다.

### 📝 클래스와 상속

TypeScript의 클래스(class)는 인터페이스(interface)와 마찬가지로 기존에 존재하던 클래스를 상속받아 확장하여 새로운 클래스를 만들 수 있습니다. 이때도 extends 키워드를 사용하여 상속할 수 있습니다.

```ts
class Animal {
  move(distanceInMeters: number): void {
    console.log(`${distanceInMeters}m 이동했습니다.`);
  }
}

class Dog extends Animal {
  speak(): void {
    console.log("멍멍!");
  }
}

const dog = new Dog();
dog.move(10);
dog.speak();
```

Animal이라는 클래스를 Dog라는 클래스가 상속받고 있습니다. Dog 클래스는 Animal 클래스로부터 프로퍼티와 메서드를 상속받으며, Dog 클래스는 파생 클래스라고도 불리며, 하위클래스(subclasses)라고도 불립니다. 여기서 Animal 클래스는 기초 클래스, 상위클래스(superclasses)라고 불립니다.

### 📝 Public, Private

기본적으로 클래스 내에 선언된 멤버는 외부로 공개되는 것이 디폴트 값이고, 공개된다고 명시적으로 표시해줄 수 있는데 이때 `public` 키워드를 사용합니다.

혹은 외부에 드러내지 않을 멤버가 있다면 private 키워드로 명시해 주면 됩니다.

```ts
class Person {
  public name: string;
  public age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  greet(): void {
    console.log(`안녕하세요, 제 이름은 ${this.name}이고, ${this.age}살 입니다.`);
  }
```

### 📝 readonly 키워드

readonly 키워드를 사용하여 프로퍼티를 읽기 전용으로 만들 수 있습니다. 읽기 전용 프로퍼티들은 선언 또는 생성자에서 초기화해야 합니다.

```ts
class Mydog {
  readonly name: string;
  constructor(theName: string) {
    this.name = theName;
  }
}
let spooky = new Mydog("스푸키");
spooky.name = "멋진 스푸키"; // 에러
```

---

### ✅ 제네릭 (Generic)

타입스크립트의 제네릭(Generic)은 코드 재사용성을 높이고 타입 안정성을 보장하는 기능입니다. 제네릭을 사용하면 함수나 클래스를 작성할 때, 사용될 데이터의 타입을 미리 지정하지 않고, 이후에 함수나 클래스를 호출할 때 인자로 전달된 데이터의 타입에 따라 자동으로 타입을 추론하게 됩니다.

```ts
function printLog<T>(text: T): T {
  return text;
}
```

printLog 함수에 T라는 타입 변수를 추가했습니다. T는 유저가 준 파라미터의 타입을 캡처하고, 이 정보를 나중에 사용할 수 있게 합니다. 여기에서는 T를 반환 타입으로 다시 사용합니다. 따라서 파라미터와 반환 타입이 같은 타입을 사용하고 있는 것을 확인할 수 있습니다.

printLog 함수는 타입을 불문하고 동작하므로 제네릭이라 할 수 있습니다. any를 쓰는 것과는 다르게 인수와 반환 타입에 string을 사용한 첫 번째 printLog 함수만큼 정확합니다. 즉 타입을 추론할 수 있게 됩니다.

### 📝 인터페이스와 제네릭

```js
interface Item<T> {
  name: T;
  stock: number;
  selected: boolean;
}
```

이와 같이 작성하면 Item 인터페이스를 사용하여 만든 객체는 name의 값으로 어떤 타입이 들어갈지만 작성을 해주면 인터페이스를 여러 개 만들지 않고도 재사용을 할 수 있게 됩니다.

```js
const obj: Item<string> = {
  name: "T-shirts",
  stock: 2,
  selected: false,
};

const obj: Item<number> = {
  name: 2044512,
  stock: 2,
  selected: false,
};
```

### 📝 클래스와 제네릭

제네릭을 사용하는 TypeScript에서 팩토리를 생성할 때 생성자 함수로 클래스 타입을 참조해야 합니다.

```ts
class GenericNumber<T> {
  zeroValue: T;
  add: (x: T, y: T) => T;
}
f
let myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function (x, y) {
  return x + y;
};
```

### 📝 제네릭 타입 변수

제네릭을 사용하기 시작하면, printLog와 같은 제네릭 함수를 만들 때, 컴파일러가 함수 본문에 제네릭 타입화된 매개변수를 쓰도록 강요합니다.

```ts
function printLog<T>(text: Array<T>): Array<T> {
  console.log(text.length);
  return text;
}
```

---

출처 : 코드스테이츠
