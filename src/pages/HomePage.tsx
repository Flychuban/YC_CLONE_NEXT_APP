import { useNavigate } from 'react-router-dom'
import { ArrowRight, Code2, Zap, Star } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { projects } from '@/data/projects'

export default function HomePage() {
  const navigate = useNavigate()
  const featuredProjects = projects.filter(p => p.featured)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800">
      <Navbar />

      {/* Hero */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
        {/* Background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-96 h-96 bg-emerald-500 rounded-full mix-blend-multiply filter blur-3xl opacity-12"></div>
          <div className="absolute top-40 right-10 w-96 h-96 bg-teal-500 rounded-full mix-blend-multiply filter blur-3xl opacity-12 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-20 left-1/3 w-80 h-80 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-8"></div>
        </div>

        <div className="relative z-10 content-container text-center">
          <div className="fade-in-up mb-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/30 backdrop-blur-sm">
              <Zap size={16} className="text-emerald-400" />
              <span className="text-emerald-400 font-semibold text-sm">Premium Web Solutions</span>
            </div>
          </div>

          <h1 className="text-7xl md:text-8xl font-bold mb-6 leading-tight fade-in-up" style={{ animationDelay: '0.1s' }}>
            <span className="gradient-text">Full-Stack Developer</span>
            <br />
            <span className="text-slate-200">& Product Builder</span>
          </h1>

          <p className="text-xl text-slate-400 max-w-3xl mx-auto mb-12 fade-in-up" style={{ animationDelay: '0.2s' }}>
            Crafting premium digital experiences that scale. Specialized in React, TypeScript, and building products from concept to production.
          </p>

          <div className="flex gap-4 justify-center flex-wrap fade-in-up" style={{ animationDelay: '0.3s' }}>
            <button
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary inline-flex items-center gap-2 group"
            >
              Explore Projects
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-secondary"
            >
              Let's Work Together
            </button>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section id="projects" className="section-container bg-gradient-to-b from-slate-800/50 to-slate-900">
        <div className="content-container">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="section-title">Featured Work</h2>
            <p className="section-subtitle">
              Premium projects showcasing expertise in full-stack development
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <button
                key={project.id}
                onClick={() => navigate(`/project/${project.id}`)}
                className="card-hover group fade-in-up text-left h-full flex flex-col"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Image */}
                <div className="relative h-48 mb-6 rounded-xl overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-40"></div>
                </div>

                {/* Content */}
                <div className="flex-grow flex flex-col">
                  <div className="flex items-center gap-2 mb-3">
                    <Star size={16} className="text-emerald-400 fill-emerald-400" />
                    <span className="text-emerald-400 font-semibold text-xs">Featured</span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-100 mb-2 group-hover:text-emerald-400 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-slate-400 text-sm mb-6 flex-grow">
                    {project.shortDescription}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.slice(0, 3).map(tag => (
                      <span key={tag} className="badge-emerald text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </button>
            ))}
          </div>

          <div className="text-center mt-12 fade-in-up" style={{ animationDelay: '0.3s' }}>
            <button
              onClick={() => document.getElementById('all-projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 font-semibold transition-colors group"
            >
              View All Projects
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* All Projects */}
      <section id="all-projects" className="section-container">
        <div className="content-container">
          <h2 className="text-3xl font-bold text-slate-100 mb-12 fade-in-up">All Projects</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <button
                key={project.id}
                onClick={() => navigate(`/project/${project.id}`)}
                className="card-hover group fade-in-up overflow-hidden"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="flex gap-6">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-32 h-32 rounded-lg object-cover flex-shrink-0 group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="flex-grow text-left">
                    <h3 className="text-lg font-bold text-slate-100 mb-2 group-hover:text-emerald-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-slate-400 text-sm mb-4">
                      {project.shortDescription}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.slice(0, 2).map(tag => (
                        <span key={tag} className="badge-teal text-xs">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-container bg-gradient-to-b from-slate-900/50 to-slate-800/50">
        <div className="content-container">
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { label: 'Projects Delivered', value: '50+', icon: Code2 },
              { label: 'Years Experience', value: '5+', icon: Star },
              { label: 'Happy Clients', value: '30+', icon: Star },
              { label: 'Code Quality', value: '98%', icon: Star },
            ].map((stat, index) => {
              const Icon = stat.icon
              return (
                <div key={stat.label} className="card-premium text-center fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <Icon className="text-emerald-400 mx-auto mb-4" size={32} />
                  <div className="text-4xl font-bold gradient-text mb-2">{stat.value}</div>
                  <div className="text-slate-400 text-sm">{stat.label}</div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
