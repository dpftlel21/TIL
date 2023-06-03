# 1. Call Stack, 이벤트 루프

### ✔️ 스택, 큐

<img src = "https://postfiles.pstatic.net/MjAyMzA2MDNfNzYg/MDAxNjg1NzkxODk3MDQz.ra56WG-LsRJpCmHjLoQ9cqKintTHgE1w2TeeqZkjnL4g.fjC8PF5LmqXrhO-kmU-CMvWFsQ5KAf3Cx1IoEAqLWhIg.PNG.dkdnmju/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7_2023-06-03_203048.png?type=w773" width = 400, height = 200>



스택이란 출입구가 하나인 데이터의 구조를 의미하며 예를들어 a, b, c 라는 데이터가 있다고 가정했을 때 a, b, c 순서대로 데이터를 넣었다면, 데이터가 빠져나올 때는 c, b, a 순서로 빠져나오게 됩니다.

큐란 일종의 선입선출 개념으로 이해하시면 됩니다. 종류에 따라 양쪽 모두 입 • 출력이 가능한 큐도 있고, 일반적으로 큐는 a, b, c 순서대로 데이터를 넣는다면, 빠져나올 때도 순서대로 a, b, c가 빠져나오게 됩니다.

### ✔️ Call Stack

call stack이란 js 코드가 실행되며 생성되는 실행 컨텍스트를 저장하는 자료구조입니다.

1. 함수를 호출하면 실행 컨텍스트가 생성되고, 이를 콜 스택에 추가하여 다음 함수를 실행합니다.

2. 함수에 의해 호출되는 모든 함수(내부 함수)는 콜 스택에 추가되고, 해당 위치에서 실행합니다.

3. 함수의 실행이 종료되면 해당 실행 컨텍스트를 콜 스택에서 제거한 후 중단된 시점부터 다시 시작합니다. 이때, 스택이할당 된 공간보다 많은 공간을 차지한다면 stack overflow 에러가 발생합니다.





그림 및 내용 출처 : https://frontj.com/entry/8-Javascript%EC%9D%98-%EC%BD%9C-%EC%8A%A4%ED%83%9D%EA%B3%BC-%EC%9D%B4%EB%B2%A4%ED%8A%B8-%EB%A3%A8%ED%94%84