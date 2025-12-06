import { CheckCircle2 } from 'lucide-react'

export default function About() {
  const highlights = [
    'Full-Stack Web Development',
    'React & TypeScript Expertise',
    'UI/UX Design & Implementation',
    'Performance Optimization',
    'Accessible Web Standards',
    'Team Leadership & Mentoring',
  ]

  return (
    <section id="about" className="section-container bg-gradient-to-b from-slate-900 via-slate-900 to-slate-800">
      <div className="content-container">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">
            Passionate about creating seamless digital experiences that combine aesthetics with functionality
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="fade-in-up" style={{ animationDelay: '0.1s' }}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-2xl blur-xl"></div>
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=600&fit=crop"
                alt="Profile"
                className="relative w-full rounded-2xl border border-emerald-500/30 hover-lift"
              />
            </div>
          </div>

          {/* Content */}
          <div className="fade-in-up" style={{ animationDelay: '0.2s' }}>
            <p className="text-slate-300 text-lg leading-relaxed mb-6">
              I'm a full-stack developer with 5+ years of experience building digital products at scale. My journey started with curiosity about how things work on the web, evolving into deep expertise in modern web technologies and design systems.
            </p>
            <p className="text-slate-300 text-lg leading-relaxed mb-8">
              I specialize in React, TypeScript, and modern CSS frameworks with a focus on performance optimization, accessibility, and developer experience. I believe that great design should enhance user experience invisibly.
            </p>

            {/* Highlights */}
            <div className="space-y-3 mb-8">
              {highlights.map((highlight, index) => (
                <div
                  key={highlight}
                  className="flex items-center gap-3 fade-in-up"
                  style={{ animationDelay: `${0.3 + index * 0.05}s` }}
                >
                  <CheckCircle2 size={20} className="text-emerald-400 flex-shrink-0" />
                  <span className="text-slate-300">{highlight}</span>
                </div>
              ))}
            </div>

            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary"
            >
              Start a Project
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
