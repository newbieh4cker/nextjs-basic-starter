"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Bell, Download, Heart, Share2 } from "lucide-react"

export function ComponentsExample() {
  const [count, setCount] = useState(0)
  const [liked, setLiked] = useState(false)

  return (
    <div className="space-y-8">
      {/* 버튼 예제 */}
      <Card>
        <CardHeader>
          <CardTitle>버튼 컴포넌트</CardTitle>
          <CardDescription>다양한 스타일의 버튼 예제</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex flex-wrap gap-4">
            <Button>기본 버튼</Button>
            <Button variant="secondary">세컨더리</Button>
            <Button variant="outline">아웃라인</Button>
            <Button variant="ghost">고스트</Button>
            <Button variant="destructive">삭제</Button>
          </div>
          <div className="flex flex-wrap gap-4">
            <Button size="sm">작은 버튼</Button>
            <Button size="default">기본 크기</Button>
            <Button size="lg">큰 버튼</Button>
          </div>
          <div className="flex flex-wrap gap-4">
            <Button>
              <Download className="mr-2 h-4 w-4" />
              다운로드
            </Button>
            <Button variant="outline">
              <Share2 className="mr-2 h-4 w-4" />
              공유하기
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* 카운터 예제 */}
      <Card>
        <CardHeader>
          <CardTitle>인터랙티브 카운터</CardTitle>
          <CardDescription>상태 관리 예제</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="text-center">
            <p className="text-4xl font-bold mb-4">{count}</p>
            <div className="flex justify-center gap-4">
              <Button onClick={() => setCount(count - 1)} variant="outline">
                -1
              </Button>
              <Button onClick={() => setCount(0)} variant="secondary">
                초기화
              </Button>
              <Button onClick={() => setCount(count + 1)}>
                +1
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* 카드와 배지 예제 */}
      <Card>
        <CardHeader>
          <CardTitle>카드 & 배지 컴포넌트</CardTitle>
          <CardDescription>정보 표시를 위한 UI 요소</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">프로젝트 A</CardTitle>
                  <Badge>진행중</Badge>
                </div>
                <CardDescription>웹 애플리케이션 개발</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Next.js와 TypeScript를 사용한 현대적인 웹 애플리케이션
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">프로젝트 B</CardTitle>
                  <Badge variant="secondary">완료</Badge>
                </div>
                <CardDescription>API 서버 구축</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  RESTful API 서버 개발 및 배포 완료
                </p>
              </CardContent>
            </Card>
          </div>
        </CardContent>
      </Card>

      {/* 좋아요 버튼 예제 */}
      <Card>
        <CardHeader>
          <CardTitle>좋아요 버튼</CardTitle>
          <CardDescription>토글 상태 관리 예제</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-4">
            <Button
              variant={liked ? "default" : "outline"}
              size="lg"
              onClick={() => setLiked(!liked)}
              className={liked ? "bg-red-500 hover:bg-red-600" : ""}
            >
              <Heart className={`mr-2 h-5 w-5 ${liked ? "fill-current" : ""}`} />
              {liked ? "좋아요!" : "좋아요"}
            </Button>
            <p className="text-sm text-muted-foreground">
              {liked ? "감사합니다! ❤️" : "버튼을 클릭해보세요"}
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
