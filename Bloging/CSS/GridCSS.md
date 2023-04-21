# 1. CSS grid?

CSS 그리드 레이아웃(Grid Layout)은 페이지를 여러 주요 영역으로 나누거나, 크기와 위치 및 문서 계층 구조의 관점에서 HTML 기본 요소로 작성된 콘트롤 간의 관계를 정의하는 데 아주 탁월합니다.

테이블과 마찬가지로 그리드 레이아웃은 세로 열과 가로 행을 기준으로 요소를 정렬할 수 있습니다. 하지만, 테이블과 달리 CSS 그리드는 다양한 레이아웃을 훨씬 더 쉽게 구현할 수 있습니다. 예를 들어, 그리드 컨테이너 속 자식 요소를, 마치 CSS로 일일이 위치를 지정해 준 것처럼, 실제로 겹치게 층을 지면서 자리를 잡도록 각 요소의 위치를 지정해 줄 수도 있습니다.

### ⭐ Grid 레이아웃을 만들기 위한 기본적인 HTML 구조

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
Grid의 한 칸, ```<div>```같은 실제 html 요소는 그리드 아이템이고, 이런 Grid 아이템 하나가 들어가는 “가상의 칸(틀)”이라고 생각하면 됩니다.
- <span style="color:#FF66BE"><b>그리드 라인(Grid Line)</b></span>   
Grid 셀을 구분하는 선
- <span style="color:#FF66BE"><b>그리드 번호(Grid Number)</b></span>      
Grid 라인의 각 번호
- <span style="color:#FF66BE"><b>그리드 갭(Grid Gap)</b></span>   
Grid 셀 사이의 간격
- <span style="color:#FF66BE"><b>그리드 영역(Grid Area)</b></span>   
Grid 라인으로 둘러싸인 사각형 영역으로, 그리드 셀의 집합
