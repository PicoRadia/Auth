import type { Metadata } from "next";
import localFont from "next/font/local";
import "@/app/globals.css";
import { ThemeProvider } from "@/app/components/theme-provider";
import { Navbar } from "@/app/components/Navbar";
import { SessionProvider } from "next-auth/react";

import '@/styles/theme.css'
import '@/styles/layout.css'

const geistMono = localFont({
  src: [
    {
      path: '../fonts/GeistMonoVF.woff',
      weight: '100 900',
      style: 'normal',
    }
  ],
  variable: '--font-geist-mono'
});

export const metadata: Metadata = {
  title: "Better Data",
  description: "Better Data Dashboard",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistMono.variable} dark:bg-[#0f172a] min-h-screen flex flex-col`}>
        <SessionProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Navbar />
            <main className="mx-6 mt-20 mb-6 md:mx-12 md:mt-24 lg:mx-24 lg:mt-28 xl:mx-32 flex-1">
              {children}
            </main>
            <footer className="py-6 text-center text-sm text-muted-foreground border-t mx-6 md:mx-12 lg:mx-24 xl:mx-32">
              <p className="mb-1">The Future of Energy is Solar ☀️</p>
              <p>© Better Earth 2024. All rights reserved.</p>
            </footer>
          </ThemeProvider>
        </SessionProvider>
      </body>
    </html>
  );
}