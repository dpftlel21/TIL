# 1. SPA

SPA는 서버로부터 완전히 새로운 페이지를 불러오는 것이 아니라, 페이지 갱신에 필요한 데이터만 서버에서 전달받아 브라우저에서 해당하는 부분만 업데이트하는 방식으로 작동하는 웹 애플리케이션이나 웹 사이트를 말합니다.

- 장점

    필요 부분의 데이터만 받아 화면을 업데이트 하면 되기 때문에 사용자와의 Interaction 에 빠르게 반응

    서버에서 요청 받은 데이터만 넘겨주면 되어 서버 과부하 문제가 현저히 줄어듬

    전체 페이지를 렌더링 할 필요가 없기 때문에 더 나은 유저경험 제공

- 단점

    JavaScript 파일 크기가 커 이 JavaScript 파일을 기다리는 시간으로 인해 첫 화면 로딩 시간이 길어짐

    검색 엔진 최적화가 좋지 않습니다. 구글이나 네이버 같은 검색 엔진은 HTML 파일에 있는 자료를 분석하는 방식으로 검색 기능을 구동합니다. SPA는 HTML 파일은 별다른 자료가 없기에 적절하게 동작하지 못합니다.

---

### ✔️ 와이어프레임 (WireFrame)

와이어프레임은 디자인에 들어가기 전 단계로 선(Wire)를 이용해 윤곽선(frame)을 잡는 것을 의미합니다. 이를 통해 개발자든 디자인 컨셉과 사이트 기능에 대한 이해를하고, 목업(mockup)은 데스크톱, 스마트폰의 프레임을 덧씌워 직관적으로 이해하기 쉽게 디자인 한 것을 의미합니다.

<img src="https://postfiles.pstatic.net/MjAyMzA1MTlfMjEx/MDAxNjg0NDYyMzQ1MDg1.-SiLemwEd-29wmPnLH7ie_lJLG8mOUo_UVxGvEJBTqgg.5fCfygCdNXfvTeQ1nn3zmyWZ-qF5gpGOx1IzzpKQhIEg.PNG.dkdnmju/556.png?type=w773" width = "400" height = "300">

유튜브를 예시로 들고, 페이지를 만들기 전에 어떤 컴포넌트를 만들고 이들을 조합할지부터 구상합니다. 


<img src="https://postfiles.pstatic.net/MjAyMzA1MTlfMjI4/MDAxNjg0NDYyMzQ1MTIy.2riD4txr3Vq-oxj3ZRUczLdL2f5SMd1EtOBv9KLOxVQg.oL_BxzFBaL88SG52RF7g4ewTVEBTPHh74TxR568-FvUg.PNG.dkdnmju/557.png?type=w773" width = "400" height = "300">

화면 상단에 상단 전체를 아우르는 Header 컴포넌트가 있고, 자식으로 Search, Setting 컴포넌트를 만들기로 했습니다. Header 컴포넌트는 애플리케이션 내의 어떤 페이지에 가더라도 늘 상단에 위치하며, 이 부분에 초점을 두고 설계로직을 작성합니다.

<img src="https://postfiles.pstatic.net/MjAyMzA1MTlfNDYg/MDAxNjg0NDYyMzQ1MTI1.Ukr6lqt9ojhmGVuWtzVE_R1DY9WGwEm4pJV6vjefL5Ug.5bsDFeN3j3e-HM1Y11TLwagI0hXFncKCIHUFzk2Yw-Qg.PNG.dkdnmju/558.png?type=w773" width = "400" height = "300">

화면 중앙에 크리에이터들이 올린 영상을 담은 ContnetList 컴포넌트가 있고, 그 안에 동일한 형태를 가진 영상물들이 반복적인 형태로 화면을 구성하고 있기 때문에 Content라는 컴포넌트를 재사용합니다.

<img src="https://postfiles.pstatic.net/MjAyMzA1MTlfMjU2/MDAxNjg0NDYyMzQ1MTA4.3VV4liYM7sHlW4Wi4FfdqQw4LOPrOc8OA0Rf0EnAuB0g.AK4-TPg38OnPcY2803ZTVCxXIjKsJtXXm6F1SglvqEgg.PNG.dkdnmju/559.png?type=w773" width = "400" height = "300">

Content 컴포넌트는 상단에 썸네일, 중앙에 아바타 및 영상 소개 글, 하단에 채널 이름과 조회수, 업로드 날짜가 기재되어 있습니다.

<img src="https://postfiles.pstatic.net/MjAyMzA1MTlfMjA5/MDAxNjg0NDYyMzQ1MTEx.fVzhdfUz9UkH0GRkwT5TorZg298Ui8josk8sDVcY1Fsg.iGxVaZKQe6w-iIV1cbjWy3zWHjkoSa6ZVIf35kBf0gUg.PNG.dkdnmju/560.png?type=w773" width = "400" height = "300">

Content 컴포넌트는 영상과 관련된 데이터를 입력받아, UI에 맞게 화면에 출력하고, 눈에 보이지는 않지만 클릭 시 해당 영상을 재생해 주는 기능도 가지고 있습니다.

또한 영상이 대기 목록에 있을 때, 재생중일 때도 동일한 내용이 화면에 출력되며 어떤 상태로 있느냐에 따라 출력되는 위치만 조금씩 달라집니다.

#### 🧐 결론

따라서 컴포넌트가 UI의 필수 요소, 고유의 기능을 가지고 있다의 정의도 맞습니다. React 개발자라면 애플리케이션 안에서 다뤄지는 데이터를 컴포넌트들끼리 보다 유기적으로 주고받을 수 있도록 설계합니다.

<사진 출처 : 코드스테이츠 >

---

### ✔️ React Router

라우팅이란 다른 주소에 따라 다른 뷰를 보여주는 과정을 `경로에 따라 변경`하는 것을 의미합니다.

리액트 자체에는 이 기능이 내장되어 있지않아 주소마다 다른 뷰를 보여줘야 하는데, 이 때 React Router 라이브러리를 사용합니다.

#### ⭐ React Router의 주요 컴포넌트 3가지

- `BrowserRouter` : 라우터 역할
    
    BrowserRouter는 웹 애플리케이션에서 페이지를 새로고침하지 않고도 주소를 변경할 수 있는 역할을 수행합니다.( HTML5의 History API 사용)
    
    BrowserRouter가 상위에 작성되어 있어야 Route 컴포넌트를 사용할 수 있습니다.
- `Routes , Route ` & `Switch` : 경로 매칭

    `<Switch>`: 여러 `<Route>`를 감싸서 그 중 경로가 일치하는 단 하나의 라우터만 렌더링 시켜주는 역할. `<Switch>` 를 사용하지 않으면 매칭되는 모든 요소를 렌더링합니다.
  
    `<Route>` 컴포넌트: path 속성을 지정하여 해당 path에 어떤 컴포넌트를 보여줄지 정하며, `Link` 컴포넌트가 정해주는 URL 경로와 일치하는 경우에만 작동됩니다.

- `Link` : 경로 변경

    페이지 전환을 통해 페이지를 새로 불러오지 않고 애플리케이션을 그대로 유지하여 HTML5 History API 를 이용해 페이지의 주소만 변경합니다.
    
    ReactDOM으로 렌더를 시키게 되면 `<Link>` 컴포넌트는 `<a>` 태그로 바뀌는 모습을 볼 수 있습니다.

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

export default function App() {
    <BrowserRouter>
    <>
    <ul>
        <li>
            <Link to= "/">Home</Link>
        </li>
        <li>
            <Link to= "/about">Mypage</Link>
        </li>
        <li>
            <Link to= "/dashboard">Dashboard</Link>
        </li>
    </ul>

    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Mypage />} />
        <Route path="/dashboard" element={<Dashboard />} />
    </Routes>

    </>
    </BrowserRouter>
}
```

import는 필요한 모듈을 불러오는 역할로 비구조화 할당과 비슷하게 이용할 수 있습니다.

#### 🖥️ 개발환경 구축하기

- Create React App 프로젝트 생성
```
npx create-react-app
```

- React Router 설치
```
npm install react-router-dom
```

`package.json` 파일의 `dependencies` 항목에 `react-router-dom` 라이브러리 등록 확인



