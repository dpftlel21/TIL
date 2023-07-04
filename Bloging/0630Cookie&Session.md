# 1. Cookie 와 Session

### ✔️ Cookie

쿠키는 서버에서 클라리언트 영속성에 있는 데이터를 저장하는 방법입니다. 서버는 클라이언트의 쿠키를 이용하여 데이터를 가져올 수 있습니다. 쿠키를 이용하는 것은 단순히 서버에서 클라이언트에 쿠키를 전송하는 것 뿐만아니라 클라이언트에서 서버로 쿠키를 다시 전송하는 것도 포함됩니다.

#### ⭐ 쿠키는 서버가 클라이언트에 특정한 데이터를 저장할 수 있습니다.

서버는 쿠키를 이용하여 데이터를 저장 및 사용할 수 있는데 데이터를 저장하고 아무 때나 데이터를 가져올 수는 없습니다. 데이터를 저장한 이후 특정 조건들이 만족되어야 다시 가져올 수 있기 때문입니다.

특정 조건들은 다음과 같이 http 헤더를 사용하여 쿠키 옵션으로 표현할 수 있습니다.

```js
'Set-Cookie':[
            'cookie=yummy',
            'Secure=Secure; Secure',
            'HttpOnly=HttpOnly; HttpOnly',
            'Path=Path; Path=/cookie',
            'Domain=Domain; Domain=codestates.com'
        ]
```

#### 📝 쿠키 옵션 종류

<span style="color:#90caf9"><strong>😀 Domain</strong></span>

도메인은 `www.naver.com`과 같은 서버에 접속할 수 있는 이름을 의미하며, 쿠키 옵션에서 도메인은 포트 및 서브 도메인 정보, 세부 경로를 포함하지 않습니다. 서브 도메인은 `www` 처럼 도메인 앞에 추가로 작성되는 부분을 의미합니다.

따라서 요청해야 할 URL이 `http://www.localhost.com:3000/users/login`이라 하면 여기에서 Domain은 `localhost.com`이 됩니다.

만약 쿠키 옵션에서 도메인 정보가 존재한다면 클라이언트에서는 쿠키의 도메인 옵션과 서버의 도메인이 일치해야만 쿠키를 전송할 수 있습니다. 이를 통해 `naver.com`에서 받은 쿠키를 `google.com`에 전송하는 일을 막을 수 있습니다.

<span style="color:#90caf9"><strong>😀 Path</strong></span>

`Path`는 세부 경로로써 서버가 라우팅할 때 사용하는 경로를 의미하며, 만약 요청해야 하는 URL이 `http://www.localhost.com:3000/users/login`인 경우라면 여기에서 Path는 `/users/login`이 됩니다. 이를 명시하지 않으면 기본적으로 `/`으로 설정되어 있습니다.

설정된 경로를 포함하는 하위 경로로 요청을 하더라도 쿠키를 서버에 전송할 수 있는 특징을 가지고 있습니다. 즉, `Path`가 `/users`로 설정되어 있고, 요청하는 세부 경로가 `/users/codestates`인 경우라면 쿠키 전송이 가능합니다.

<span style="color:#90caf9"><strong>😀 MaxAge or Expires</strong></span>

`MaxAge`는 쿠키가 유효한 시간을 초 단위로 설정하는 옵션이며, 마치 쿠키에게 시한부 옵션을 주는 것과 비슷합니다.

`Expires`는 언제까지 쿠키가 유효한지 심판의 날을 지정할 수 있습니다. 이때 옵션 값은 클라이언트의 시간을 기준으로 합니다. 이후 지정된 시간, 날짜를 초과하면 쿠키는 자동으로 소멸합니다.

👀 세션 쿠키 vs 영속성 쿠키

- 세션 쿠키 : MaxAge 또는 Expires 옵션이 없는 쿠키로, 브라우저가 실행 중일 때 사용할 수 있는 임시 쿠키입니다. 브라우저를 종료하면 해당 쿠키는 삭제됩니다.

- 영속성 쿠키 : 브라우저의 종료 여부와 상관없이 MaxAge 또는 Expires에 지정된 유효시간만큼 사용가능한 쿠키입니다.

<span style="color:#90caf9"><strong>😀 Secure</strong></span>

사용하는 프로토콜에 따른 쿠키의 전송 여부를 결정하는 옵션입니다. 만약 `secure` 옵션이 `true`로 설정된 경우 HTTPS를 이용하는 경우에만 쿠키를 전송할 수 있습니다.

Secure 옵션이 없다면 프로토콜에 상관없이 `http://www.codestates.com` 또는 `https://www.codestates.com`에 모두 쿠키를 전송할 수 있습니다. 단, 도메인이 localhost인 경우에는 HTTPS가 아니어도 쿠키 전송이 가능합니다.

<span style="color:#90caf9"><strong>😀 HttpOnly</strong></span>

자바스크립트로 브라우저의 쿠키에 접근이 가능한지 여부를 결정합니다. 만약 해당 옵션이 `true`인 경우 자바스크립트로 쿠키에 접근이 불가합니다. 옵션을 명시하지 않는 경우에는 `false`로 지정되고, 만약 `false`인 경우 document.cookie를 이용해 자바스크립트로 쿠키에 접근할 수 있으므로 쿠키가 탈취될 위험이 있습니다.

<span style="color:#90caf9"><strong>😀 SameSite</strong></span>

Cross-Site 요청을 받은 경우, 요청에서 사용한 메서드(e.g. GET, POST, PUT, PATCH …)와 해당 옵션의 조합을 기준으로 서버의 쿠키 전송 여부를 결정하게 됩니다.

- Cross-Origin : 서버의 도메인, 프로토콜, 포트 중 하나라도 다른 경우 Cross-Origin으로 구분됩니다.

- Cross-Site : eTLD+1이 다른 경우 Cross-Site로 구분됩니다.

  ##### 🤔 eTLD+1 ??

  TLD(Top Level Domain, 최상위 도메인): .com, .org, .kr, .io 같이 도메인의 가장 마지막 부분을 의미합니다.

  eTLD(Effective Top-Level Domain, 유효 최상위 도메인): 사이트를 식별할 수 있을 만큼 세분화된 TLD를 말합니다. .com, .org와 같은 TLD는 그 자체로도 eTLD로 판단하며, .kr, .io 같은 TLD는 하위 도메인을 하나 더 더한 .co.kr, .github.io등을 eTLD라고 판단합니다.

  eTLD+1: eTLD 바로 왼쪽의 하위 레벨 도메인을 합한 것을 말합니다.

##### 🧐 SateSite 옵션에서 사용 가능한 속성

1. Lax : Cross-Site 요청이라면 GET 메서드에 대해서만 쿠키를 전송할 수 있습니다.

2. Strict : 단어 그대로 가장 엄격한 옵션으로, Cross-Site가 아닌 Same-Site인 경우에만 쿠키를 전송할 수 있습니다.

3. None : Cross-Site에 대해 가장 관대한 옵션으로 항상 쿠키를 보내줄 수 있습니다. 다만 쿠키 옵션 중 Secure 옵션이 필요합니다.

---

### ✔️ Session

#### 😀 로그인

<img src = "https://postfiles.pstatic.net/MjAyMzA2MzBfMiAg/MDAxNjg4MTEyODIzNTIy.v-ghIGZsFS8AgW_L5VXcod_XbsCKlAgreInYK95QiJMg.T2jrK57Xq9I1A6gNqc9nc8KXfW4MSl8TBB8mBLmlhCEg.PNG.dkdnmju/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7_2023-06-30_171312.png?type=w773" width = 450 height = 250>

사용자가 만일 정확한 아이디와 비밀번호를 입력했다면, 서버는 인증에 성공했다고 판단할 것입니다. 그리고 인증에 따라 리소스의 접근 권한이 달라집니다. 이때 서버는 사용자가 인증했음을 알고 있어야하며, 클라이언트는 인증 성공을 증명할 수단을 가지고 있어야 합니다.

여기서 사용자가 인증에 성공한 상태를 세션이라고 부릅니다. 서버는 일종의 저장소에 세션을 저장하며, 주로 in-memory(자바스크립트 객체) or 세션 스토어(redis 등과 같은 트랜잭션이 빠른 DB)에 저장합니다.

이때 웹사이트에서 로그인을 유지하기 위한 수단으로 쿠키를 사용합니다. 쿠키에는 서버에서 발급한 세션 아이디를 저장합니다.

쿠키를 통해 유효한 세션 아이디가 서버에 전달되고, (그림 5번) 세션 스토어에 해당 세션이 존재한다면 (그림에서 6번) 서버는 해당 요청에 접근 가능하다고 판단합니다. (그림 7,8번)

하지만 쿠키에 세션 아이디 정보가 없는 경우, 서버는 해당 요청이 인증되지 않았음을 알려줍니다.

#### 😀 로그아웃

세션 아이디가 담긴 쿠키는 클라이언트에 저장되어 있으며, 서버는 세션을 저장하고 있습니다. 그리고 서버는 그저 세션 아이디로만 인증 여부를 판단합니다. 쿠키는 세션 아이디, 즉 인증 성공에 대한 증명을 갖고 있으므로, 탈취될 경우 서버는 해당 요청이 인증된 사용자의 요청이라고 판단합니다. 이것이, 우리가 공공 PC에서 로그아웃해야 하는 이유입니다.

로그아웃을 수행할 때 서버는 세션 정보를 삭제해야 하고, 클라이언트는 쿠키를 변경하거나 삭제해야 합니다. 클라이언트에서 세션 정보를 없애기 위해서는 `res.cookie`로 쿠키의 값을 무효한 값으로 변경하거나, `res.clearCookie`로 쿠키를 삭제하면 됩니다.

#### 😀 express-session

`express-session`은 세션을 위한 미들웨어로, express 서버에서 쉽게 세션을 위한 공간을 다룰 수 있도록 만들어줍니다.

```js
const express = require("express");
const session = require("express-session");

const app = express();

app.use(
  session({
    secret: "@codestates",
    resave: false,
    saveUninitialized: true,
    cookie: {
      domain: "localhost",
      path: "/",
      maxAge: 24 * 6 * 60 * 10000,
      sameSite: "none",
      httpOnly: false,
      secure: true,
    },
  })
);
```

express-session를 사용해 위와 같이 세션의 옵션을 지정할 수 있습니다. 언뜻 보면 쿠키 옵션과 비슷해 보입니다. 하지만 세션의 경우 secret 옵션의 비밀키를 이용해 암호화해 세션 id라는 것을 생성합니다. 그리고 이것을 클라이언트에게 쿠키로 전송합니다.

쿠키로 전송된 세션 id는 이에 종속되는 고유한 세션 객체를 가지며 이는 서버에 저장됩니다. 이때 세션 객체는 유저별로 독립적으로 생성된 객체이므로 유저별로 각각 다른 데이터를 저장할 수 있습니다.

따라서 클라이언트에 유저의 개인정보를 담지 않고도 서버가 클라이언트의 세션 id를 이용해 유저의 인증여부를 판단할 수 있습니다.

세션 객체는 req.session으로 접근할 수 있으며 앞서 말했듯 이를 통해 세션에 임의의 데이터를 저장하거나 불러올 수 있습니다.

---

자료 및 사진 출처 : 코드스테이츠