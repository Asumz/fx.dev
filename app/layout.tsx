import './css/style.css'

import { Inter } from 'next/font/google'

import Header from '@/components/ui/header'
import Banner from '@/components/banner'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata = {
  title: 'FX Dev',
  description: 'Personal Website.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN">
      <body
        className={`${inter.variable} bg-white font-inter tracking-tight text-gray-900 antialiased`}
      >
        <div className="flex min-h-screen flex-col overflow-hidden supports-[overflow:clip]:overflow-clip">
          <Header />
          {children}
          <Banner />
        </div>
      </body>
    </html>
  )
}
