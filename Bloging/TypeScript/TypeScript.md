## 🤔 TypeScript ??

TypeScript는 마이크로소프트에서 개발한 JavaScript의 상위 집합 언어이며, JavaScript에 정적타입 검사와 클래스 기반 객체 지향 프로그래밍 등의 기능을 추가하여 개발된 언어로, JavaScript가 발전하면서 생긴 단점을 보완하기 위해 등장했습니다.

### ✅ tsconfig.json 설정 파일의 세부 내용

---

### ✅ TypeScript의 장점

TypeScript는 정적타입 검사 기능을 제공하며, 코드의 가독성과 유지 보수성을 높여줍니다. 따라서, 개발자는 런타임 에러 최소하, 코드 작성 시간 단축, 코드의 가독성 향상 등의 효과를 기대할 수 있습니다.

또한 TypeScript는 ES6의 문법을 포함한 최신 JavaScript 문법을 지원하며, 인터페이스(Interface), 제네릭(Generic), 데코레이터(Decorators) 등의 기능을 제공하여 객체 지향 프로그래밍을 보다 쉽게 할 수 있도록 도와줍니다.

#### ✨ Interface

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
