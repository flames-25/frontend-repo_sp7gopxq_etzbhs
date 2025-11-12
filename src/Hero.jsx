import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.15),transparent_40%),radial-gradient(circle_at_80%_0%,rgba(168,85,247,0.12),transparent_35%)]" />
      <div className="relative mx-auto max-w-6xl px-6 py-16 sm:py-24">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-6xl font-extrabold tracking-tight text-gray-900"
        >
          Data Scientist & Analyst
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mt-6 max-w-2xl text-lg leading-8 text-gray-600"
        >
          I turn messy data into clear, actionable insights using statistics, machine learning, and compelling visuals.
        </motion.p>
        <div className="mt-10 flex gap-4">
          <a href="#projects" className="inline-flex items-center rounded-md bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500">View Projects</a>
          <a href="#contact" className="inline-flex items-center rounded-md border border-gray-300 px-5 py-2.5 text-sm font-semibold text-gray-700 hover:bg-gray-50">Get in touch</a>
        </div>
      </div>
    </section>
  )
}
