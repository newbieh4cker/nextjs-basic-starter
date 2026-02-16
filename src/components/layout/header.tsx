"use client"

import Link from "next/link"
import { Menu } from "lucide-react"
import { useState } from "react"

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import { ThemeToggle } from "@/components/theme/theme-toggle"
import { Container } from "./container"

// 네비게이션 아이템
const navItems = [
  { name: "홈", href: "/" },
  { name: "소개", href: "/about" },
  { name: "서비스", href: "/services" },
]

// Header 컴포넌트
export function Header() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <Container>
          <div className="flex h-16 items-center justify-between">
            {/* 로고 */}
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-xl font-bold">Next.js Starter</span>
            </Link>

            {/* 데스크톱 네비게이션 */}
            <nav className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="px-3 py-2 text-sm font-medium transition-colors hover:text-foreground/80"
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* 오른쪽 액션 영역 */}
            <div className="flex items-center space-x-2">
              {/* 다크모드 토글 */}
              <ThemeToggle />

              {/* 모바일 메뉴 */}
              <Sheet open={open} onOpenChange={setOpen}>
                <SheetTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="md:hidden"
                  >
                    <Menu className="h-5 w-5" />
                    <span className="sr-only">메뉴 열기</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[300px]">
                  <nav className="flex flex-col space-y-4">
                    {navItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="text-sm font-medium transition-colors hover:text-foreground/80"
                        onClick={() => setOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </nav>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </Container>
      </header>
      <Separator />
    </>
  )
}
