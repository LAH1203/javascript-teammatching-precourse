## 구현 목록 정리

### 탭

- `크루 관리 탭`에서는 크루를 추가하거나 삭제하기 위한 기능 수행
- `팀 매칭 관리 탭`에서는 팀 매칭을 하기 위한 기능 수행
- 다른 탭으로 이동했다 돌아와도 기존 탭의 상태가 유지되어야 함
- 데이터 저장은 localStorage를 사용할 것

### 크루 관리 기능 탭

- 크루를 추가하거나 삭제할 수 있는 곳
- 규칙
  - 코스 별로 크루를 추가할 수 있음
    - 동일한 이름의 크루는 추가할 수 없음
    - 크루 이름은 최대 5글자까지만 가능
  - 코스 별로 크루를 삭제할 수 있음
    - 삭제 시 `confirm`을 사용하여 사용자가 확인할 수 있도록 할 것
  - 크루 테이블의 첫 번째 열에는 index를 넣어 순서를 표시할 것
    - index는 **1**부터 시작

### 팀 매칭 관리 기능

- 코스별로 미션마다 무작위로 팀을 매칭할 수 있음
- 팀 매칭 시 `1팀당 인원수`에 입력한 값보다 더 적은 수의 크루들로 구성된 팀이 없어야 함
  - 남은 인원은 앞 팀부터 순서대로 배정
  - 팀은 재매칭 가능
- 팀 매칭 결과는 쉼표로 구분