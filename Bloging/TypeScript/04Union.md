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