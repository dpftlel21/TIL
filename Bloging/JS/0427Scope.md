# 1. Scope



변수는 스코프(scope, 범위)라는 것을 가집니다. var 는 함수 스코프를가지고 let은 블록 스코프를 가집니다. 자세한건 예제를 통해 알아보겠습니다.

```js
function b() {
    var a = 1;
}

console.log(a); // ReferenceError
```
a는 함수 안에서 선언했기 때문에 함수 밖에서는 접근이 불가능합니다. 이렇듯 함수를 경계로 접근 여부가 달라지는 것을 `함수 스코프`라고 합니다.

여기서 한 가지 유의해야 할 점이 있는데, 화살표 함수는 블록 스코프로 취급됩니다. 

```js
if(true) {
    var a = 1;
}
 
console.log(a); // 1
```
함수 안에 들어있는 a가 아니기에 외부에서 접근이 가능합니다.

```js
if(true) {
    let a = 1;
}
 
console.log(a); // ReferenceError
```

`let`의  경우에는 에러가 발생합니다. 바로 `let`이 블록 스코프라서 그렇습니다. 블록은 if, for, while, 함수에서 볼 수 있는 `{}`를 의미합니다. 블록의 외부에서는 블록 내부의 let에 접근할 수 없습니다. `const`도 `let`과 마찬가지입니다.

### ✔️ let, var, const 비교

| |let|const|var|
|:---: |:---:|:---:|:---:|
|유효범위 | 블록 스코프 및 함수 스코프 | 블록스코프 및 함수 스코프 | 함수 스코프 |
|값 재할당| 가능 | 불가능 | 가능 |
|재선언| 불가능 | 불가능 | 가능|



### ✔️ 변수 접근 규칙에 따른 유효 범위

<img src= "https://postfiles.pstatic.net/MjAyMzA0MjdfOTMg/MDAxNjgyNTYxMjk4NTMw._gTSmqkQkYneuC39gnlb8dM6Ac-i4KmF6TC8t9iS9zgg.kzZS__ohpOzDBp9VqTcibLdDnxvqdhHEkLDMb2Cuu34g.PNG.dkdnmju/545454.png?type=w773" width ="450px" height="250px">

가장 바깥쪽의 스코프를 전역 스코프(Global scope)라고 부르며 전역의 반대말인 지역(Local)으로 전역이 아닌 다른 스코프를 전부 지역 스코프 (Local scope)라고 합니다.

```js
let name = "이인우"; // 전역변수

function showName () {
    let name = "이철수";  // 지역 변수
}
```


지역 스코프에 선언한 변수는 지역 변수, 전역 스코프에서 선언한 변수는 전역 변수입니다.

스코프 규칙에서 또 하나 기억해야 할 규칙은, 지역 변수는 전역 변수보다 더 높은 우선순위를 가집니다.


### ✔️ 변수 선언할 때 주의할 점

#### 1. var로 선언된 전역 변수 및전역 함수는 window 객체에 속하게 됩니다.

㉠ 브라우저에는 window라는 객체가 존재합니다.
- 브라우저 창을 대표하는 객체

- 그러나, 브라우저 창과 관계없이 전역 항목도 담고 있음

㉡ var로 선언된 지역 변수와 전역 함수가 window 객체에 속합니다.
- 함수 선언식으로 함수를 선언하거나, var로 전역 변수를 만들면, window 객체에서도 동일한 값을 찾을 수가 있습니다. 
```js
var myName = "이인우"
console.log(window.myName); // 김코딩

function foo() {
console.log("bar");
}

console.log(foo === window.foo); // true
```

#### 2. 전역 변수는 최소화 합니다.

㉠ 전역 변수에 너무 많은 변수를 선언하지 않습니다.
- 전역 변수는 가장 바깥 스코프에 정의한 변수입니다. 따라서, 어디서든 접근이 가능합니다.

- 편리한 대신, 다른 함수 혹은 로직에 의해 의도되지 않은 변경이 발행할 수 있습니다. (부수효과 - Slide Effect)

#### 3. let과 const를 주로 사용합니다.

㉠ var는 블록 스코프를 무시하며, 재선언을 해도 에러를 내지 않습니다.
- 같은 스코프에서 동일한 이름의 변수를 재선언 하는 것은 버그를 유발합니다.

㉡ 전역 변수를 var로  선언하는 경우 문제가 될 수 있습니다.
- var로 선언한 전역 변수가 window 기능을 덮어씌워서 내장 기능을 사용할 수 없게 만들 수 있습니다.

#### 4. 선언 없는 변수 할당을 금지합니다.

㉠ 선언 키워드 (var, let, const)없이 변수를 할당하지 않습니다.
- 선언 없이 변수를 할당하면, 해당 변수는 var로 선언되거나 전역 변수처럼 취급 됩니다.

㉡ 실수를 방지하기 위해 `Strict Mode`를 사용할 수 있습니다.
- `Strict Mode`는 브라우저가 보다 엄격하게 작동하도록 만들어줍니다. 앞서 언급한 것처럼 "선언 없는 변수 할당"의 경우도 `Strict Mode`는 에러로 판단합니다.

    `Strict Mode`를 적용하려면, js 파일 상단에 `'use strict'` 라고 입력하면 됩니다. (따옴표 포함)
