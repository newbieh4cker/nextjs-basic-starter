import { LucideIcon } from "lucide-react"

// 네비게이션 아이템 타입
export interface NavItem {
  name: string
  href: string
  icon?: LucideIcon
}

// 기능 카드 타입
export interface Feature {
  title: string
  description: string
  icon: LucideIcon
}

// 푸터 링크 그룹 타입
export interface FooterLinkGroup {
  title: string
  links: { name: string; href: string }[]
}

// 소셜 링크 타입
export interface SocialLink {
  name: string
  href: string
  icon: LucideIcon
}
