import Link from "next/link"
import { Github, Mail } from "lucide-react"
import { Separator } from "@/components/ui/separator"
import { Container } from "./container"

// Footer 컴포넌트
export function Footer() {
  return (
    <>
      <Separator />
      <footer className="bg-background py-8 md:py-12">
        <Container>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {/* 회사 정보 */}
            <div className="space-y-2">
              <h3 className="text-lg font-semibold">Next.js Starter Kit</h3>
              <p className="text-sm text-muted-foreground">
                현대적인 웹 개발을 위한 완벽한 시작점. 다크모드, 반응형 디자인, 타입 안정성을 갖춘 스타터킷입니다.
              </p>
            </div>

            {/* 링크 */}
            <div className="space-y-2">
              <h4 className="font-semibold">링크</h4>
              <nav className="flex flex-col space-y-1">
                <Link
                  href="/"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  홈
                </Link>
                <Link
                  href="/about"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  소개
                </Link>
                <Link
                  href="/services"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  서비스
                </Link>
              </nav>
            </div>

            {/* 소셜 미디어 */}
            <div className="space-y-2">
              <h4 className="font-semibold">따라오기</h4>
              <div className="flex space-x-2">
                <Link
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center h-9 w-9 rounded-md hover:bg-muted transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="h-4 w-4" />
                </Link>
                <Link
                  href="mailto:contact@example.com"
                  className="inline-flex items-center justify-center h-9 w-9 rounded-md hover:bg-muted transition-colors"
                  aria-label="이메일"
                >
                  <Mail className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>

          {/* 저작권 */}
          <Separator className="my-6" />
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-muted-foreground">
              © 2026 Next.js Starter Kit. All rights reserved.
            </p>
            <nav className="flex gap-4">
              <Link
                href="#"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                이용약관
              </Link>
              <Link
                href="#"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                개인정보처리방침
              </Link>
            </nav>
          </div>
        </Container>
      </footer>
    </>
  )
}
