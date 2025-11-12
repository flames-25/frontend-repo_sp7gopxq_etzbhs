import { useEffect, useState } from 'react'

const API_BASE = import.meta.env.VITE_BACKEND_URL || ''

export default function Projects() {
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch(`${API_BASE}/api/projects`)
        const data = await res.json()
        setProjects(data)
      } catch (e) {
        console.error(e)
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [])

  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-16">
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Featured Projects</h2>
      <p className="mt-2 text-gray-600">Case studies that highlight analysis, modeling, and impact.</p>

      {loading && (
        <div className="mt-10 text-gray-500">Loading projects...</div>
      )}

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map(p => (
          <article key={p.id} className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition">
            {p.image_url && (
              <img src={p.image_url} alt={p.title} className="mb-4 h-40 w-full object-cover rounded-md" />
            )}
            <h3 className="text-lg font-semibold text-gray-900">{p.title}</h3>
            <p className="mt-2 text-sm text-gray-600 line-clamp-3">{p.summary}</p>
            {p.tags?.length > 0 && (
              <div className="mt-3 flex flex-wrap gap-2">
                {p.tags.slice(0,5).map(t => (
                  <span key={t} className="inline-flex items-center rounded-full bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700">{t}</span>
                ))}
              </div>
            )}
            <div className="mt-4 flex gap-3">
              {p.repo_url && <a href={p.repo_url} target="_blank" className="text-sm text-blue-600 hover:underline">Code</a>}
              {p.demo_url && <a href={p.demo_url} target="_blank" className="text-sm text-blue-600 hover:underline">Demo</a>}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
