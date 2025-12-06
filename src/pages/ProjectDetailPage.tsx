import { useParams, useNavigate } from 'react-router-dom'
import { ArrowLeft, ExternalLink, Github, Clock, Users, TrendingUp } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { projects } from '@/data/projects'

export default function ProjectDetailPage() {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const project = projects.find(p => p.id === id)

  if (!project) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-slate-100 mb-4">Project Not Found</h1>
          <button
            onClick={() => navigate('/')}
            className="btn-primary"
          >
            Back to Home
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 bg-gradient-to-b from-slate-900/50 to-slate-800/50">
        <div className="content-container">
          <button
            onClick={() => navigate('/')}
            className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 mb-8 transition-colors group"
          >
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
            Back to Projects
          </button>

          <div className="fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/30 backdrop-blur-sm mb-6">
              <Clock size={16} className="text-emerald-400" />
              <span className="text-emerald-400 font-semibold text-sm">{project.year}</span>
            </div>

            <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="gradient-text">{project.title}</span>
            </h1>

            <p className="text-xl text-slate-400 max-w-3xl mb-8">
              {project.fullDescription}
            </p>

            <div className="flex gap-4 flex-wrap">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center gap-2 group"
              >
                View Live Project
                <ExternalLink size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary inline-flex items-center gap-2 group"
              >
                View Source Code
                <Github size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Image */}
      <section className="px-6 py-12">
        <div className="content-container">
          <div className="relative rounded-2xl overflow-hidden fade-in-up">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-auto object-cover border border-emerald-500/20 rounded-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-40"></div>
          </div>
        </div>
      </section>

      {/* Project Details Grid */}
      <section className="section-container">
        <div className="content-container">
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            {/* Key Metrics */}
            <div className="fade-in-up">
              <h2 className="text-2xl font-bold text-slate-100 mb-6 flex items-center gap-2">
                <TrendingUp className="text-emerald-400" />
                Key Results
              </h2>
              <div className="grid grid-cols-2 gap-6">
                {project.results.map((result, index) => (
                  <div key={result.label} className="card-premium fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                    <div className="text-3xl font-bold gradient-text mb-2">{result.value}</div>
                    <div className="text-slate-400 text-sm">{result.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Project Info */}
            <div className="fade-in-up" style={{ animationDelay: '0.2s' }}>
              <h2 className="text-2xl font-bold text-slate-100 mb-6 flex items-center gap-2">
                <Users className="text-emerald-400" />
                Project Overview
              </h2>
              <div className="space-y-6">
                <div className="card">
                  <div className="text-sm text-slate-400 mb-2">Role</div>
                  <div className="text-lg font-semibold text-slate-100">{project.role}</div>
                </div>
                <div className="card">
                  <div className="text-sm text-slate-400 mb-2">Year</div>
                  <div className="text-lg font-semibold text-slate-100">{project.year}</div>
                </div>
                <div className="card">
                  <div className="text-sm text-slate-400 mb-3">Technologies Used</div>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map(tech => (
                      <span key={tech} className="badge-emerald text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Sections */}
      <section className="section-container bg-gradient-to-b from-slate-900/50 to-slate-800/50">
        <div className="content-container">
          <div className="space-y-12">
            {project.sections.map((section, index) => (
              <div key={section.title} className="fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <h2 className="text-3xl font-bold text-slate-100 mb-6">{section.title}</h2>
                <div className="card-premium">
                  <p className="text-slate-300 text-lg leading-relaxed">{section.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      {project.testimonial && (
        <section className="section-container">
          <div className="content-container">
            <div className="card-premium max-w-3xl mx-auto fade-in-up">
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-xl text-slate-300 mb-6 italic">
                "{project.testimonial.quote}"
              </p>
              <div className="border-t border-slate-700/50 pt-6">
                <div className="font-semibold text-slate-100">{project.testimonial.name}</div>
                <div className="text-slate-400 text-sm">
                  {project.testimonial.role} at {project.testimonial.company}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Image Gallery */}
      {project.images.length > 1 && (
        <section className="section-container bg-gradient-to-b from-slate-900/50 to-slate-800/50">
          <div className="content-container">
            <h2 className="text-3xl font-bold text-slate-100 mb-12 fade-in-up">Project Gallery</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {project.images.map((image, index) => (
                <div key={index} className="rounded-xl overflow-hidden border border-emerald-500/20 fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <img
                    src={image}
                    alt={`${project.title} ${index + 1}`}
                    className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="section-container">
        <div className="content-container">
          <div className="card-premium text-center max-w-3xl mx-auto fade-in-up">
            <h2 className="text-3xl font-bold text-slate-100 mb-6">
              Ready to build something <span className="gradient-text">amazing</span>?
            </h2>
            <p className="text-slate-400 mb-8 text-lg">
              Let's discuss how we can collaborate on your next project and bring your vision to life.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <a
                href="mailto:hello@example.com"
                className="btn-primary inline-flex items-center gap-2"
              >
                Start a Project
              </a>
              <button
                onClick={() => navigate('/')}
                className="btn-secondary"
              >
                Explore More Work
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
