"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

// useLocalStorage 커스텀 훅
function useLocalStorage<T>(key: string, initialValue: T) {
  const [storedValue, setStoredValue] = useState<T>(initialValue)

  useEffect(() => {
    try {
      const item = window.localStorage.getItem(key)
      if (item) {
        setStoredValue(JSON.parse(item))
      }
    } catch (error) {
      console.log(error)
    }
  }, [key])

  const setValue = (value: T) => {
    try {
      setStoredValue(value)
      window.localStorage.setItem(key, JSON.stringify(value))
    } catch (error) {
      console.log(error)
    }
  }

  return [storedValue, setValue] as const
}

// useToggle 커스텀 훅
function useToggle(initialValue: boolean = false) {
  const [value, setValue] = useState(initialValue)

  const toggle = () => setValue(!value)

  return [value, toggle] as const
}

// useCounter 커스텀 훅
function useCounter(initialValue: number = 0) {
  const [count, setCount] = useState(initialValue)

  const increment = () => setCount(c => c + 1)
  const decrement = () => setCount(c => c - 1)
  const reset = () => setCount(initialValue)

  return { count, increment, decrement, reset }
}

export function HooksExample() {
  const [name, setName] = useLocalStorage("user-name", "")
  const [isVisible, toggleVisible] = useToggle(true)
  const counter = useCounter(0)

  return (
    <div className="space-y-8">
      {/* useLocalStorage 예제 */}
      <Card>
        <CardHeader>
          <CardTitle>useLocalStorage 훅</CardTitle>
          <CardDescription>로컬 스토리지에 데이터 저장</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-medium">이름 입력 (새로고침해도 유지됨)</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="이름을 입력하세요"
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            />
          </div>
          {name && (
            <p className="text-sm text-muted-foreground">
              저장된 이름: <strong>{name}</strong>
            </p>
          )}
        </CardContent>
      </Card>

      {/* useToggle 예제 */}
      <Card>
        <CardHeader>
          <CardTitle>useToggle 훅</CardTitle>
          <CardDescription>boolean 상태 토글</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Button onClick={toggleVisible}>
            {isVisible ? "숨기기" : "보이기"}
          </Button>
          {isVisible && (
            <div className="p-4 bg-primary/10 rounded-lg">
              <p className="text-sm">토글로 보이거나 숨겨지는 콘텐츠입니다! 👋</p>
            </div>
          )}
        </CardContent>
      </Card>

      {/* useCounter 예제 */}
      <Card>
        <CardHeader>
          <CardTitle>useCounter 훅</CardTitle>
          <CardDescription>카운터 상태 관리</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="text-center">
            <p className="text-4xl font-bold mb-4">{counter.count}</p>
            <div className="flex justify-center gap-4">
              <Button onClick={counter.decrement} variant="outline">
                감소
              </Button>
              <Button onClick={counter.reset} variant="secondary">
                초기화
              </Button>
              <Button onClick={counter.increment}>
                증가
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* useEffect 예제 */}
      <Card>
        <CardHeader>
          <CardTitle>useEffect 훅</CardTitle>
          <CardDescription>현재 시간 표시 (1초마다 업데이트)</CardDescription>
        </CardHeader>
        <CardContent>
          <Clock />
        </CardContent>
      </Card>
    </div>
  )
}

// 시계 컴포넌트
function Clock() {
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="text-center">
      <p className="text-3xl font-mono font-bold">
        {time.toLocaleTimeString('ko-KR')}
      </p>
    </div>
  )
}
