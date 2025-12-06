import { ChevronDown, Zap, ArrowRight } from 'lucide-react'

export default function Hero() {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Animated background blobs - Emerald/Teal theme */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-96 h-96 bg-emerald-500 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-blob"></div>
        <div className="absolute top-40 right-10 w-96 h-96 bg-teal-500 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-20 left-1/3 w-80 h-80 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>
      </div>

      {/* Grid background */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            'linear-gradient(0deg, transparent 24%, rgba(16, 185, 129, .05) 25%, rgba(16, 185, 129, .05) 26%, transparent 27%, transparent 74%, rgba(16, 185, 129, .05) 75%, rgba(16, 185, 129, .05) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(16, 185, 129, .05) 25%, rgba(16, 185, 129, .05) 26%, transparent 27%, transparent 74%, rgba(16, 185, 129, .05) 75%, rgba(16, 185, 129, .05) 76%, transparent 77%, transparent)',
          backgroundSize: '50px 50px',
        }}
      ></div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <div className="fade-in-up mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/30 mb-6">
            <Zap size={16} className="text-emerald-400" />
            <span className="text-emerald-400 font-semibold text-sm">Building Digital Excellence</span>
          </div>
        </div>

        <div className="fade-in-up" style={{ animationDelay: '0.1s' }}>
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
            <span className="gradient-text">Full-Stack</span>
            <br />
            <span className="text-slate-100">Developer & Designer</span>
          </h1>
        </div>

        <div className="fade-in-up" style={{ animationDelay: '0.2s' }}>
          <p className="text-slate-400 text-lg md:text-xl max-w-3xl mx-auto mb-12 leading-relaxed">
            I craft beautiful, high-performance web applications that solve real problems. Specializing in React, TypeScript, and modern design systems.
          </p>
        </div>

        <div className="flex gap-4 justify-center flex-wrap fade-in-up" style={{ animationDelay: '0.3s' }}>
          <button
            onClick={scrollToAbout}
            className="btn-primary inline-flex items-center gap-2 group"
          >
            Explore My Work
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-secondary"
          >
            Get In Touch
          </button>
        </div>

        {/* Stats */}
        <div className="mt-16 grid md:grid-cols-3 gap-8 fade-in-up" style={{ animationDelay: '0.4s' }}>
          {[
            { number: '50+', label: 'Projects Delivered' },
            { number: '5+', label: 'Years Building' },
            { number: '30+', label: 'Happy Clients' },
          ].map((stat) => (
            <div key={stat.label} className="scale-in">
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">{stat.number}</div>
              <div className="text-slate-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button
            onClick={scrollToAbout}
            className="text-emerald-400 hover:text-emerald-300 transition-colors"
            aria-label="Scroll to next section"
          >
            <ChevronDown size={32} />
          </button>
        </div>
      </div>
    </section>
  )
}
