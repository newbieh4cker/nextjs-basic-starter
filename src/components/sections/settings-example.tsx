"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { useTheme } from "next-themes"

export function SettingsExample() {
  const { theme, setTheme } = useTheme()
  const [fontSize, setFontSize] = useState(16)
  const [notifications, setNotifications] = useState(true)

  return (
    <div className="space-y-8">
      {/* 테마 설정 */}
      <Card>
        <CardHeader>
          <CardTitle>테마 설정</CardTitle>
          <CardDescription>다크모드/라이트모드 전환</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex gap-4">
            <Button
              variant={theme === 'light' ? 'default' : 'outline'}
              onClick={() => setTheme('light')}
            >
              ☀️ 라이트
            </Button>
            <Button
              variant={theme === 'dark' ? 'default' : 'outline'}
              onClick={() => setTheme('dark')}
            >
              🌙 다크
            </Button>
            <Button
              variant={theme === 'system' ? 'default' : 'outline'}
              onClick={() => setTheme('system')}
            >
              💻 시스템
            </Button>
          </div>
          <p className="text-sm text-muted-foreground">
            현재 테마: <strong>{theme || 'system'}</strong>
          </p>
        </CardContent>
      </Card>

      {/* 폰트 크기 설정 */}
      <Card>
        <CardHeader>
          <CardTitle>폰트 크기 설정</CardTitle>
          <CardDescription>텍스트 크기 조절</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="fontSize">
              폰트 크기: {fontSize}px
            </Label>
            <input
              id="fontSize"
              type="range"
              min="12"
              max="24"
              value={fontSize}
              onChange={(e) => setFontSize(Number(e.target.value))}
              className="w-full"
            />
          </div>
          <div
            className="p-4 bg-muted rounded-lg"
            style={{ fontSize: `${fontSize}px` }}
          >
            <p>이것은 샘플 텍스트입니다. 슬라이더를 조절하여 크기를 변경할 수 있습니다.</p>
          </div>
        </CardContent>
      </Card>

      {/* 알림 설정 */}
      <Card>
        <CardHeader>
          <CardTitle>알림 설정</CardTitle>
          <CardDescription>푸시 알림 관리</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <Label>알림 활성화</Label>
              <p className="text-sm text-muted-foreground">
                새로운 업데이트 알림을 받습니다
              </p>
            </div>
            <Button
              variant={notifications ? 'default' : 'outline'}
              onClick={() => setNotifications(!notifications)}
            >
              {notifications ? '켜짐' : '꺼짐'}
            </Button>
          </div>
          {notifications && (
            <div className="p-4 bg-primary/10 rounded-lg">
              <p className="text-sm">✓ 알림이 활성화되었습니다</p>
            </div>
          )}
        </CardContent>
      </Card>

      {/* 성능 최적화 정보 */}
      <Card>
        <CardHeader>
          <CardTitle>성능 최적화</CardTitle>
          <CardDescription>Next.js 최적화 기능</CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <span className="text-green-500">✓</span>
              <span>이미지 최적화 (next/image)</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-green-500">✓</span>
              <span>자동 코드 스플리팅</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-green-500">✓</span>
              <span>서버 컴포넌트 (RSC)</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-green-500">✓</span>
              <span>Turbopack 빌드 도구</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-green-500">✓</span>
              <span>React 19 최적화</span>
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}
