import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"

// CTA(행동 유도) 섹션 컴포넌트
export function CTASection() {
  return (
    <Section className="py-16 md:py-24 lg:py-32 bg-muted">
      <Container>
        <div className="flex flex-col items-center justify-center space-y-6 text-center">
          {/* 제목 */}
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            지금 바로 시작하세요
          </h2>

          {/* 설명 */}
          <p className="max-w-2xl text-lg text-muted-foreground">
            이 스타터킷을 사용해서 당신의 프로젝트를 시작해보세요.
            모든 필수 요소가 준비되어 있습니다.
          </p>

          {/* 버튼 */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button asChild size="lg">
              <Link href="#features">자세히 알아보기</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                저장소 방문
              </Link>
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  )
}
