import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"

export default function NotFound() {
  return (
    <Section>
      <Container>
        <div className="flex flex-col items-center justify-center space-y-6 text-center py-20">
          <div className="space-y-2">
            <h1 className="text-6xl font-bold tracking-tighter">404</h1>
            <p className="text-xl text-muted-foreground">
              요청하신 페이지를 찾을 수 없습니다.
            </p>
          </div>

          <Link href="/">
            <Button size="lg">홈으로 돌아가기</Button>
          </Link>
        </div>
      </Container>
    </Section>
  )
}
