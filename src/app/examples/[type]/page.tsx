import { Metadata } from "next"
import { notFound } from "next/navigation"
import { BookOpen, FormInput, Layout, Code2, Database, Settings } from "lucide-react"

import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { Badge } from "@/components/ui/badge"
import { ComponentsExample } from "@/components/sections/components-example"
import { FormsExample } from "@/components/sections/forms-example"
import { LayoutsExample } from "@/components/sections/layouts-example"
import { HooksExample } from "@/components/sections/hooks-example"
import { DataFetchingExample } from "@/components/sections/data-fetching-example"
import { SettingsExample } from "@/components/sections/settings-example"

// 유효한 예제 타입 정의
const validTypes = [
  "components",
  "forms",
  "layouts",
  "hooks",
  "data-fetching",
  "settings"
] as const

type ExampleType = typeof validTypes[number]

// 타입별 메타데이터 및 아이콘
const exampleData: Record<ExampleType, {
  title: string
  description: string
  icon: typeof BookOpen
  tags: string[]
}> = {
  "components": {
    title: "컴포넌트 스케이스",
    description: "모든 UI 컴포넌트의 사용 예제와 다양한 상태를 확인할 수 있습니다.",
    icon: BookOpen,
    tags: ["UI/UX", "인터랙티브"]
  },
  "forms": {
    title: "폼 예제",
    description: "React Hook Form과 Zod를 활용한 검증 및 상태 관리 예제입니다.",
    icon: FormInput,
    tags: ["검증", "상태관리"]
  },
  "layouts": {
    title: "레이아웃 예제",
    description: "반응형 레이아웃과 다양한 디자인 패턴을 구현한 예제입니다.",
    icon: Layout,
    tags: ["반응형", "레이아웃"]
  },
  "hooks": {
    title: "usehooks-ts 예제",
    description: "커스텀 훅과 유틸리티 함수 사용 예제를 확인할 수 있습니다.",
    icon: Code2,
    tags: ["훅", "유틸리티"]
  },
  "data-fetching": {
    title: "데이터 패칭",
    description: "API 통신, 에러 처리, 로딩 상태 관리 예제입니다.",
    icon: Database,
    tags: ["API", "비동기"]
  },
  "settings": {
    title: "설정 및 최적화",
    description: "성능 최적화, SEO 설정, PWA 구성 등의 예제입니다.",
    icon: Settings,
    tags: ["최적화", "SEO", "PWA"]
  }
}

// 동적 메타데이터 생성
export async function generateMetadata({
  params
}: {
  params: Promise<{ type: string }>
}): Promise<Metadata> {
  const { type } = await params
  const exampleType = type as ExampleType

  if (!validTypes.includes(exampleType)) {
    return {
      title: "예제를 찾을 수 없음 | Next.js 16 스타터킷"
    }
  }

  const data = exampleData[exampleType]
  return {
    title: `${data.title} | Next.js 16 스타터킷`,
    description: data.description,
    keywords: ["예제", ...data.tags, "Next.js"],
  }
}

// 타입별 예제 컴포넌트 렌더링
function ExampleContent({ type }: { type: ExampleType }) {
  switch (type) {
    case "components":
      return <ComponentsExample />
    case "forms":
      return <FormsExample />
    case "layouts":
      return <LayoutsExample />
    case "hooks":
      return <HooksExample />
    case "data-fetching":
      return <DataFetchingExample />
    case "settings":
      return <SettingsExample />
    default:
      return null
  }
}

export default async function ExamplePage({
  params,
}: {
  params: Promise<{ type: string }>
}) {
  const { type } = await params
  const exampleType = type as ExampleType

  // 유효하지 않은 타입은 404
  if (!validTypes.includes(exampleType)) {
    notFound()
  }

  const data = exampleData[exampleType]
  const Icon = data.icon

  return (
    <>
      {/* 히어로 섹션 */}
      <Section className="py-20 md:py-28 lg:py-32">
        <Container>
          <div className="flex flex-col items-center justify-center space-y-6 text-center">
            <div className="flex items-center space-x-4">
              <Icon className="h-12 w-12 text-primary" />
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                {data.title}
              </h1>
            </div>

            <p className="max-w-2xl text-xl text-muted-foreground sm:text-2xl">
              {data.description}
            </p>

            {/* 태그 */}
            <div className="flex flex-wrap gap-2 justify-center">
              {data.tags.map((tag, index) => (
                <Badge key={index} variant="secondary" className="text-base">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* 예제 콘텐츠 섹션 */}
      <Section className="py-16 md:py-24 lg:py-32 bg-muted/50">
        <Container>
          <ExampleContent type={exampleType} />
        </Container>
      </Section>
    </>
  )
}
