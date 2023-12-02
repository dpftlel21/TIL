### 📝 문제 설명

머쓱이는 추운 날에도 아이스 아메리카노만 마십니다. 아이스 아메리카노는 한잔에 5,500원입니다. 머쓱이가 가지고 있는 돈 money가 매개변수로 주어질 때, 머쓱이가 최대로 마실 수 있는 아메리카노의 잔 수와 남는 돈을 순서대로 담은 배열을 return 하도록 solution 함수를 완성해보세요.

### ✔️ 제한사항

- 0 < money ≤ 1,000,000

### 🖥️ 입출력 예

| money  |  result   |
| :----: | :-------: |
| 5,500  |  [1, 0]   |
| 15,000 | [2, 4000] |

- 5,500원은 아이스 아메리카노 한 잔을 살 수 있고 잔돈은 0원입니다.
- 15,000원은 아이스 아메리카노 두 잔을 살 수 있고 잔돈은 4,000원입니다.

### 🧐 풀이

```js
function solution(money) {
  return [Math.floor(money / 5500), money % 5500];
}
```

### 😀 알게된 점

javaScript의 `Math.floor 함수`를 통해 소수점 이하를 버리고 정수 부분만 출력하게 할 수 있게 했고, money의 나머지 값을 통해 잔돈을 출력하게끔 코드를 작성했다.

다른 사람의 풀이를 또 한 번 참고하니 `parseInt`를 활용하여 나타낼수도 있다는 사실을 알게되었다,, 매번 다른 사람의 풀이를 통해 알게되는 부분도 많아서 참고하면 좋을 것 같다.