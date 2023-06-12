# 1. UI ( User Interface, 사용자 인터페이스 )

사람들이 컴퓨터와 상호 작용하는 시스템을 의미하고, 보통 UI를 떠올릴 때  화면상의 그래픽 요소를 생각하지만, 이 외에도 키보드와 마우스 등 물리적 요소도 컴퓨터와 상호작용하기 위한 시스템이며 UI라고 볼 수 있습니다.

### ✔️ GUI (Graphical User Interface, 그래픽 사용자 인터페이스)

사용자가 그래픽을 통해 컴퓨터와 정보를 교환하는 작업 환경을 의미하고, 예를들어 우리가 보는 운영체제 (윈도우 or Mac OS)의 화면이나 애플리케이션 화면이 있습니다. 

### ✔️ UI 디자인 패턴

프로그래밍 시 자주 반복되어 나타나는 문제점을 해결할 때, 과거의 다른 사람이 해결한 결과물을 재사용하기 좋은 형태로 만든 패턴 즉, 자주 사용되는 UI 컴포넌트라고 할 수 있습니다.

<span style="color:#1E88E5 "><B>- 모달 (Modal)</B></span>

기존에 이용하던 화면 위에 오버레이 되는 창을 의미하고, 닫기 버튼, 혹은 모달 범위 밖을 클릭하면 모달이 닫히는 것이 일반적이며, 모달을 닫기 전에는 기존 화면과 상호작용할 수 없습니다.

또 다른 브라우저 페이지를 여는 팝업창과는 구분되는 개념이며, 팝업은 브라우저에 의해 강제로 막힐 수 있지만, 모달은 영향을 받지 않아 꼭 보여주고싶은 내용이 있을 때 사용합니다.

<span style="color:#1E88E5 "><B>- 토글 (Toggle)</B></span>

On/Off를 설정할 때 사용하는 스위치 버튼입니다. 색상, 스위치의 위치, 그림자 등의 시각적 효과를 주어 사용자가 토글의 상태를 직관적으로 알 수 있게 만들어야 합니다.

여러 개의 옵션이 있을 때에도 토글을 사용할 수 있습니다. 단, 이때에도 어느 옵션이 선택되어 있는지 직관적으로 알 수 있어야 하며, 옵션의 개수가 너무 많다면 탭을 사용하는 것을 고려해야 합니다.

<span style="color:#1E88E5 "><B>- 탭 (Tab)</B></span>

콘텐츠를 분리해서 보여주고 싶을 때 사용하는 UI 디자인 패턴이며, 가로로 한 줄로 배열된 형태가 가장 흔하고, 세로로 배열하거나 여러 줄로 배열할 수도 있습니다.

탭을 사용하려면 각 섹션의 이름이 너무 길지 않아야 하고, 섹션의 구분이 명확해야 하며, 현재 어떤 섹션을 보고 있는지 표시해 주어야 합니다.


<span style="color:#1E88E5 "><B>- 태그 (Tag)</B></span>

컨텐츠를 설명하는 키워드를 사용해서 라벨을 붙이는 역할을 하고, 사용자들은 자신이 작성한 컨텐츠에 태그를 붙임으로써 분류가 가능해지고, 관련 컨텐츠를 검색할 수도 있습니다. 어떤 방식을 선택하든 태그의 추가와 제거는 자유롭게 할 수 있어야 합니다.

<span style="color:#1E88E5 "><B>- 자동완성 (Autocomplete)</B></span>

사용자가 내용을 입력 중일 때 사용자가 입력하고자 하는 내용과 일치할 가능성이 높은 항목을 보여주는 것이며 사용자가 정보를 직접 입력하는 시간을 줄여주고, 정보를 검색할 때 많이 사용합니다. 

자동 완성 항목은 너무 많은 항목이 나오지 않도록 개수를 제한하는 것이 좋으며, 키보드 방향 키나 클릭 등으로 접근하여 사용할 수 있는 것이 좋습니다.


<span style="color:#1E88E5 "><B>- 드롭다운 (Dropdown)</B></span>

선택할 수 있는 항목들을 숨겨놓았다가, 펼쳐지면서 선택할 수 있게 해주는 것을 의미하고 객관식 문제의 선택지와 비슷한 개념입니다.

보통 화살표 버튼을 누르면 펼쳐지게 만들지만, 그냥 마우스를 올려놓아도 펼쳐지게 만들 수도 있습니다. 드롭다운이 펼쳐지는 방식보다, 중요한 것은 사용자가 자신이 선택한 항목을 정확히 알 수 있게 만드는 것입니다.

<span style="color:#1E88E5 "><B>- 아코디언 (Tag)</B></span>

접었다 폈다 할 수 있는 컴포넌트로, 보통 같은 분류의 아코디언을 여러 개 연속해서 배치합니다. 트리 구조의 콘텐츠를 렌더링 할 때 사용하거나, 메뉴바로 사용할 수도 있지만 단순히 콘텐츠를 담아놓기 위한 용도로 사용할 수 있습니다.

기본적으로는 화면을 깔끔하게 구성하기 위해서 사용하며, 트리 구조나 메뉴바로 사용할 경우에는 상하 관계를 표현하기 위해서 사용하는 경우가 많고, 콘텐츠를 담는 용도로 사용할 때에는 핵심 내용을 먼저 전달하려는 목적을 가질 때가 많습니다.

<span style="color:#1E88E5 "><B>- 캐러셀 (Carousel)</B></span>

컨베이어 벨트나 회전목마처럼 빙글빙글 돌아가면서 콘텐츠를 표시해 주는 패턴입니다. 자동으로 돌아가거나, 사용자가 옆으로 넘겨야만 넘어가거나, 아니면 둘 중 선택할 수 있도록 만들 수 있습니다.

사용자가 직접 넘겨야하는 경우, 컨텐츠가 넘어갈 수 있음을 직관적으로 알 수 있어야 하며 컨텐츠 일부를 옆에 배치하거나 버튼을 배치하여 해결하기도 합니다.


<span style="color:#1E88E5 "><B>- GNB (Global Navigation Bar), LNB (Local Navigation Bar)</B></span>

GNB는 어느 페이지에 들어가든 사용할 수 있는 최상위 메뉴, LNB는 GNB에 종속되는 서브 메뉴 혹은 특정 페이지에서만 볼 수 있는 메뉴를 뜻합니다. 

GNB는 어느 페이지에 있든 사용할 수 있도록 항상 동일한 위치에 있어야 합니다. GNB가 있다 없다 한다거나 위치가 자꾸 변하면 사용자 경험에 악영향을 줄 수 있습니다.

---

# 2. UX ( User Experience, 사용자 경험 )

사용자가 어떤 시스템, 제품, 서비스를 직 • 간접적으로 이용하면서 느끼고 생각하는 총체적 경험입니다. 제품, 서비스의 경험 뿐만아니라 홍보, 접근성, 사후 처리 등 직 간접적으로 관련된 모든 경험을 사용자 경험이라고 부릅니다. 이를 총체적 경험이라고 합니다.

### ✔️ UI와 UX의 관계 ( UX Ↄ UI )

UX는 UI를 포함하며 좋은 UX가 좋은 UI를 의미하거나, 좋은 UI가 항상 좋은 UX를 의미하지는 않습니다. 

기본 계산기 애플리케이션을 예를들겠습니다. 특별히 보기 싫다거나, 보기 좋은 디자인의 UI는 아닙니다. 오히려 투박하다면 투박한 디자인입니다. 하지만 계산기의 기능을 제대로 제공한다는 점에서 UX는 훌륭합니다. 꼭 좋은 UX가 좋은 UI를 의미하지 않음을 보여줍니다.

반대로, 누가 봐도 세련되고 보기 좋은 UI의 계산기가 있다고 생각해 봅시다. 그런데 입력한 숫자가 아닌 다른 숫자가 화면에 뜨거나, 계산 결과값이 제대로 나오지 않는다면 어떨까요? UI가 아무리 보기 좋아도 UX는 좋지 않을 것입니다. 이는 좋은 UI가 좋은 UX를 보장하지 않음을 보여줍니다.

UI와 UX는 서로 다르지만 떼려야 뗄 수 없는 관계이며, 서로를 보완하는 역할을 합니다. UX가 좋지 않은 곳을 찾아냄으로써 UI 개선점을 찾아낼 수 있고, UI를 개선함으로써 UX가 좋아지기도 합니다. 이렇게 UX와 UI는 서로를 계속해서 발전시킬 수 있습니다.