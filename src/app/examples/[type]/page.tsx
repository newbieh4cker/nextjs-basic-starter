import { redirect } from "next/navigation"

// 모든 예제 타입 요청을 처리하고 예제 페이지로 리다이렉션
export default function ExamplePage({
  params,
}: {
  params: { type: string }
}) {
  // 예제 타입과 관계없이 예제 메인 페이지로 리다이렉션
  redirect("/examples")
}
