import { Metadata } from "next"
import Link from "next/link"
import { Rocket, Palette, Moon, Smartphone, Shield, Zap } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"

export const metadata: Metadata = {
  title: "서비스 | Next.js 16 스타터킷",
  description: "Next.js 16 스타터킷이 제공하는 다양한 서비스와 기능들을 확인하세요.",
  keywords: ["서비스", "기능", "Next.js", "웹 개발", "UI 컴포넌트"],
}

// 서비스 데이터
const services = [
  {
    icon: Rocket,
    title: "빠른 개발 환경",
    description: "즉시 사용 가능한 개발 환경으로 프로젝트를 바로 시작할 수 있습니다. HMR과 TypeScript를 완벽 지원합니다.",
  },
  {
    icon: Palette,
    title: "UI 컴포넌트 라이브러리",
    description: "shadcn/ui 기반의 재사용 가능한 고품질 컴포넌트들을 제공합니다. 즉시 프로젝트에 적용할 수 있습니다.",
  },
  {
    icon: Moon,
    title: "다크모드 & 테마",
    description: "next-themes 기반의 완벽한 다크모드/라이트모드 토글 시스템을 제공합니다.",
  },
  {
    icon: Smartphone,
    title: "완전 반응형 디자인",
    description: "모바일, 태블릿, 데스크톱 모든 기기에서 완벽하게 동작하도록 설계되었습니다.",
  },
  {
    icon: Shield,
    title: "타입 안전성",
    description: "TypeScript strict 모드로 안전한 개발 환경을 제공합니다. 런타임 오류를 미리 방지합니다.",
  },
  {
    icon: Zap,
    title: "성능 최적화",
    description: "Next.js 16의 최신 기능들로 최고 수준의 성능을 보장합니다. 빠른 로딩과 부드러운 경험을 제공합니다.",
  },
]

// 기술 스택 데이터
const techStack = [
  {
    title: "프론트엔드",
    items: [
      "React 19 - 최신 UI 렌더링 라이브러리",
      "Next.js 16 - React 프레임워크",
      "TypeScript - 타입 안전성과 개발 경험",
    ],
  },
  {
    title: "스타일링",
    items: [
      "Tailwind CSS v4 - 유틸리티 기반 CSS 프레임워크",
      "shadcn/ui - 고품질 UI 컴포넌트",
      "lucide-react - 아이콘 라이브러리",
    ],
  },
]

export default function ServicesPage() {
  return (
    <>
      <HeroSection />
      <ServicesGridSection />
      <TechStackSection />
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
            포괄적인 개발 솔루션
          </h1>

          <p className="max-w-2xl text-xl text-muted-foreground sm:text-2xl">
            프로젝트를 빠르게 시작하고 확장하는데 필요한 모든 것을 제공합니다.
            현대적인 기술 스택과 베스트 프랙티스로 구성되어 있습니다.
          </p>
        </div>
      </Container>
    </Section>
  )
}

// 서비스 그리드 섹션
function ServicesGridSection() {
  return (
    <Section id="services" className="py-16 md:py-24 lg:py-32">
      <Container>
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            주요 서비스
          </h2>
          <p className="max-w-2xl text-lg text-muted-foreground">
            프로젝트 성공을 위한 다양한 기능과 서비스를 제공합니다.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-2">
                    <Icon className="h-6 w-6 text-primary" />
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {service.description}
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

// 기술 스택 섹션
function TechStackSection() {
  return (
    <Section className="py-16 md:py-24 lg:py-32 bg-muted">
      <Container>
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            기술 스택
          </h2>
          <p className="max-w-2xl text-lg text-muted-foreground">
            최신 웹 기술로 구성된 현대적인 개발 환경입니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {techStack.map((stack, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="text-2xl">{stack.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {stack.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start space-x-3">
                      <div className="mt-1 flex-shrink-0">
                        <div className="flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs text-primary-foreground">
                          •
                        </div>
                      </div>
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  )
}

// CTA 섹션
function CTASection() {
  return (
    <Section className="py-16 md:py-24 lg:py-32">
      <Container>
        <div className="flex flex-col items-center justify-center space-y-6 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            지금 시작해보세요
          </h2>
          <p className="max-w-2xl text-lg text-muted-foreground">
            이 스타터킷으로 당신의 다음 프로젝트를 시작하세요.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button asChild size="lg">
              <Link href="/">홈으로 돌아가기</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/about">소개 페이지</Link>
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  )
}
