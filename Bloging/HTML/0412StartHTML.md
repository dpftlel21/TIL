<H1>Html의 기본지식<br></h1>
<h2>1. Html이란?</h2><hr>

㉠ HTML(HyperText Markup Language)은 웹을 이루는 가장 기초적인 구성 요소로, 웹 콘텐츠의 의미와 구조를 정의할 때 사용합니다. HTML 이외의 다른 기술은 일반적으로 웹 페이지의 모양/표현 (CSS), 또는 기능/동작 (JavaScript)을 설명하는 데 사용됩니다.

㉡ HTML은 웹 브라우저에 표시되는 글과 이미지 등의 다양한 콘텐츠를 표시하기 위해 "마크업"을 사용합니다. HTML 마크업은 다양한 "요소"를 사용하는데, 요소에는 head, title, body, header, p, div 등 많은 종류가 존재합니다.

㉢ HTML 요소는 "태그"를 사용해서 문서의 다른 텍스트와 구분합니다. 태그는 "<", 태그 이름, ">"로 이루어집니다. 태그 안의 요소 이름은 대소문자를 구분하지 않습니다. 즉, 대문자, 소문자, 아니면 섞어서도 작성할 수 있습니다.<hr>

<h2>2. Html의 기본요소 (1/2)</h2><hr>

<img src="https://postfiles.pstatic.net/MjAyMjA1MTdfMTA5/MDAxNjUyNzc2MjYyMjQ3.E7Wgx3HfxTW-53vM5FJxWlrEy1-QAlkmvbqVGdix4FEg.-jGaPwz1hC2Q2duzHkJB9UOfVygGPyJ4_tJ8emK5YsYg.PNG.dkdnmju/basic.png?type=w773" width="5000px" >

㉠ `<!DOCTYPE html>` — doctype. 아주 오래전 HTML 이 막 나왔을 때 (1991년 2월쯤), doctype은 (자동 오류 확인이나 다른 유용한 것을 의미하는) good HTML로 인정받기 위해 HTML 페이지가 따라야 할 일련의 규칙으로의 연결통로로써 작동하는 것을 의미하였습니다. 하지만, 최근에는 아무도 그런 것들에 대해 신경쓰지 않으며 그저 모든 것이 올바르게 동작하게 하기 위해 포함되어야 할 역사적인 유물일 뿐입니다. 지금은, 그게 알아야 할 전부 입니다.

㉡ `<html></html>` 이 요소는 페이지 전체의 컨텐츠를 감싸며, 루트(root) 요소라고도 합니다.

㉢ `<head></head>` 이 요소는 HTML 페이지에 포함되어 있는 모든 것들(여러분의 페이지를 조회하는 사람들에게 보여주지 않을 컨텐츠)의 컨테이너 역할을 합니다. 여기에는 keywords (en-US)와 검색 결과에 표시되길 원하는 페이지 설명, 컨텐츠를 꾸미기 위한 CSS, 문자 집합 선언 등과 같은 것들이 포함됩니다.

㉣ `<body></body>` 이것은 페이지에 방문한 모든 웹 사용자들에게 보여주길 원하는 모든 컨텐트를 담고 있으며, 그것이 텍스트일 수도, 이미지, 비디오, 게임, 플레이할 수 있는 오디오 트랙이나 다른 무엇이든 될 수 있습니다.

㉤ `<meta charset="utf-8">` 이 요소는 문서가 사용해야 할 문자 집합을 utf-8으로 설정합니다(utf-8 문자 집합에는 인간의 방대한 주류 기록언어에 있는 대부분의 문자가 포함되어 있습니다). 본질적으로 여러분이 사용할 수 있는 어떠한 문자 컨텐트도 다룰 수 있습니다. 이 문자 집합을 설정하지 않을 이유가 없으며, 그렇게 설정하면 나중에 발생할 수 있는 일부 문제를 피할 수 있습니다.

<!-- ㉥ <title></title> — <title> 요소. 이 요소는 페이지의 제목을 설정하는 것으로 페이지가 로드되는 브라우저의 탭에 이 제목이 표시됩니다. 이 요소는 북마크나 즐겨찾기에서 페이지를 설명하는 것으로도 사용됩니다. -->
<hr>
<h2>2. Html의 기본요소 (2/2)</h2><hr>

<img src="https://postfiles.pstatic.net/MjAyMjA1MTdfMTEy/MDAxNjUyNzc2MjY4Nzgx._f8pcZlMbY_hajk9hpPMyk7jV3UsQu8IGqD9FR_5Y8Ig.LK4uOG5cx9GCPQ0VidkQV3puuqbaSfWYTA124k0KWLMg.PNG.dkdnmju/tag.png?type=w773" width="350px">

㉠ <strong>여는태그(opening tag)</strong> : 요소의 이름으로 구성되고 (여기에서는 p), 여닫는 꺾쇠괄호로 감싸집니다. 이것은 요소가 시작되는 곳, 또는 효과를 시작하는 곳임을 나타냅니다. 이 예제에서는 문단 시작위치의 <strong>` <p>` </strong>가 해당합니다

㉡ <strong>닫는태그(closing tag)</strong> : 여는 태그와 같지만, 요소의 이름 앞에 전방향 슬래시가 포함된다는 점이 다르며 이것은 요소의 끝을 나타냅니다. 이 예제에서는 `</p>`가 해당합니다. 가장 흔히 범하는 오류 중 하나가 닫는 태그를 쓰지 않는 것으로 이상한 결과가 표시됩니다.

㉢ <strong>컨텐츠(content)</strong> : 이것은 요소의 내용(content)으로 이 예제에서는 p태그가 감싸고 있는 <strong>Html 기본지식 알아보기 부분이 해당합니다.</strong>

㉣ <strong>요소(element)</strong> : 요소는 여는 태그와 닫는 태그, 그리고 컨텐츠로 이루어집니다.

<hr>
<H2>3. Html의 tag(태그)</H2>
<hr>

<strong>㉠ 이미지 태그</strong> `<img src= "이미지 주소" alt="속성- 설명문">` : 이 요소는 이미지가 나타나야 할 위치에 이미지를 끼워 넣습니다. 이미지 파일의 경로를 포함하는 src (source) 속성을 통해 이러한 일을 합니다.

alt (alternative) 속성도 존재합니다. — 이 속성에는 다음과 같은 이유로 이미지를 볼 수 없는 사용자들을 위한 설명문(descriptive text)을 지정할 수 있습니다. 시각 장애자인 경우. 시각 장애가 심한 사용자들은 alt 텍스트(대체 텍스트)를 읽어주는 스크린 리더라는 도구를 자주 사용합니다.

<strong>㉡ 제목 태그</strong> `<h1> ~ <h6>`: 제목 요소는 여러분이 내용의 특정 부분이 제목 또는 내용의 하위 제목임을 구체화 할 수 있게 해줍니다. HTML 은 여섯 단계의 제목을 갖고, `<h1> ~ <h6>` 까지의 6단계가 있지만 보통 3~4 까지만 자주 사용합니다.
<br>

<img src="https://postfiles.pstatic.net/MjAyMjA1MTdfNDIg/MDAxNjUyNzc2Mjg4NDQ0.va25UXn_CWPsufU19IJdUxY34LtdGiFBWwEgvUW90cIg.taNSlcvs9WhOLjM2dBAdI0hCcIxFlWooUxyqrqHamrAg.PNG.dkdnmju/htag.png?type=w773" width="400px" height="150px">

<strong>㉢ 문단 태그</strong> `<p></p>` : `<p>` 요소는 문자의 문단을 포함하기 위한 것입니다; 일반적인 문자 내용을 나타낼 때 많이 사용하게 될 것입니다.

<strong>㉣ 목록 태그</strong> `<ul>, <ol>`: 많은 웹의 내용은 목록이기 때문에, HTML은 이것을 위한 특별한 요소를 가지고 있습니다. 목록을 나타내는 것은 항상 최소 두 개의 요소로 구성됩니다. 가장 일반적인 목록의 종류는 순서가 있는 것과 순서 없는 것이 있습니다.

- 순서 없는 목록은 쇼핑 목록과 같이 항목의 순서에 관계가 없는 목록을 위한 것입니다. `<ul>` 요소로 둘러 쌓여 있습니다.

- 순서 있는 리스트는 조리법처럼 항목의 순서가 중요한 목록을 위한 것입니다. `<ol>` 요소로 둘러 쌓여 있습니다.

- 추가적으로, 목록의 각 항목은 `<li>` (목록 항목) 요소 안에 놓여야 합니다.

순서가 있는 `<ol></ol>`과 순서가 없는 `<ul></ul>` 2가지를 예를 들어서 나타내면 다음과 같이 나타낼 수 있습니다.

 <img src="https://postfiles.pstatic.net/MjAyMjA1MTdfOCAg/MDAxNjUyNzc2Mjc4NDg5.yODdIa6LLJ3MHC_hcMRyAkDXpD4h7vpA7DUC8DZ8duMg.jxgYdmlQEQsAEOLcv30ykK9Yh_huzBU1L24vdloQ49Ig.PNG.dkdnmju/oltag.png?type=w773" width="400px" height="250px">

<strong>㉤ 연결태그 `<a href=""></a>` </strong> : 이것은 웹을 웹으로 만들어줍니다. 연결을 하기 위해, 간단한 요소를 사용할 필요가 있습니다 `<a>` — a 는 "anchor" 의 약자입니다.

```html
<a href="https://www.naver.com/">네이버 연결</a>
```

<strong>㉤ input태그 `<input type=""/>`</strong> :

- text, password :

```html
<div>ID: <input type="text" /></div>
<div>PW: <input type="password" /></div>
```

<img src="https://postfiles.pstatic.net/MjAyMzA0MTFfNCAg/MDAxNjgxMjA4OTI2Mjg0.o3YqMDBINw-NjG-uSacLqYBBUJZq0qgwUzmRH25MCHsg.6Rwf5XkEqaSygL7TKYKgBpZ4IqFOjEIgzSHVfpdzGFEg.PNG.dkdnmju/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7_2023-04-11_190400.png?type=w773">

---

- radio, checkbox :

```html
<div>
    <h3>- 라디오</h3>
      <input type="radio">1번</input>
      <input type="radio">2번</input>
      <input type="radio">3번</input>
    </div>

    <div>
      <h3>- 체크박스</h3>
      <input type="checkbox">1번</input>
      <input type="checkbox">2번</input>
      <input type="checkbox">3번</input>
    </div>
```

<img src="https://postfiles.pstatic.net/MjAyMzA0MTFfNDUg/MDAxNjgxMjE5OTM5NTY4.behm4H9dfegYFbXBqVYKbDgX6SJh5hUc-QyO_-Mo7r4g.Wd4-qPE1GIIM3LiDgdoOtubLMvwxbN4FUZoNC2VoD1Qg.PNG.dkdnmju/%EB%9D%BC%EB%94%94%EC%98%A4,_%EC%B2%B4%ED%81%AC%EB%B0%95%EC%8A%A4.png?type=w773"/>

---

- textarea :

```html
<textarea></textarea>
```

<img src="https://postfiles.pstatic.net/MjAyMzA0MTFfMTQx/MDAxNjgxMjE5OTM5NTYx.8pK2XVrxB2L7Rms-k5E08FUe0_hWzC236s1rZfXJCikg.lXn39ydwdpwWDQUyxHZqR_OAGJ6FmMUyhFc85ts8e9Eg.PNG.dkdnmju/textarea.png?type=w773">

---

- button :

```html
<div>
  <button>Click</button>
</div>
```

<img src = "https://blogfiles.pstatic.net/MjAyMzA0MTFfMjEg/MDAxNjgxMjE5OTM5NTY5.LNFhtmWR_FPmQRTu0mcN5Rd8OKLu0w5sFVR6eRJUHL8g.K36xi7pkyj2oiS4JVzjdxeaPCokxVjVirXKHcxqNT-8g.PNG.dkdnmju/%EB%B2%84%ED%8A%BC.png">

---

<h2>4. 시맨틱요소</h2>

---
웹페이지의 레이아웃만을 위한 요소로, 스스로 브라우저와 개발자에게 사용된 의미를 명확히 전달해주는 요소를 의미합니다.   

div, span 요소 등은 해당 요소가 어떤 내용(역할)인지 알기 위해서 내부 코드를 봐야알 수 있지만, 시맨틱 요소인 form, table, img, header등 의 요소는 코드를 보지 않아도 해당 요소의 이름만 봐도 알 수 있습니다.   
<br><br>

 <h3>⭐ 시맨틱 요소의 장점</h3><br>
 
 > <b>검색의 효율성</b> 
 - 검색 엔진은 웹페이지들을 방문할 때, 시맨틱 요소를 중요한 키워드로 고려하기때문에 시맨틱 요소에 담긴 의미에 따라 검색 결과의 상위 노출이 결정됩니다.   

 > <b>개발자간 소통 용이</b>
 - 여러 명의 개발자가 동업 시, div 요소를 탐색하는 것 보다 의미 있는 코드 블록을 찾는 것이 편리하며, 요소 안에 채워질 데이터 유형을 예측하기 쉽습니다.   

 > <b>웹 접근성 향상</b>
 - 모든 환경과 사용자를 떠나, 항상 동일한 수준의 정보를 제공할 수 있어야하는데, 시맨틱 요소를 사용하여 작성했다면 화면의 구조에 대한 정보를 전달할 수 있기 때문에, 더욱 정확한 콘텐츠를 전달할 수 있습니다.<br><br>

 <h3>⭐ 시맨틱 요소의 종류</h3><br>
<img src="https://postfiles.pstatic.net/MjAyMzA0MTJfMjgg/MDAxNjgxMjU3ODY4MjU2.kDIAk6SBehrNTHHe4A-hBc-UqaIe2-7nYSNPcZdFwjsg.yGY6ZI-gdyKEVk8h6JuRLqogEd3z34HqfSGxtp6E0ccg.PNG.dkdnmju/%EC%8B%9C%EB%A7%A8%ED%8B%B1_%EC%9A%94%EC%86%8C.png?type=w773"/> <br>

---

| 시맨틱 요소 | 내용 |
|:----------: | :----------:|
| **header** | 일반적으로 페이지나 해당 섹션의 가장 윗부분에 위치하며, 사이트의 제목이  들어갑니다.<br>선택적으로 상단바나 검색창 등이 안에 들어갈 수 있습니다 |
| **nav** | 내비게이션(navigation)의 약자로, 일반적으로 상단바 등 사이트를 안내하는 요소에 사용됩니다. <br>보통은 안에 ```<ul>```을 넣어 목록 형태로 사용합니다. |
| **main** | 문서의 주된 콘텐츠를 표시합니다. |
| **section** | HTML문서에서 section부분을 정의, 문서의 전체적인 내용과 관련이 있는 콘텐츠들의 집합으로, 딱히 적합한 의미의 요소가 없을 때 사용합니다. |
| **article** | 문서의 전체적인 내용과는 별도의 독립적이고 자체 포함된 컨텐츠를 지정할때 사용하며, 재사용할 수 있는 부분을 의미합니다.|
| **aside** | 독립적이고 자체 포함된 콘텐츠를 지정합니다. ex)사이드바,광고창|
| **footer** | 일반적으로 페이지나 해당 파트의 가장 아랫부분에 위치하며, 사이트의 라이선스, 주소, 연락처 등을 넣을 때 사용합니다. |





---


