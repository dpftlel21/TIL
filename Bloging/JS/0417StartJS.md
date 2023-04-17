# 1. JavaScript란 ?

✔️ 웹페이지 상에서 동적으로 요소를 변경하고, 사용자 인터페이스를 지원하기 위해 고안된 스크립트 언어를 의미합니다.  
✔️ 넷스케이프 커뮤니케이션 사에서 개발하였으며, 본래의 이름 '모카(Mocha)', 그리고 '라이브스크립트'에서 당시 JAVA 언어가 인기를 끔에 따라, 관련이 없음에도 'Javascript'라고 명명하였습니다.

---

## - ECMAScript

> 넷스케이프사에 대응하기 위해, 이후 MS사에서도 JScript라는 javascript와 호환되는 언어를 개발하였습니다.  
> 이에 넷스케이프사가 표준화 기구인 Ecma international에 javascript 표준화를 요청화였고, 1996년 11월 ECMA-262라는 표준화 명세서 작업이 시작되었습니다.  
> 표준화를 통해, 이름을 지어야 하는 상황에서, 이미 Sun마이크로시스템즈 사가 'JAVA'라는 상표 등록을 해놓았기에 javascript라는 이름으로 표준화를 이름을 쓸수 없는 상황이 되었고, 그래서 표준화된 언어의 공식 이름은 ECMAScript(에크마스크립트)이며, 대외적으로 사용되는 이름은 javascript가 되었습니다.

---

## - Javascript 엔진

- javscript 는 웹브라우저 상에서 동작하며, 다양한 업체에서 만들기 때문에, 각기 다른 javscript 엔진 구현 또는 채용 중이며 javascript 엔진이란, javscript 코드를 이해하고, 실행하는 프로그램 이라고 이해하면 됩니다.
- 최근 사용중인 javascript 엔진
  - <span style="color:#FF66BE"><b>V8</b></span> : 구글에서 만들었으며, 크롬에 먼저 채택되었고, 이후 Electron, node.js 에서 사용중
  - <span style="color:#FF66BE"><b>spiderMonkey</b></span> :Fifrefox 브라우저에서 사용
  - <span style="color:#FF66BE"><b>javascriptCore</b></span> : 오픈소스로 apple 과 Safari 브라우저에서 사용중

## 💡 최근 javscript 동향

> 1. 기존에는 웹페이지 상에서 동적으로 요소를 변경하고, 사용자 인터페이스를 지원하기 위한 프론트에만 사용되었습니다. <br><br>
> 2. 서버 백엔드 기술인 Node.js가 javascript 기반으로 동작함에 따라, 프론트엔드 뿐만 아니라, 백엔드에도 활용 중입니다. <br><br>
> 3. 최근에는 Electron 을 사용해서, 데스크탑 프로그램도 만들 수 있고, react-native, NativeScript 등을 사용해서 모바일 앱도 만들 수 있습니다. <br><br>
> 4. javascript는 처음부터 잘 고안된 언어가 아님에도 불구하고, 인터넷 환경에서 많이 사용하다보니, 갈수록 사용범위가 넓어지고 있습니다. <br><br>
> 5. 현재는 크로스 브라우징 문제로 ES6 기준으로 사용중입니다.
>    - 잘 고안된 언어가 아니다보니, 매년마다 새로운 문법이 추가되고있지만, ECMAScript 2015가 공식 명칭 입니다.

---

## ✔️ 테스트 환경 구축

> VSCode 와 같은 개발 툴을 사용하면 됩니다.  
> Vanilla JS는 javascript 기반의 다양한 라이브러리보다 javascript 자체의 기능만 쓰겠다는 의미입니다.  
> 라이브러리가 무겁고, 디버깅시 라이브러리 내부 코드까지 들어야하는 경우가 있어서 디버깅이 매우 어려웠습니다.  
> 따라서 최근에는 라이브러리를 최소로 사용하고, javascript 자체만을 쓰자는 운동이 있고, 이를 표현하기 VanillaJS라는 명칭을 씁니다.

---

## ✔️ JS 스터디 전 알아두기

> - 파이썬과 마찬가지로, 변수 · 조건문 · 반복문이 기본입니다.
> - <span style="color:#FF66BE"><b> Naming rule</b></span>  
>   변수 이름을 어떻게 짓느냐에 대해 각 언어별 추천 naming rule 이 존재합니다.  
>   필수는 아니지만 자주 보게 될 코드들이 유사한 Naming rule을 가지므로 알아두는 것이 좋습니다.
> - <span style="color:#FF66BE"><b>js naming rule </b></span>  
>    <span style="color:#4DD0E1"><b>camelCase (단봉 낙타 기법: 낙타처럼 구불구불, 두 단어를 붙일 때 맨 앞에는 소문자, 뒤에 나오는 단어마다 앞글자는 대문자로)</b></span>을 추천합니다.  
>   변수, 함수등은 camelCase로 명명하며, boolean 변수는 isVasriable, hasData, areEqual과 같이 is,has, are와 같은 동사를 써서, boolean 변수임을 나타내면 좋다고 합니다.  
>    class 명은 <span style="color:#4DD0E1"><b>PascaleCase(쌍봉 낙타 기법: ClassName 과 같이 두 단어를 붙일 때, 맨 앞의 단어의 앞글자도 대문자, 뒤의 단어의 앞글자도 대문자)</b></span>  
>   class 내부의 method, 또는 외부의 함수등은 모두 camelCase를 사용합니다.
>   getName과 같이 함수/ method 는 동사로 시작하면 좋습니다.

### 👀 주석

```JS
한 줄 주석: //주석
여러 줄에 걸친 주석 :
/*
주석
*/
```

- 파이썬에서 변수등을 출력하기 위해 반드시 필요했던 print() 함수와 같은 기능을 하는 javascript 함수는 console.log()입니다.
- 파이썬과 마찬가지로 문자열을 나타내기 위한 따옴표 표시는 홑따옴표나, 쌍따옴표 둘다 사용 가능합니다. (매칭만 되면 O)

---

## - 테스트 환경 테스트

모든 코드는 해당 프로젝트에서 index.js의 기본코드를 삭제한 후, 작성하고 console 창에서 확인합니다.

### ✔️ <span style="color:#e3f2fd"><b> console.log()로 시작하는 테스트 환경 테스트와 javascript </b></span>

> - console.log() 는 파이썬의 print() 함수와 동일한 기능을 합니다. (문법도 거의 유사합니다.)
> - javascript 는 코드 한 라인이 끝날때 세미콜론(;)을 붙여줘야 합니다.
>   - 실행 환경에 따라 세미콜론(;)을 안 붙여도 실행되는 경우도 많습니다.
>   - 코드를 작성할 때 마다, 실시간으로 실행이 되므로, 여러번 출력되거나, 에러 메세지를 볼 수도 있습니다.
>   - console 에서 filiter 옆의 아이콘을 누르고, 한번에 코드를 다시 복사/ 붙여넣기로 넣고, 저장하기 또는 코드에 한글자라도 변화를 주면 깔끔하게 출력결과를 얻을 수 있습니다.

⭐ js는 어느정도의 융통성이 필요하며, 비정상 동작을 할 경우 코드를 변경하며 실행해보는 것이 좋습니다!

---

## - 변수 선언

- 키워드(let)을 활용하여 초기값을 넣을 수도 있고, 변수만 선언할 수도 있습니다.
- 변수는 변할 수 있는 수로 , 일종의 저장공간을 만들고, 특별한 이름을 붙이는 것입니다. (일반적인 프로그래밍)
- 한번 선언한 변수를 다시 선언할 수 없습니다.

```js
let 변수명 ;
let 변수명 = 변수 값;
```

- 변수 선언 및 결과 도출

```js
let testValue;
testValue = 2;
console.log(testValue); // 결과 : 2
```

- 한번 선언한 변수에 다른 변수 값 넣기 O

```js
let testValue;
testValue = 2;
console.log(testValue);
testValue = 3;
console.log(tetsValue); // 결과 : 1, 10
```

- let 변수를 선언하면 같은 이름의 변수로 선언이 불가능 (에러코드)
  - 에러 발생시 에러 메시지 확인 (어느 코드 라인에서 에러가 났는지, 에러 메시지 파악 필요!)

```js
let testValue = 1;
console.log(testValue);
let testValue = 10; // 결과 : caught SyntaxError: Identifier 'testValue' has already been declared
```

---

## - 상수 선언 (const)

- 변화하지 않는 변수를 선언할 땐, let 대신 const를 사용합니다.
- 파이썬과 달리 특정 상수를 저장하는 변수를 선언할 수 있으며, 한번 상수로 선언된 변수에는 새로운 값을 넣을 수 없습니다.
- 선언 할 때, 특정 상수값까지 넣어서 선언해야 합니다.
- 가능 케이스
  - 상수라고 반드시 정수만 되는 것은 아님 (읽기 전용 변수 생성 O)

```js
const testValue = 5;
const tetsValue = "test";
const testValue = ""; //일종의 null(없음)을 나타내는 값을 넣을 수도 있습니다.
```

---

## - 타입(Type) 이란?

타입(type)은 값(value)의 종류입니다.

js에서 정보를 전달하기 위해서 값(value)을 사용하는데, 다음과 같이 나타낼 수 있습니다.

- typeof를 통해 변수의 데이터 타입을 확인할 수 있습니다.

```js
typeof 2023; // "number"
typeof "안녕하세요"; // "string"
typeof true; // "boolean"
```

각 타입은 고유한 속성과 메서드를 가집니다.

```js
"안녕하세요".length; // 길이 : 6, 속성
(12345.123).toFixed(); // '12345', 내가 원하는 소수점의 정수부분 확인 메서드
```

### ✔️ Number 타입

javascript는 정수/ 부동소숫점을 통째로 Number 데이터 타입으로 처리합니다.

- 64비트 부동소숫점형 (-(253-1)~253-1) 사이의 값

> - Math 내장 객체
>   - Math.floor(): 괄호 안의 숫자를 내림하여 반환합니다.
>   - Math.ceil(): 괄호 안의 숫자를 올림하여 반환합니다.
>   - Math.round(): 괄호 안의 숫자를 반올림하여 반환합니다.
>   - Math.abs(): 괄호 안의 숫자의 절대값을 반환합니다.
>   - Math.sqrt(): 괄호 안의 숫자의 루트값을 반환합니다.
>   - Math.pow() : 괄호 안의 첫 번째 숫자를 밑, 두 번째 숫자를 지수인 숫자를 반환합니다.

### ✔️ String 타입

JavaScript 데이터 타입 String(문자열)은 인간의 언어, 자연어를 JavaScript에서 표현하기 위한 데이터 타입입니다. 따옴표(’), 큰따옴표(”), 백틱(`)으로 감싸면 됩니다.

한자나 이모지와 같은 특수문자도 문자열로 만들 수 있고, 숫자와 문자를 조합해서 문자열로 만들 수도 있습니다. 특히 백틱으로 만든 문자열은 줄 바꿈도 가능합니다.

```js
"안녕하세요" + "이인우 입니다!"; // 안녕하세요 이인우 입니다!
1 + "1+"; //11
```

`+`로 문자열을 이어 붙일 수 있습니다. 문자열과 문자열을 이어 붙일 때의 + 는 문자열 연결 연산자로써 쓰입니다.  
다른 타입과 이어 붙이려고 하면 모두 문자열로 변합니다.  
특히, 숫자와 이어 붙이기를 시도하다가 예상 못한 결과를 얻을 수 있으므로 다른 타입 간의 연산을 하지 않도록 조심해야 합니다.

👀 _문자열의 length 속성_

`.length`를 통해 문자열의 길이를 알 수 있습니다.

```js
console.log("이인우".length); // 3
```

👀 _인덱스(index)_

문자열의 각 문자는 순서를 가지고 있습니다. 각 문자가 몇 번째에 위치하는지 인덱스(Index)로 확인할 수 있습니다.  
✔️ 첫 번째 문자의 인덱스는 0입니다. JavaScript는 우리 일상생활에서 순서를 셀 때 1부터 1, 2, 3 … 세는 것이 아니고, 0부터 세는데 이를 **Zero-based numbering**이라고 합니다.

```js
let str = "이인우";
console.log(str[0]); // '이'
console.log(str[2]); // '우'
```

👀 _문자열 주요 메서드_

> - toLowerCase() : 문자열을 소문자로 변경합니다.
> - toUpperCase() : 문자열을 대문자로 변경합니다.
> - concat() : 문자열 연결 연산자 +처럼 문자열을 이어 붙일 수 있습니다.
> - slice() : 문자열의 일부를 자를 수 있습니다.

- indexOf() : 문자열 내에 특정 문자나 문자가 몇 번째 위치하는지 확인합니다.

  - 만약 찾는 문자가 2개 이상일 경우, 가장 앞에 있는 문자의 인덱스를 조회합니다.
  - 포함되어 있지 않으면 -1을 반환합니다.

- includes() : 문자열 내에 특정 문자나 문자가 포함되어 있는지 확인합니다.
  - 있으면 true, 없으면 false를 반환합니다.

### ✔️ Boolean 타입

- true 와 false 두값을 가질 수 있습니다.
- Boolean()로도 true 또는 false의 booean 타입의 값을 가져올 수 도 있습니다.
  - 문자열의 경우는 문자열이 없는 경우 false, 있기만 하면 true

### ✔️ null과 unefined

- null은 값이 없을을 나타내고, undefined는 값이 할당되지 않았음을 의미합니다.
- null은 null 이라는 이름의 값, 하나만 가질수 있습니다.
- undefined 도 undefined 이라는 이름의 값, 하나만 가질 수 있습니다.

```js
let testUndefined1; // 값을 할당하지 않았을 때 (초기화 하지 않았을 때)
console.log(typeof testUndefined1, testUndefined1);
let testNull = null;
console.log(typeof testNull1, testNull1); // null 의 값은 null 이지만, null의 데이터 타입은 object로 출력
```

### ✔️ Object 타입

- 객체 타입을 나타내며, js도 파이썬과 마찬가지로 모든 기능을 객체로 합니다.

### ✔️ Symbol 타입

- ES6에서 추가된 타입이며, Symbol은 유니크한 값을 만듭니다.
- description은 문자열, 숫자등의 데이터가 될 수 있으며, 해당 심볼을 설명하기 위한 목적 이외에는 심볼생성, 접근등과 관련이 없습니다.

```js
Symbol([description]);
```

### ✔️ 데이터 타입 변환

- Number(): Number 타입으로 변환

  - console.log(typeof Number("1"), Number("1"));

- parseInt(): Number 타입으로 변환하되 정수로 만듬듬
  - console.log(typeof parseInt("1.2"), parseInt("1.2"));
- parseFloat(): Number 타입 변환, 부동소숫점까지 그대로 데이터 변환
  - console.log(typeof parseFloat(1.2), parseFloat(1.2));
- String(): String 타입으로 변환
  - console.log(typeof String(0), String(0));
- Boolean(): Boolean 타입으로 변환
  - console.log(typeof Boolean(0), Boolean(0));

---

## - 연산자

- **동등 연산자(==, !=):** 관대한 연산자로 기본적으로 값 만 같은지 확인합니다.

### ✔️ 비교 연산자

- `=== `, `!==`

1. 엄격한 동치 연산자 두 피연산자의 값과 타입이 같으면 true, 다르면 false를 반환합니다.
2. 엄격한 동치 연산자는 보이는 값이 같아도, 두 값의 타입이 다르면 false가 됩니다.

```js
100 === 75 + 25; // true
100 === "100"; // false
100 !== 75 + 25; // false
100 !== "100"; // true
```

- `==`, `!=`

1. 느슨한 동치 연산자 느슨한 동치 연산자는 “대체로” 타입이 달라도 값이 같으면 true, 다르면 false를 반환합니다.
2. 이렇게 “느슨하게” 동치 여부를 판단하기 때문에 예외가 많아 현대 웹 개발에서는 사용을 권장하지 않습니다.
3. 참고로 다른 프로그래밍 언어에서는 == , != 를 주로 사용하는데, JavaScript에서는 ===, !== 로 비교해야 합니다.

```js
12 == "12"; // true
```

- `>`, `<`, `>=`, `<=`

1. 대소 관계 비교 연산자 두 피연산자의 값의 크기를 비교합니다.
2. 수학에서의 부등호 기호의 사용법과 유사합니다.

```js
150 > 200; // false ("100은 200보다 크다."는 거짓)
250 > 100; // true ("200은 100보다 크다."는 참)
100 >= 100; // true ("100은 100보다 크거나 같다."는 참)
200 <= 100; // false ("200은 100보다 작거나 같다."는 거짓)
```

### ✔️ 논리 연산자

- `||` : 논리합(OR)

1. 두 값 중 하나만 `true`여도 `true`로 판단합니다.

```js
50 > 1000 || 250 > 120; // true ("100은 200보다 크다" 혹은 "200은 100보다 크다" 중 하나는 true)
```
2. 두 값이 모두 ```false```면 ```false```로 판단합니다.
```js
50 < 20 || 250 > 300 // false
```


- `&&` : 논리곱(AND)
1. 두 값이 모두 `true`면 `true`로 판단합니다.
```js
200 > 100 && 300 > 200 // true
```

2. 두 값 중 하나만 `false`면 `false`로 판단합니다.
```js
100 > 200 && 200 > 100 // false
```

🧐 논리 부정 연산자 (`!`)의 경우, 사실 관계를 반대로 표현합니다.

- `!` : 부정(NOT)
    - `!` 바로 옆 피연산자와 반대의 사실 반환    
    
    ```js
    !(200 > 300) // true
    ```

    - falsy, truthy의 반대 값 반환

    ```js
    !0 // true
    !"이인우" // false
    ```