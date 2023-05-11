# 1. CSS grid?

CSS 그리드 레이아웃(Grid Layout)은 페이지를 여러 주요 영역으로 나누거나, 크기와 위치 및 문서 계층 구조의 관점에서 HTML 기본 요소로 작성된 콘트롤 간의 관계를 정의하는 데 아주 탁월합니다.

테이블과 마찬가지로 그리드 레이아웃은 세로 열과 가로 행을 기준으로 요소를 정렬할 수 있습니다. 하지만, 테이블과 달리 CSS 그리드는 다양한 레이아웃을 훨씬 더 쉽게 구현할 수 있습니다. 예를 들어, 그리드 컨테이너 속 자식 요소를, 마치 CSS로 일일이 위치를 지정해 준 것처럼, 실제로 겹치게 층을 지면서 자리를 잡도록 각 요소의 위치를 지정해 줄 수도 있습니다.

## ⭐ Grid 레이아웃을 만들기 위한 기본적인 HTML 구조

```html
<div class="container">
  <div class="item">A</div>
  <div class="item">B</div>
  <div class="item">C</div>
  <div class="item">D</div>
  <div class="item">E</div>
  <div class="item">F</div>
  <div class="item">G</div>
  <div class="item">H</div>
  <div class="item">I</div>
</div>
```

- Flex와 마찬가지로, 컨테이너와 아이템이 있으면 됩니다.
- 부모 요소인 div.container를 Grid Container(그리드 컨테이너)라고 부르고, 자식 요소인 div.item들을 Grid Item(그리드 아이템)이라고 부릅니다.
- 컨테이너가 Grid의 영향을 받는 전체 공간이고, 설정된 속성에 따라 각각의 아이템들이 어떤 형태로 배치되는 것입니다.

```css
.container {
  display: grid;
}
```

- Flex와 마찬가지로, Grid는 컨테이너에 display: grid; 를 설정하는 것으로 시작합니다.

<img src ="https://studiomeal.com/wp-content/uploads/2020/01/03-2.jpg" width=500px, height=450px>

                <그리드 용어 정리 그림판>
                출처: https://studiomeal.com/archives/533

- <span style="color:#FF66BE"><b>그리드 컨테이너 (Grid Container)</b></span>  
  display: grid를 적용하는, Grid의 전체 영역입니다. Grid 컨테이너 안의 요소들이 Grid 규칙의 영향을 받아 정렬 됩니다.
- <span style="color:#FF66BE"><b>그리드 아이템 (Grid Item)</b></span>  
  Grid 컨테이너의 자식 요소들, 바로 이 아이템들이 Grid 규칙에 의해 배치됩니다.
- <span style="color:#FF66BE"><b>그리드 트랙 (Grid Track)</b></span>  
  Grid의 행(Row) 또는 열(Column)
- <span style="color:#FF66BE"><b>그리드 셀 (Grid Cell) </b></span>  
  Grid의 한 칸, `<div>`같은 실제 html 요소는 그리드 아이템이고, 이런 Grid 아이템 하나가 들어가는 “가상의 칸(틀)”이라고 생각하면 됩니다.
- <span style="color:#FF66BE"><b>그리드 라인(Grid Line)</b></span>  
  Grid 셀을 구분하는 선
- <span style="color:#FF66BE"><b>그리드 번호(Grid Number)</b></span>  
  Grid 라인의 각 번호
- <span style="color:#FF66BE"><b>그리드 갭(Grid Gap)</b></span>  
  Grid 셀 사이의 간격
- <span style="color:#FF66BE"><b>그리드 영역(Grid Area)</b></span>  
  Grid 라인으로 둘러싸인 사각형 영역으로, 그리드 셀의 집합

---

## ✔️ 컨테이너에 적용하는 Grid 속성

<img src ="https://studiomeal.com/wp-content/uploads/2020/01/x02-2.jpg.pagespeed.ic.oBTXnW4jQg.webp" width="500px" height="300px"/>

<출처 : https://studiomeal.com/wp-content/uploads/2020/01/x02-2.jpg.pagespeed.ic.oBTXnW4jQg.webp>

### 1. `display: grid;`

Grid 컨테이너에 `display: grid;`를 적용하는게 시작이며, 아이템들이 block 요소라면 이 한 줄로는 딱히 변화가 없습니다.

👀 `inline-grid`도 있는데, block과 inline-block과의 관계라고 생각하시면 됩니다.

### 2. `grid-template-rows`(행의 배치), `grid-template-columns`(열의 배치)

`-ms-grid-rows, -ms-grid-columns`

컨테이너에 Grid 트랙의 크기들을 지정해주는 속성이며 여러가지 단위를 사용할 수 있습니다.

```css
.container {
  grid-template-columns: 200px 200px 500px;
  /* grid-template-columns: 1fr 1fr 1fr  */
  /* grid-template-columns: repeat(3, 1fr) */
  /* grid-template-columns: 200px 1fr */
  /* grid-template-columns: 100px 200px auto */

  grid-template-rows: 200px 200px 500px;
  /* grid-template-rows: 1fr 1fr 1fr */
  /* grid-template-rows: repeat(3, 1fr) */
  /* grid-template-rows: 200px 1fr */
  /* grid-template-rows: 100px 200px auto */
}
```

- `fr(farction)`

  - 숫자 비율대로 트랙의 크기를 나눕니다.
  - 위 코드의 `1fr 1fr 1fr` 은 1:1:1의 비율 3개의 column 생성입니다.
  - 고정 크기와 가변 크기를 섞어 쓸 수 있습니다. ex) `grid-template-columns: 100px 2fr 1fr;`

### 3. `repeat`함수

- repeat(반복횟수, 반복값)는 반복되는 값을 자동으로 처리할 수 있는 함수입니다.

```css
.container {
  grid-template-columns: repeat(5, 1fr);
  /* grid-template-columns: 1fr 1fr 1fr 1fr 1fr */
}
```

- `minMax` 함수

  - 최솟값과 최댓값을 지정할 수 있는 함수입니다.
  - minmax (최솟값, 최댓값(최소 이상 넘어가면 알아서 늘어나게 - auto))

```css
.container {
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, minmax(100px, auto));
}
```

- `auto-fill`, `auto-fit`

  - `auto-fill`과 `auto-fit`은 column의 개수를 미리 정하지 않고 설정된 너비가 허용하는 한 최대한 셀을 채우는 방식입니다.
  - `auto-fill`을 통해 우선적으로 크기를 설정하고 남은 공간이 생겼을 때 `auto-fit`을 사용한다면 빈 공간 없이 채울 수 있습니다.

```css
.container {
  grid-template-columns: repeat(auto-fill, minmax(20%, auto));
}
```

---

### 4. 간격 만들기 `row-gap`, `column-gap`, `gap`

- 초기에는 앞에` gird-`를 붙여서 `grid-gap`, `grid-row-gap`, `grid-column-gap`이었는데, 브라우저 호환 범위를 넓히기 위해 아래처럼 이전 버전의 이름과 현재 버전의 이름을 둘 다 쓰기도 합니다.

```css
.container {
  row-gap: 10px;
  /* row의 간격을 10px로 */
  column-gap: 20px;
  /* column의 간격을 20px로 */
  gap: 10px 20px;
  /* row :10px, column : 20px */
  gap: 10px;
  /* row : 10px, column : 10px */
}
```

### 5. 그리드 형태 자동 정의 `grid-auto-columns`, `grid-auto-rows`

`grid-template-columns(또는 grid-template-rows)`의 통제를 벗어난 위치에 있는 트랙의 크기를 지정하는 속성입니다.

### 6. 각 셀의 영역 지정 `grid-column -( start, end)`, `gid-row -(start, end)`

<img src ="https://studiomeal.com/wp-content/uploads/2020/01/07-2.jpg" width = "550px" height="300px">

<출처 : https://studiomeal.com/wp-content/uploads/2020/01/07-2.jpg>

- 1부터 4까지의 Grid 라인 번호를 통해 column과 row의 범위를 결정합니다.
- `grid-column-start`가 시작 번호, `grid-column-end`가 끝 번호입니다.  
   grid-column은 start와 end 속성을 한번에 쓰는 축약형입니다.

```css
.item:nth-child(1) {
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 2;
}

// 위 코드 축약
.item:nth-child(1) {
  grid-column: 1 / 3;
  grid-row: 1 / 2;
}
```
