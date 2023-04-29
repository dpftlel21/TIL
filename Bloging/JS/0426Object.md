# 1. 객체

객체는 몇 가지 특수한 기능을 가진 연관 배열(associative array)입니다.

객체는 중괄호 `{…}`를 이용해 만들 수 있습니다. 중괄호 안에는 `‘키(key): 값(value)’` 쌍으로 구성된 프로퍼티(property) 를 여러 개 넣을 수 있는데, 키엔 문자형, 값엔 모든 자료형이 허용됩니다. 프로퍼티 키는 ‘프로퍼티 이름’ 이라고도 부릅니다.

### ✔️ 객체 리터럴

중괄호 `{...}`를 이용해 객체를 선언하는 것을 객체 리터럴(object literal) 이라고 부릅니다. 객체를 선언할 땐 주로 이 방법을 사용합니다.

```js
let user = {
    name : "인우",
    age : 25,
    year : 1999,
    month : 8,
    date : 12,
    gender : "M",
};
console.log(user.name); // .을 통해 내부 접근 o
console.log(user.["name"]); // ["속성 이름"]를 통해 내부 접근 o
console.log(user.age);
console.log(user.["age"]);
```

uesr라는 변수를 선언한 뒤 그 안에 정보를 `{}` 안에 묶어 모아두었습니다. 객체 내부에 사용되는 name, year, age, month, date 등과 같은 정보들을 `속성(attribute)`이라고 합니다.

속성은 속성 이름과 속성 값으로 구분됩니다. `"인우"`라는 속성에서는 `name`이 속성 이름, `"인우"`가 속성 값이 됩니다.

#### 🧐 마지막 속성에 왜 `,`가 들어갈까?

마지막 속성에는 쉼표를 넣지 않아도 되지만, 편의상의 이유로 쉼표를 마지막에 넣는다고 합니다 !
요즘은 코딩할 때 어떤 코드를 변경했는지 체크해주는 git과 같은 도구를 사용하며 보통 이런 종류의 도구는 줄 단위로 어떤 줄이 변경됐는지를 알려줍니다!

```js
const obj = {
  "2noo": "hello",
  "2 noo": "hello",
  "2-noo": "hello",
};
```

- 앞에 숫자가 들어간 경우
- 띄어쓰기가 들어간 경우
- 특수문자가 들어간 경우

따옴표 `""`가 들어가야 합니다. 또한 속성 이름에 `""`가 들어간 경우 호출할 때 `["속성 이름"]`로 호출합니다.

없는 속성에 접근하면 `undefined`가 출력됩니다.

### ✔️ 객체 수정하기 (const로 상수를 선언해도 객체 자체는 바꿀 수 없지만 내부는 수정 O)

`.수정을 원하는 속성 = "추가할 값"`

- 수정 및 추가

```js
user.gender = "F";
console.log(user.gender);
```

- 제거(`delete`)

```js
 delete user.gender = "F"
 console.log(user.gender);
```

- 확인 (`in`)

```js
"인우" in user; // true
"철수" in user; // false
```

#### 🧐 배열과 함수가 객체인 이유

배열과 함수가 객체인 이유는 객체의 성질을 모두 다 사용할 수 있으며 함수에도 속성을 추가할 수 있고, 수정 및 제거가 가능합니다. 객체는 함수를 포함하는 개념이기에 `{}`를 사용해 만든 객체를 객체 리터럴로 따로 부르는 것입니다.

### ✔️ 메서드 이해하기

속성 값으로 javaScript의 모든 값을 넣을 수 있으며 문자열, 숫자, 불 값, null, undefined 도 됩니다. 또한 함수, 배열, 다른 객체까지도 넣을 수 있습니다.

객체의 속성 값으로 함수를 넣었을 때 이 속성을 `메서드`라고 합니다.

```js
const debug = {
  log: function (value) {
    console.log(value);
  },
};
debug.log("Hello, Method");
```

- `log`는 `debug` 객체의 메서드입니다.
- `console` 객체와 그 안에 든 `log` 메서드는 웹 브라우저가 기본으로 만든 객체이므로 따로 선언하지 않고 사용할 수 있습니다.

### ✔️ 객체 간의 비교

```js
{} === {} // false, 배열과 함수 또한 false가 나타납니다.
```

객체가 아닌 숫자, 문자열, 불 값, null, undefined는 모두 true를 반환합니다.

따라서 객체가 같은지 비교하기 위해서는 기존 객체를 변수에 저장해 두어야 합니다.

```js
const a = { name: "인우" };
const array = [1, 2, a];

console.log(a === array[2]); // true
```

### ✔️ 참조(reference)와 복사

```js
const a = { name: "이인우" };
const b = a;

a.name = "이누";
console.log(b.name); // "이누"
```

위 코드는 변수 b에 a를 대입한 상황이며 a 변수의 `name` 속성값을 변경했는데, b 변수도 같이 변경 된걸 알 수 있습니다. 객체를 저장한 변수를 다른 변수에 대입하면 두 변수 모두 같은 객체를 저장하는 셈이 됩니다.

a 와 b 변수 모두 같은 객체를 저장하고 있고, 객체의 속성 값을 바꾸면 변수 a와 b 모두가 바뀌는 것처럼 보입니다. 이 상황에서 변수 a와 b가 같은 객체를 `참조`하고 있다고 표현할 수 있습니다.

더불어 a 와 b 그리고 `객체 간에 참조 관계`가 있다고 할 수 있습니다.

다만, 객체가 아닌 값(문자열, 숫자, 불 값, undefined, null)의 경우는 다르니 주의합니다!

```js
const inwoo = {
  name: {
    first: "인우",
    last: "이",
  },
  gender: "m",
};
```

#### 🧐 "이" 값에 접근하는 방법??

`inwoo`에는 2가지 속성 `name` , `gender`가 있습니다. 따라서 접근하는 방법은

```js
inwoo.name.last;
inwoo["name"]["last"];
```

### ✔️ Object.keys, values, entries

`Object.keys(obj)` – 객체의 키만 담은 배열을 반환합니다.

`Object.values(obj)` – 객체의 값만 담은 배열을 반환합니다.

`Object.entries(obj)` – [키, 값] 쌍을 담은 배열을 반환합니다.

```js
let user  {
    name : "이인우",
    age : 26,
}
```

- Object.keys(user) = ["name", "age"]
- Object.values(user) = ["이인우", 26]
- Object.entries(user) = [ ["name","이인우"], ["age",26] ]

#### 😱 Object.keys, values, entries는 심볼형 프로퍼티를 무시합니다.

> `for..in` 반복문처럼, Object.keys, Object.values, Object.entries는 키가 심볼형인 프로퍼티를 무시합니다.  
> 대개는 심볼형 키를 연산 대상에 포함하지 않는 게 좋지만, 심볼형 키가 필요한 경우엔 심볼형 키만 배열 형태로 반환해주는 메서드인 `Object.getOwnPropertySymbols`를 사용하면 됩니다. getOwnPropertySymbols 이외에도 키 전체를 배열 형태로 반환하는 메서드인 `Reflect.ownKeys(obj)`를 사용해도 괜찮습니다.

### ✔️ 객체 변환하기

객체에는 `map, filter`와 같은 배열 전용 메서드를 사용할 수 없습니다. 다만 `Object.entries`와 `Object.fromEntries`를 순차적으로 적용하면 객체에도 배열 전용 메서드 사용할 수 있습니다.

> Object.entries(obj)를 사용해 객체의 키-값 쌍이 요소인 배열을 얻습니다.
>
> 1. 에서 만든 배열에 map 등의 배열 전용 메서드를 적용합니다.
> 2. 에서 반환된 배열에 Object.fromEntries(array)를 적용해 배열을 다시 객체로 되돌립니다.

```js
let prices = {
  banana: 1,
  orange: 2,
  meat: 4,
};

let doublePrices = Object.fromEntries(
  // 객체를 배열로 변환해서 배열 전용 메서드인 map을 적용하고 fromEntries를 사용해 배열을 다시 객체로 되돌립니다.
  Object.entries(prices).map(([key, value]) => [key, value * 2])
);

alert(doublePrices.meat); // 8
```
