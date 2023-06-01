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
