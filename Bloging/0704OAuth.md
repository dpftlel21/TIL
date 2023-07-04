# 1. OAuth

유저 입장에서 생각해보면, 우리는 웹상에서 굉장히 많은 서비스를 이용하고 있고 각각의 서비스들을 이용하기 위해서는 회원가입 절차가 필요한 경우가 대부분입니다. 각각의 서비스별로 ID와 Password를 다 기억하는 것은 매우 귀찮은 일입니다.

하지만 OAuth를 황용하면 자주 사용하고 중요한 서비스들(예를 들어 google, github, facebook)의 ID와 Password만 기억해 놓고 해당 서비스들을 통해서 외부 서비스로 소셜 로그인을 할 수 있습니다.

또한, 검증되지 않은 App에서 OAuth를 사용하여 로그인한다면, 유저의 민감한 정보가 직접 App에 노출될 일이 없고 인증 권한에 대한 허가를 미리 유저에게 구해야 하기 때문에 더 안전하게 사용할 수 있습니다.

---

### ✔️ OAuth 작동 메커니즘

#### 😀 OAuth 주체


<span style="color:#90caf9"><strong> Resource Owner (사용자) </strong></span>

- OAuth 인증을 통해 소셜 로그인을 하고 싶어하는 사용자

- 사용자의 이름, 전화번호 등의 뜻 의미, 이러한 정보의 주인이 사용자이기에 Resource Owner라고 칭함

<span style="color:#90caf9"><strong> Resource Server & Authorization Server </strong></span>

- 사용자가 소셜 로그인을 하기 위해서 사용하는, 이미 사용 중인 서비스(Naver, Kakao, Google 등)의 서버 중 사용자의 정보를 저장하고 있는 서버를 특정해서 Resource Server라고 부름

- 이미 사용 중인 서비스의 서버 중 인증을 담당하는 서버를 특정해서 Authorization Server라고 부름

<span style="color:#90caf9"><strong> Application </strong></span>

- 사용자가 소셜 로그인을 활용해 이용하고자 하는 새로운 서비스

- 경우에 따라  Client와 Server로 세분화해서 지칭하기도 함

---

### ✔️ OAuth 인증 방식의 종류와 흐름

- Grant Type : Authorization Server에서 Access Token을 받아오는 방식

#### 😀 Implicit Grant Type

<img src = "https://postfiles.pstatic.net/MjAyMzA3MDRfMTMw/MDAxNjg4NDQ1MDg0OTU5.CJjAO3m9zpZRuL0m_CBwpoj_8eBo4PCSV8giLaO4gdQg.ofeDoUUghlSLfCEQjRMOtcb4nXLMyiA5ewfa7TjHm90g.PNG.dkdnmju/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7_2023-07-04_133045.png?type=w773" width = 400>

소셜 로그인에서 Implicit Grant Type은 잘 사용하지 않습니다. 기존 서비스에 로그인만 되어있다면 새로운 서비스에 바로 액세스 토큰을 내어주기 때문에 보안성이 조금 떨어지기 때문입니다.

#### 😀 Authorization Code Grant Type

<img src = "https://postfiles.pstatic.net/MjAyMzA3MDRfMjAg/MDAxNjg4NDQ1Mzk2NDk3.F0o5n5h1aMIlRrLqebTjgEza4VkOIWhBdHj2ZajilpYg.PYnPQkMIYukD7PEZ-1iTvv0twJiYY99m8muK6Km0hbYg.PNG.dkdnmju/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7_2023-07-04_133625.png?type=w773" width = 400>

Authorization Code를 사용한 인증 단계가 추가로 있기 때문에 비교적 더 안전합니다. 또한, 원한다면 아래와 같이 토큰을 Application의 Client에 노출시키지 않고 Server에서만 관리하도록 만들 수도 있기 때문에 소셜 로그인을 구현하는 방식의 선택지가 늘어나게 됩니다.

#### 😀 Refresh Token Grant Type

<img src = "https://postfiles.pstatic.net/MjAyMzA3MDRfNDIg/MDAxNjg4NDQ1MDg0OTkw.vinpQc1vPz_FDuqOci1F6CWVgYpUrSD3_0Lu5t2gh24g.ivF_fekQwSHnL-r6i25gJX1Z9PnJS_kCivObbt0ATm4g.PNG.dkdnmju/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7_2023-07-04_133102.png?type=w773" width = 400>

사용자가 새로운 서비스를 이용하다가 액세스 토큰이 만료되었을 때, 매번 이 과정을 거쳐서 액세스 토큰을 다시 발급받아야 한다면 사용자 편의성에 있어서는 좋지 않습니다. 그렇기 때문에 액세스 토큰을 발급해 줄 때 리프레시 토큰을 같이 발급해주기도 합니다. 이때, 리프레시 토큰을 사용해서 액세스 토큰을 받아오는 인증 방식을 Refresh Token Grant Type이라고 합니다.

Authorization Server로 리프레시 토큰을 보내주면, Authorization Server는 리프레시 토큰을 검증한 다음 액세스 토큰을 다시 발급해 주게 됩니다. Application은 다시 발급받은 액세스 토큰을 사용해서 Resource Server에서 사용자의 정보를 받아오게 됩니다.

---

###  ✔️ OAuth의 장점

1. 쉽고 안전하게 새로운 서비스 이용 가능

2. 권한 영역 설정 가능

---

참고 자료 및 그림 출처 : 코드스테이츠