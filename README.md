# Next.js 16 모던 웹 스타터킷

> 현대적인 웹 개발을 위한 완벽한 시작점. 다크모드, 반응형 디자인, 타입 안정성을 갖춘 프로덕션 레벨의 스타터킷입니다.

## 🚀 주요 특징

- ✨ **Next.js 16 + React 19**: 최신 웹 기술 스택
- 🌓 **다크모드/라이트모드**: next-themes를 활용한 완벽한 테마 지원
- 📱 **완전 반응형**: 모바일, 태블릿, 데스크톱에서 완벽 동작
- 🛡️ **TypeScript**: 엄격한 타입 체크로 안전한 개발
- 🎨 **shadcn/ui**: 현대적이고 아름다운 UI 컴포넌트
- 🚀 **Tailwind CSS v4**: 최신 유틸리티 우선 CSS 프레임워크
- ⚙️ **확장 가능한 구조**: 깔끔한 디렉토리 구조와 계층화된 컴포넌트
- 🔑 **사전 설치된 컴포넌트**: Tier 1, Tier 2 컴포넌트로 즉시 개발 시작

## 📦 기술 스택

### 핵심 기술
- **Next.js**: 16.1.6
- **React**: 19.2.3
- **TypeScript**: 5.x
- **Tailwind CSS**: 4.x
- **shadcn/ui**: Radix UI 기반의 고품질 컴포넌트

### 개발 도구
- **ESLint**: 코드 품질 관리
- **React Compiler**: 성능 최적화

### 추가 라이브러리
- **next-themes**: 다크모드 관리
- **lucide-react**: 아이콘 라이브러리
- **clsx + tailwind-merge**: 클래스 관리

## 📁 프로젝트 구조

```
src/
├── app/                     # Next.js App Router
│   ├── layout.tsx          # 루트 레이아웃
│   ├── page.tsx            # 메인 페이지
│   └── globals.css         # 전역 스타일
├── components/
│   ├── ui/                 # shadcn/ui 컴포넌트
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── badge.tsx
│   │   ├── avatar.tsx
│   │   ├── skeleton.tsx
│   │   ├── separator.tsx
│   │   ├── sheet.tsx
│   │   └── dropdown-menu.tsx
│   ├── layout/             # 레이아웃 컴포넌트
│   │   ├── header.tsx
│   │   ├── footer.tsx
│   │   ├── container.tsx
│   │   └── section.tsx
│   ├── theme/              # 테마 관련 컴포넌트
│   │   ├── theme-provider.tsx
│   │   └── theme-toggle.tsx
│   └── sections/           # 페이지 섹션
│       ├── hero.tsx
│       ├── features.tsx
│       └── cta.tsx
├── hooks/                  # 커스텀 훅
│   └── use-mounted.ts
├── lib/                    # 유틸리티 함수
│   └── utils.ts           # cn() 함수
└── types/                 # 타입 정의
    ├── index.ts           # 주요 타입
    └── env.d.ts           # 환경 변수 타입
```

## 🏃 빠른 시작

### 1. 저장소 복제

```bash
git clone <repository-url>
cd claude-nextsj-starters
```

### 2. 의존성 설치

```bash
npm install
```

### 3. 환경 변수 설정

```bash
cp .env.example .env.local
```

### 4. 개발 서버 실행

```bash
npm run dev
```

브라우저에서 `http://localhost:3000`을 열어 확인하세요.

## 🧩 설치된 컴포넌트

### Tier 1: 핵심 레이아웃 (필수)

| 컴포넌트 | 설명 | 사용처 |
|---------|------|-------|
| **Button** | 기본 버튼 컴포넌트 | CTA, 링크, 모든 액션 |
| **Separator** | 구분선 | 헤더/푸터 구분 |
| **Sheet** | 사이드 드로어 | 모바일 메뉴 |

### Tier 2: 기본 UI 컴포넌트 (추천)

| 컴포넌트 | 설명 | 사용처 |
|---------|------|-------|
| **Card** | 카드 컨테이너 | 콘텐츠 그룹화 |
| **Badge** | 배지/태그 | 라벨, 상태 표시 |
| **Avatar** | 프로필 사진 | 사용자 프로필 |
| **Skeleton** | 로딩 상태 UI | 스켈레톤 로딩 |
| **DropdownMenu** | 드롭다운 메뉴 | 다크모드 토글, 사용자 메뉴 |

## ➕ 추가 컴포넌트 설치하기

필요에 따라 shadcn/ui 컴포넌트를 추가로 설치할 수 있습니다.

### 폼이 필요한 경우

```bash
npx shadcn@latest add form
npx shadcn@latest add input
npx shadcn@latest add textarea
npx shadcn@latest add select
npx shadcn@latest add checkbox
npx shadcn@latest add radio-group
npx shadcn@latest add label

npm install react-hook-form zod @hookform/resolvers
```

### 알림/피드백이 필요한 경우

```bash
npx shadcn@latest add toast
npx shadcn@latest add alert
npx shadcn@latest add dialog
npx shadcn@latest add alert-dialog
```

### 추가 네비게이션이 필요한 경우

```bash
npx shadcn@latest add tabs
npx shadcn@latest add breadcrumb
npx shadcn@latest add navigation-menu
```

### 데이터 테이블이 필요한 경우

```bash
npx shadcn@latest add table
npm install @tanstack/react-table
```

## 📚 권장 라이브러리

프로젝트의 특정 기능을 위해 다음 라이브러리들을 추가하는 것을 권장합니다:

### 날짜/시간 관리
```bash
npm install date-fns
```

### 폼 관리 (react-hook-form + zod)
```bash
npm install react-hook-form zod @hookform/resolvers
```

### 상태 관리
```bash
npm install zustand
```

### HTTP 클라이언트
```bash
npm install axios
```

### 애니메이션
```bash
npm install framer-motion
```

### 데이터 페칭 & 캐싱
```bash
npm install @tanstack/react-query
```

### 유틸리티 함수
```bash
npm install lodash-es
```

### 고유 ID 생성
```bash
npm install nanoid
```

## 🎨 스타일링 가이드

### Tailwind CSS 사용

모든 스타일링은 Tailwind CSS로 합니다:

```tsx
<div className="flex items-center justify-center p-4 md:p-6">
  <h1 className="text-2xl font-bold md:text-3xl">제목</h1>
</div>
```

### 반응형 디자인

Tailwind의 반응형 접두사를 사용합니다:

```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
  {/* 자동으로 반응형 변환 */}
</div>
```

### 다크모드

CSS 변수를 통해 자동으로 다크모드가 적용됩니다:

```tsx
// 자동으로 light/dark 모드 대응
<div className="bg-background text-foreground">
  다크모드가 자동으로 적용됩니다
</div>
```

## 🛠️ 개발 가이드

### 새로운 페이지 추가

```bash
mkdir -p src/app/new-page
touch src/app/new-page/page.tsx
```

```tsx
// src/app/new-page/page.tsx
import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"

export default function NewPage() {
  return (
    <Section>
      <Container>
        <h1>새 페이지</h1>
      </Container>
    </Section>
  )
}
```

### 새로운 컴포넌트 추가

```tsx
// src/components/my-component.tsx
interface MyComponentProps {
  title: string
  children: React.ReactNode
}

export function MyComponent({ title, children }: MyComponentProps) {
  return (
    <div>
      <h2>{title}</h2>
      {children}
    </div>
  )
}
```

### 타입 정의 추가

```tsx
// src/types/index.ts에 추가
export interface MyType {
  id: string
  name: string
  description?: string
}
```

### 커스텀 훅 추가

```tsx
// src/hooks/use-custom.ts
"use client"

import { useEffect, useState } from "react"

export function useCustom() {
  const [state, setState] = useState(false)

  useEffect(() => {
    // 로직
  }, [])

  return state
}
```

## 🔨 빌드 및 배포

### 개발 서버 실행

```bash
npm run dev
```

### 프로덕션 빌드

```bash
npm run build
```

### 프로덕션 서버 실행

```bash
npm start
```

### 코드 린팅

```bash
npm run lint
```

## 💡 팁과 주의사항

### 성능 최적화

- 서버 컴포넌트를 최대한 활용하세요 (기본값)
- 클라이언트 컴포넌트는 `"use client"` 지시문과 함께만 사용하세요
- 동적 컴포넌트는 `dynamic()` 함수로 동적 임포트하세요

### TypeScript

- `any` 타입 사용을 피하세요
- 모든 props에 인터페이스를 정의하세요
- `tsconfig.json`에서 strict 모드를 유지하세요

### 다크모드

- `next-themes`는 자동으로 테마를 localStorage에 저장합니다
- 페이지 로드 시 플래시 현상이 없습니다 (suppressHydrationWarning 설정됨)

### 환경 변수

- 클라이언트에서 사용하는 변수는 `NEXT_PUBLIC_` 접두사를 사용하세요
- 환경 변수를 변경 후 개발 서버를 재시작하세요

## 📖 추가 학습자료

- [Next.js 공식 문서](https://nextjs.org/docs)
- [React 공식 문서](https://react.dev)
- [TypeScript 공식 문서](https://www.typescriptlang.org/docs)
- [Tailwind CSS 공식 문서](https://tailwindcss.com/docs)
- [shadcn/ui 컴포넌트](https://ui.shadcn.com)

## 📝 라이선스

이 프로젝트는 MIT 라이선스 하에 배포됩니다. 자유롭게 사용, 수정, 배포할 수 있습니다.

## 🤝 기여

버그 리포트, 기능 제안, 또는 개선사항은 언제든 환영합니다!

---

**Happy Coding! 🎉**
