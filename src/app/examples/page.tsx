import { Metadata } from "next"
import { BookOpen, FormInput, Layout, Code2, Database, Settings } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"

export const metadata: Metadata = {
  title: "예제 모음 | Next.js 16 스타터킷",
  description: "실제 동작하는 예제를 통해 스타터킷의 모든 기능을 체험해보세요. 각 예제는 소스 코드와 함께 제공됩니다.",
  keywords: ["예제", "튜토리얼", "컴포넌트", "Next.js"],
}

// 예제 데이터
const examples = [
  {
    icon: BookOpen,
    title: "컴포넌트 스케이스",
    description: "모든 UI 컴포넌트의 사용 예제와 다양한 상태를 확인할 수 있습니다.",
    tags: ["UI/UX", "인터랙티브"],
  },
  {
    icon: FormInput,
    title: "폼 예제",
    description: "React Hook Form과 Zod를 활용한 검증 및 상태 관리 예제입니다.",
    tags: ["검증", "상태관리"],
  },
  {
    icon: Layout,
    title: "레이아웃 예제",
    description: "반응형 레이아웃과 다양한 디자인 패턴을 구현한 예제입니다.",
    tags: ["반응형", "레이아웃"],
  },
  {
    icon: Code2,
    title: "usehooks-ts 예제",
    description: "커스텀 훅과 유틸리티 함수 사용 예제를 확인할 수 있습니다.",
    tags: ["훅", "유틸리티"],
  },
  {
    icon: Database,
    title: "데이터 패칭",
    description: "API 통신, 에러 처리, 로딩 상태 관리 예제입니다.",
    tags: ["API", "비동기"],
  },
  {
    icon: Settings,
    title: "설정 및 최적화",
    description: "성능 최적화, SEO 설정, PWA 구성 등의 예제입니다.",
    tags: ["최적화", "SEO", "PWA"],
  },
]

export default function ExamplesPage() {
  return (
    <>
      <HeroSection />
      <ExamplesGridSection />
    </>
  )
}

// 히어로 섹션
function HeroSection() {
  return (
    <Section className="py-20 md:py-28 lg:py-32">
      <Container>
        <div className="flex flex-col items-center justify-center space-y-6 text-center">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
            예제 모음
          </h1>

          <p className="max-w-2xl text-xl text-muted-foreground sm:text-2xl">
            실제 동작하는 예제를 통해 스타터킷의 모든 기능을 탐색해보세요.
            각 예제는 소스 코드와 함께 제공됩니다.
          </p>
        </div>
      </Container>
    </Section>
  )
}

// 예제 그리드 섹션
function ExamplesGridSection() {
  return (
    <Section className="py-16 md:py-24 lg:py-32">
      <Container>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {examples.map((example, index) => {
            const Icon = example.icon
            return (
              <Card key={index} className="hover:shadow-lg transition-shadow flex flex-col">
                <CardHeader>
                  <div className="flex items-center space-x-2">
                    <Icon className="h-6 w-6 text-primary" />
                    <CardTitle className="text-xl">{example.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col justify-between">
                  <CardDescription className="text-base mb-4">
                    {example.description}
                  </CardDescription>

                  <div className="space-y-4">
                    {/* 태그 */}
                    <div className="flex flex-wrap gap-2">
                      {example.tags.map((tag, tagIndex) => (
                        <Badge key={tagIndex} variant="secondary">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    {/* 버튼 */}
                    <Button className="w-full" variant="outline">
                      예제 보기
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </Container>
    </Section>
  )
}
