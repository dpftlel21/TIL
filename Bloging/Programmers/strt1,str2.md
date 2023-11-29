### 📝 문제 설명

문자열 str1, str2가 매개변수로 주어집니다. str1 안에 str2가 있다면 1을 없다면 2를 return하도록 solution 함수를 완성해주세요.

### ✔️ 제한사항

- 1 ≤ str1의 길이 ≤ 100
- 1 ≤ str2의 길이 ≤ 100
- 문자열은 알파벳 대문자, 소문자, 숫자로 구성되어 있습니다.

### 🖥️ 입출력 예

|           str1           |  str2  | result |
| :----------------------: | :----: | :----: |
| "ab6CDE443fgh22iJKlmn1o" | "6CD"  |   1    |
|    "ppprrrogrammers"     | "pppp" |   2    |
|        "AbcAbcA"         | "AAA"  |   2    |

- "ab6CDE443fgh22iJKlmn1o" str1에 str2가 존재하므로 1을 return합니다.
- "ppprrrogrammers" str1에 str2가 없으므로 2를 return합니다.
- "AbcAbcA" str1에 str2가 없으므로 2를 return합니다.

### 🧐 풀이

```js
function solution(str1, str2) {
  if (str1.includes(str2)) {
    return 1;
  } else {
    return 2;
  }
}
```

### 😀 알게된 점

javaScript의 메서드 중에서 `includes`를 사용하여, 배열이 특정 요소를 포함하고 있는지에 대한 여부를 확인하며, 문자열에서도 이 메서드를 사용할 수 있다고 알게되었다.

또한, `indexOf`를 사용하여 주어진 문자열이 다른 문자열 안에서 어느 위치에 있는지를 반환하며, 만약 찾지 못하면 -1을 반환하도록 해결할 수 있다는 사실도 알게되었다.

```js
str1.indexOf(str2) !== -1 ? 1 : 2;
```
