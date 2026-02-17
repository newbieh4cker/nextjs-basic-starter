"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // 에러 로깅
    console.error(error)
  }, [error])

  return (
    <Section>
      <Container>
        <div className="flex flex-col items-center justify-center space-y-6 text-center py-20">
          <div className="space-y-2">
            <h1 className="text-4xl font-bold tracking-tighter">문제가 발생했습니다</h1>
            <p className="text-xl text-muted-foreground">
              페이지를 로드하는 중 오류가 발생했습니다.
            </p>
          </div>

          <div className="flex gap-4">
            <Button onClick={() => reset()} size="lg">
              다시 시도
            </Button>
            <Button variant="outline" size="lg" onClick={() => window.location.href = "/"}>
              홈으로 가기
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  )
}
