### 📝 문제 설명

정수 n과 정수 배열 numlist가 매개변수로 주어질 때, numlist에서 n의 배수가 아닌 수들을 제거한 배열을 return하도록 solution 함수를 완성해주세요.

### ✔️ 제한사항

- 1 ≤ n ≤ 10,000
- 1 ≤ numlist의 크기 ≤ 100
- 1 ≤ numlist의 원소 ≤ 100,000

### 🖥️ 입출력 예

|  n  |            numlist             |       Result       |
| :-: | :----------------------------: | :----------------: |
|  3  | [4, 5, 6, 7, 8, 9, 10, 11, 12] |     [6, 9, 12]     |
|  5  |      [1, 9, 3, 10, 13, 5]      |      [10, 5]       |
| 12  |   [2, 100, 120, 600, 12, 12]   | [120, 600, 12, 12] |

- numlist에서 3의 배수만을 남긴 [6, 9, 12]를 return합니다.
- numlist에서 5의 배수만을 남긴 [10, 5]를 return합니다.
- numlist에서 12의 배수만을 남긴 [120, 600, 12, 12]를 return합니다.

### 🧐 풀이

```js
function solution(n, numlist) {
  var answer = [];
  for (let i = 0; i < numlist.length; i++) {
    if (numlist[i] % n === 0) {
      answer.push(numlist[i]);
    }
  }
  return answer;
}
```

### 😀 알게된 점

n의 배수가 아닌 수들을 제거한 배열을 나타내는 것이 이번 문제의 핵심이었다 !! 이는 즉 n의 배수만 나열하면 된다는 것이 아닐까 ?? 에서부터 접근했다.

따라서 for문을 돌려서 numlist라는 배열을 순회하여 그 중에서 n의 배수인 것들만 다시 배열에 push를 통해 추가하여 나타냈다.

다른 사람들의 풀이를 보니 filter를 쓴 사람들이 대부분이었다. 마냥 줄인게 좋은 것 같기도 하면서 뭔가 길지만 이해하기 쉽고, 직관적인 부분이 더 나은 부분도 있는 것 같다.
