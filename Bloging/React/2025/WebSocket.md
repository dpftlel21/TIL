# 📚 WebSocket 사용하기

### 🤔 웹 소켓이란?

웹 소켓은 웹 앱과 서버 간의 지속적인 연결을 제공하는 프로토콜이며 TCP를 기반으로 작동합니다. 이를 통해 서버와 클라이언트 간에 양방향 통신이 가능해집니다. HTTP와는 달리, 웹 소켓 연결은 한 번 열린 후 계속 유지되고, 서버나 클라이언트에서 항상 데이터를 전송할 수 있는 특징이 있습니다. 주로 실시간 통신, 실시간 채팅, 게임, 주식 시장 등에 사용됩니다.

TCP를 기반으로 한 웹 소켓은 신뢰성 있는 데이터 전송을 보장하며, 메시지 경계를 존중하고 순서가 보장된 양방향 통신을 제공할 수 있습니다. 이때 데이터는 Packet 형태로 전달되며, 전송은 연결 중단과 추가 HTTP 요청 없이 양방향으로 이뤄집니다.

### 🤔 웹 소켓 연동하기 (빗썸 API)

```ts
const socket = new WebSocket('wss://example/chat');
```

#### 1. 연결

```ts
// 1. 웹소켓 연결 생성
const ws = new WebSocket('wss://pubwss.bithumb.com/pub/ws');

// 2. 연결 성공 시 실행되는 이벤트
ws.onopen = () => {
  console.log('연결 성공!');

  // 3. 구독하고 싶은 데이터 요청
  const message = {
    type: 'ticker', // 실시간 가격 정보 요청
    symbols: ['BTC_KRW'], // 비트코인 가격
    tickTypes: ['30M'], // 30분 단위 데이터
  };
  ws.send(JSON.stringify(message));
};

// 4. 서버로부터 데이터 수신
ws.onmessage = (event) => {
  const data = JSON.parse(event.data);
  console.log('받은 데이터:', data);
};

// 5. 에러 처리
ws.onerror = (error) => {
  console.error('웹소켓 에러:', error);
};

// 6. 연결 종료
ws.onclose = () => {
  console.log('연결 종료');
};
```
