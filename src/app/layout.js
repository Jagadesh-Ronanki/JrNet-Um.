import { Inter } from "next/font/google";
import "./globals.css";
// import { siteConfig } from "@/../config/site"
import { Analytics } from "@/components/analytics";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  keywords: [
    "Next.js",
    "React",
    "Tailwind CSS",
    "Server Components",
    "Shadcn",
    "Blockchain",
    "JrNet",
    "Jagadesh Ronanki",
    "Jagadesh",
    "Ronanki",
    "Jagadesh Ronanki Portfolio",
    "JrNet Portfolio",
    "Smart Contract Audits Portfolio",
    "Smart Contract security researcher",
    "Pashov",
    "Pashov group",
    "ethereum security",
    "Blockchain security",
    "Solidity security",
    "trust security",
  ],
  authors: [
    {
      name: "JrNet",
      url: "https://umspaces.vercel.app",
    },
  ],
  creator: "Jagadesh Ronanki",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: 'https://umspaces.vercel.com/og.png',
        width: 800,
        height: 600,
      },
      {
        url: 'https://umspaces.vercel.com/og.png',
        width: 1800,
        height: 1600,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: 'https://umspaces.vercel.com/og.png',
    creator: "@JrNet_",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: `${siteConfig.url}/site.webmanifest`,
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
