import type { Metadata } from 'next'
import { Orbitron, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { LanguageProvider } from '@/components/gear-sec/language-provider'

const orbitron = Orbitron({ 
  subsets: ["latin"],
  variable: '--font-orbitron'
});

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter'
});

export const metadata: Metadata = {
  title: "Gear Sec - Segurança | Proteção Cibernética para Empresas • Denilson França",
  description: "Segurança cibernética profissional. Entre em contato e proteja sua empresa agora.",
  icons: { 
    icon: "/favicon.ico",
    apple: "/apple-icon.png",
  },
  openGraph: {
    title: "Gear Sec - Segurança | Proteção Cibernética",
    description: "Segurança cibernética profissional. Entre em contato e proteja sua empresa agora.",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className="dark">
      <body className={`${orbitron.variable} ${inter.variable} font-sans antialiased bg-[#0a0a0a] text-white`}>
        <LanguageProvider>{children}</LanguageProvider>
        <Analytics />
      </body>
    </html>
  )
}
