import "./globals.css";

import { LayoutFooter } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { baseUrl, siteConfig } from "@/lib/config";
import { cn } from "@/lib/utils";
import { Analytics } from '@vercel/analytics/next';
import { Bebas_Neue } from "next/font/google";
import localFont from "next/font/local";
import { ThemeProvider } from "./providers";


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
/*
const headingFont = localFont({
  variable: '--font-heading',
  src: [
    {
      path: '../../public/fonts/gt-walsheim-pro/medium.woff2',
      weight: '500',
      style: 'normal',
    }
  ],
})
*/
const headingFont = Bebas_Neue( 
  {
    subsets: ['latin'],
    weight: ['400'],
    variable: '--font-heading',
  }
)

export interface PageProps {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
  params: Promise<{ slug?: string }>
}

export async function generateMetadata() {

  return {
    title: siteConfig.name,
    description: siteConfig.description,
    metadataBase: new URL(baseUrl),
    keywords: siteConfig.keywords,
    creator: siteConfig.name,
    publisher: siteConfig.name,
    robots: 'follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large',
    openGraph: {
      title: siteConfig.name,
      description: siteConfig.description,
      url: baseUrl,
      type: 'website',
      emails: ['titus@gahissy.com'],
      locale: 'en-US',
      siteName: siteConfig.name,
      countryName: 'Portugal',
      images: [
        {
          url: siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: siteConfig.name,
        },

      ],
    },
  };
}

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
