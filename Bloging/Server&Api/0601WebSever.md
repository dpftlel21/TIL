# 1. CORS, SOP

### ✔️ SOP(Same-Origin Policy)

<img src="https://postfiles.pstatic.net/MjAyMzA1MzFfMTcg/MDAxNjg1NTQwNzk1OTY2.SxQW6FdCKuKxL3X6Jkk_FoBYC1EvNjUOS7usC9VVM0og.9J2KkY92UxlVm2Ar6gEpRZAV9ZBbzK2nBNB35pELvk4g.PNG.dkdnmju/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7_2023-05-31_224613.png?type=w773" height = 150>

<출처 : 코드스테이츠>

같은 출처의 리소스만 공유가 가능하다의 의미를 나타내고, 여기서의 출처는 프로토콜, 호스트, 포트 조합으로 구성되어 있으며 하나라도 다르면 동일한 출처로 보지 않습니다.

SOP는 잠재적으로 해로울 수 있는 문서를 분리하여 공격받을 수 있는 경로를 줄여줍니다. SOP는 다른 사이트와의 리소스 공유를 제한하기 때문에 로그인 정보가 타 사이트의 코드에 의해서 새어나가는 것을 방지하며, 이러한 보안상 이점 때문에 SOP은 모든 브라우저에서 기본적으로 사용하고 있는 정책입니다.

> 예시 <br><br> > <b>1. URI 프로토콜 다름 (http vs https)</b> <br><br> > `https://www.codestates.com` vs `http://www.codestates.com`<br><br> ><b>2. 호스트 다름(urclass.codestates.com vs codestate.com)</b> <br><br> >`https://urclass.codestates.com` vs `https://codestates.com`<br><br> > <b>3. 포트의 다름 (:81 vs :80)</b> <br><br> > `http://codestates.com:81` vs `http://codestates.com:80`

---

### ✔️ CORS (Cross-Origin Resource Sharing)

교차 출처 리소스 공유를 의미하고, 추가 HTTP 헤더를 사용하여, 한 출처에서 실행 중인 웹 애플리케이션이 다른 출처의 선택한 자원에 접근할 수 있도록 권한을 부여하도록 브라우저에 알려주는 체제입니다.

즉, 브라우저는 SOP에 의해 기본적으로 다른 출처의 리소스 공유를 막지만 CORS를 사용하여 접근 권한을 얻을 수 있습니다.

### 🖥️ CORS 동작 방식

#### 1. 프리플라이트 요청

<img src ="https://postfiles.pstatic.net/MjAyMzA1MzFfOTAg/MDAxNjg1NTQxODAzOTE2.79cLi6yTVUhJX9mHGI6Hum-8t1qqM-Xw5kQbJDbA3Ssg.NSKiunJ2G0i-yssSSmwEFl5kr7Bqr8W3b_HlSUgxqkQg.PNG.dkdnmju/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7_2023-05-31_230242.png?type=w773" height = 200>

<출처 : 코드스테이츠>
<BR><BR>
실제 요청을 보내기 전, OPTIONS 메서드로 사전 요청을 보내 해당 출처 리소스에 접근 권한이 있는지부터 확인하는 것을 의미하며 위 이미지에서 브라우저는 실제 요청 전 프리플라이트 요청을 보내 응답헤더의 `Access-Control-Allow-Origin` 으로 요청을 보낸 출처가 돌아와야 실제 요청을 보내게 됩니다.

만약, 요청을 보낸 출처가 접근 권한이 없다면 브라우저에서 CORS 에러를 띄워 실제 요청은 전달되지 않습니다.

#### 🧐 플라이트 요청이 필요한 이유 ??

- 실제 요청을 보내기 전에 미리 권한 확인을 할 수 있기 때문에, 실제 요청을 처음부터 통째로 보내는 것보다 리로스 측면에서 효율적 !

- CORS 대비 되지 않은 서버 보호 O, CORS 이전에 만들어진 서버는 SOP 요청만 들어오는 상황을 고려하여 만들어졌으며 다른 출처에서 들어오는 요청에 대한 대비 X

즉, CORS에 대비가 되어있지 않은 서버라도 프리플라이트 요청을 먼저 보내게 되면, 프리플라이트 요청에서 CORS 에러를 띄우게 됩니다. 이를 통해 실행 돼서는 안 되는 요청의 실행을 사전에 방지할 수 있기에 플라이트 요청을 씁니다!

#### 2. 단순 요청

<img src ="https://postfiles.pstatic.net/MjAyMzA1MzFfNjgg/MDAxNjg1NTQxODAzOTQw.Kk2FsCMtdOyJJmf-BseoJ2oRTPSWj25HP_-tTVXChJog.V8uc9TzUGZi7xwHlYwjBGp-hbUTuKwlMAowzmlKPV-Yg.PNG.dkdnmju/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7_2023-05-31_230300.png?type=w773" height = 200>

<출처 : 코드스테이츠>
<BR><BR>

단순 요청은 특정 조건이 만족되면 프리플라이트 요청을 생략하고 요청을 보내는 것을 의미합니다.

#### 🧐 특정 조건??

- `GET` , `HEAD` , `POST` 요청 중 하나여야함

- 자동으로 설정되는 헤더 외 `Accept`, `Accept-Language`, `Content-Language`, `Content-Type` 헤더의 값만 수동으로 설정 O

  `Content-Type` 헤더에는 `application/x-www-form-urlencoded`, `multipart/form-data`, `text/plain` 값만 허용

#### 3. 인증정보를 포함한 요청

요청 헤더에 인증정보를 담아 보내는 요청이며 출처가 다를 경우 별도의 설정을 하지 않으면 민감한 정보이기에 쿠키를 보내지 못합니다. 이 때, 클라이언트 및 서버 양측 모두 CORS 설정이 필요합니다.

- 클라이언트 측에서는 요청 헤더에 `withCredentials : true` 넣기
- 서버 측에서는 응답 헤더에 `Access-Control-Allow-Credentials : true` 넣기
- 서버 측에서 `Access-Control-Allow-Origin`을 설정할 때, 모든 출처를 허용한다는 뜻의 와일드카드(\*)로 설정하면 에러 발생, 인증 정보를 다루는 만큼 출처를 정확하게 설정해주어야 함

### 🤔 CORS 설정 방법

#### ⭐ Node.js 서버

```js
const http = require("http");

const server = http.createServer((request, response) => {
  // 모든 도메인
  response.setHeader("Access-Control-Allow-Origin", "*");

  // 특정 도메인
  response.setHeader("Access-Control-Allow-Origin", "https://naver.com");

  // 인증 정보를 포함한 요청을 받은 경우
  response.setHeader("Access-Control-Allow-Credentials", "true");
});
```

#### ⭐ Express 서버( cors 미들웨어를 사용해서 더욱 간단하게 CORS 설정 O )

```js
const cors = require("cors");
const app = express();

//모든 도메인
app.use(cors());

//특정 도메인
const options = {
  origin: "https://codestates.com", // 접근 권한을 부여하는 도메인
  credentials: true, // 응답 헤더에 Access-Control-Allow-Credentials 추가
  optionsSuccessStatus: 200, // 응답 상태 200으로 설정
};

app.use(cors(options));

//특정 요청
app.get("/example/:id", cors(), function (req, res, next) {
  res.json({ msg: "example" });
});
```

---

# 2. Express, Middleware

### ✔️ Express

```js
// Express 설치

npm install express
```

```js
// 응답으로 "Hello World 보내는 Express 코드"

const express = require("express");
const app = express();
const port = 3000;

app.get("/", (request, response) => {
  response.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
```

### 😀 라우팅, 메서드와 url 따라 Routing 하기

메서드와 url(/lower , /upper 등)로 분기점을 만드는 것을 라우팅이라 하며, 클라이언트는 특정한 HTTP 요청 메서드(GET, POST 등)와 함께 서버의 특정 URL로 HTTP 요청을 보냅니다.

즉, 라우팅은 클라이언트 요청에 해당하는 Endpoint에 따라 서버가 응답하는 방법을 결정하는 것입니다.

```js
// Express 라우터

const router = express.Router();

router.get("/lower", (request, response) => {
  response.send(data);
});

router.post("/lower", (request, response) => {
  // 작업 내용
});
```

---

### ✔️ Middleware

미들웨어란 컨베이어 벨트 위에 올라가 있는 요청(Request)에 필요한 기능을 더하거나, 문제가 발견된 불량품을 걷어내는 역할을 수행하는 것을 의미하며, express의 가장 큰 장점입니다.

미들웨어를 이용하여 Node.js 만으로 구현한 서버에서 번거로울 수 있는 작업을 보다 쉽게 적용할 수 있습니다.

### 🖥️ Case 1. POST 요청 등에 포함된 body(payload) 구조화할 때

```js
// body-parser 미들웨어 설치

npm install body-parser
```

```js
// body-parser 미들웨어 이용

const bodyParser = require("body-parse");
const jsonParser = bodyParser.json();

// 생략
app.post("/users", jsonParser, function (request, response) {});
```

Express v4.16.0 부터는 따로 설치하지 않으며, Express 내장 미들웨어 express.json()을 사용합니다.

```js
const jsonParser = express.json();

// 생략
app.post("/api/users", jsonParser, function (req, res) {});
```

### 🖥️ Case 2. 모든 요청/응답에 CORS 헤더를 붙일 때

Node.js HTTP 모듈을 이용한 코드에 CORS 헤더를 붙이려면, `writeHead` 메서드를 이용할 수 있으며, Node.js에서 이 메서드를 통해 라우팅마다 헤더를 매번 넣고 `OPTIONS` 메서드에 대한 라우팅도 따로 구현해야 합니다.

그러나, CORS 미들웨어를 통해 이 과정을 간단하게 처리할 수 있습니다.

```js
// cors 미들웨어 설치

npm install cors
```

```js
const cors = require("cors");

// 생략

// 모든 요청에 대해 CORS 허용
app.use(cors());

// 생략

// 특정 요청에 대해 CORS 허용

app.get("/products/:id", cors(), function (request, response, next) {
  res.json({ msg: "This is CORS-enabled for a Single Route" });
});
```

### 🖥️ Case 3. 모든 요청에 대해 url이나 메서드 확인할 때

 <img src="https://postfiles.pstatic.net/MjAyMzA2MDJfMTA1/MDAxNjg1Njg0NjgzMDQ0.-sP1661wp0Rt3U9UkK2GuR0iFKIafPyiz-ZXZr34-R8g.SON7Ycmt4AqcLB8KEYjbZK7CF8wIrCaZWqBYzMzRBwMg.PNG.dkdnmju/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7_2023-06-02_144400.png?type=w773">

<출처 : 코드스테이츠>

endpoint가 `/`면서, 클라이언트로부터 `GET` 요청을 받았을 때 적용되는 미들웨어를 의미하고, 파라미터 순서에 유의해야 합니다. `req`, `res`는 요청(request), 응답(response)를 의미하며, `next`는 다음 미들웨어를 실행하는 역할을 수행합니다.

모든 요청에 동일한 미들웨어를 적용할 때는 `app.use` 메서드를 사용합니다.

```js
// use 메서드로 모든 요청에 대하여 미들웨어를 적용

const express = require("express");
const app = express();

const myLogger = function (req, res, next) {
  console.log("LOGGED");
  next();
};

app.use(myLogger);

app.get("/", function (req, res) {
  res.send("Hello World!");
});

app.listen(3000);
```

### 🖥️ Case 4. 요청 헤더에 사용자 인증 정보가 담겨있는지 확인할 때

HTTP 요청에서 토큰(사용자 인증에 사용)이 있는지 판단하고, 이미 로그인한 사용자일 경우 성공, 아닐 경우 에러 보내는 미들웨어

```js
app.use((req, res, next) => {
  // 토큰이 있는지 확인, 없으면 받아줄 수 없음.
  if (req.headers.token) {
    req.isLoggedIn = true;
    next();
  } else {
    res.status(400).send("invalid user");
  }
});
```
