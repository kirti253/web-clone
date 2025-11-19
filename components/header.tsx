'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="w-full bg-white shadow-sm">
      {/* Top bar */}
      <div className="bg-blue-50 border-b border-blue-100 px-6 py-3 text-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex gap-6">
            <span className="text-blue-600">🏠 Welcome to Adore Technosoft</span>
            <span className="text-gray-600">📧 info@adoretechnosoft.com</span>
          </div>
          <div className="flex gap-4">
            <a href="#" className="text-blue-600 hover:text-blue-700">f</a>
            <a href="#" className="text-blue-600 hover:text-blue-700">𝕏</a>
            <a href="#" className="text-blue-600 hover:text-blue-700">in</a>
          </div>
        </div>
      </div>

      {/* Navigation bar */}
      <div className="px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-white font-bold text-2xl">A</div>
            <div className="flex flex-col">
              <span className="font-bold text-red-600">ADORE</span>
              <span className="text-xs text-gray-600">Technosoft</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-8 items-center text-gray-700">
            <Link href="/" className="hover:text-red-600 transition">Home</Link>
            <Link href="/about" className="hover:text-red-600 transition">About Us</Link>
            <Link href="/solutions" className="hover:text-red-600 transition">Solutions</Link>
            <Link href="/recruitment" className="hover:text-red-600 transition">Recruitment</Link>
            <Link href="/training" className="hover:text-red-600 transition">Training</Link>
            <Link href="/career" className="hover:text-red-600 transition">Career</Link>
            <Link href="/clients" className="hover:text-red-600 transition">Clients</Link>
            <Link href="/contact" className="hover:text-red-600 transition">Contact Us</Link>
            <button className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700 transition">
              Get in Touch
            </button>
          </nav>

          {/* Mobile menu button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden flex flex-col gap-4 mt-4 pb-4 border-t pt-4">
            <Link href="/" className="hover:text-red-600 transition">Home</Link>
            <Link href="/about" className="hover:text-red-600 transition">About Us</Link>
            <Link href="/solutions" className="hover:text-red-600 transition">Solutions</Link>
            <Link href="/recruitment" className="hover:text-red-600 transition">Recruitment</Link>
            <Link href="/training" className="hover:text-red-600 transition">Training</Link>
            <Link href="/career" className="hover:text-red-600 transition">Career</Link>
            <Link href="/clients" className="hover:text-red-600 transition">Clients</Link>
            <Link href="/contact" className="hover:text-red-600 transition">Contact Us</Link>
            <button className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700 transition w-full">
              Get in Touch
            </button>
          </nav>
        )}
      </div>
    </header>
  )
}
