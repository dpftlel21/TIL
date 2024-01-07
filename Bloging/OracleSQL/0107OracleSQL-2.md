## 🗒️ Oracle DB SQL 기초 문법 - 2

### 🎈 SQL의 6가지

> <span style="font-family:Papyrus; color:skyblue">DQL</span> : Data Query Language의 약자로, 테이블의 데이터를 조회 및 검색하는 명령어 ex) SELECT
>
> <span style="font-family:Papyrus; color:skyblue">DDL (데이터 정의어)</span> : Data Definition Language의 약자로, 테이블을 포함한 여러 객체를 생성, 수정, 삭제하는 명령어 ex) CREATE, ALTER, DROP
> 😊 DDL 쿼리는 트랜잭션이 바로 적용됩니다.
>
> <span style="font-family:Papyrus; color:skyblue">DLC (데이터 제어어)</span> : Data Control Language의 약자로, 데이터 사용 권한 부여, 취소를 하는 명령어 ex) GRANT, REVOKE
>
> <span style="font-family:Papyrus; color:skyblue">DML (데이터 조작어)</span> : Data Manipulation Language의 약자로, 테이블의 데이터를 저장, 수정 삭제하는 명령어 ex) INSERT, UPDATE, DELETE
>
> <span style="font-family:Papyrus; color:skyblue">TCL (트랜잭션 제어어)</span> : Transaction Control Language의 약자로 트랜잭션 데이터의 영구 저장, 취소 등의 명령어 ex) COMMIT, ROLLBACK, SAVEPOINT

---

### 🎈 DCL (데이터 제어어)

> CREATE TABLE : 데이터 베이스 엔진에게 테이블 공간을 만들어달라는 명령어

```
CREATE TABLE 계정이름.테이블이름(
	칼럼명1 데이터타입1(사이즈)
    ,칼럼명2 데이터타입2
    ,칼럼명3 데이터타입3(사이즈)
    , ...
    , 칼럼명N 데이터타입N(사이즈)
    )
```

ex)

```
CREATE TABLE 이인우.TEST_T1(
	TC1 VARCHAR2(10) PRIMARYKEY
    ,TC2 VARCHAR2(20) NOT NULL
    ,TC3 NUMBER
    ,TC4 DATE
    );
```

1. 이인우 계정에 테이블 이름이 TEST_T1 테이블 생성
2. 칼럼은 4개
3. 첫 번째 칼럼명은 TC1이고, 데이터 타입은 VARCHAR2, 사이즈는 10, 기본키로 지정하여 고유하며, NULL 값이 존재하면 안됨
4. 두 번째 칼럼명은 TC2이고, 데이터 타입은 VARCHAR2, 사이즈는 20, NULL 값이 존재하면 안됨
5. 세 번째 칼럼명은 TC3이고, 데이터 타입은 NUMBER, 사이즈는 기본값
6. 네 번째 칼럼명은 TC4이고, 데이터 타입은 DATE

⚠️ DATE의 타입은 사이즈를 적지 않습니다.

> 🗒️ CREATE TABLE 테이블명 AS SELECT\*FROM 테이블명

    	<br> - 코드를 통해 다른 테이블에 있는 값을 복사하여 가져올 수 있습니다.
    	⚠️ Primary Key, Index 등 Object는 복사가 되지 않습니다.

#### 🗒️ 테이블명 변경

```
RENAME TEST_T1 TO TEST_1;
```

#### 🗒️ 테이블 변경

```
// ALTER, ADD 명령어를 통해 테이블에 칼럼 추가
// 새로 생성되는 칼럼은 마지막 컬럼으로 생성됨

ALTER TABLE TEST_1
ADD TT VARCHAR2(100);
```

#### 🗒️테이블 칼럼 이름 변경

```
// ALTER와 RENAME 명령어를 통해 칼럼명 변경 O

ALTER TABLE 테이블명
RENAME COLUMN TT TO TT_RENAME;
```

#### 🗒️테이블 칼럼 사이즈 변경

```
// ALTER와 MODIFY 명령어를 통해 칼럼 사이즈 변경 O

ALTER TABLE 테이블명
MODIFY COLUMN TT_RENAME TO VARCHAR2(200);
```

#### 🗒️테이블 칼럼 삭제

```
// ALTER와 DROP 명령어를 통해 테이블의 칼럼 삭제 O

ALTER TABLE 테이블명
DROP COLUN TT_RENAME;
```

#### 🗒️테이블 삭제

```
// DROP 명령어를 통해 테이블 삭제 O

DROP TABLE 테이블명;
```

---

### 🎈 DML (데이터 조작어, INSERT, UPDATE, DELETE)

#### ✍️ 특징

> 1. DML 쿼리의 경우, 트랜잭션은 처리
> 2. DML은 메모리에 적재, 이 때 TCL 명령어인 COMMIT을 하지 않을 경우, 외부 응용프로그램에서는 테이블 내용 중 조회 불가능
> 3. TCL 명령어인 COMMIT을 할 경우, 메모리에 적재된 내용을 파일에 적재하여 외부 응용프로그램에서 테이블 내용중 파일에 적재된 내용만 조회 가능

#### ✍️ INSERT

<img src="https://postfiles.pstatic.net/MjAyNDAxMDdfMTQ2/MDAxNzA0NjA2NTM3NTM5.6H-EjJdidOCWlyzHkLGomgGFAaora4e08z6DmID4zIMg.MWH_W-6-gpEi_pV7apEnilZyCgU5XoMI1c-uR7oJMgcg.PNG.dkdnmju/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7_2024-01-07_144744.png?type=w773" width="450px" height="150px">

> 테이블 내의 새로운 데이터 추가 (INSERT)

```JS
// 칼럼 순서와 데이터 타입에 맞게 데이터 입력하기 !
// id는 테이블 구조를 만들 때 auto_uncrement로 설정해줘서
// 데이터가 증가함에따라 자동으로 1씩증가한 id를 붙여주기

INSERT INTO 테이블 명

(컬럼1, 컬럼2, .....)

VALUES

(컬럼1에 넣을 값, 컬럼2에 넣을 값, .....);
```

- 여러 행 한번에 삽입하기

```js
INSERT ALL
INTO USERSPRACTICE (ID, NAME, NICKNAME, AGE, ADDRESS) VALUES (6, '무진', '무무', 25, 'anwls@naver.com')
INTO USERSPRACTICE (ID, NAME, NICKNAME, AGE, ADDRESS) VALUES (7, '초이', '최', 23, 'chdl@naver.com')
INTO USERSPRACTICE (ID, NAME, NICKNAME, AGE, ADDRESS) VALUES (8, '정희', '조이', 31, 'wjdgml@naver.com')
INTO USERSPRACTICE (ID, NAME, NICKNAME, AGE, ADDRESS) VALUES (9, '낙수', '낙지', 19, 'skrtn@naver.com')
SELECT * FROM dual;
```

#### 🧐 음,, 코드가 막 그렇게 깔끔해 보이진 않는데... 왜 아래 코드가 동작 안했을까,,, 의문이다 정말로 버전 차일까 ??

```js
INSERT INTO USERSPRACTICE (ID, NAME, NICKNAME, AGE, ADDRESS)
VALUES
(6, '무진', '무무', 25, 'anwls@naver.com'),
(7, '초이', '최', 23, 'chdl@naver.com'),
(8, '정희', '조이', 31, 'wjdgml@naver.com'),
(9, '낙수', '낙지', 19, 'skrtn@naver.com');
```
