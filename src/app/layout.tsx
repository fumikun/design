import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Noto_Sans_JP } from 'next/font/google'
import { Rubik } from 'next/font/google'
import './globals.css'
import Sidebar from '@/components/layout/sidebar'

const notoSansJP = Noto_Sans_JP({
  subsets: ['latin'],
  variable: "--font-notojp",
  display: "swap"
})

const rubik = Rubik({
  subsets: ['latin'],
  variable: "--font-rubik",
  display: "swap"
})

export const metadata: Metadata = {
  title: 'myconsole Console',
  description: 'myconsole Contol Panel',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body className={notoSansJP.variable + " " + rubik.variable}>
        <div className='flex w-screen'>
          <Sidebar />
          <div className='p-6 bg-slate-100 w-full'>
            {children}
          </div>
        </div>
      </body>
    </html>
  )
}
