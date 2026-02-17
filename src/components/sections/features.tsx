import {
  Zap,
  Palette,
  Shield,
  Smartphone,
  Code,
  Rocket,
} from "lucide-react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"

// 기능 카드 데이터
const features = [
  {
    icon: Zap,
    title: "매우 빠름",
    description: "Next.js 16과 React 19의 최신 성능 최적화 기술을 활용합니다.",
  },
  {
    icon: Palette,
    title: "다크모드 지원",
    description: "next-themes를 사용한 완벽한 다크모드/라이트모드 토글 기능.",
  },
  {
    icon: Smartphone,
    title: "완전 반응형",
    description: "모바일, 태블릿, 데스크톱에서 완벽하게 동작합니다.",
  },
  {
    icon: Shield,
    title: "타입 안전",
    description: "TypeScript strict 모드로 안전한 개발 환경을 제공합니다.",
  },
  {
    icon: Code,
    title: "현대적 스택",
    description: "최신 웹 기술 스택으로 미래 지향적인 개발이 가능합니다.",
  },
  {
    icon: Rocket,
    title: "확장 가능",
    description: "컴포넌트 기반 설계로 쉽게 기능을 추가할 수 있습니다.",
  },
]

// 기능 섹션 컴포넌트
export function FeaturesSection() {
  return (
    <Section id="features" className="py-16 md:py-24 lg:py-32">
      <Container>
        {/* 섹션 제목 */}
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            주요 특징
          </h2>
          <p className="max-w-2xl text-lg text-muted-foreground">
            이 스타터킷이 제공하는 모든 특징들을 확인하세요.
          </p>
        </div>

        {/* 기능 카드 그리드 */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-2">
                    <Icon className="h-6 w-6 text-primary" />
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </Container>
    </Section>
  )
}
