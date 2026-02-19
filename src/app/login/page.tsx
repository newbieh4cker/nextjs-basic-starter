import type { Metadata } from "next"

import { LoginForm } from "@/components/sections/login-form"

export const metadata: Metadata = {
  title: "로그인",
  description: "계정에 로그인하세요",
}

export default function LoginPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 px-4">
      <LoginForm />
    </div>
  )
}
