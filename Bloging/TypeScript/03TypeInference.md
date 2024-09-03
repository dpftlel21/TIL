### 📝 타입 추론

타입 추론은 변수나함수의 타입을 선언하지 않아도 TypeScript가 자동으로 유추하는 기능입니다.

- 최적 공통 타입

  TypeScript는 여러 표현식에서 타입 추론이 발생할 때, 해당 표현식의 타입을 사용하여 "최적 공통 타입"을 계산합니다.

  ```ts
  let x = [0, 1, null];

  // String 리터럴 타입, 즉 '' 안에 값 그대로만 사용이 가능합니다.
  // const 를 사용하게 되면 타입추론을 할 때 좀 더 구체적으로 값을 사용할 수 있습니다. 
  const constStringType = 'const string';

  // Object를 구체화 할 때 as 사용
  const yujin = {
    name: '안유진' as const, 
    age: 20003 as const,
  };

  // Array 를 구체화 할 때 as 사용 (튜플, tuple)
  const twoNumbers = [1, 3] as const;
  ```

  x의 타입을 추론하려면 배열 요소의 타입을 고려해야 하는데 , 배열 요소들의 타입은 각각 number와 null입니다. 최적 공통 타입 알고리즘은 각 후보의 타입을 고려하여, 모든 후보의 타입을 포함할 수 있는 타입을 선택합니다.

- 문맥상의 타이핑

  타입스크립트에서 타입을 추론하는 또 하나의 방식은 바로 문맥상으로 타입을 결정하는 것입니다. 이 문맥상의 타이핑(타입 결정)은 코드의 위치(문맥)를 기준으로 일어납니다.

  ```ts
  function add(a, b) {
    return a + b;
  }
  ```

### 📝 캐스팅 (Casting)

TypeScript에서 Casting을 하면 JavaScript에서는 적용이 안됩니다. 실제 타입이 달라도 캐스팅을 통해 선언된 타입으로 인식하게끔 설정할 수 있습니다.

캐스팅을 이유 없이 사용하게 되면 JS에서 의미를 갖지 않고, 타입스크립트에서는 캐스팅 된 타입으로 인식하기 때문에 잘못된 코드를 작성할 수 있습니다.

```ts

const codefactory = 'code factory';


// Error, 
let sampleNumber: any = 5;
console.log(sampleNumber.toUpperCase());

let stringVar = sampleNumber as string;

```
