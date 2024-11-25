'use client';

import { Button } from "@/app/components/ui/button"
import { Input } from "@/app/components/ui/input"
import { Label } from "@/app/components/ui/label"
import { useState } from 'react'

interface SignUpFormProps {
  isLoading?: boolean;
}

export function SignUpForm({ isLoading = false }: SignUpFormProps) {
  const [loading, setLoading] = useState(isLoading);
  const [error, setError] = useState<string>('');

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError('');
    setLoading(true);

    const formData = new FormData(event.currentTarget);
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;
    const confirmPassword = formData.get('confirmPassword') as string;

    try {
      if (password !== confirmPassword) {
        throw new Error('Les mots de passe ne correspondent pas');
      }

      await signup({ email, password });
      // Handle successful signup here
    } catch (error) {
      setError(error instanceof Error ? error.message : 'Une erreur est survenue');
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="grid w-full items-center gap-4">
        <div className="flex flex-col space-y-1.5">
          <Label htmlFor="signup-email">E-mail</Label>
          <Input 
            id="signup-email" 
            name="email" 
            type="email" 
            placeholder="m@exemple.com" 
            required 
          />
        </div>
        <div className="flex flex-col space-y-1.5">
          <Label htmlFor="signup-password">Mot de passe</Label>
          <Input 
            id="signup-password" 
            name="password" 
            type="password" 
            required 
          />
        </div>
        <div className="flex flex-col space-y-1.5">
          <Label htmlFor="signup-confirm-password">Confirmer le mot de passe</Label>
          <Input 
            id="signup-confirm-password" 
            name="confirmPassword" 
            type="password" 
            required 
          />
        </div>
        {error && (
          <p className="text-sm text-red-500">{error}</p>
        )}
      </div>
      <Button 
        className="w-full mt-4" 
        type="submit" 
        disabled={loading}
      >
        {loading ? "Inscription en cours..." : "S'inscrire"}
      </Button>
    </form>
  );
} 