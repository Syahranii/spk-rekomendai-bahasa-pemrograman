'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { LogOut, Home, ClipboardList, Clock, Info, Menu, X } from 'lucide-react'
import { signOut, useSession } from 'next-auth/react'
import Image from 'next/image'
import { useState } from 'react'

export default function Navbar() {
  const pathname = usePathname()
  const { data: session, status } = useSession()
  const [mobileOpen, setMobileOpen] = useState(false)

  const navItems = [
    { href: '/dashboard', label: 'Dashboard', icon: <Home className="w-5 h-5" /> },
    { href: '/assessment', label: 'Assessment', icon: <ClipboardList className="w-5 h-5" /> },
    { href: '/history', label: 'History', icon: <Clock className="w-5 h-5" /> },
    { href: '/about', label: 'About', icon: <Info className="w-5 h-5" /> },
  ]

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-sm">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* LOGO */}
          <Link href="/dashboard" className="flex items-center space-x-2">
            <Image
              src="/umc-logo.png"
              alt="Logo UMC"
              width={40}
              height={40}
            />
            <span className="font-bold text-lg text-umc-red dark:text-white">
              Expert System
            </span>
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden lg:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium ${
                  pathname === item.href
                    ? 'bg-umc-red/10 text-umc-red'
                    : 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700'
                }`}
              >
                {item.icon}
                <span>{item.label}</span>
              </Link>
            ))}

            {status === 'authenticated' ? (
              <button
                onClick={() => signOut()}
                className="flex items-center space-x-2 px-3 py-2 text-sm"
              >
                <LogOut className="w-5 h-5" />
                <span>Logout</span>
              </button>
            ) : (
              <Link
                href="/login"
                className="px-4 py-2 bg-umc-red text-white rounded-md"
              >
                Login
              </Link>
            )}
          </div>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

        </div>
      </div>

      {/* MOBILE MENU */}
      {mobileOpen && (
        <div className="lg:hidden px-4 pb-4 space-y-2">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className="flex items-center space-x-2 px-3 py-2 rounded-md text-sm hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              {item.icon}
              <span>{item.label}</span>
            </Link>
          ))}

          {status === 'authenticated' ? (
            <button
              onClick={() => signOut()}
              className="flex items-center space-x-2 px-3 py-2 text-sm"
            >
              <LogOut className="w-5 h-5" />
              <span>Logout</span>
            </button>
          ) : (
            <Link
              href="/login"
              className="block px-4 py-2 bg-umc-red text-white rounded-md"
            >
              Login
            </Link>
          )}
        </div>
      )}
    </nav>
  )
}
