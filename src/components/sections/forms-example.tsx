"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface FormData {
  name: string
  email: string
  message: string
}

export function FormsExample() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: ""
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="space-y-8">
      {/* 기본 폼 예제 */}
      <Card>
        <CardHeader>
          <CardTitle>문의하기 폼</CardTitle>
          <CardDescription>기본적인 폼 구현 예제</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">이름</Label>
              <Input
                id="name"
                name="name"
                placeholder="홍길동"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">이메일</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="example@email.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">메시지</Label>
              <textarea
                id="message"
                name="message"
                placeholder="메시지를 입력하세요"
                value={formData.message}
                onChange={handleChange}
                required
                className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
              />
            </div>

            <Button type="submit" className="w-full">
              {submitted ? "전송 완료! ✓" : "전송하기"}
            </Button>

            {submitted && (
              <p className="text-sm text-green-600 dark:text-green-400 text-center">
                메시지가 성공적으로 전송되었습니다!
              </p>
            )}
          </form>
        </CardContent>
      </Card>

      {/* 입력 필드 예제 */}
      <Card>
        <CardHeader>
          <CardTitle>다양한 입력 필드</CardTitle>
          <CardDescription>여러 타입의 Input 컴포넌트</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="text">텍스트</Label>
            <Input id="text" type="text" placeholder="텍스트 입력" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">비밀번호</Label>
            <Input id="password" type="password" placeholder="비밀번호 입력" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="number">숫자</Label>
            <Input id="number" type="number" placeholder="숫자 입력" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="date">날짜</Label>
            <Input id="date" type="date" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="disabled">비활성화</Label>
            <Input id="disabled" type="text" placeholder="비활성화된 입력" disabled />
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
