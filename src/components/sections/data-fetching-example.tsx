"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface User {
  id: number
  name: string
  email: string
  username: string
}

export function DataFetchingExample() {
  const [users, setUsers] = useState<User[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const fetchUsers = async () => {
    setLoading(true)
    setError(null)

    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users?_limit=5')
      if (!response.ok) {
        throw new Error('데이터를 불러오는데 실패했습니다')
      }
      const data = await response.json()
      setUsers(data)
    } catch (err) {
      setError(err instanceof Error ? err.message : '알 수 없는 오류가 발생했습니다')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="space-y-8">
      {/* API 호출 예제 */}
      <Card>
        <CardHeader>
          <CardTitle>REST API 데이터 패칭</CardTitle>
          <CardDescription>JSONPlaceholder API를 사용한 예제</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Button onClick={fetchUsers} disabled={loading}>
            {loading ? '로딩 중...' : '사용자 목록 불러오기'}
          </Button>

          {error && (
            <div className="p-4 bg-destructive/10 text-destructive rounded-lg">
              <p className="text-sm font-medium">오류: {error}</p>
            </div>
          )}

          {users.length > 0 && (
            <div className="space-y-2">
              {users.map((user) => (
                <Card key={user.id}>
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">{user.name}</CardTitle>
                      <Badge variant="secondary">ID: {user.id}</Badge>
                    </div>
                    <CardDescription>@{user.username}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{user.email}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </CardContent>
      </Card>

      {/* 로딩 상태 예제 */}
      <Card>
        <CardHeader>
          <CardTitle>로딩 상태 관리</CardTitle>
          <CardDescription>데이터를 불러오는 동안의 UI 표시</CardDescription>
        </CardHeader>
        <CardContent>
          <LoadingStateExample />
        </CardContent>
      </Card>
    </div>
  )
}

// 로딩 상태 예제 컴포넌트
function LoadingStateExample() {
  const [isLoading, setIsLoading] = useState(false)

  const simulateLoading = () => {
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
    }, 2000)
  }

  return (
    <div className="space-y-4">
      <Button onClick={simulateLoading} disabled={isLoading}>
        {isLoading ? '처리 중...' : '2초 로딩 시뮬레이션'}
      </Button>

      {isLoading && (
        <div className="space-y-3">
          {/* 스켈레톤 로더 */}
          {[1, 2, 3].map((item) => (
            <div key={item} className="space-y-2 p-4 border rounded-lg">
              <div className="h-4 bg-muted rounded animate-pulse w-3/4" />
              <div className="h-4 bg-muted rounded animate-pulse w-1/2" />
            </div>
          ))}
        </div>
      )}

      {!isLoading && (
        <div className="p-4 bg-green-500/10 text-green-600 dark:text-green-400 rounded-lg">
          <p className="text-sm font-medium">✓ 로딩 완료!</p>
        </div>
      )}
    </div>
  )
}
