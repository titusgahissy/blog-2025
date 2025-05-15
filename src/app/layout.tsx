import { LayoutFooter, Navbar } from "@/components/layout";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
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
      weight: '300 700',
      style: 'normal',
    }
  ],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(bodyFont.variable, bodyFont.className)}>
        <ThemeProvider>
          <Navbar />
          <main>
            {children}
          </main>
          <LayoutFooter />
        </ThemeProvider>
      </body>
    </html>
  );
}
