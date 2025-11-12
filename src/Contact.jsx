import { useState } from 'react'

const API_BASE = import.meta.env.VITE_BACKEND_URL || ''

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState(null)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')
    try {
      const res = await fetch(`${API_BASE}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })
      const data = await res.json()
      if (res.ok) {
        setStatus('Thanks! I will get back to you shortly.')
        setForm({ name: '', email: '', subject: '', message: '' })
      } else {
        setStatus(data.detail || 'Something went wrong.')
      }
    } catch (e) {
      setStatus('Network error. Please try again later.')
    }
  }

  return (
    <section id="contact" className="mx-auto max-w-3xl px-6 py-16">
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Contact</h2>
      <p className="mt-2 text-gray-600">Have a question or a role in mind? Let’s talk.</p>

      <form onSubmit={handleSubmit} className="mt-8 grid gap-4">
        <div className="grid sm:grid-cols-2 gap-4">
          <input name="name" value={form.name} onChange={handleChange} placeholder="Name" className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" required />
          <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="Email" className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" required />
        </div>
        <input name="subject" value={form.subject} onChange={handleChange} placeholder="Subject" className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
        <textarea name="message" rows="5" value={form.message} onChange={handleChange} placeholder="Message" className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" required />
        <button type="submit" className="inline-flex justify-center rounded-md bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500">Send</button>
        {status && <p className="text-sm text-gray-600">{status}</p>}
      </form>
    </section>
  )
}
