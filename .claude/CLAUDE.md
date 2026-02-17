## 언어 및 커뮤니케이션 규칙
* 기본 응답 언어: 한국어
* 코드 주석: 한국어로 작성
* 커밋 메시지: 영어로 작성(기능 개발은 feat: 버그 수정은 fix: 스타일은 style: 등등 이렇게 커벤션도 맞춰주고 )
* feat, fix, docs, style, refactor, perf, test, chore, build 이정도면 될까 다른 더 정확한 컨벤션 있으면 다른거 사용해도 되
* 깃 기본 브랜치는 main 이야
* 깃 커밋 시 최대한 개별 커밋으로 진행 (기능별 분리)
* 문서화: 한국어로 작성 (IMPORTANT)
* 변수명/함수명: 영어 (해당 언어의 표준 준수)


## 코딩 스타일
* 탭 대신 스페이스 2칸
* 선호 프레임워크/언어 우선순위: Next.js, Python, Go, Node.js


## 프론트엔드 개발 시
* CSS: TailWind CSS
* UI: Shadcn?UI
* 상태관리: Zustand
* 폼: React Hook Form + Zod
* any 가급적 사용 금지
* 컴포넌트 분리 및 재사용
* 반응형 필수
* 다크모드 / 라이트모드 토글 지원


## 백엔드 개발
* 레이어드 아키텍처 (Controller → Service → Repository)
* DTO 패턴 사용
* 의존성 주입
* 에러 핸들링 필수
* db 트랜잭션 처리
* API 응답 일관성 유지
* (가능한경우) swagger-ui 기반 docs 제공


## 기타사항
* 기본 개발 환경은 윈도우11 기준
* .gitignore 반드시 작성 후 통상적으로 무시되는 파일들 무시
* 리드미 파일 항상 작성 (한국어로, 셋업부터 사용법까지)
* 어떠한 작업이 1분 이상 걸리는 경우 진행사항 간략히 표시