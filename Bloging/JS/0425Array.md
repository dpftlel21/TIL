# 1. 객체

객체(object)는 자료형의 일종으로 다양한 값을 모아둔 또다른 값입니다. 객체의 종류는 크게 배열(array), 함수(function), 배열이나 함수가 아닌 객체로 나눌 수 있습니다.

```js
    const apple = "사과";
    const apple = "오렌지";
    const apple = "배";
    const apple = "딸기";
```
위와 같이 과일의 종류가 매우 많기 때문에 모든 과일에 변수를 붙이는건 매우 불편합니다. 이런 경우 우리는 `[]`를 이용한 배열(array)를 사용하여 하나로 묶을 수 있습니다. 

```js
    const fruits = ["사과", "오렌지", "배", "딸기"]; // []안에 들어간 4개의 요소들.

    console.log(fruits[0]); // 사과, 배열도 똑같이 0부터 시작
    console.log(fruits[1]); // 오렌지
    console.log(fruits[2]); // 배
    console.log(fruits[3]); // 딸기
```

```js
    const arrayOfArray = [1, 2, 3], [4, 5];
    arrayOfArray[0]; // [1, 2, 3] , 2개의 요소 + 각각의 요소 안에 배열

    const a = 10;
    const b = 20;
    const variableArray = [a, b, 30];
    variableArray[1]; // 20 (b)
```

- 배열 안에는 배열이 들어갈 수 있습니다.
- 변수들도 배열안에 넣을 수 있습니다.


```js
    const everything = ["사과", 1, undefined, true, "배열", null];
    const duplicated = ["가", "가", "가", "가", "가"]
    const empty = [];

    console.log(everything.length);
```


### ✔️ 배열의 요소 개수 구하기

배열 이름 뒤에 `.length`를 붙이면 되고, 빈 값도 유효한 값이기 때문에 요소 개수를 셀 때 포함됩니다.

배열의 요소 개수가 항상 마지막 인덱스보다 1 크기 때문에 즉, 마지막 요소의 인덱스는 배열의 요소 개수에서 1을 빼면 됩니다. 이를 활용해 마지막 요소의 값을 찾을 수 있습니다.

```js
const findLastElement = ["a", "b", "c", "d", "e"]

console.log([findLastElement.length - 1]);
```
---    
### ✔️ 배열에 요소 추가하기

- 제일 뒤에 요소 추가


    ```js
        const target = ["a", "b", "c", "d", "e"]
        target[5] = "f";

        console.log(target); // "a", "b", "c", "d", "e", "f" (f가 추가된걸 알 수 있습니다.)
    ```

    ```js
        const target = ["가", "나", "다", "라", "마"]
        target[target.length] = "바";

        console.log(target) // "가", "나", "다", "라", "마", "바"
    ```

    ```js
        const target = ["가", "나", "다", "라", "마"]
        target.push("바");

        console.log(target) // "가", "나", "다", "라", "마", "바"
    ```
- 제일 앞에 요소 추가

    🧐 배열의 제일 앞에 값을 추가할 땐 `배열.unshift("추가할 요소")` 기능을 실행하면 됩니다. `배열[추가할 위치] = "추가할 요소";`를 할 경우 추가가 아닌 수정이 되기 때문에 주의합시다!

    ```js
        const target = ["b", "c", "d", "e"]
        target.unshift("a") ;

        console.log(target); // "a"(a가 추가된걸 알 수 있습니다.), "b", "c", "d", "e" 
    ```

    #### 🧐 궁금하네,,, `const`는 왜 상수인데 수정이 가능할까?

    ```plain/text
    const 선언은 블록 범위의 상수를 선언합니다. 상수의 값은 재할당할 수 없으며 다시 선언할 수도 없습니다.
    ```
    
    arr 배열은 객체 타입이며 변경이 가능한 값이다. 따라서 배열의 값 자체는 변경이 될 수 있지만, 상수로 선언됐기 때문에 재할당은 되지 않는 것이다. 재할당을 하게 되면 가리키고 있는(처음)주소가 변경되기 때문에 이는 불가능하다.

    즉 , 객체 내부 요소를 바꾸는 것은 가능하지만 객체 외부(자체)를 수정하는 것은 불가능하다.

---
### ✔️ 배열의 요소 수정하기

```js
 const target = ["가", "나", "다", "라", "마"];
 target[3] = "파";

 console.log(target); // "라" → "파" 
```

---
### ✔️ 배열의 요소 제거하기

```js
 const target = ["가", "나", "다", "라", "마"];
 target.pop(); // 마지막 요소 제거

 console.log(target); // "가", "나", "다", "라"
```

- `pop`을 이용하여 마지막 요소를 제거할 수 있습니다. (이와 반대로 `push`는 마지막에 요소를 추가합니다.)

```js
 const target = ["가", "나", "다", "라", "마"];
 target.shift(); //첫 번째 요소 제거

 console.log(target); // "나", "다", "라", "마" 
```

- `shift`를 이용하여 첫 번째 요소를 제거할 수 있습니다. (이와 반대로 `unshift`는 첫 번째에 요소를 추가합니다.)

```js
 const target = ["가", "나", "다", "라", "마"];
 target.splice(1, 1); // "나" 제거

 console.log(target); // "가", "다", "라", "마"
```

- `splice([index의 위치],[index의 위치부터 지우고 싶은 갯수])` 기능을 사용하여 중간 요소를 제거할 수도 있습니다. `splice(1)`일 경우 arr[1] 뒤에 부분을 전부 지웁니다. 

```js
 const target = ["가", "나", "다", "라", "마"];
 target.splice(1, 3, "파", "타");  // "나", "다", "라" 제거 후 "파", "타" 추가

 console.log(target); // "가", "파", "타", "마"
```

- `splice([index의 위치],[index의 위치부터 지우고 싶은 갯수])` 기능을 사용하여 중간 요소를 지운 후 추가도 가능합니다.

```js
 const target = ["가", "나", "다", "라", "마"];
 target.splice(1, 0, "타");  // "나" 앞에 "타" 추가

 console.log(target); // "가", "타", "나", "다", "라", "마"
```

- 중간 요소를 안 지우고 추가만 할 수도 있습니다.
---
### ✔️ 배열에서 요소 찾기

쉽게 얘기하자면 검색기능이라고 생각하시면 됩니다. `includes`기능을 사용합니다.

```js
    const target = ["가", "나", "다", "라", "마" ];
    const result = target.includes("다"); // true;
    const result2 = target.includes("카"); // false;

    console.log(result);
    console.log(result2);
```
```js
    const target = ["A", "B", "C", "A", "C" ];
    const result = target.indexOf("C"); 
    const result2 = target.lastIndexOf("A"); 
    const result3 = target.indexOf("D");

    console.log(result); // 2
    console.log(result2); // 뒤에서부터 찾기 때문에 3
    console.log(result3); // 없으면 -1
```

- `indexOf`와 `lastIndexOf`를 사용하여 몇 번째 인덱스에 위치하는지 알 수 있습니다.
---

### ✔️ 배열 반복하기

배열은 값을 나열한 것이기 때문에 반복문(`for`,`while`)과 같이 사용하는 경우가 많습니다.

- `while`
```js
    const target = ["가", "나", "다", "라", "마" ];

    let i = 0;
    while ( i < target.length) {
        console.log(target[i]);
        i++;
    } // "가", "나", "다", "라", "마" , "가나다라마"의 문자열로 출력을 해도 값은 똑같습니다.
```
- `for`
```js
    const target = ["가", "나", "다", "라", "마" ];

    for ( let i = 0; i < target.length; i++) {
        console.log(target[i]);
    } // "가", "나", "다", "라", "마"
```
---




### ✔️ 배열 반복하기