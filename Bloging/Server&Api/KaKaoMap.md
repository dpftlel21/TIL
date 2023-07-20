# 1. 카카오 맵을 가져오자 !!

---

### <span style="color:#90caf9"><b>Step 1. React에서 카카오 맵 API 사용을 위해 싸이트에서 내 앱 등록</b></span>

[카카오 API 주소](https://developers.kakao.com/)

---

### <span style="color:#90caf9"><b>Step 2. 애플리케이션 추가</b></span>

- 추가하기 클릭

<img src = "https://postfiles.pstatic.net/MjAyMzA3MTlfMTc4/MDAxNjg5NzczMTA5Nzk4.rCmV-3syF8KLczEMMpma20NmShga0xEYRe-no7kO4MEg.xbGxQiu9Y03uyhiLqUV7T5NBCqKDrT4E9jQcmUjpDnAg.PNG.dkdnmju/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7_2023-07-19_222147.png?type=w773">

- 앱 이름 및 사업자명 작성

<img src = "https://postfiles.pstatic.net/MjAyMzA3MTlfMjcz/MDAxNjg5NzczMTA5ODI5.42VqboJC_4U5PIQJNfUm5o_hz0cixxE-0zNKteRjJdgg.9fa-53CkkFbeK47slLyvEa1hPsjfOWzFa2KyNvKN-mgg.PNG.dkdnmju/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7_2023-07-19_222440.png?type=w773" height = 350>

---

### <span style="color:#90caf9"><b>Step 3. 등록 후 생성 된 API 클릭</b></span>

<img src ="https://postfiles.pstatic.net/MjAyMzA3MTlfNDAg/MDAxNjg5NzczNDA3MjI1.DjKol96z8zsW294bCky0qhAU_YmpFxEBbpM2-P7X-Pgg.Yf9zKOWlVgAX8U_Vwm3t-8ov4DBkFbDK9Wht8RX5qtkg.PNG.dkdnmju/12345.png?type=w773" height = 350>

- 플랫폼 설정하기 클릭

- Web 플랫폼 등록 클릭

- 로컬 환경에서 테스트 할 것이기 때문에 `http://localhost:3000`을 입력
  (리액트의 기본 포트는 3000) 및 저장

- 아래에 사이트 도메인 등록 되었는지 확인 후 준비 완료

---

### <span style="color:#90caf9"><b>Step 4. 카카오 맵 가이드 확인</b></span>

[카카오 맵 가이드](https://apis.map.kakao.com/web/guide/)

---

### <span style="color:#90caf9"><b>Step 5. 지도 담을 영역 만들기</b></span>

```jsx
function KaKao() {
  return <div id="Map" style={{ width: "500px", height: "500px" }}></div>;
}
```

---

### <span style="color:#90caf9"><b>Step 6. /public/index.html 파일 안 script 태그 작성</b></span>

<img src = "https://postfiles.pstatic.net/MjAyMzA3MTlfMjY1/MDAxNjg5NzczOTUwMTMy.ZS1jMq1c2rlUe0CnOO81u95sQbMhJbaZIzKKQOFf9bgg.RBbY8EZaZ_T4Zjh4JWGhwu4csLKgP_IVUj61Nqn8zEEg.PNG.dkdnmju/4455.png?type=w773" height = 350>

- 빨갛게 칠해진 부분이 api 키 !!

---

### <span style="color:#90caf9"><b>Step 7. script 태그에 api 추가 후 지도 띄우는 코드 작성</b></span>

```jsx
import {useEffect} from "react";

const {kakao} = window;

function KaKao() {

  useEffect(() => {
    const container = document.getElementById("map"); // 지도를 담을 영역의 DOM 레퍼런스

    const options = {
      center: new kakao.maps.Lating(33.450701, 126.570667), // 지도의 중심 좌표
      level: 3,
    };

    const map = new kakao.maps.Map(container.options); // 지도 생성 및 객체 리턴
  }, []);

  return <div id="Map" style={{ width: "500px", height: "500px" }}></div>;
}
```

- useEffect를 이용해 지도를 가지고 있는 컴포넌트가 처음 렌더링 될 때 지도를 띄우기 위해 두 번째 인자를 `[](빈배열)`로 설정

- 스크립트로 kakao maps api를 심어서 가져오면 window전역 객체에 들어감 but, 함수형 컴포넌트에서는 이를 바로 인식하지 못함

    그렇기 때문에 코드 상단에 const { kakao } = window를 작성하여 함수형 컴포넌트에 인지 시키고 window에서 kakao객체를 뽑아서 사용 !

---

### <span style="color:#90caf9"><b>Step 8. 실행 및 확인</b></span>

<img src ="https://postfiles.pstatic.net/MjAyMzA3MTlfNyAg/MDAxNjg5Nzc0NjA5MjUx.UnugCvf4wEdwWPmdL951VMGsEdUUenPjin_Ha6uWxEEg.bJ1M4oAcxUAeskeBxF2JmStMhy_UuY76xQSXNjUAPtAg.PNG.dkdnmju/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7_2023-07-19_224947.png?type=w773" height = 350>


참고 자료 : [벨로그](https://velog.io/@tpgus758/React%EC%97%90%EC%84%9C-Kakao-map-API-%EC%82%AC%EC%9A%A9%ED%95%98%EA%B8%B0)