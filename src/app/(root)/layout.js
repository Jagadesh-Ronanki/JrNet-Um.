import { siteConfig } from "@/../config/site"
import Footer from '@/components/global/footer'
import Header from '@/components/global/header'

export const metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
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
      url: "http://localhost:3000",
    },
  ],
  creator: "Jagadesh Ronanki",
  // themeColor: [
  //   { media: "(prefers-color-scheme: light)", color: "white" },
  //   { media: "(prefers-color-scheme: dark)", color: "black" },
  // ],
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

const layout = ({children}) => {
  return (
    <div className='relative'>
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default layout