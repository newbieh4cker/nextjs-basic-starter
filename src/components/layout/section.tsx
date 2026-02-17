import { cn } from "@/lib/utils"

interface SectionProps {
  children: React.ReactNode
  className?: string
  id?: string
}

// 일관된 섹션 여백을 제공하는 컴포넌트
export function Section({ children, className, id }: SectionProps) {
  return (
    <section id={id} className={cn("py-12 md:py-16 lg:py-20", className)}>
      {children}
    </section>
  )
}
