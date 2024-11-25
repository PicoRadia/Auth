'use client';

import { Button } from "@/app/components/ui/button"
import { Input } from "@/app/components/ui/input"
import { Label } from "@/app/components/ui/label"
import { login } from '../actions/login'
import { useState, useTransition } from 'react'

interface SignInFormProps {
  isLoading?: boolean;
}

export function SignInForm({ isLoading = false }: SignInFormProps) {
  const [loading, setLoading] = useState(isLoading);
  const [isPending, startTransition] = useTransition()

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);

    const formData = new FormData(event.currentTarget);
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    try {
      await login({ email, password });
      // Handle successful login here
    } catch (error) {
      // Handle error here
      console.error('Login failed:', error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="grid w-full items-center gap-4">
        <div className="flex flex-col space-y-1.5">
          <Label htmlFor="signin-email">E-mail</Label>
          <Input 
            id="signin-email" 
            name="email" 
            type="email" 
            placeholder="m@exemple.com" 
            required 
          />
        </div>
        <div className="flex flex-col space-y-1.5">
          <Label htmlFor="signin-password">Mot de passe</Label>
          <Input 
            id="signin-password" 
            name="password" 
            type="password" 
            required 
          />
        </div>
      </div>
      <Button 
        className="w-full mt-4" 
        type="submit" 
        disabled={loading}
      >
        {loading ? "Connexion en cours..." : "Se connecter"}
      </Button>
    </form>
  );
} 