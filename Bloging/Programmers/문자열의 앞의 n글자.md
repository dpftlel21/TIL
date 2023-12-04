### 📝 문제 설명

문자열 my_string과 정수 n이 매개변수로 주어질 때, my_string의 앞의 n글자로 이루어진 문자열을 return 하는 solution 함수를 작성해 주세요.

### ✔️ 제한사항

- my_string은 숫자와 알파벳으로 이루어져 있습니다.
- 1 ≤ my_string의 길이 ≤ 1,000
- 1 ≤ n ≤ my_string의 길이

### 🖥️ 입출력 예

|    my_string     |  n  |    Result     |
| :--------------: | :-: | :-----------: |
| "ProgrammerS123" | 11  | "ProgrammerS" |
|   "He110W0r1d"   |  5  |    "He110"    |

- 예제 1번의 my_string에서 앞의 11글자는 "ProgrammerS"이므로 이 문자열을 return 합니다.
- 예제 2번의 my_string에서 앞의 5글자는 "He110"이므로 이 문자열을 return 합니다.

### 🧐 풀이

```js
function solution(my_string, n) {
  return my_string.slice(0, n);
}
```

1. `slice` 메서드를 사용하여 0번째 부터 n번째까지 문자열을 반환

### 😀 알게된 점

`slice` 메서드를 이용한 문제를 풀어보니까 금방 적용할 수 있었다.

코테 준비를 하면서 여러 문제를 풀다보니 느끼는건 좀 비슷한 느낌의 문제가 많은 거 같다고 느꼈다.
