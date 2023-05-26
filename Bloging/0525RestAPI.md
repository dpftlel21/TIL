# 1. Rest(Representational State Transfer) API

웹에서 사용되는 데이터나 자원을 HTTP URI로 표현하고, HTTP 프로토콜을 통해 요청와 응답을 정의하는 방식을 의미합니다.

### ✔️ REST API 디자인

<img src = "https://postfiles.pstatic.net/MjAyMzA1MjRfOTkg/MDAxNjg0OTM4MDk2NDc4.QBoTJ9I2yTdflY6GgVs8Xey2kWycPZFb2VrJXs9-tz0g.Y2T_5qNrArI9whpgrSQpXiLGnKAuINRH2E4iq4rGpCcg.PNG.dkdnmju/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7_2023-05-24_232057.png?type=w773" width = 350>

#### 🖥️ REST 성숙도 모델 - 0단계

0단계에서는 단순히 HTTP 프로토콜을 사용해도 되고, 이 경우 API를 REST API라고 할 수 없으며 0단계는 REST API를 작성하기 위한 기본 단계입니다.

#### 🖥️ REST 성숙도 모델 - 1단계

1단계에서는 개별 리소으와의 통신을 준수해야 합니다. 즉, 모든 자원은 개별 리소스에 맞는 엔드포인트를 사용해야 하며, 요청하고 받는 자원에 대한 정보를 응답으로 전달해야 합니다.

어떤 리소스를 변화시키는지 혹은 어떤 응답이 제공되는지에 따라 각기 다른 엔드포인트를 사용하기 때문에, 적절한 엔드포인트를 작성하는 것이 중요합니다.엔드포인트 작성 시에는 동사, HTTP 메서드, 혹은 어떤 행위에 대한 단어 사용은 지양하고, 리소스에 집중해 명사 형태의 단어로 작성하는 것이 바람직한 방법입니다.

요청에 따른 응답으로 리소스를 전달할 때에도 사용한 리소스에 대한 정보와 함께 리소스 사용에 대한 성공/실패 여부를 반환해야 합니다.

#### 🖥️ REST 성숙도 모델 - 2단계

2단계에서는 CRUD에 맞게 적절한 HTTP 메서드를 사용하는 것에 중점을 둡니다. 조회(Read)를 위해서 `GET` 메서드를 사용하여 요청을 보내고, `GET` 메서드는 body를 가지지 않기 때문에 query parameter를 사용하여 필요한 리소스를 전달합니다.

생성(Create)을 하기 위해서는 `POST`메서드를 사용하여 요청을 보내고, POST 요청에 대한 응답이 어떻게 반환되는지가 중요합니다. 이때 응답은 새롭게 생성된 리소스를 보내주기 때문에, 응답 코드는 201 Created로 명확하게 작성해야 하며, 관련 리소스를 클라이언트가 Location 헤더에 작성된 URI를 통해 확인할 수 있도록 하면 완벽하게 REST 성숙도 모델의 2단계를 충족한 것이라고 볼 수 있습니다.

#### 🧐 HTTP 메서드 사용시 주의사항

- `GET` 메서드는 서버의 데이터를 변화시키지 않는 요청에 사용

- `POST` 메서드는 요청마다 새로운 리소스를 생성, `PUT` 메서드는 요청마다 같은 리소스를 반환하며 이렇게 매 요청마다 같은 리소스를 반환하는 특징을 `멱등(idempotent)하다`라고 표현

  그렇기 때문에 멱등성을 가지는 메서드 PUT과 그렇지 않은 메서드 POST는 구분하여 사용

-` PUT` 메서드와 `PATCH` 메서드도 구분하여 사용, PUT은 교체, PATCH는 수정의 용도로 사용

#### 🖥️ REST 성숙도 모델 - 3단계

하이퍼미디어 컨트롤을 적용하고, 3단계의 요청은 2단계와 동일하지만, 응답에는 리소스의 URI를 포함한 링크 요소를 삽입하여 작성해야 합니다. 이때 응답에 들어가게 되는 링크 요소는 응답을 받은 다음에 할 수 있는 다양한 액션들을 위해 많은 하이퍼미디어 컨트롤을 포함하고 있습니다.

---

### ✔️ Open API & API Key

#### ⭐ Open API

정부에서 제공하는 공공데이터가 있는데, 공공데이터에 쉽게 접근할 수 있도록 정부는 Open API의 형태로 공공데이를 제공하고 있습니다. https://www.data.go.kr/ 에 접속해 원하는 키워드를 검색하고 해당 관련된 API를 확인할 수 있습니다. 단, API마다 이용 수칙이 있고, 수칙에 따라 제한사항(가격, 정보)이 존재합니다.

Open Weather Map이라는 웹 싸이트에서 제공하는 날씨 API가 있는데, 여기서 제한적이나마 무료로 날씨API를 사용할 수 있고, 데이터를 JSON 형태로 응답합니다.

#### ⭐ API Key

API를 이용하기 위해서는 API Key가 필요하며, 서버를 운용하는 데에 비용이 발생하기 때문에 서버 입장에서 아무런 조건 없이 익명의 클라이언트에게 데이터를 제공할 의무는 없습니다. (가끔 API key가 필요하지 않은 경우도 있습니다.)

API Key가 필요한 경우에는 로그인한 이용자에게 자원에 접근할 수 있는 권한을 API Key의 형태로 제공하고, 데이터를 요청할 때 API key를 같이 전달해야 원하는 응답을 받을 수 있습니다.

---

### 🖥️ Postman

웹 개발에서 사용하는 대표적인 클라이언트는 브라우저입니다. 브라우저는 서버에 HTTP 요청을 보낼 수 있는 훌륭한 도구이지만, 주로 웹 페이지를 받아오는 GET 요청에 사용합니다. 브라우저의 주소창에 URL을 입력하면, 해당 URL의 root-endpoint로 GET 요청을 보냅니다. 테스트를 위해 GET 요청이 아닌 다른 요청을 보내려면, 개발자 도구의 콘솔 창에서 Web API fetch를 사용해야 합니다.

#### ⭐ GET 요청

<img src = "https://postfiles.pstatic.net/MjAyMzA1MjVfMjkw/MDAxNjg0OTkwNjMwNjgw.r_pY1Xj2Eh8CHe8ct42zYZV0EkbtRDPK1243pKWc8KAg.rZFMtLPyGm9QJj64Q7JaGrdxyZhiHLh3BdaG2QQY-fwg.PNG.dkdnmju/%EC%BA%A1%EC%B2%98.png?type=w773">

1. 새로운 탭 오픈

   요청/응답을 여러 개 확인 O

2. HTTP 메서드 선택

   GET, POST, DELETE 등과 같은 메서드 중 하나 선택

3. URL 입력창

   URL과 Endpoint를 입력

   - API 문서에 따르면, `http://3.36.72.17:3000/kimcoding/messages` 와 같이 입력

4. HTTP 요청 버튼

   요청 보내기

5. HTTP 요청 시 설정할 수 있는 각종 옵션

   추가적인 파라미터나, 요청 본문(body) 추가 O

   - API 문서에서 확인할 수 있듯이, `roomname`이라는 파라미터를 사용할 수 있고, 필수는 아니지만, 파라미터를 사용하려면 Params 탭의 KEY, VALUE에 각각 `roomname`과 필요한 값을 입력

6. HTTP 응답 화면

   요청을 보낸 후 응답을 확인

#### ⭐ POST 요청

<img src ="https://postfiles.pstatic.net/MjAyMzA1MjVfMiAg/MDAxNjg0OTkxODEyMDM3.0k23lZd3PG8GcgcxD0_90ZFMATO05upXX7MQjfxiRl0g.w5LTPQUPWM5NL9BPeRSTQFuTJK--SOTktEAF4TpgdBog.PNG.dkdnmju/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7_2023-05-25_141356.png?type=w773">

1. 본문의 형식 선택 (1)

   JSON 형식으로 보낼 떄에는, `raw` 를 선택

2. 본문의 형식 선택 (2)

   보낼 형식에 맞게 정확한 타입 선택

   - HTTP 요청 헤더 작성

   ```
   Content-Type: application/json
   ```

3. 본문 내용

   본문을 입력하고 앞서 JSON을 선택했으므로, 유효한 JSON을 적기 !

   - API 문서에 따라` username, text, roomname`을 형식에 맞게 적기 !

#### 😀 api 실습!

_✔️ 깃 허브를 이용한 api 조회_

<img src ="https://blogfiles.pstatic.net/MjAyMzA1MjZfMjM1/MDAxNjg1MDc0MDA3NDA3.sSB7JZWCOwsO2fXt7bHMc_2osUAGRJZLZa8ggO-es3gg.aBL6B7FuXJXGfysLQGOPakAQ4M93H-sGdiMAfZQ6aG0g.PNG.dkdnmju/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7_2023-05-26_130430.png">

1. HTTP 메서드인 GET 선택

2. `http://ec2-43-201-33-50.ap-northeast-2.compute.amazonaws.com` 서버 주소 입력

3. 서버 주소 뒤에 `/github ID/messages` 입력

4. `send`버튼을 눌러 조회하기 !

   응답은 JSON형식이며, 파라미터(query parameter) 사용 o (ex - /kimcoding/messages?roomname=로비)

_✔️ 깃 허브를 이용한 메시지 추가_

<img src = "https://postfiles.pstatic.net/MjAyMzA1MjZfMTY5/MDAxNjg1MDc0MDA3NDE4.ZX8WZQ8mSNL3S6xk5l8wWznMCcejLtLFWC8nly_5yXcg.jusRV1w4ZKvOyhefvZHhsVuSCkT1fc3lpRc6R7_waNkg.PNG.dkdnmju/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7_2023-05-26_130604.png?type=w773">

1. HTTP 메서드인 POST 선택

2. `http://ec2-43-201-33-50.ap-northeast-2.compute.amazonaws.com` 서버 주소 입력

3. 서버 주소 뒤에 `/github ID/messages` 입력

4. JSON으로 형식을 바꾸고, 추가할 내용 입력하기!

5. `send`버튼을 눌러 조회하기 !

   응답은 JSON 형식이고, id는 숫자형식이며, 새로 생성된 메시지의 고유한 ID값

#### 😀 날씨 api 실습! (Open Weather Map에 날씨를 요청(GET)하고, 응답을 확인)

<img src ="https://postfiles.pstatic.net/MjAyMzA1MjZfMjQg/MDAxNjg1MDc0MDA3MzYw.iD8ZtgSySDDGfDnvBbddOKitgdscwrF8O8hryejxx_4g.6BkBBo-zVM50mUt6sCauiBr5R_WTqDJJiw7ftxD0pDEg.PNG.dkdnmju/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7_2023-05-26_130225.png?type=w773">

1. Open Weather Map에 접속하고, `MY API Keys`에 있는 본인 API를 확인하고, 상단 내비게이션 바의 `API`를 클릭하여 사용할 수 있는 API리스트를 확인하고 가져옵니다.

```
api.openweathermap.org/data/2.5/weather?id={city id}&appid={your api key}
```

2. 위와 같이 자신이 선택한 API의 id를 {city id}에 {} 제거 후 적고, 마찬가지로 {your api key}도 주석을 제거하고 본인 API의 주소를 적습니다.

3. 브라우저 최상단 주소 입력칸에 위의 코드를 적고, 엔터키를 누르면 결과물이 나옵니다!

#### 😀 날씨 api 실습! (Open Weather Map에 날씨를 요청(GET)하고, 응답을 확인) - POSTMAN

<img src ="https://postfiles.pstatic.net/MjAyMzA1MjZfMTgy/MDAxNjg1MDc0MDA3NDI5.ugqa2jGnDE-JPbpavQm3SMkrjjppRo7qjrJX5rpD488g.2JqMsNCgzRyGp73Rzsg8-PUDl7rizZYCUPNBeND27Xcg.PNG.dkdnmju/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7_2023-05-26_130146.png?type=w773">


#### * RESPONSE 

```json
{
  "coord": {
    "lon": 126.9778,
    "lat": 37.5683
  },
  "weather": [
    {
      "id": 804,
      "main": "Clouds",
      "description": "overcast clouds",
      "icon": "04d"
    }
  ],
  "base": "stations",
  "main": {
    "temp": 298.81,
    "feels_like": 298.29,
    "temp_min": 295.84,
    "temp_max": 298.81,
    "pressure": 1019,
    "humidity": 33,
    "sea_level": 1019,
    "grnd_level": 1012
  },
  "visibility": 10000,
  "wind": {
    "speed": 3.4,
    "deg": 247,
    "gust": 3.55
  },
  "clouds": {
    "all": 100
  },
  "dt": 1685074382,
  "sys": {
    "type": 1,
    "id": 5509,
    "country": "KR",
    "sunrise": 1685045746,
    "sunset": 1685097760
  },
  "timezone": 32400,
  "id": 1835848,
  "name": "Seoul",
  "cod": 200
}
```

1. HTTP 메서드 GET을 선택합니다.

2. 다음과 같이 API 키 및 주소를 적습니다.

```
api.openweathermap.org/data/2.5/weather?id={city id}&appid={your api key}
```

3. send 버튼을 눌러 조회합니다!

4. 날씨 받아오기 성공
