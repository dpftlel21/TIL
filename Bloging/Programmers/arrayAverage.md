### 📝 문제 설명

정수 배열 numbers가 매개변수로 주어집니다. numbers의 원소의 평균값을 return하도록 solution 함수를 완성해주세요.

### ✔️ 제한사항

- 0 ≤ numbers의 원소 ≤ 1,000
- 1 ≤ numbers의 길이 ≤ 100
- 정답의 소수 부분이 .0 또는 .5인 경우만 입력으로 주어집니다.

### 🖥️ 입출력 예

|                   numbers                    | result |
| :------------------------------------------: | :----: |
|       [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]        |  5.5   |
| [89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99] |   94   |

- numbers의 원소들의 평균 값은 5.5입니다.
- numbers의 원소들의 평균 값은 94.0입니다.

### 🧐 풀이

```js
function solution(numbers) {
  let sum = 0;
  numbers.forEach((num) => (sum += num));
  return sum / numbers.length;
}
```

### 😀 알게된 점

forEach는 배열의 각 요소에 대해 주어진 함수를 순서대로 한 번씩 호출하는 메서드며, 각 요소에 대해 반복 작업을 수행하는데 사용된다는 것을 알게되었다.

코드에서 `numbers.forEach(num => sum += num);` 부분은 numbers 배열의 각 숫자를 순회하면서 sum에 해당 숫자를 더하는 역할을 수행한다.
