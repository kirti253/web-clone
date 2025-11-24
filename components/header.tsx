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
      <div className="bg-brand-light border-b border-brand-light px-6 py-3 text-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex gap-6">
            <span className="text-brand-primary">🏠 Welcome to Savekey Technology</span>
            <span className="text-gray-600">📧 info@savekeytechnology.com</span>
          </div>
          <div className="flex gap-4">
            <a href="#" className="text-brand-accent hover:text-brand-primary transition-colors">f</a>
            <a href="#" className="text-brand-accent hover:text-brand-primary transition-colors">𝕏</a>
            <a href="#" className="text-brand-accent hover:text-brand-primary transition-colors">in</a>
          </div>
        </div>
      </div>

      {/* Navigation bar */}
      <div className="px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <Image
              src="/savekey.png"
              width={80}
              height={80}
              className="w-20 h-20 rounded-full object-contain"
              alt="Savekey Technology Logo"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-8 items-center text-gray-700">
            <Link href="/" className="hover:text-brand-primary transition">Home</Link>
            <Link href="/about" className="hover:text-brand-primary transition">About Us</Link>
            <Link href="/solutions" className="hover:text-brand-primary transition">Solutions</Link>
            <Link href="/recruitment" className="hover:text-brand-primary transition">Recruitment</Link>
            <Link href="/training" className="hover:text-brand-primary transition">Training</Link>
            <Link href="/career" className="hover:text-brand-primary transition">Career</Link>
            <Link href="/clients" className="hover:text-brand-primary transition">Clients</Link>
            <Link href="/contact" className="hover:text-brand-primary transition">Contact Us</Link>
            <button className="bg-brand-primary text-white px-6 py-2 rounded hover:bg-brand-navy transition">
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
            <Link href="/" className="hover:text-brand-primary transition">Home</Link>
            <Link href="/about" className="hover:text-brand-primary transition">About Us</Link>
            <Link href="/solutions" className="hover:text-brand-primary transition">Solutions</Link>
            <Link href="/recruitment" className="hover:text-brand-primary transition">Recruitment</Link>
            <Link href="/training" className="hover:text-brand-primary transition">Training</Link>
            <Link href="/career" className="hover:text-brand-primary transition">Career</Link>
            <Link href="/clients" className="hover:text-brand-primary transition">Clients</Link>
            <Link href="/contact" className="hover:text-brand-primary transition">Contact Us</Link>
            <button className="bg-brand-primary text-white px-6 py-2 rounded hover:bg-brand-navy transition w-full">
              Get in Touch
            </button>
          </nav>
        )}
      </div>
    </header>
  )
}