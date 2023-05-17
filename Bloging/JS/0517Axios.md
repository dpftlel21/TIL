# 1. Axios


### ✔️ fetch API

특정 URL로부터 정보를 받아오며 이 과정이 비동기로 이루거지기 때문에, 경우에 다라 다소 시간이 걸릴 수 있습니다. 이렇게 시간이 소요되는 작업 요구 시 blocking이 발생하면 안 되므로, 특정 DOM에 정보가 표시될 때까지 로딩창을 대신 띄우는 경우도 있습니다.

- fetch API를 통해 데이터 요청

```js
let url =
  "https://koreanjson.com/posts/1";
fetch(url)
  .then((response) => response.json())
  .then((json) => console.log(json))
  .catch((error) => console.log(error));
```


### ✔️ Axios

브라우저, Node.js 를 위한 Promise API를 활용하는 HTTP 비동기 통신 라이브러리입니다. 

| Axios| Fetch API|
| :--: | :--: |
| 써드파티 라이브러리로 설치 필요| 빌트인 API라 별도 설치 x|
| 자동으로 JSON데이터 형식으로 변환 | .json() 메서드 사용|


-  axios 설치
```
npm install axios
```

- GET 요청

일반적으로 정보 요청을 위해 사용하는 메서드, 첫 번째 인자에 url 주소, 두 번째 인자에 요청 시 사용할 수 있는 옵션을 설정합니다.

```
axios.get("url", [,config])
```

- POST 요청

서버에 데이터를 보내기 위해 사용하는 메서드, 첫 번째 인자에 url주소, 두 번째 인자에 요청시 보낼 데이터를 설정합니다.
```
axios.post("url"[, data[, config]])
```

