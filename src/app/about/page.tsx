import { Metadata } from "next"
import Link from "next/link"
import { Code2, Zap, Heart } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"

export const metadata: Metadata = {
  title: "소개 | Next.js 16 스타터킷",
  description: "현대적인 웹 개발을 위한 완벽한 시작점. 우리의 미션과 비전을 확인하세요.",
  keywords: ["소개", "Next.js", "스타터킷", "웹 개발", "React", "TypeScript"],
}

// 핵심 가치 데이터
const values = [
  {
    icon: Code2,
    title: "개발자 중심",
    description: "개발자 경험을 최우선으로 생각합니다. 직관적인 API와 완벽한 TypeScript 지원을 제공합니다.",
  },
  {
    icon: Zap,
    title: "성능 최적화",
    description: "최신 성능 최적화 기술을 적용합니다. Next.js 16의 고급 기능으로 빠른 로딩을 보장합니다.",
  },
  {
    icon: Heart,
    title: "오픈소스 정신",
    description: "커뮤니티와 함께 성장합니다. 지속적으로 개선되고 업데이트되는 스타터킷입니다.",
  },
]

export default function AboutPage() {
  return (
    <>
      <HeroSection />
      <ValuesSection />
      <CTASection />
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
            현대적인 웹 개발의 시작
          </h1>

          <p className="max-w-2xl text-xl text-muted-foreground sm:text-2xl">
            Next.js 16 스타터킷은 개발자들이 빠르고 효율적으로 프로젝트를 시작할 수 있도록 돕습니다.
            최신 기술 스택과 모범 사례를 바탕으로 구축되었습니다.
          </p>
        </div>
      </Container>
    </Section>
  )
}

// 가치 섹션
function ValuesSection() {
  return (
    <Section className="py-16 md:py-24 lg:py-32">
      <Container>
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            우리의 핵심 가치
          </h2>
          <p className="max-w-2xl text-lg text-muted-foreground">
            이 스타터킷이 추구하는 가치들입니다.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {values.map((value, index) => {
            const Icon = value.icon
            return (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-2">
                    <Icon className="h-6 w-6 text-primary" />
                    <CardTitle className="text-xl">{value.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {value.description}
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

// CTA 섹션
function CTASection() {
  return (
    <Section className="py-16 md:py-24 lg:py-32 bg-muted">
      <Container>
        <div className="flex flex-col items-center justify-center space-y-6 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            제공하는 서비스를 확인하세요
          </h2>
          <p className="max-w-2xl text-lg text-muted-foreground">
            이 스타터킷이 제공하는 다양한 기능과 특징들을 알아보세요.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button asChild size="lg">
              <Link href="/services">서비스 보기</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/">홈으로 돌아가기</Link>
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  )
}
