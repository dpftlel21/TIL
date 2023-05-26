# 1. Client Server Architecture

### ✔️ Client Server Architecture 란?

빈번한 데이터 업데이트가 필요한 경우, 리소스가 존재하는 곳과 리소스를 사용하는 앱을 분리시키는 것을 2-Tier 아키텍처 또는 클라이언트 서버 아키텍처라고 부릅니다. 이때, 리소스를 사용하는 앱이 클라이언트, 리소스를 제공하는 곳을 서버라고 부릅니다.

클라이언트와 서버는 요청과 응답을 주고받는 관계이며 클라이언트 서버 아키텍처에서는 요청이 선행되고 그 후에 응답이 옵니다.

일반적으로 서버는 리소스를 전달해 주는 역할만 담당하고, 리소스를 저장하는 공간을 별도로 마련해 두는데 이 공간 (창고)을 Data Base라고 부릅니다. 기존의 2티어 아키텍처에 데이터베이스가 추가된 형태를 3티어 아키텍처라고 부릅니다. 

클라이언트 앱은 사용자가 눈으로 보고 대면하며 프론트엔드 영역이라고 표현하고, 서버 앱은 사용자 눈에는 직접 보이지 않지만 뒤에서 작동하므로 백엔드 영역이라고 표현합니다.

클라이언트는 보통 플랫폼에 따라 구분되고, 브라우저를 통해 주로 이용하는 웹 플랫폼에서의 클라이언트는 웹사이트 혹은 웹 앱이라고 부릅니다. IOS나 안드로이드와 같은 스마트폰/태블릿 플랫폼, 윈도우와 같은 데스크탑 플랫폼에서 이용하는 앱도 클라이언트에 포함됩니다.

---

### ✔️ 클라이언트 서버 통신과 API

카페에서 손님이 커피를 주문해야 직원이 커피를 내려주듯이, 클라이언트가 요청을 해야 서버에서 응답이 옵니다. 통신을 알기전에 `프로토콜`에 대해 알아보겠습니다. `프로토콜`은 통신규약 즉, 약속입니다. 손님이 커피를 주문할 때 아무 말이나 써서 주문을 할 수 없듯이 주문을 하기 위해서 필요한 약속을 지켜야합니다.

웹 애플리케이션 아키텍처에서는 클라이언트와 서버가 서로 HTTP라는 프로토콜을 이용해서 서로 대화를 나누며 이 때 HTTP를 이용해 주고받는 메시지를 HTTP 메시지라 부릅니다.

<img src ="https://postfiles.pstatic.net/MjAyMzA1MjNfMjQx/MDAxNjg0ODA3MzA3Mjkw.0cR0ryYVQsE7g8JqfQIxGZcSa3J1sb26WhqbpCBMsuwg.aHoR2JMTgahfvQ0s6AAa15bcsdMnPWj5KkPMQMeF52Ag.JPEG.dkdnmju/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7_2023-05-23_110117.jpg?type=w773" width =450 height = 350>

<출처 : 코드스테이츠>

서버는 클라이언트에게 리소스를 잘 활용할 수 있도록 인터페이스를 제공해 줘야하는데 이를 API(Application Programming Interface)라고 합니다. Interface는 의사소통이 가능하도록 만들어진 접점 즉, 식당에서의 메뉴판과 같은 역할이라고 보시면 됩니다. 다만 API는 앱이 요청할 수 있고 프로그래밍 가능한 인터페이스라는 점이 다릅니다. 

보통 인터넷에 있는 데이터를 요청할 때 HTTP 프로토콜을 사용하며, 주소(URL, URI)를 통해 접근할 수 있습니다. HTTP 요청시 메서드를 지정하여 리소스와 관련된 행동 CRUD를 지정할 수 있습니다.

| 요청 | 적절한 메소드|
| :--: | :--:|
| C(Create) | POST|
| R(Read) | GET|
| U(Update) | PUT 또는 PATCH|
| D(Delete) | DELETE|

HTTP 메소드는 CRUD 행동에 따라 목적에 맞게 써야합니다.

---

### ✔️ 브라우저의 작동 원리 (보이지 않는 곳)

CLI환경에서 폴더와 파일의 위치를 찾아 이동하듯이, 슬래시(/)를 이용해 서버의 폴더에 진입하거나 파일을 요청할 수 있습니다. 

`URL(Uniform Resource Locator)`은 네트워크 상에서 웹 페이지, 이미지, 동영상 등의 파일이 위치한 정보를 나타냅니다. 

`URI(Uniform Resource Identifier)`는 URL의 기본 요소인 scheme, hosts, url-path에 더해 query, fragment를 포함합니다  fragment는 일종의 북마크 기능을 수행하며 URL에 fragment(#)와 특정 HTML 요소의 id를 전달하면 해당 요소가 있는 곳으로 스크롤을 이동할 수 있습니다.


| 명칭 | 부분| 설명 |
| :--: | :--:| :--:|
| scheme | `file://`, `http://`, `https://` | 통신 프로토콜|
| hosts | `127.0.0.1(로컬 PC)`, `www.google.com`| 웹 페이지, 이미지, 동영상 등 파일이 위치한 웹 서버, 도메인 또는 IP|
| port | `:80`, `:443`, `:3000`| 웹 서버 접속(서버 진입)하기 위한 통로|
| url-path | `/search`, `/Users/username/Desktop`| 웹 서버의 루트 디렉토리로 부터 웹 페이지, 이미지, 동영상 등 파일이 위치까지의 경로|
| query | `q=JavaScript`| 웹 서버에 전달하는 추가 질문


#### 📝 IP와 포트 (보이지 않는 곳)

네트워크에 연결된 특정 PC의 주소를 나타내는 체꼐를 IP address(Internet Protocol address, IP 주소)라고 합니다. IP(Internet Protocol)는 인터넷상에서 사용하는 주소체계를 의미합니다. 인터넷에 연결된 모든 PC는 IP 주소체계를 따라 네덩이의 숫자로 구분되며 이렇게 네 덩이의 숫자로 구분된 IP 주소체계를 IPv4( Internet Protocol version 4, IP 주소체계의 네 번째 버전)라고 합니다. 

<img src="https://postfiles.pstatic.net/MjAyMzA1MjNfMTMz/MDAxNjg0ODEwMTM5ODU1.yjXq8N6ZHN9TrXpfBhNCwez-cJKw9Ab9HqH5bq06Pf0g.PlxK8RU52rXBZ-d8ygYHlNVQO0EuilHOfTayjygG4qYg.PNG.dkdnmju/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7_2023-05-23_114841.png?type=w773">

```
nsllokup 주소
```
를 통해 IP 주소 확인이 가능합니다. IPv4는 각 덩어리마다 0부터 255까지 나타낼 수 있습니다. 따라서 2^(32)인 약 43억 개의 IP 주소를 표현할 수 있습니다. 그중에서 몇 가지는 이미 용도가 정해져 있습니다.

- `localhost, 127.0.0.1` : 현재 사용 중인 로컬 PC를 지칭합니다.

터미널에서 리액트를 실행하면 나타나는 화면에 로컬 PC의 IP주소인 `127.0.0.1` 뒤에 `:3000`과 같은 숫자가 표현됩니다. 이 숫자는 IP 주소가 가리키는 PC에 접속할 수 있는 통로(채널)를 의미합니다. 포트 번호는 `0~ 65535`까지 사용할 수 있습니다. 그중에서 0 ~ 1024번까지의 포트 번호는 주요 통신을 위한 규약에 따라 이미 정해져 있습니다.

- 22 : SSH
- 80 : HTTP
- 443: HTTPS

이미 정해진 포트 번호라도, 필요에 따라 자유롭게 사용이 가능하며, HTTP(:80), HTTPS(:443)과 같은 경우 포트 번호를 URL에 생략할 수 있지만 잘 알려지지 않은 포느는 반드시 포트 번호를 포함해야 합니다.

#### 📝 도메인과 DNS (보이지 않는 곳)

도메인 이름은 해당 주소에 위치한 상호로 볼 수 있으며, IP 주소 자체가 한 눈에 파악하기 힘들기 때문에 도메인 이름을 이용하여 간단하게 나타낼 수 있습니다. 앞서 IP, PORT에서 본 사진에서 `naver.com`이 해당됩니다.

브라우저의 검색창에 도메인 이름을 입력하여 해당 사이트로 이동하기 위해 해당 도메인 이름과 매칭된 IP 주소를 확인하는 작업이 반드시 필요한데 네트워크에는 이를 위한 서버가 존재합니다. 이를 DNS (Domain Name System)이라고 합니다.

DNS는 호스트의 도메인 이름을 IP 주소로 변환하거나 반대의 경우를 수행할 수 있도록 개발된 데이터베이스 시스템입니다. 만약 브라우저의 검색창에 naver.com을 입력한다면, 이 요청은 DNS에서 IP 주소(ex.125.209.222.142)를 찾습니다. 그리고 이 IP 주소에 해당하는 웹 서버로 요청을 전달하여 클라이언트와 서버가 통신할 수 있도록 합니다.

#### 📝 크롬 브라우저 에러 읽기

Aw, Snap ! (앗, 이런!) 에러 메시지

웹페이지 대신 '앗, 이런!' 에러 페이지 또는 다른 에러 메시지가 표시된다면, Chrome 브라우저가 웹 페이지를 로드하는 데에 문제가 발생한 경우입니다. 이 경우 페이지가 느리게 로드되거나, 열리지 않을 수도 있습니다.

|Error Message| Description|
| :--: | :--: |
|"Aw, Snap!" ("앗, 이런!")|Chrome 브라우저에서 페이지를 로드하는 데 문제가 발생|
|ERR_NAME_NOT_RESOLVED|호스트 이름(웹 주소)이 존재 x|
|ERR_INTERNET_DISCONNECTE|사용 중인 기기가 인터넷에 연결x|
|ERR_CONNECTION_TIMED_OUT, ERR_TIMED_OUT|페이지에 연결하는 데 시간이 너무 오래 걸림, 인터넷 연결이 너무 느리거나, 웹페이지에 접속한 사용자가 많아서 발생|
|ERR_CONNECTION_RESET|웹페이지 연결을 방해하는 요소가 어딘가에 발생|
|ERR_NETWORK_CHANGED|웹페이지를 로드하는 중에 기기의 네트워크 연결이 해제되었거나, 새로운 네트워크에 연결|
|ERR_CONNECTION_REFUSED|웹페이지에서 Chrome 브라우저의 연결을 허용 x|
|ERR_CACHE_MISS|웹페이지로부터 이전에 입력한 정보를 다시 한번 제출하도록 요청|
|ERR_EMPTY_RESPONSE|웹페이지에서 데이터를 전혀 전송하지 않았으며, 데이터를 전송할 서버가 다운|
|ERR_SSL_PROTOCOL_ERROR|페이지에서 전송된 데이터를 Chrome 브라우저가 해석 x|
|ERR_BAD_SSL_CLIENT_AUTH_CERT|클라이언트 인증서(은행 또는 회사 내부 웹사이트 등)에 오류가 발생하여 웹페이지에 로그인 x|