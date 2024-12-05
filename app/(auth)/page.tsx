'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from "@/app/components/ui/button"
import { Input } from "@/app/components/ui/input"
import { Label } from "@/app/components/ui/label"
import Image from 'next/image'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/app/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/app/components/ui/tabs"
import { Separator } from "@/app/components/ui/separator"
import GoogleSignInButton from '@/app/components/GoogleSignInButton'
import { SignInForm } from '@/app/components/SignInForm'
import { SignUpForm } from '@/app/components/SignUpForm'

export default function AuthPage() {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const router = useRouter()

  return (
    <div className="flex items-center justify-center min-h-screen">
      <Card className="w-[350px]">
        <div className="flex justify-center mb-4 mt-6">
          <Image
            src="/images/Frame18.png"
            alt="Logo"
            width={150}
            height={150}
            priority
          />
        </div>
        <CardHeader className="text-center">
          <CardTitle>Authentication</CardTitle>
          <CardDescription>Sign in to your account or create a new one.</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="signin" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="signin">Sign In</TabsTrigger>
              <TabsTrigger value="signup">Sign Up</TabsTrigger>
            </TabsList>
            <TabsContent value="signin">
              <SignInForm isLoading={isLoading} />
            </TabsContent>
            <TabsContent value="signup">
              <SignUpForm isLoading={isLoading} />
            </TabsContent>
          </Tabs>
          <div className="relative my-4">
            <div className="absolute inset-0 flex items-center">
              <Separator className="w-full" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">Or</span>
            </div>
          </div>
          <GoogleSignInButton isLoading={isLoading} />
        </CardContent>
        <CardFooter className="flex justify-center">
          <p className="text-sm text-gray-500 text-center">
            By signing in, you agree to our Terms of Service and Privacy Policy.
          </p>
        </CardFooter>
      </Card>
    </div>
  )
}

