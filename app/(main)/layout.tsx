'use client'

import { SessionProvider } from 'next-auth/react'
import Navbar from '@/components/layout/Navbar'

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900">
        
        {/* Navbar */}
        <Navbar />

        {/* Content Area */}
        <main className="flex-1 py-6 sm:py-8">
          {children}
        </main>

      </div>
    </SessionProvider>
  )
}
