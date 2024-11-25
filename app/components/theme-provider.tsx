"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import { type ThemeProviderProps } from "next-themes/dist/types"

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  React.useEffect(() => {
    // Get current hour in 24-hour format
    const currentHour = new Date().getHours()
    // Consider "night" between 8 PM (20) and 6 AM (6)
    const isDarkHours = currentHour >= 20 || currentHour < 8
    
    // Set initial theme based on time
    if (isDarkHours) {
      document.documentElement.classList.add('dark')
      console.log('dark')
    }
  }, [])

  return (
    <NextThemesProvider 
      attribute="class" 
      defaultTheme="system" 
      enableSystem
      {...props}
    >
      {children}
    </NextThemesProvider>
  )
}