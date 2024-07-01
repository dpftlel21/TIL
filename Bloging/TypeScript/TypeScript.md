## 🤔 TypeScript ??

TypeScript는 마이크로소프트에서 개발한 JavaScript의 상위 집합 언어이며, JavaScript에 정적타입 검사와 클래스 기반 객체 지향 프로그래밍 등의 기능을 추가하여 개발된 언어로, JavaScript가 발전하면서 생긴 단점을 보완하기 위해 등장했습니다.

### ✅ tsconfig.json 설정 파일의 세부 내용

TypeScript 문법 (제네릭)
타입 단언
React에 TypeScript를 사용하는 예시 (Function 컴포넌트에 props를 인터페이스로 정의하는 방법 등)

---

### ✅ TypeScript의 장점

TypeScript는 정적타입 검사 기능을 제공하며, 코드의 가독성과 유지 보수성을 높여줍니다. 따라서, 개발자는 런타임 에러 최소화, 코드 작성 시간 단축, 코드의 가독성 향상 등의 효과를 기대할 수 있습니다.

또한 TypeScript는 ES6의 문법을 포함한 최신 JavaScript 문법을 지원하며, 인터페이스(Interface), 제네릭(Generic), 데코레이터(Decorators) 등의 기능을 제공하여 객체 지향 프로그래밍을 보다 쉽게 할 수 있도록 도와줍니다.

### ✨ Interface

인터페이스는 일반적으로 타입 체크를 위해 사용이 되며 변수, 함수, 클래스에 사용할 수 있고 인터페이스에 선언된 프로퍼티 또는 메서드의 구현을 강제하여 일관성을 유지하도록 합니다.

TypeScript의 예약어인 `interface`를 사용하여 인터페이스를 생성할 수 있습니다.

**예약어** : 컴퓨터 프로그래밍 언어에서 이미 문법적인 용도로 사용되고 있기 때문에 식별자로 사용할 수 없는 단어를 의미합니다. 예를 들어 return, import, const, let 등이 있으며, 이런 단어들은 함수의 이름이나 변수의 이름으로 사용할 수 없습니다.

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

### ✅ 타입

TypeScript는 JavaScript와 거의 동일한 데이터 타입을 지원합니다.

```ts
// Boolean
let isShow: boolean = true;
let isDone: boolean = false;

// Number
// TypeScript는 bright 지원
let number1: number = 1;
let number2: number = 0.2;

// String
let firstName: string = "coding";
let lastName: string = "kim";

// Array , 2가지 방법으로 배열 다룸 o
//첫 번째 방법
let items: string[] = ["apple", "banana", "grape"];

//두 번째 방법 - 제네릭 배열 타입 사용
let numberList: Array<number> = [4, 7, 100];

// Tuple , 요소의 타입과 개수가 고정된 배열 표현 o
let user: [string, number, boolean] = ["kimcoding", 20, true];

// Object - 원시 타입이 아닌 타입 (number, string, boolean, undefined, null, symbol)
// key-value에 구체적인 타입까지도 지정 o
let obj: object = {};

let user: { name: string; age: number } = {
  name: "kimcoding",
  age: 20,
};
```

#### Any 타입

간혹 알지 못하는 타입을 표현해야 할 때도 있는데, 클라이언트에서 유저로부터 받은 데이터 및 서드파티 라이브러리에서 들어오는 값인 경우 개발자가 알지 못하는 타입일 수 있습니다. 이때 `any`를 사용합니다.

```ts
let maybe: any = 4;
```

any 타입을 사용하게 되면, 변수에 값을 재할당하는 경우 타입을 명시한 변수와 달리 타입에 구애받지 않고 값을 재할당할 수 있게 됩니다.

```ts
let obj: object = {};

//에러가 납니다.
obj = "hello";

let maybe: any = 4;

//정상적으로 동작합니다.
maybe = true;
```

any 타입은 타입의 일부만 알고, 전체는 알지 못할 때 유용합니다. 예를 들어서 여러 타입이 섞인 배열을 받고자 할 때 유용합니다.

```ts
let list: any[] = [1, true, "free"];

//any로 다루고 있기 때문에 index 1번째 요소가 boolean 타입이지만 number 타입으로 재할당할 수 있습니다.
list[1] = 100;
```

### 📝 타입 추론

타입 추론은 변수나함수의 타입을 선언하지 않아도 TypeScript가 자동으로 유추하는 기능입니다

- 최적 공통 타입

  TypeScript는 여러 표현식에서 타입 추론이 발생할 때, 해당 표현식의 타입을 사용하여 "최적 공통 타입"을 계산합니다.

  ```ts
  let x = [0, 1, null];
  ```

  x의 타입을 추론하려면 배열 요소의 타입을 고려해야 하는데 , 배열 요소들의 타입은 각각 number와 null입니다. 최적 공통 타입 알고리즘은 각 후보의 타입을 고려하여, 모든 후보의 타입을 포함할 수 있는 타입을 선택합니다.

- 문맥상의 타이핑

  타입스크립트에서 타입을 추론하는 또 하나의 방식은 바로 문맥상으로 타입을 결정하는 것입니다. 이 문맥상의 타이핑(타입 결정)은 코드의 위치(문맥)를 기준으로 일어납니다.

  ```ts
  function add(a, b) {
    return a + b;
  }
  ```

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

### ✅ 연산자 활용 타입

TypeScript는 연산자를 이용해 타입을 정할 수 있습니다. JavaScript에서도 보았던 `||(OR)` 연산자나 `&& (AND)`와 같은 연산자를 이용하여 만들 수 있습니다. `|` 연산자를 이용한 타입을 유니온(Union) 타입이라고 하며, `&` 연산자를 이용한 타입은 인터섹션(Intersection) 타입이라고 부릅니다.

### 📝 유니온 타입 - `|`

유니온 타입은 둘 이상의 타입을 합쳐서 만들어진 새로운 타입입니다. 자바스크립트의 `||` 연산자와 같이 A 이거나 B 입니다. ex) number | string - 숫자 or 문자열

유니온 타입은 다양한 타입의 값을 처리해야 하는 경우 유용합니다.

```ts
function printValue(value: number | string): void {
  if (typeof value === "number") {
    console.log(`The value is a number: ${value}`);
  } else {
    console.log(`The value is a string: ${value}`);
  }
}

printValue(10); // The value is a number: 10
printValue("hello"); // The value is a string: hello
```

유니온 타입인 값이 있으면, 유니온에 있는 모든 타입에 공통인 멤버들에만 접근할 수 있기 때문에 유의해야 합니다.

```ts
interface Developer {
  name: string;
  skill: string;
}

interface Person {
  name: string;
  age: number;
}

function askSomeone(someone: Developer | Person) {
  console.log(someone.name);
}
```

#### ✨ 타입 가드

TypeScript에서 타입을 보호하기 위해 사용되는 기능 중 하나입니다. 타입 가드는 특정 코드 블록에서 타입의 범위를 제한해 해당 코드 블록 안에서 타입 안정성을 보장해 줍니다.

```ts
function askSomeone(someone: Developer | Person) {
  // in 연산자 : 타입스크립트에서 객체의 속성이 존재하는지를 체크하는 연산자
  // in 연산자는 객체의 속성 이름과 함께 사용하여 해당 속성이 객체 내에 존재하는지 여부를 검사
  if ("skill" in someone) {
    console.log(someone.skill);
  }

  if ("age" in someone) {
    console.log(someone.age);
  }
}
```

### 📝 인터섹션 타입 - `&`

인터섹션(Intersection)은 둘 이상의 타입을 결합하여 새로운 타입을 만드는 방법입니다. & 연산자를 사용하여 표현합니다.

인터섹션으로 타입을 연결해 하나의 단일 타입으로 표현할 수 있기 때문에, 타입 가드가 필요하지 않습니다.

```ts
interface Developer {
  name: string;
  skill: string;
}

interface Person {
  name: string;
  age: number;
}

type User = Developer & Person;
```

**!! 인터섹션으로 타입을 연결해 하나의 단일 타입으로 표현**

```ts
interface Developer {
  name: string;
  skill: string;
}

interface Person {
  name: string;
  age: number;
}

function askSomeone(someone: Developer & Person) {
  console.log(someone.age);
  console.log(someone.name);
  console.log(someone.skill);
}
```

---

### ✅ 열거형

TypeScript의 열거형 (Enum)은 특정 값의 집합을 정의할 때 사용됩니다. JavaScript에서는 기본적으로 열거형을 지원하지 않지만, TypeScript에서는 문자형 열거형과 숫자형 열거형을 지원합니다.

```ts
enum Color {
  Red,
  Green,
  Blue,
}
```

### 📝 숫자형 열거형

열거형은 숫자형과 문자열형, 혹은 이 둘의 조합으로 정의될 수 있습니다. 디폴트 값으로 숫자형을 사용하며, 각 값은 자동으로 0부터 시작하여 1씩 증가합니다. 수동으로도 값을 지정할 수 있습니다 !

```ts
enum Color {
  Red = 1,
  Green = 2,
  Blue = 4,
}

let c: Color = Color.Green;
let greenValue: number = Color.Green;
let blueValue: number = Color.Blue;

console.log(c); // 출력: 2
console.log(greenValue); // 출력: 2
console.log(blueValue); // 출력: 4
```

열거형은 일반적으로 상수값을 대신하여 사용되므로, 타입스크립트에서는 열거형이 많이 사용됩니다. 열거형은 코드를 더욱 가독성 높게 만들어주고, 오타와 같은 실수를 방지해 줍니다.

### 📝 문자형 열거형

문자형 열거형은 열거형의 값을 전부 다 특정 문자 또는 다른 열거형 값으로 초기화해야 합니다.

```ts
enum Direction {
  Up = "UP",
  Down = "DOWN",
  Left = "LEFT",
  Right = "RIGHT",
}

let myDirection: Direction = Direction.Up;
console.log(myDirection); // 출력: "UP"
```

문자열 기반의 열거형은 주로 외부에서 가져온 값을 TypeScript에서 다루기 위해 사용됩니다. 예를들어 HTTP 요청 방식을 나타내는 열거형을 정의할 수 있습니다.

```ts
enum HttpMethod {
  Get = "GET",
  Post = "POST",
  Put = "PUT",
  Delete = "DELETE",
}

function makeRequest(url: string, method: HttpMethod) {
  // ...
}

makeRequest("/api/data", HttpMethod.Post);
```

위 코드에서는 HTTP 요청 방식을 나타내는 HttpMethod 열거형을 정의하고 있습니다. makeRequest 함수는 URL과 HTTP 요청 방식을 인자로 받습니다. HTTP 요청 방식을 지정할 때는 HttpMethod.Post와 같이 열거형 값을 사용합니다.

이렇게 열거형을 사용하면 오타와 같은 실수를 방지할 수 있으며, 코드의 가독성과 안정성을 높일 수 있습니다.

### 📝 역 매핑

역 매핑은 숫자형 열거형에만 존재하는 특징입니다. 열거형의 키(key)로 값(value)을 얻을 수 있고 값(value)으로 키(key)를 얻을 수도 있습니다.

```ts
enum Enum {
  A,
}
let a = Enum.A;
let nameOfA = Enum[a]; // "A"
```

위와 같이 열거형의 키로 값을 얻을 수 있지만, 값으로도 열거형의 키를 얻을 수 있습니다. 이는 숫자형 열거형에만 존재하며, 문자형 열거형에서는 존재하지 않는 특징입니다.

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

interface Item<T> {
  name: T;
  stock: number;
  selected: boolean;
}
```

이와 같이 작성하면 Item 인터페이스를 사용하여 만든 객체는 name의 값으로 어떤 타입이 들어갈지만 작성을 해주면 인터페이스를 여러 개 만들지 않고도 재사용을 할 수 있게 됩니다.

```ts
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
