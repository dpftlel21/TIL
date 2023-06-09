# 1. 함수 (function)

함수는 프로그램을 구성하는 주요 '구성 요소(building block)'입니다. 함수를 이용하면 중복 없이 유사한 동작을 하는 코드를 여러 번 호출할 수 있습니다.

우리는 앞서 다양한 예시에서 `alert(message)`, `prompt(message, default)`, `confirm(question)`과 같은 내장 함수를 사용해 보았습니다.

### ✔️ 함수 선언

```js
function showMessage(parameter1, parameter2, .... parameterN) {
    alert("안녕하세요!"); //함수 본문
}
showMessage() // 함수 호출
```

`function` 키워드, 함수 이름, 괄호로 둘러싼 매개변수를 차례로 써주면 함수를 선언할 수 있습니다. 매개변수가 여러 개 있다면 각 매개변수(parameter1, 2, N)를 콤마로 구분해 줍니다. 이어서 함수를 구성하는 코드의 모임인 '함수 본문(body)'을 중괄호로 감싸 붙여줍시다. 그 후 새롭게 정의한 함수는 이름 옆에 `()`를 붙여 호출할 수 있습니다.

### ✔️ 지역 변수

함수 내에서 선언한 변수인 지역 변수는 함수 안에서만 접근할 수 있습니다.

```js
function showMessage() {
  let message = "안녕하세요!"; // 지역 변수

  alert(message);
}

showMessage(); // '안녕하세요!' 출력

alert(message); //  message는 함수 내 지역 변수이기 때문에 에러가 발생합니다.
```

### ✔️ 외부 변수

함수 내부에서 함수 외부의 변수인 외부 변수에 접근할 수 있습니다.

```js
let userName = "인우";

function showMessage() {
  let message = "Hello, " + userName;
  alert(message);
}
showMessage(); // 'Hello, 인우'
```

- 함수에선 외부 변수 접근과 수정이 가능합니다.
  - 함수 내부에 외부 변수와 동일한 이름을 가진 변수가 선언되었다면, 내부 변수는 외부 변수를 가립니다. 외부 변수는 내부 변수에 가려져 값이 수정되지 않습니다.

```js
let userName = "인우";

function showMessage() {
  let useName = "짱구"; // 외부 변수 수정

  let message = "Hello, " + userName;
  alert(message);
}
alert(userName); // 함수 호출 전이므로 "인우" 출력

showMessage();

alert(userName); // 함수에 의해 "짱구"로 값 변경
```

- `userName` 처럼, 함수 외부에 선언된 변수는 전역 변수라고 부릅니다.

  전역 변수는 같은 이름을 가진 지역 변수에 의해 가려지지만 않는다면 모든 함수에서 접근할 수 있습니다.

  변수는 연관되는 함수 내에 선언하고, 전역 변수는 되도록 사용하지 않는 것이 좋습니다. 비교적 근래에 작성된 코드들은 대부분 전역변수를 사용하지 않거나 최소한으로만 사용합니다. 다만 프로젝트 전반에서 사용되는 데이터는 전역 변수에 저장하는 것이 유용한 경우도 있으니 알아두는 것이 좋습니다!

### ✔️ 매개변수

매개변수(parameter)를 이용하면 임의의 데이터를 함수 안에 전달할 수 있습니다. 매개변수는 인자(parameter) 라고 불리기도 합니다.

함수의 매개변수에 전달된 값을 _인수(argument)_ 라고 부르기도 합니다

```js
function showMessage(name, text) {
  // 인자: name, text
  alert(name + ": " + text);
}
showMessage("인우", "Hello!"); // 인우: Hello! (1)
```

- (1)로 표시한 줄에서 함수를 호출하면, 함수에 전달된 인자는 지역변수 naem과 text에 복사됩니다.  
   그 후 함수는 지역변수에 복사된 값을 사용합니다.

- 함수 선언 시 매개변수를 나열하게 되고, 함수를 호출할 땐 인수를 전달해 호출합니다.

  위 코드에서 함수 `showMessage`는 `name`과 `text`라는 두 매개변수를 사용해 선언되었고, 그 후 호출 시엔 `name`, `Hello`라는 두 인수를 사용해 호출되었습니다.

### ✔️ 기본값

함수 호출 시 매개변수에 인수를 전달하지 않으면 그 값은 `undefined`가 됩니다.

매개변수에 값을 전달하지 않아도 그 값이 `undefined`가 되지 않게 하려면 함수를 선언할 때 =를 사용해 '기본값(default value)'을 설정해주면 됩니다.

```js
function showMessage(name, text = "no text given") {
  alert(name + ": " + text);
}
showMessage("인우"); // Ann: no text given
```

- 이젠 `text`가 값을 전달받지 못해도 `undefined` 대신 기본값 `"no text given"`이 할당됩니다.

  매개변수에 값을 전달해도 그 값이 `undefined`와 엄격히 일치한다면 기본값이 할당됩니다.

### ✔️ 반환값

함수를 호출했을 때 함수를 호출한 그곳에 특정 값을 반환하게 할 수 있습니다. 이때 이 특정 값을 반환 값이라고 합니다.

return문이 없거나 return 지시자만 있는 함수는 undefined를 반환합니다.

```js
function sum(a, b) {
  return a + b; 
}

let result = sum(1, 2);
alert(result); // 3
```

지시자 `return`은 함수 내 어디서든 사용할 수 있습니다. 실행 흐름이 지시자 `return`을 만나면 함수 실행은 즉시 중단되고 함수를 호출한 곳에 값을 반환합니다. 위에서 반환 값을 `result`에 할당하였습니다.

---

### ✔️ 함수 이름짓기

함수는 어떤 동작을 수행하기 위한 코드를 모아놓은 것이며 함수의 이름은 대개 동사입니다.   

함수 이름은 가능한 한 간결하고 명확해야 하며, 코드를 읽는 사람은 함수 이름만 보고도 함수가 어떤 기능을 하는지 힌트를 얻을 수 있어야 합니다.

아래와 같은 접두어를 통해 대표적 사례를 살펴 보겠습니다.

> - "get…" – 값을 반환
> - "calc…" – 무언가를 계산
> - "create…" – 무언가를 생성
> - "check…" – 무언가를 확인하고 불린값을 반환

> - showMessage(..)     // 메시지를 보여줌
> - getAge(..)          // 나이를 나타내는 값을 얻고 그 값을 반환
> - calcSum(..)         // 합계를 계산하고 그 결과를 반환
> - createForm(..)      // form을 생성하고 만들어진 form을 반환
> - checkPermission(..) // 승인 여부를 확인하고 true나 false를 반환

위와 같이 접두어를 적절히 사용하면 함수 이름만 보고도 함수가 어떤 동작 및 어떤 값을 반환하는지 알 수 있습니다.

### ⭐ 주의 사항  ###

<span style="color:#FF66BE">**1. 함수는 동작 하나만 담당해야 합니다.**</span>
```plain/text
   함수는 함수 이름에 언급되어 있는 동작을 정확히 수행해야 합니다. 그 이외의 동작은 수행해선 안 됩니다.

   독립적인 두 개의 동작은 독립된 함수 두 개에서 나눠서 수행할 수 있게 해야 합니다.   
  
   한 장소에서 두 동작을 동시에 필요로 하는 경우라도 제3의 함수를 만들어 그곳에서 두 함수를 호출합니다.
```

<span style="color:#FF66BE">**2. 아주 짧은 이름**</span>

```plain/text
  정말 빈번히 쓰이는 함수 중에서도 이름이 짧은 함수가 있는데, jQuery 프레임워크의 `$` , Lodash 라이브러리의 "_"가 있습니다.

  이 함수들은 지금까지 소개한 함수 이름짓기에 관련된 규칙을 지키지 않고 있어 예외에 속합니다.  
  
  함수 이름은 간결하고 함수가 어떤 일을 하는지 설명할 수 있게 지어야 합니다.
```

---

### ✔️ 함수 == 주석 ###

```plain/text
1. 함수는 간결하고, 한 가지 기능만 수행할 수 있게 만들어야 합니다.   

2. 함수를 분리해 작성하면 많은 장점이 있기 때문에 함수가 길어질 경우엔 함수를 분리해 작성하는 것이 좋습니다.

3. 함수를 간결하게 만들면 테스트와 디버깅이 쉬워집니다. 그리고 함수 그 자체로 주석의 역할까지 합니다.
```