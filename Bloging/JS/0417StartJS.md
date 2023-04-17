# 1. JavaScript란 ?

✔️ 웹페이지 상에서 동적으로 요소를 변경하고, 사용자 인터페이스를 지원하기 위해 고안된 스크립트 언어를 의미합니다.   
✔️ 넷스케이프 커뮤니케이션 사에서 개발하였으며, 본래의 이름 '모카(Mocha)', 그리고 '라이브스크립트'에서 당시 JAVA 언어가 인기를 끔에 따라, 관련이 없음에도 'Javascript'라고 명명하였습니다.

---

 ## - ECMAScript  
> 넷스케이프사에 대응하기 위해, 이후 MS사에서도 JScript라는 javascript와 호환되는 언어를 개발하였습니다.   
이에 넷스케이프사가 표준화 기구인 Ecma international에 javascript 표준화를 요청화였고, 1996년 11월 ECMA-262라는 표준화 명세서 작업이 시작되었습니다.   
표준화를 통해, 이름을 지어야 하는 상황에서, 이미 Sun마이크로시스템즈 사가 'JAVA'라는 상표 등록을 해놓았기에 javascript라는 이름으로 표준화를 이름을 쓸수 없는 상황이 되었고, 그래서 표준화된 언어의 공식 이름은 ECMAScript(에크마스크립트)이며, 대외적으로 사용되는 이름은 javascript가 되었습니다.

---

## - Javascript 엔진
- javscript 는 웹브라우저 상에서 동작하며, 다양한 업체에서 만들기 때문에, 각기 다른 javscript 엔진 구현 또는 채용 중이며 javascript 엔진이란, javscript 코드를 이해하고, 실행하는 프로그램 이라고 이해하면 됩니다.
- 최근 사용중인 javascript 엔진   
    -  <span style="color:#FF66BE"><b>V8</b></span> : 구글에서 만들었으며, 크롬에 먼저 채택되었고, 이후 Electron, node.js 에서 사용중   
    -  <span style="color:#FF66BE"><b>spiderMonkey</b></span> :Fifrefox 브라우저에서 사용   
    -  <span style="color:#FF66BE"><b>javascriptCore</b></span> : 오픈소스로 apple 과 Safari 브라우저에서 사용중

## 💡 최근 javscript 동향

> 1. 기존에는 웹페이지 상에서 동적으로 요소를 변경하고, 사용자 인터페이스를 지원하기 위한 프론트에만 사용되었습니다.   <br><br>
> 2. 서버 백엔드 기술인 Node.js가 javascript 기반으로 동작함에 따라, 프론트엔드 뿐만 아니라, 백엔드에도 활용 중입니다.   <br><br>
> 3. 최근에는 Electron 을 사용해서, 데스크탑 프로그램도 만들 수 있고, react-native, NativeScript 등을 사용해서 모바일 앱도 만들 수 있습니다.   <br><br>
> 4. javascript는 처음부터 잘 고안된 언어가 아님에도 불구하고, 인터넷 환경에서 많이 사용하다보니, 갈수록 사용범위가 넓어지고 있습니다.   <br><br>        
> 5. 현재는 크로스 브라우징 문제로 ES6 기준으로 사용중입니다.   
>    - 잘 고안된 언어가 아니다보니, 매년마다 새로운 문법이 추가되고있지만, ECMAScript 2015가 공식 명칭 입니다.

---

## ✔️ 테스트 환경 구축
> VSCode 와 같은 개발 툴을 사용하면 됩니다.    
Vanilla JS는 javascript 기반의 다양한 라이브러리보다 javascript 자체의 기능만 쓰겠다는 의미입니다.   
라이브러리가 무겁고, 디버깅시 라이브러리 내부 코드까지 들어야하는 경우가 있어서 디버깅이 매우 어려웠습니다.   
따라서 최근에는 라이브러리를 최소로 사용하고, javascript 자체만을 쓰자는 운동이 있고, 이를 표현하기 VanillaJS라는 명칭을 씁니다.

---

## ✔️ JS 스터디 전 알아두기
> - 파이썬과 마찬가지로, 변수 · 조건문 · 반복문이 기본입니다.
> - <span style="color:#FF66BE"><b> Naming rule</b></span>   
>  변수 이름을 어떻게 짓느냐에 대해 각 언어별 추천 naming rule 이 존재합니다.   
>  필수는 아니지만 자주 보게 될 코드들이 유사한 Naming rule을 가지므로 알아두는 것이 좋습니다.
> - <span style="color:#FF66BE"><b>js naming rule </b></span>   
>   <span style="color:#4DD0E1"><b>camelCase (단봉 낙타 기법: 낙타처럼 구불구불, 두 단어를 붙일 때 맨 앞에는 소문자, 뒤에 나오는 단어마다 앞글자는 대문자로)</b></span>을 추천합니다.   
변수, 함수등은 camelCase로 명명하며, boolean 변수는 isVasriable, hasData, areEqual과 같이 is,has, are와 같은 동사를 써서, boolean 변수임을 나타내면 좋다고 합니다.   
>  class 명은  <span style="color:#4DD0E1"><b>PascaleCase(쌍봉 낙타 기법: ClassName 과 같이 두 단어를 붙일 때, 맨 앞의 단어의 앞글자도 대문자, 뒤의 단어의 앞글자도 대문자)</b></span>   
class 내부의 method, 또는 외부의 함수등은 모두 camelCase를 사용합니다.
getName과 같이 함수/ method 는 동사로 시작하면 좋습니다.

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

⭐  js는 어느정도의 융통성이 필요하며, 비정상 동작을 할 경우 코드를 변경하며 실행해보는 것이 좋습니다!

## - 변수 선언

* 키워드(let)을 활용하여 초기값을 넣을 수도 있고, 변수만 선언할 수도 있습니다.   
* 변수는 변할 수 있는 수로 , 일종의 저장공간을 만들고, 특별한 이름을 붙이는 것임(일반적인 프로그래밍과 동일)
한번 선언한 변수에 다른 변수 값을 넣을 수도 있습니다.
```js
let 변수명 ;
let 변수명 = 변수 값;
```

```js
let testValue;
testValue = 2;
console.log(testValue); // 결과 : 2
```



