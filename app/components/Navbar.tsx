'use client'

import { Button } from "@/app/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/app/components/ui/dropdown-menu"
import { signOut, useSession } from "next-auth/react"
import Link from "next/link"
import { Avatar, AvatarFallback, AvatarImage } from "@/app/components/ui/avatar"
import { Menu, Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { useState } from "react"
import Image from "next/image"

export function Navbar() {
  const { data: session } = useSession()
  const { setTheme, theme } = useTheme()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full border-b bg-background/75 backdrop-blur supports-[backdrop-filter]:bg-background/40 z-50">
      <div className="container flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2 no-underline">
          <Image
            src={theme === 'dark' ? '/images/Frame 19.png' : '/images/Frame18.png'}
            alt="Logo"
            width={80}
            height={80}
            className="object-contain"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex md:items-center md:space-x-6">
          <Link href="/dashboard" className="text-sm font-medium transition-colors hover:text-primary no-underline">
            Dashboard
          </Link>
          <Link href="/analytics" className="text-sm font-medium transition-colors hover:text-primary no-underline">
            Analytics
          </Link>
          <Link href="/settings" className="text-sm font-medium transition-colors hover:text-primary no-underline">
            Settings
          </Link>
        </div>

        {/* Right side items */}
        <div className="flex items-center space-x-4">
          {/* Theme Toggle */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className="mr-2 h-9 w-9 rounded-md"
          >
            <Sun className="h-4 w-4 rotate-0 scale-100 transition-transform dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-transform dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>

          {/* User Menu */}
          {session?.user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-9 w-9 rounded-full">
                  <Avatar className="h-9 w-9">
                    <AvatarImage 
                      src={session.user.image || ''} 
                      alt={session.user.name || 'User avatar'} 
                      referrerPolicy="no-referrer"
                    />
                    <AvatarFallback>
                      {session.user.name?.charAt(0) || 'U'}
                    </AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="end" forceMount>
                <DropdownMenuLabel className="font-normal">
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium leading-none">{session.user.name}</p>
                    <p className="text-xs leading-none text-muted-foreground">
                      {session.user.email}
                    </p>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link href="/profile" className="w-full no-underline">Profile</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/settings" className="w-full no-underline">Settings</Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                  className="text-red-600 cursor-pointer"
                  onClick={() => signOut()}
                >
                  Sign out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Button asChild variant="default">
              <Link href="/login" className="no-underline">Sign in</Link>
            </Button>
          )}

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t p-4 space-y-4 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <Link
            href="/dashboard"
            className="block px-4 py-2 text-sm hover:bg-accent rounded-md no-underline"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Dashboard
          </Link>
          <Link
            href="/analytics"
            className="block px-4 py-2 text-sm hover:bg-accent rounded-md no-underline"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Analytics
          </Link>
          <Link
            href="/settings"
            className="block px-4 py-2 text-sm hover:bg-accent rounded-md no-underline"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Settings
          </Link>
        </div>
      )}
    </nav>
  )
} 