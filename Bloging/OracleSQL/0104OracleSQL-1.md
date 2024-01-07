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

> ORDER BY
>
> - ORDER BY 키워드 DESC : 키워드 기준으로 내림차순 정렬
> - ORDER BY 키워드 ASC : 키워드 기준으로 오름차순 정렬

> LIKE
>
> - '%A' : 마지막 글자가 A로 끝나는 사람 출력
> - '\_A%' : 두 번째 글자가 A인 사람을 출력
