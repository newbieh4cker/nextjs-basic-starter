"use client"

import { useState } from "react"
import Link from "next/link"
import { Eye, EyeOff, Lock, Mail } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils"

export function LoginForm() {
  const [showPassword, setShowPassword] = useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // TODO: 실제 로그인 로직 구현
    console.log("로그인 폼 제출")
  }

  return (
    <Card className="w-full max-w-md shadow-md">
      <CardHeader className="space-y-4 text-center">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
          <Lock className="h-6 w-6 text-blue-600" />
        </div>
        <div>
          <CardTitle className="text-2xl">로그인</CardTitle>
          <CardDescription>이메일과 비밀번호를 입력하세요</CardDescription>
        </div>
      </CardHeader>

      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* 이메일 필드 */}
          <div className="space-y-2">
            <Label htmlFor="email" className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-gray-500" />
              이메일
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="example@email.com"
              required
              className="bg-white"
            />
          </div>

          {/* 비밀번호 필드 */}
          <div className="space-y-2">
            <Label htmlFor="password" className="flex items-center gap-2">
              <Lock className="h-4 w-4 text-gray-500" />
              비밀번호
            </Label>
            <div className="relative">
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="비밀번호 입력"
                required
                className="pr-10 bg-white"
              />
              <Button
                type="button"
                variant="ghost"
                size="sm"
                className="absolute right-0 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <EyeOff className="h-4 w-4" />
                ) : (
                  <Eye className="h-4 w-4" />
                )}
              </Button>
            </div>
          </div>

          {/* 로그인 버튼 */}
          <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
            로그인
          </Button>
        </form>
      </CardContent>

      <CardFooter className="flex items-center justify-center border-t bg-gray-50">
        <p className="text-sm text-gray-600">
          계정이 없으신가요?{" "}
          <Link href="/register" className="font-semibold text-blue-600 hover:underline">
            회원가입
          </Link>
        </p>
      </CardFooter>
    </Card>
  )
}
