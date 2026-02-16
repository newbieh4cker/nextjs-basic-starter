import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"

// 히어로 섹션 컴포넌트
export function HeroSection() {
  return (
    <Section className="py-20 md:py-28 lg:py-32">
      <Container>
        <div className="flex flex-col items-center justify-center space-y-6 text-center">
          {/* 메인 제목 */}
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
            Next.js 16 모던 웹 스타터킷
          </h1>

          {/* 설명문 */}
          <p className="max-w-2xl text-xl text-muted-foreground sm:text-2xl">
            다크모드, 반응형 디자인, 타입 안정성을 갖춘 완벽한 시작점.
            Next.js 16, React 19, TypeScript, Tailwind CSS v4로 만들었습니다.
          </p>

          {/* CTA 버튼 */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button asChild size="lg">
              <Link href="#features">특징 보기</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub에서 보기
              </Link>
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  )
}
