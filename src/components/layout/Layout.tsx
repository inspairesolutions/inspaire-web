import { ReactNode } from 'react'
import Header from './Header'
import Footer from './Footer'
import AnimatedBackground from '../ui/AnimatedBackground'

interface LayoutProps {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col relative overflow-x-hidden">
      <AnimatedBackground />
      <Header />
      <main className="flex-1 relative z-10">{children}</main>
      <Footer />
    </div>
  )
}
