# 😀 Git !!

## ✔️ Git add, commit, push 순서

1. 현재 프로젝트 Git 초기화
```
   git init 
``` 

2. 모든 파일의 변경사항을 추적하도록 지정
```
   git add 파일명 (전체 파일 추가는 .) 
``` 

3. 버전생성
```
   git commit -m '버전명' 
``` 

4.  GitHub 원격저장소 연결
```
   git remote add origin 원격저장소url 
``` 

5.  GitHub 원격저장소 확인
```
   git remote -v 
``` 

6.  origin 별칭 원격저장소로 버전내역 전송
```
   git push origin master(main)
``` 

### 😀 코드 작성 후 Git에 업데이트 시

1. git add 파일명 (전부 다 하고자 할 때 . )

2. git commit -m "커밋 메시지"

3. git push origin 브랜치명


### 😀 도움말

```
@ Git에서 제공하는 모든 명령어 보기

git help -all

@ 특정 command에서 사용할 수 있는 모든 옵션 보기

git [command] -help
```

---


## ✔️ Git 리포지토리

Github는 개발자의 SNS라고 불릴 정도로 다양한 종류의 오픈소스 프로젝트가 공유되어 있습니다. 오픈소스 프로젝트에 들어가면, 가장 먼저 확인할 수 있는 정보가 바로 이 README.md 파일입니다. 기본적인 마크다운 사용법을 잘 숙지하고 있으면 간단한 소개 페이지처럼 제작할 수 있습니다.

### 📝 Issue

프로젝트에 새로운 기능을 제안하거나, 버그를 찾아 제보하는 등 프로젝트의 이슈를 의미하며 솔로 프로젝트에서는 Issue를 하나의 스크럼 티켓처럼 사용하게 됩니다.

### 📝 Pull Request

Pull Request는 내가 작업한 내용을 중요 git branch에 합칠 수 있는지 확인하는 요청을 의미하며, Github에서는 Pull Request를 통해 commit한 코드를 따로 선택하여 해당 부분에 코멘트를 달 수 있습니다. 

실무에서도 Pull Request를 통해 코드를 보면서 코멘트를 남기는 방식으로 코드 리뷰를 진행하기 때문에, 이 Pull Request 과정에 익숙해지는 것이 중요합니다.

1. 기능 개발 진행

```
git commit -m "기능1의 세부 기능1"
git commit -m "기능1의 세부 기능2"
git commit -m "기능1 개발 완료"
```

2. 리포지토리로 push (add, commit, push)

```
git push origin 작업한 브랜치명
```

### 📝 Project

Project는 Github 내에서 업무 관리를 해줄 수 있게 돕는 새로운 기능입니다.

솔로 프로젝트에서는 이 Project 기능을 이용하여 스크럼 보드를 생성하고, 스프린트 기간 동안 솔로 프로젝트의 스윔레인(SwimLane)을 관리합니다.


### 📝 Git branch

브랜칭(branching)은 기존 개발 중인 메인 개발 코드를 그대로 복사하여 새로운 기능 개발을 메인 개발 코드를 건드리지 않고 할 수 있는 버전 관리 기법입니다.

처음에 Git 리포지토리를 생성하면 나오는 main 브랜치에서만 작업을 하다가 새로운 기능 개발을 위해 feature 브랜치를 새로 생성하는 경우, 기존 main 브랜치에서의 작업은 유지하고 새로운 feature 브랜치에서 자유롭게 코드를 추가 및 삭제할 수 있습니다.

이때, 새로운 브랜치로 Git이 바라보는 곳, HEAD를 변경하는 작업을 switch라고 부릅니다.
브랜치를 생성할 때는 생성(create)의 의미로 -c 옵션을 붙여줘야 하고, 기존에 있는 브랜치로 옮길 때는 붙이지 않아도 됩니다.

#### 🤔 branch 생성 / 변경

```
- 브랜치 목록 보여줌, * 표시로 현재 작업중인 브랜치 확인 o

git branch

- 커밋에서 새로운 브랜치 생성

git branch [branch-name]
```

```
😀 feature 브랜치 새로 생성하는 경우

git switch -c feature

or

git checkout -b feature
```

```
😀 기존 main 브랜치로 변경하려면 -c , -b를 빼고 적습니다.

git switch main

or

git checkout main
```

#### 🤔 브랜치 합치기 (merge)

1. 기능 개발 진행

```
git commit -m "기능1의 세부 기능1"
git commit -m "기능1의 세부 기능2"
git commit -m "기능1 개발 완료"
```

2. merge를 위한 main으로 브랜치 변경

```
git switch main

or

git checkout main
```

3. main 브랜치로 병합

```
git merge 개발한 브랜치명
```

#### 👀 브랜치 삭제

merge 된 feature 브랜치는 이미 dev 브랜치에 기록이 완벽하게 남아있기 때문에, 굳이 남겨둘 이유가 없어 삭제해 브랜치를 깔끔하게 관리하는 편이 좋습니다. 원격 리포지토리에서 pull request가 성공적으로 마무리되면, 위의 이미지처럼 브랜치를 삭제하는 버튼을 눌러 쉽게 삭제할 수 있습니다.

```
git branch -d 작업한 브랜치명
```

- git은 전반적으로 브랜치가 합쳐지지 않으면 삭제하지 못하도록 설정되어 있는데 종종 다 만들지 못한 기능의 기록을 삭제하고 싶을 때 다음과 같은 코드를 통해 강제 삭제가 가능합니다.

```
git branch -D feat/todo
```
---

### ✔️ Git 설정

로컬 리포지토리와 연결할 유저 정보 설정

```
@ 버전 히스토리를 식별할 때 사용할 이름 설정

git config --global user.name "[firstname lastname]"

@ 각 기록과 연결할 이메일 주소 설정

git config --global user.email "[valid-email]"
```

---

###  ✔️ Stage & Commit

스테이지 영역을 이용하여 커밋할 수 있습니다.

```
@ 다음 커밋을 위해 현재 디렉토리에서 수정된 파일 확인 O

git status
```

```
@ 다음 커밋을 위해 파일을 추가(스테이지) (stage)

git add [file]
```

```
@ 추가한 파일 언스테이징, 변경 사항 유지 됨

git reset [file]
```

```
@ 스테이지되지 않은 변경 사항 보여줌

git diff
```

```
@ 스테이지했지만 커밋하지 않은 변경 사항 보여줌

git diff --staged
```

```
@ 스테이지된 컨텐츠를 메시지와 함께 커밋 (스냅샷 생성)

git commit -m “[descriptive message]”
```

---

### ✔️ 비교 및 검사

```
@ 브랜치B에 없는 브랜치A의 모든 커밋 히스토리 보여줌

git log branchB..branchA

@ 해당 파일의 변경 사항이 담긴 모든 커밋을 표시 (파일 이름 변경도 표시)

git log --follow [file]

@ 브랜치 A에 있지만 브랜치 B에 없는 것의 변경 내용(diff)을 푸시 (브랜치간 상태 비교)

git diff branchB...branchA
```
---

### ✔️ 공유 및 업데이트

```
@  url을 통해 특정 리모트 리포지토리를 별칭으로 추가

git remote add [alias] [url]

@ 별칭으로 추가한 리모트 리포지토리에 있는 모든 브랜치 및 데이터를 로컬로 가져옴

git fetch [alias]

@ 리모트 브랜치를 현재 작업중인 브랜치와 병합하여 최신 상태로 만듬

git push [alias] [branch]

@ 리모트 리포지토리의 정보를 가져와 자동으로 로컬 브랜치에 병합

git pull 
```
---

### ✔️ 히스토리 수정

브랜치 or 커밋 수정, 커밋 히스토리 지울 수 O

```
@ 특정 브랜치의 분기 이후 커밋을 현재 작업중인 브랜치에 반영

git rebase [branch]

@ 특정 커밋 전으로 돌아가며 스테이지된 변경 사항 모두 삭제

git reset --hard [commitish]
```

---

### ✔️ 임시 저장

브랜치를 전환하기 위해 변경 or 추적 중인 파일을 임시 저장 O

```
@ 수정 or 스테이지된 변경 사항을 임시 저장하고 현재 작업 내역에서 지움

git stash

@ 스택에 임시 저장된 변경사항의 목록 보여줌

git stash list

@ 스택에 임시 저장된 변경 사항을 다시 현재 작업 내용에 적용

git stash apply

@ 스택에 임시 저장된 변경 사항을 다시 현재 작업 내용에 적용 및 스택에서 삭제

git stash pop

@ 스택에 임시 저장된 변경 사항 삭제

git stash drop
```





