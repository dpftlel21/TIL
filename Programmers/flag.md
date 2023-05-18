### 📝 문제 설명

두 정수 a, b와 boolean 변수 flag가 매개변수로 주어질 때, flag가 true면 a + b를 false면 a - b를 return 하는 solution 함수를 작성해 주세요.

### ✔️ 제한사항

`-1000 ≤ a, b ≤ 1,000`

### 🖥️ 입출력 예

|  a  |  b  | flag  | result |
| :-: | :-: | :---: | :----: |
| -4  |  7  | true  |   3    |
| -4  |  7  | false |  -11   |

- 예제 1번에서 flag가 true이므로 a + b = (-4) + 7 = 3을 return 합니다.
- 예제 2번에서 flag가 false이므로 a - b = (-4) - 7 = -11을 return 합니다.

### 🧐 풀이

```js
function solution(a, b, flag) {
  var answer = 0;
  return flag ? (a + b) : (a - b);
}
```

### 😀 알게된 점

처음엔 if 문을 써서 풀다가 코드를 줄일 수 없을까 ?? 고민하던중 `삼항연산자 ? ` 를 알게 되었는데, 확실히 삼항연산자로 쓰니 코드의 가독성이 좋다고 느껴지는 현재의 나.. 그 외에 4~5문제를 더 풀면서도 삼항연산자를 사용하니 금방 풀리고 코드의 가독성 측면에서도 좋은 것 같다고 느꼈다.