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

### ✅ 변수와 인터페이스

인터페이스는 일반적으로 타입 체크를 위해 사용이 되며 변수, 함수, 클래스에 사용할 수 있고 인터페이스에 선언된 프로퍼티 또는 메서드의 구현을 강제하여 일관성을 유지하도록 합니다.

TypeScript의 예약어인 `interface`를 사용하여 인터페이스를 생성할 수 있습니다.

`예약어` : 컴퓨터 프로그래밍 언어에서 이미 문법적인 용도로 사용되고 있기 때문에 식별자로 사용할 수 없는 단어를 의미합니다. 예를 들어 return, import, const, let 등이 있으며, 이런 단어들은 함수의 이름이나 변수의 이름으로 사용할 수 없습니다.

TypeScript에서 변수를 선언할 때 인터페이스를 아래와 같이 사용할 수 있습니다. TypeScript에서 인터페이스는 객체(Object)의 구조를 정의하기 위해 주로 사용되는 예약어입니다.

```ts
// User의 인터페이스 정의 - 유저 정보 쉽게 파악 o
// ?(옵셔널)를 붙이게 되면, 써도 되고 안써도 된다!

interface User {
  id: number;
  name?: string;
}

```