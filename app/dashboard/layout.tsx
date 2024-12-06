import { SessionProvider } from "next-auth/react"
import { ThemeProvider } from "@/app/components/theme-provider"
import "@/app/globals.css"
import "@/styles/theme.css"
import "@/styles/layout.css"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="main-layout">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SessionProvider>{children}</SessionProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}