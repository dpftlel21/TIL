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