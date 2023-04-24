# 1. 패키지와 매니저

우분투는 기본적으로 apt라는 패키지 매니저가 내장되어 있습니다. 터미널을 열어 프롬프트에 apt라고 입력합니다.

```plain/text
apt
```

<img src="https://postfiles.pstatic.net/MjAyMzA0MjRfNTMg/MDAxNjgyMzAwNTM1OTY4.gWRo8dAVGAl_hEAwlxl7is-i8-6NEt4mQfxTHANChhog.zToDnviwAbtBgGyu1xEm26q78PsndtFOq7InpPe7W7kg.PNG.dkdnmju/1234.png?type=w773">

- 패키지 목록 갱신: `apt update`(관리자 권한 필요)

    패키지를 다운로드할 수 있는 여러 저장소의 최신 정보를 업데이트합니다. 새로운 저장소를 추가하거나, 패키지를 설치하기 전, 최신 정보를 갱신합니다.

    설치된 프로그램이 새로운 버전으로 변경되지 않습니다.

- 업그레이드 가능한 패키지 목록을 출력: `apt list -—upgradable`
- 전체 패키지 업그레이드(버전 업): `apt upgrade` (관리자 권한 필요)
- 특정 패키지만 업그레이드(버전 업): `apt --only-upgrade install 패키지 이름` (관리자 권한 필요)
- 패키지 설치: `apt install 패키지 이름` (관리자 권한 필요)
- 설치된 패키지 보기: `apt list --installed`
- 패키지 검색: `apt search 검색어`
- 패키지 정보 확인: `apt show 패키지 이름`
- 패키지 삭제: `apt remove 패키지 이름`(관리자 권한 필요)

## ✔️ 관리자 권한 사용

패키지 설치/삭제 등의 작업을 진행할 때 `sudo` 명령어를 이용해서 관리자 권한을 획득해야 합니다.

```plain/text
sudo apt install wget
```

관리자 암호 입력 후, 설치를 계속 할 수 있습니다.

* 무언가 잘못되고 있다고 느낀다면 `Ctrl + C `키는 작업을 취소하고, 터미널의 사용자 입력을 다시 되찾아오는 역할을 합니다. 이를 활용하는 것이 좋습니다!