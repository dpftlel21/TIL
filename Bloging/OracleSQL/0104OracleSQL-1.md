## 🗒️ Oracle DB SQL 기초 문법

### 🎈 SELECT

> <span style="font-family:Papyrus; color:skyblue">SELECT</span> : 테이블에서 데이터 질의 키워드
>
> <span style="font-family:Papyrus; color:skyblue">FROM</span> : 데이터를 조회하고 싶은 테이블의 이름을 정하는 키워드
>
> <span style="font-family:Papyrus; color:skyblue">WHERE</span> : 데이터를 조회하는 조건을 적는 키워드
>
> <span style="font-family:Papyrus; color:skyblue">GROUP BY</span> : 특정 속성을 기준으로 그룹화 하여 검색할 때 속성 키워드
>
> <span style="font-family:Papyrus; color:skyblue">HAVING</span> : 그룹 함수를 포함한 조건 키워드
>
> <span style="font-family:Papyrus; color:skyblue">ORDER BY</span> : 정렬시 사용하는 키워드

---

### 🎈 SELECT 실행순서

FROM -> WHERE -> GROUP BY -> HAVING -> SELECT -> OREDER BY

> <span style="font-family:Papyrus; color:skyblue">FROM</span> : 발췌 대상 테이블 참조
>
> <span style="font-family:Papyrus; color:skyblue">WHERE</span> : 발췌 대상 데이터가 아닌 것은 제거
>
> <span style="font-family:Papyrus; color:skyblue">GROUP BY</span> : 행들을 소그룹화
>
> <span style="font-family:Papyrus; color:skyblue">HAVING</span> : 그룹핑된 값의 조건에 맞는 것만을 출력
>
> <span style="font-family:Papyrus; color:skyblue">SELECT</span> : 데이터 값을 출력/계산
>
> <span style="font-family:Papyrus; color:skyblue">ORDER BY</span> : 데이터 정렬

---

### 🎈 기초 문법

> 테이블의 총 레코드 수

```
// 테이블 전체 조회

SELECT * FROM 테이블명

// 테이블 전체 레코드 수 COUNT()

SELECT COUNT(*) FROM 테이블명
```

⚠️ 테이블이 소수의 데이터가 아니라 대량의 데이터를 보유하면, 이 방식은 비효율적이며, 더 효율적으로 계산하기 위해 테이블의 PK 수를 조회하면 됩니다.

기본키는 null 값이 입력될 수 없으므로, 테이블의 전체 레코드 수와 동일하게 나오기 때문입니다.

```
SELECT COUNT(PK) FROM 테이블명
```

> Aliase(별칭) 사용
>
> - AS 키워드를 사용하여 쿼리에서 반환된 열에 새 이름을 지정합니다.

> WHERE
>
> - 조건절로 활용하며, 반드시 해당 내용이 참일 때만 수행됩니다. (WHERE 1=1은 실무에서 지양해야합니다.

#### ✔️ AND

AND 논리연산자는 여러 조건들 중, 모든 조건에 알맞는 행 데이터만 조회합니다. (한 조건이라도 통과 못하면 조회 x)

```js
데이터 비교 연산자 AND 데이터 비교 연산자
```

<img src ="https://postfiles.pstatic.net/MjAyNDAxMDdfMjYw/MDAxNzA0NjEwMzc1ODQ3.km8KLBuzSun9OK5kTFteu7gLZNlwbWdQqGwSoguqG2sg.8J9_OKN6ReZPBpL-DsWk8D8KQxDuaUcjSCMiYk29sIog.PNG.dkdnmju/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7_2024-01-07_155152.png?type=w773" height="200px">

1. USERSPRACTICE 테이블로부터 NAME, AGE 출력
2. WHERE 나이가 19세 이상 AND 나이가 26세이하 출력

#### ✔️ BETWEEN ~ AND (범위 조회)

지정하는 범위 내에 해당하는 행 데이터를 출력합니다.

`>=, <=` 비교연산자를 사용한 것 과 같아서, 데이터가 숫자 타입이고, 해당 데이터의 범위를 지정하여 조회할 경우 BETWEEN 을 사용하는게 훨씬 간단합니다.

```js
WHERE 컬럼 명 BETWEEN 조회시작할 범위 값 and 마지막 조회할 범위 값
```

<img src="https://postfiles.pstatic.net/MjAyNDAxMDdfMjYx/MDAxNzA0NjEwNTk3ODQ4.Z1jWdu390C-q7dbBCo2xzwP5oVmJCGCHxBSgYYXolz8g.X9hp0Ch1NkrDPw2J0N9Rbl0m4tbIVLxtAhHvQWCnKaIg.PNG.dkdnmju/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7_2024-01-07_155630.png?type=w773" height="200px">

#### ✔️ OR

or 논리연산자는 조건들 중에서, 한 조건에라도 해당되는 행 데이터들을 모두 조회합니다.

```JS
데이터 비교연산자 OR 비교연산자 데이터
```

<img src ="https://postfiles.pstatic.net/MjAyNDAxMDdfMjk0/MDAxNzA0NjEwODI0MzIz.3N5CwhNOXhCv_P-kg1NBANYERqxkB5UJ8jVsiiHulwIg.Yy5iZbWFMvkrzlh25tvoO-wuTsWn39nTNSWen-vU1CQg.PNG.dkdnmju/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7_2024-01-07_160009.png?type=w773" height="200px">

- 19세 이하이거나 30세 이상인 사람 출력

#### ✔️ IN (특정 조회)

특정 값, 데이터를 지정하여 조회하며, 숫자가 아닌 문자데이터를 조회하는 경우는 BETWEEN이 아닌 in을 사용합니다.

```JS
SELECT 컬럼1, 컬럼2 FORM 테이블명
WHERE 컬럼명 IN ('특정 데이터', '특정 데이터')
```

<img src="https://postfiles.pstatic.net/MjAyNDAxMDdfMzMg/MDAxNzA0NjExMTQzNTAy.Y8L2y7LeOvEa2GmGUu6PO3D5n23m1_Ku4Bkun1ke4eQg.l8ZnIsuJHHhTi2T6rNRNIxzDhKwmy8yOcYLfggaZCggg.PNG.dkdnmju/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7_2024-01-07_160532.png?type=w773" height="200px">

- USERSPRACTICE 테이블의 NAME, NICKNAME 컬럼을 조회
- WHERE NICKNAME 컬럼의 '이누', '경주마', '무무'라는 특정 데이터 조회

#### ✔️ NOT 부정 연산자

```JS
NOT 다른 연산자들의 데이터
```

<img src="https://postfiles.pstatic.net/MjAyNDAxMDdfNTAg/MDAxNzA0NjExNDMzMjM5.YizqkamhMaKV3vPdThKvrxy-jB2u9ym6-yjgats7erEg.JMXHrlE0CNK0ZvFvZ4VOJHaVc1V3QZXMjMN7szzTMK0g.PNG.dkdnmju/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7_2024-01-07_161021.png?type=w773" height="200px">

- USERSPRACTICE 테이블의 모든 컬럼 조회
- WHERE NOT NICKNAME='경주마' (경주마라는 NICKNAME을 가진 데이터 빼고 다 조회)

#### ✔️ ORDER BY

- 내림차순 정렬

```JS
ORDER BY 키워드 DESC : 키워드 기준으로 내림차순 정렬
```

<img src="https://postfiles.pstatic.net/MjAyNDAxMDdfMjUz/MDAxNzA0NjExNjUyMzk4.mj3PxTXIowCYggac_KY9ocdFj5rb4aFnXl_pDptTtwkg.5FvNdKJ1lsouuuy0TkgZ0uwkMoF-ZeS9q_ctisLxKd4g.PNG.dkdnmju/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7_2024-01-07_161344.png?type=w773" height="200px">

- NAME 이라는 컬럼 기준으로 내림차순 정렬

- 오름차순 정렬

```JS
ORDER BY 키워드 ASC : 키워드 기준으로 오름차순 정렬
```

<img src="https://blogfiles.pstatic.net/MjAyNDAxMDdfMTIg/MDAxNzA0NjExNjUyMzk2.paMMCm7Eom-xb0WfrBO5xy2u7RzSo8bghSrgU9-im98g.wBJHVGuMaE4xCs9gAwBC9cg5cgfMNun1qmUUavV_g3Ag.PNG.dkdnmju/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7_2024-01-07_161355.png" height="200px">

- NAME 이라는 컬럼 기준으로 오름차순 정렬

#### ✔️ LIKE

특정 문자를 포함한 행 데이터를 조회하며, 해당 문자를 갖고 있는 행 데이터를 조회합니다.

- LIKE 특정문자% : % 앞글자 기준으로 출력 (단어의 맨 첫 시작이 % 앞글자인 데이터 출력 )

<img src="https://postfiles.pstatic.net/MjAyNDAxMDdfMTI4/MDAxNzA0NjEyMDY5NTUy.FaeHqjWEAeUlYB7gXZM8ATTT6YLtUGicEeeNcD8zaKIg.29_l7c0DNv2-Tmx5rbfgq6URs3jw6Hd8PYmnn4PG3f4g.PNG.dkdnmju/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7_2024-01-07_162023.png?type=w773" height="200px">

    - NICKNAME 맨 앞글자가 '이' 인 사람 출력

- LIKE %특정문자 : % 맨 마지막 문자 기준으로 출력 (단어의 맨 마지막이 % 뒷 글자인 데이터 출력)

<img src = "https://postfiles.pstatic.net/MjAyNDAxMDdfNjcg/MDAxNzA0NjEyMDY5NTUz.YI3AnsYpJpt6t_GT4r2WnixX9tcAxumSWCAkf5E_WCEg.zghAx_C9oqxQDh5sUcqhDE3WrjAXc-HR8SLZa_EATUMg.PNG.dkdnmju/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7_2024-01-07_162054.png?type=w773" height="200px">

    - NICKNAME 맨 마지막 글자가 '이' 인 사람 출력

- LIKE + \_\_(언더바)

언더바의 개수만큼 글자 수를 지정하여 특정 문자를 조회하는 방법입니다.

```JS
LIKE '(글자 수 만큼)언더바+특정문자'
LIKE '특정문자+언더바(글자 수 만큼)'
```

- LIKE '(글자 수 만큼)언더바+특정문자'

<img src="https://postfiles.pstatic.net/MjAyNDAxMDdfMjkg/MDAxNzA0NjEyNDUyNzY3.zPhJsS9Z8F501uyo7P5yUxUOzatkPGsJDPRRc4qjHDkg.nHKAZx3rSefzkkInfe5N9TVZJUEv659OOvhDW5egYZ8g.PNG.dkdnmju/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7_2024-01-07_162701.png?type=w773" height="200px">

- LIKE '특정문자+언더바(글자 수 만큼)'

<img src="https://postfiles.pstatic.net/MjAyNDAxMDdfMTk1/MDAxNzA0NjEyNDUyNzY3.JAdOM67Zf33ifZI44EkqS1XFyLQPfgjVHG-2jl5C9zgg.YTrik1hGumO0uboZ80guxupo2Ppxw6Od_H1LsHnwRKsg.PNG.dkdnmju/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7_2024-01-07_162717.png?type=w773" height="200px">
