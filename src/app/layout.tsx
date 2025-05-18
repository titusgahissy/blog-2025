import "./globals.css";

import { LayoutFooter } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { cn } from "@/lib/utils";
import { Analytics } from '@vercel/analytics/next';
import type { Metadata } from "next";
import { Bebas_Neue } from "next/font/google";
import localFont from "next/font/local";
import { ThemeProvider } from "./providers";


export const metadata: Metadata = {
  title: "Titus Gahissy",
  description: "Titus Gahissy",
};


const bodyFont = localFont({
  variable: '--font-primary',
  src: [
    {
      path: '../../public/fonts/satoshi/Satoshi-Variable.woff2',
      weight: '300 900',
      style: 'normal',
    }
  ],
})

const headingFont = Bebas_Neue(
  {
    subsets: ['latin'],
    weight: ['400'],
    variable: '--font-heading',
  }
)

/*
const headingFont = localFont({
  variable: '--font-heading',
  src: [
    {
      path: '../../public/fonts/acumin-pro/med.woff2',
      weight: '500',
      style: 'normal',
    }
  ],
})*/

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("antialiased", bodyFont.variable, headingFont.variable, bodyFont.className, "pt-28")}>
        <ThemeProvider>
          <Navbar />
          <main>
            {children}
          </main>
          <LayoutFooter />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
