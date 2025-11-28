'use client'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="w-full bg-white shadow-sm">
      {/* Top bar */}
      <div className="bg-blue-50 border-b border-blue-100 px-4 sm:px-6 py-2 sm:py-3 text-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex flex-wrap items-center gap-3 sm:gap-6">
            <span className="text-blue-600">🏠 Welcome to Savekey Technology</span>
            <span className="text-gray-600 hidden sm:inline">📧 info@savekeytechnology.com</span>
          </div>
          <div className="flex gap-4">
            <a href="#" className="text-blue-600 hover:text-blue-800 transition-colors">f</a>
            <a href="#" className="text-blue-600 hover:text-blue-800 transition-colors">𝕏</a>
            <a href="#" className="text-blue-600 hover:text-blue-800 transition-colors">in</a>
          </div>
        </div>
      </div>

      {/* Navigation bar */}
      <div className="px-4 sm:px-6 py-3 sm:py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-2 sm:gap-3">
            <Image
              src="/savekey.png"
              width={80}
              height={80}
              className="w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-full object-contain"
              alt="Savekey Technology Logo"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex gap-6 xl:gap-8 items-center text-gray-700 text-sm xl:text-base">
            <Link href="/" className="hover:text-blue-600 transition whitespace-nowrap">Home</Link>
            <Link href="/about" className="hover:text-blue-600 transition whitespace-nowrap">About Us</Link>
            <Link href="/solutions" className="hover:text-blue-600 transition whitespace-nowrap">Solutions</Link>
            <Link href="/recruitment" className="hover:text-blue-600 transition whitespace-nowrap">Recruitment</Link>
            <Link href="/training" className="hover:text-blue-600 transition whitespace-nowrap">Training</Link>
            <Link href="/career" className="hover:text-blue-600 transition whitespace-nowrap">Career</Link>
            <Link href="/clients" className="hover:text-blue-600 transition whitespace-nowrap">Clients</Link>
            <Link href="/contact" className="hover:text-blue-600 transition whitespace-nowrap">Contact Us</Link>
            <button className="bg-blue-600 text-white px-4 xl:px-6 py-2 rounded hover:bg-blue-800 transition whitespace-nowrap text-sm xl:text-base">
              Get in Touch
            </button>
          </nav>

          {/* Mobile menu button */}
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="lg:hidden p-2 hover:bg-gray-100 rounded transition"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="lg:hidden flex flex-col gap-3 sm:gap-4 mt-4 pb-4 border-t pt-4">
            <Link 
              href="/" 
              className="hover:text-blue-600 transition py-2 px-2 hover:bg-blue-50 rounded"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link 
              href="/about" 
              className="hover:text-blue-600 transition py-2 px-2 hover:bg-blue-50 rounded"
              onClick={() => setIsOpen(false)}
            >
              About Us
            </Link>
            <Link 
              href="/solutions" 
              className="hover:text-blue-600 transition py-2 px-2 hover:bg-blue-50 rounded"
              onClick={() => setIsOpen(false)}
            >
              Solutions
            </Link>
            <Link 
              href="/recruitment" 
              className="hover:text-blue-600 transition py-2 px-2 hover:bg-blue-50 rounded"
              onClick={() => setIsOpen(false)}
            >
              Recruitment
            </Link>
            <Link 
              href="/training" 
              className="hover:text-blue-600 transition py-2 px-2 hover:bg-blue-50 rounded"
              onClick={() => setIsOpen(false)}
            >
              Training
            </Link>
            <Link 
              href="/career" 
              className="hover:text-blue-600 transition py-2 px-2 hover:bg-blue-50 rounded"
              onClick={() => setIsOpen(false)}
            >
              Career
            </Link>
            <Link 
              href="/clients" 
              className="hover:text-blue-600 transition py-2 px-2 hover:bg-blue-50 rounded"
              onClick={() => setIsOpen(false)}
            >
              Clients
            </Link>
            <Link 
              href="/contact" 
              className="hover:text-blue-600 transition py-2 px-2 hover:bg-blue-50 rounded"
              onClick={() => setIsOpen(false)}
            >
              Contact Us
            </Link>
            <button className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-800 transition w-full text-left">
              Get in Touch
            </button>
          </nav>
        )}
      </div>
    </header>
  )
}