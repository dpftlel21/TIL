# 1. CSS 레이아웃

### 1. 와이어 프레임

- 웹 or 애플리케이션을 개발할 때 레이아웃의 뼈대를 그리는 단계를 의미합니다.
- 와이어프레임은 단순한 선이나, 도형으로 웹이나 앱의 인터페이스를 시각적으로 묘사한 것이며 아주 단순하게, 레이아웃과 제품의 구조를 보여주는 용도입니다.
- 이 레이아웃을 기반으로 HTML로 구조를 잡고, HTML 태그에 CSS를 적용해 시각화를 수행합니다.

---

### 2. 목업

대부분 산업에서 목업은 실물 크기의 모형을 뜻합니다.  
웹 또는 앱을 제품이라고 할 때, 목업은 실제 제품이 작동하는 모습과 동일하게 HTML 문서를 작성합니다.  
예를 들어, 트윗 작성자, 트윗 내용, 작성한 날짜 등을 HTML 문서 내에 하드코딩하는 방식입니다.

> 📒 하드코딩
>
> - 역동적인 웹 애플리케이션을 만들기 위해서는, HTML 문서에 트윗 작성자, 내용을 변수로 관리하여 값을 동적으로 담아야 하는데 변수를 사용할 수 없을 때 HTML 문서에 아래와 같이 하나하나 입력해야 합니다. 이런 방식을 하드코딩이라고 합니다.

---

### 3. 레이아웃 리셋

때때로, HTML 문서가 갖는 기본 스타일이, 레이아웃을 잡는 데 방해가 되기도 합니다.

```CSS
body {
  margin: 0;
  padding: 0;
}
```

위와 같은 코드로 기존 HTML이 지닌 레이아웃을 리셋하고 원하는 스타일을 적용할 수 있습니다.

---

### 4. Flexbox

Flex(Flexible)는 "잘 구부러지는, 유연한"이라는 뜻입니다. Flexbox로 레이아웃을 구성한다는 것은, 박스를 유연하게 늘리거나 줄여 레이아웃을 잡는 방법입니다.
<br><br>
✔️ display:flex   
부모 박스 요소에 적용해, 자식 박스의 방향과 크기를 결정하는 레이아웃 구성 방법입니다.

```css
main {
  border: 2px dotted blue;
}

div {
  border: 1px solid green;
}

* {
  margin: 10px;
  padding: 10px;
}
```

```html
<main>
      <div>box 1</div>
      <div>box 2</div>
      <div>box 3</div>
      <div>box 4</div>
      <div>box 5</div>
    </main>
```
<img src="https://postfiles.pstatic.net/MjAyMzA0MTNfMjky/MDAxNjgxMzcxMDM0NTY5.HMz6wEnfSDTVdYLlUIZ-GELDHYqBdJMr8zuidlmBW98g.n6PSh7V0dc4J8IKWTM5IFyFVrjk3q7ITOHkmdWtBwt0g.PNG.dkdnmju/css1.png?type=w773">

- 위 이미지에서 main이라는 부모요소에 ```display:flex;``` 속성을 추가하게 되면    아래와 같이 자식 요소인 ``` <div> ``` 요소들이 왼쪽부터 가로로 정렬된 것과 내용만큼의 공간을 차지하는 것을 확인할 수 있습니다.   
- 이처럼 Flexbox 속성들을 활용하면 요소의 정렬, 요소가 차지하는 공간을 설정해줄 수 있습니다. 

<img src = "https://postfiles.pstatic.net/MjAyMzA0MTNfNDcg/MDAxNjgxMzcxMDM0NTc1.iHOSGlLn95JzaGacKSbjHNJ3seDeAE_zEYkWu1SHMl8g.530jMRFX3q9twQW_Y43I_gEQva4bifbXIQNY059spSUg.PNG.dkdnmju/css2.png?type=w773">
<br> <br>
✔️ 부모 요소에 적용해야하는 Flexbox 속성   

Flexbox 속성 중에서는 부모 요소에 적용해야하는 속성들, 자식 요소에 적용해야하는 속성들이 있습니다.  
적절한 위치에 속성을 지정해주지 않으면 요소들이 원하는대로 정렬되지 않습니다.

> 💫 flex-direction : ""; - 정렬 축 정렬하기   
- 부모 요소에 설정해주는 속성으로, 자식 요소들을 정렬할 정렬 축을 정합니다. 아무 설정도 해주지 않으면 기본적으로 가로 정렬을 합니다.
> - row (기본값, 정렬 축 방향 :<span style="color:#008000;  font-weight:bold; font-size:25px"> → </span>)
> - row-reverse (정렬 축 방향 : <span style="color:#008000;  font-weight:bold; font-size:25px">← </span>)
> - column (정렬 축 방향 : <span style="color:#008000;  font-weight:bold; font-size:25px">↓</span> )
> - column-reverse (정렬 축 방향 : <span style="color:#008000;  font-weight:bold; font-size:25px">↑ </span> )

---

> 💫 flex-wrap : ""; - 줄 바꿈 설정하기
> - nowrap (기본값, 부모 넓이에 맞게 요소들 넓이 강제 축소)
> - wrap(부모 넓이보다 요소의 넓이가 더 크다면 나머지 요소들을 다음줄로 바꿈)
> - wrap-reverse (줄바꿈 요소들을 역순으로 배열)

---

> 💫 justify-content : "";  -  축 수평 방향 정렬
- 요소들이 가로로 정렬되어 있다면 가로 방향으론 어떻게 정렬할 것인지, 세로로 정렬되어 있다면 세로 방향으론 어떻게 정렬할 것인지 정하는 속성
> - flex-direction : row 인 경우 <span style="color:#008000;  font-weight:bold; font-size:25px"> ↔ </span> 정렬 
> -  flex-direction : column인 경우 <span style="color:#008000;  font-weight:bold; font-size:25px"> ↕️ </span> 정렬 

> 1. flex-start - 요소들을 컨테이너의 왼쪽으로 정렬합니다.
> 2. flex-end  - 요소들을 컨테이너의 우측으로 정렬합니다.
> 3. center  - 요소들을 컨테이너의 중앙으로 정렬합니다.
> 4. space-between  - 요소들 사이에 동일한 간격을 둡니다.
> 5. space-around - 요소들 주위에 동일한 간격을 둡니다.
    
---

> 💫 align-items : ""; - 축 수직 방향 정렬
-  요소들이 가로로 정렬되어 있다면 세로 방향으론 어떻게 정렬할 것인지, 세로로 정렬되어 있다면 가로 방향으론 어떻게 정렬할 것인지 정하는 속성
> - flex-direction : row 인 경우 <span style="color:#008000;  font-weight:bold; font-size:25px"> ↕️ </span> 정렬 
>-  flex-direction : column인 경우 <span style="color:#008000;  font-weight:bold; font-size:25px"> ↔ </span> 정렬 

> 1. stretch -  컨테이너에 맞게 늘립니다.
> 2. flex-start - 컨테이너의 최상단으로 정렬 합니다.
> 3. flex-end - 컨테이너의 최하단으로 정렬합니다.
> 4. center - 컨테이너의 세로 축의 중앙으로 정렬 합니다.
> 5. baseline - 컨테이너의 시작위치에 정렬 합니다.

---

✔️flex 속성의 값
> flex: ""
>- grow(팽창 지수) : 요소의 크기가 늘어나야 할 때 얼마나 늘어날 것인지 의미
>- shrink(수축 지수) :요소의 크기가 줄어들어야 할 때 얼마나 줄어들 것인지 의미
>- basis(기본 크기) : 늘어나고 줄어드는 것과 상관없이 요소의 기본 크기는 얼마인지를 의미

자식 요소에 flex 속성을 따로 설정해주지 않으면 다음과 같은 기본값이 적용되며,   
 왼쪽에서부터 오른쪽(grow shrink basis 순서)으로 콘텐츠의 크기만큼 배치됩니다.
```css
flex : 0 1 auto;
```





---