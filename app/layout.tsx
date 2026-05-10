import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter"
});

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ["latin"],
  variable: "--font-mono"
});

export const metadata: Metadata = {
  title: 'Robotics & ML Engineer Portfolio',
  description: 'Portfolio of a Robotics and Machine Learning Engineer specializing in autonomous systems, computer vision, and deep learning.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/robot_black.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/robot_white.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/robot.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/robot.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background">
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
