import type { Metadata } from "next";
import localFont from "next/font/local";
import "@/app/globals.css";
import { ThemeProvider } from "@/app/components/theme-provider";
import { Navbar } from "@/app/components/Navbar";
import { SessionProvider } from "next-auth/react";

import '@/styles/theme.css'
import '@/styles/layout.css'

const geistSans = localFont({
  src: "../fonts/GeistMonoVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
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
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <SessionProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Navbar />
            <main className="mx-6 mt-20 mb-6 md:mx-12 md:mt-24 lg:mx-24 lg:mt-28 xl:mx-32">
              {children}
            </main>
          </ThemeProvider>
        </SessionProvider>
      </body>
    </html>
  );
}