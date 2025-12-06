import { Heart, ArrowUp, Mail, Linkedin, Github, Twitter } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

export default function Footer() {
  const navigate = useNavigate()
  const currentYear = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const socialLinks = [
    { icon: Mail, label: 'Email', href: 'mailto:hello@example.com' },
    { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com' },
    { icon: Github, label: 'GitHub', href: 'https://github.com' },
    { icon: Twitter, label: 'Twitter', href: 'https://twitter.com' },
  ]

  return (
    <footer className="border-t border-emerald-500/20 bg-slate-900">
      <div className="content-container section-container pt-16 pb-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="fade-in-up">
            <button
              onClick={() => {
                navigate('/')
                scrollToTop()
              }}
              className="text-2xl font-bold gradient-text mb-4 hover:opacity-80 transition-opacity"
            >
              AC
            </button>
            <p className="text-slate-400 text-sm leading-relaxed">
              Premium digital experiences built with modern technologies and attention to detail.
            </p>
          </div>

          {/* Quick Links */}
          <div className="fade-in-up" style={{ animationDelay: '0.1s' }}>
            <h4 className="font-semibold text-slate-100 mb-6">Navigate</h4>
            <ul className="space-y-3">
              {[
                { label: 'Home', action: () => navigate('/') },
                { label: 'Projects', action: () => document.getElementById('projects')?.scrollIntoView() },
                { label: 'About', action: () => {} },
              ].map((link) => (
                <li key={link.label}>
                  <button
                    onClick={link.action}
                    className="text-slate-400 hover:text-emerald-400 transition-colors text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="fade-in-up" style={{ animationDelay: '0.2s' }}>
            <h4 className="font-semibold text-slate-100 mb-6">Resources</h4>
            <ul className="space-y-3">
              {[
                { label: 'Blog', href: '#' },
                { label: 'Resume', href: '#' },
                { label: 'Case Studies', href: '#' },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-emerald-400 transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div className="fade-in-up" style={{ animationDelay: '0.3s' }}>
            <h4 className="font-semibold text-slate-100 mb-6">Connect</h4>
            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-11 h-11 rounded-lg border border-emerald-500/30 bg-emerald-500/5 flex items-center justify-center text-slate-400 transition-all duration-300 hover:border-emerald-500/60 hover:bg-emerald-500/10 hover:text-emerald-400 hover-scale"
                  >
                    <Icon size={20} />
                  </a>
                )
              })}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-700/50 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2 text-slate-400 text-sm">
              <span>© {currentYear} Alex Chen. All rights reserved.</span>
              <Heart size={14} className="text-emerald-400" />
            </div>

            <div className="flex items-center gap-4">
              <p className="text-slate-400 text-sm">
                Designed & built with React, TypeScript & Tailwind CSS
              </p>
              <button
                onClick={scrollToTop}
                className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 hover:bg-emerald-500/20 hover:border-emerald-500/60 transition-all hover-scale"
                aria-label="Scroll to top"
              >
                <ArrowUp size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
