import type { Metadata } from "next";
import localFont from "next/font/local";
import "@/app/globals.css";
import { ThemeProvider } from "@/app/components/theme-provider";
import { Navbar } from "@/app/components/Navbar";
import { SessionProvider } from "next-auth/react";
import { Footer } from "@/app/components/Footer";
import { DashboardFilters } from "@/app/dashboard/_Components/dashboard-filters";
import { DashboardKPIs } from "@/app/dashboard/_Components/dashboard-kpis";

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
      <body className={`${geistSans.variable} ${geistMono.variable} dark:bg-[#0f172a] min-h-screen flex flex-col`}>
        <SessionProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Navbar />
            <main className="mx-6 mt-20 mb-6 md:mx-12 md:mt-24 lg:mx-24 lg:mt-28 xl:mx-32 flex-1">
              <div className="flex space-x-4">
                <DashboardFilters />
                <div className="flex-1 space-y-4">
                  <DashboardKPIs />
                  {children}
                </div>
              </div>
            </main>
            <Footer />
          </ThemeProvider>
        </SessionProvider>
      </body>
    </html>
  );
}