'use client'

import { useState } from 'react'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // Reset form
    setFormData({ name: '', phone: '', email: '', message: '' })
  }

  return (
    <div>
      <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid md:grid-cols-3 gap-4">
          <input
            type="text"
            name="name"
            placeholder="Name*"
            value={formData.name}
            onChange={handleChange}
            className="border border-gray-300 rounded px-4 py-3 focus:outline-none focus:border-blue-500"
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone*"
            value={formData.phone}
            onChange={handleChange}
            className="border border-gray-300 rounded px-4 py-3 focus:outline-none focus:border-blue-500"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email*"
            value={formData.email}
            onChange={handleChange}
            className="border border-gray-300 rounded px-4 py-3 focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <textarea
          name="message"
          placeholder="Message*"
          value={formData.message}
          onChange={handleChange}
          rows={6}
          className="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:border-blue-500"
          required
        />
        <button
          type="submit"
          className="bg-red-600 text-white px-8 py-3 rounded font-semibold hover:bg-red-700 transition"
        >
          Submit
        </button>
      </form>
    </div>
  )
}
