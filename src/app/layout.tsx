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
      weight: '300 900',
      style: 'normal',
    }
  ],
})


const headingFont = localFont({
  variable: '--font-heading',
  src: [
    {
      path: '../../public/fonts/acumin-pro/med.woff2',
      weight: '500',
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
      <body className={cn("antialiased", bodyFont.variable, headingFont.variable, bodyFont.className, "pt-28")}>
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
