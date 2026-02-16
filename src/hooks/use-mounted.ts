/* eslint-disable react-hooks/set-state-in-effect */
"use client"

import { useEffect, useState } from "react"

// 클라이언트 사이드 마운트 확인 훅
// 다크모드 플래시 현상을 방지하기 위해 사용
// React 18+ hydration mismatch 방지를 위한 표준 패턴
export function useMounted() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return mounted
}
