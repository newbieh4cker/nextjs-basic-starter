import type { ReactNode } from "react"

import { ThemeProvider } from "@/components/theme/theme-provider"

export default function LoginLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="light"
      forcedTheme="light"
      disableTransitionOnChange
    >
      <div className="min-h-screen bg-white dark:bg-white">{children}</div>
    </ThemeProvider>
  )
}
