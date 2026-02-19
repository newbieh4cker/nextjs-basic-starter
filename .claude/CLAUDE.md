## 언어 및 커뮤니케이션 규칙
* 기본 응답 언어: 한국어
* 코드 주석: 한국어로 작성
* 커밋 메시지: 영어로 작성
  - `feat:` 새로운 기능 추가
  - `fix:` 버그 수정
  - `style:` 포매팅, 세미콜론 등 코드 스타일
  - `refactor:` 기능 변경 없는 코드 리팩토링
  - `docs:` 문서 추가/수정
  - `test:` 테스트 코드
  - `chore:` 빌드, 의존성 업데이트, 설정 변경
  - `perf:` 성능 개선
* 깃 기본 브랜치: `main`
* 깃 커밋: 최대한 개별 커밋으로 진행 (기능별 분리)
* 문서화: 한국어로 작성 (IMPORTANT)
* 변수명/함수명: 영어 (camelCase 또는 해당 언어 표준 준수)


## 프로젝트 스택
> package.json 기준 확정 스택

* **프레임워크**: Next.js 16 (App Router) + React 19 + TypeScript 5 (strict mode)
* **스타일링**: Tailwind CSS v4 — `tailwind.config` 파일 없음, `src/app/globals.css`에서 설정
* **UI 컴포넌트**: Shadcn/UI (New York style) — `npx shadcn@latest add [component]`로 추가
* **아이콘**: Lucide React
* **테마**: next-themes (다크/라이트 모드 토글)
* **유틸리티**: clsx + tailwind-merge (`cn` 함수, `@/lib/utils`)
* **린터**: ESLint 9 (core-web-vitals + TypeScript)
* **React Compiler**: 활성화 — useMemo/useCallback 수동 작성 불필요

### 필요 시 추가 권장 패키지 (현재 미설치)
* 상태관리: `zustand`
* 폼: `react-hook-form` + `zod`


## 프로젝트 폴더 구조
```
src/
  app/              - Next.js App Router (page.tsx, layout.tsx, error.tsx, not-found.tsx)
  components/
    ui/             - Shadcn/UI 컴포넌트 (npx shadcn 로 추가)
    layout/         - Header, Footer, Container, Section 공통 레이아웃
    sections/       - 페이지별 섹션 컴포넌트
    theme/          - ThemeProvider, ThemeToggle
  hooks/            - 커스텀 훅 (use-*.ts 형식)
  lib/              - 유틸리티 함수 (utils.ts: cn 함수 등)
  types/            - 타입 정의 (index.ts, env.d.ts)
```

**경로 alias**: `@/*` → `src/*`


## 코딩 스타일
* 탭 대신 스페이스 2칸
* TypeScript strict 모드 준수
* `any` 사용 절대 금지 → `unknown` 또는 명확한 타입 사용
* 컴포넌트 분리 및 재사용 원칙
* 반응형 필수 (Tailwind mobile-first)
* 다크모드/라이트모드 지원 필수 (next-themes + CSS variables)


## Next.js App Router 패턴
* **Server Components 우선**: `use client`는 인터랙션/브라우저 API 필요 시만 사용
* **React Compiler 활성화**: `useMemo`, `useCallback` 수동 추가 불필요
* **Server Actions**: 폼 제출 및 데이터 변경은 `use server` 활용
* **파일 규칙**:
  - `page.tsx` — 라우트 페이지
  - `layout.tsx` — 레이아웃
  - `error.tsx` — 에러 UI
  - `not-found.tsx` — 404 UI
  - `loading.tsx` — 로딩 UI (필요시)


## Next.js 서버 기능 개발
* Route Handlers: `src/app/api/[endpoint]/route.ts`
* API 응답은 일관된 형식 유지: `{ data, error, message }`
* 에러 핸들링 필수 (try-catch + NextResponse)
* 환경변수: `.env.local` 사용, 타입은 `src/types/env.d.ts`에 선언


## 기타사항
* 기본 개발 환경: Windows 11
* `.gitignore` 반드시 작성 후 통상적으로 무시되는 파일 제외
* README 파일 항상 작성 (한국어, 셋업부터 사용법까지)
* 1분 이상 걸리는 작업은 진행사항 간략히 표시