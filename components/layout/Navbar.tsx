// D:\Semester Tujuh\SPK\components\layout\Navbar.tsx

'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { LogOut, Home, ClipboardList, Clock, Info } from 'lucide-react'
import { signOut, useSession } from 'next-auth/react'
import Image from 'next/image'

export default function Navbar() {
  const pathname = usePathname()
  const { data: session, status } = useSession() // ✅ FIXED

  const navItems = [
    { href: '/dashboard', label: 'Dashboard', icon: <Home className="w-5 h-5" /> },
    { href: '/assessment', label: 'Assessment', icon: <ClipboardList className="w-5 h-5" /> },
    { href: '/history', label: 'History', icon: <Clock className="w-5 h-5" /> },
    { href: '/about', label: 'About', icon: <Info className="w-5 h-5" /> },
  ]

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/dashboard" className="flex items-center space-x-2">
              <Image 
                src="/umc-logo.png" 
                alt="Logo UMC" 
                width={40} 
                height={40} 
                className="mr-2"
              />
              <div className="flex flex-col">
                <span className="text-xl font-bold text-umc-red dark:text-white">
                  Expert System
                </span>
                <span className="text-xs text-gray-500">
                  Website Sistem Pakar Hasil Karya Kel 1 TI22B
                </span>
              </div>
            </Link>
          </div>

          <div className="flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  pathname === item.href
                    ? 'bg-umc-red/10 text-umc-red dark:bg-umc-red/20 dark:text-white'
                    : 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700'
                }`}
              >
                {item.icon}
                <span>{item.label}</span>
              </Link>
            ))}

            {status === 'authenticated' ? (
              <div className="flex items-center space-x-4">
                <span className="text-sm text-gray-700 dark:text-gray-300">
                  {session?.user?.email}
                </span>
                <button
                  onClick={() => signOut()}
                  className="flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
                >
                  <LogOut className="w-5 h-5" />
                  <span>Logout</span>
                </button>
              </div>
            ) : (
              <Link
                href="/login"
                className="px-4 py-2 bg-umc-red text-white rounded-md hover:bg-umc-red/90 transition-colors"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}