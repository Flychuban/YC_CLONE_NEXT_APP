import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Menu, X, Code2 } from 'lucide-react'

export default function Navbar() {
  const navigate = useNavigate()
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const navItems = [
    { label: 'Projects', id: 'projects', isLink: false },
    { label: 'Articles', href: '#articles' },
    { label: 'About', href: '#about' },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'backdrop-blur-xl bg-slate-900/95 border-b border-emerald-500/20 shadow-2xl shadow-emerald-500/10'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <button
          onClick={() => navigate('/')}
          className="flex items-center gap-2 text-2xl font-bold gradient-text hover:opacity-80 transition-opacity"
        >
          <Code2 size={28} />
          <span>AC</span>
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => item.isLink === false && scrollToSection(item.id || '')}
              className="text-slate-300 hover:text-emerald-400 transition-colors duration-300 text-sm font-medium relative group"
            >
              {item.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-400 to-teal-400 group-hover:w-full transition-all duration-300"></span>
            </button>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <a
            href="mailto:hello@example.com"
            className="px-6 py-2.5 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white rounded-lg font-semibold text-sm transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/50"
          >
            Let's Talk
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-slate-300 hover:text-emerald-400 transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-slate-900/98 backdrop-blur-xl border-t border-emerald-500/20">
          <div className="flex flex-col gap-2 p-6">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => {
                  item.isLink === false && scrollToSection(item.id || '')
                  setIsOpen(false)
                }}
                className="text-slate-300 hover:text-emerald-400 transition-colors text-sm font-medium text-left py-2"
              >
                {item.label}
              </button>
            ))}
            <div className="pt-4 border-t border-slate-700">
              <a
                href="mailto:hello@example.com"
                className="w-full px-6 py-2.5 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white rounded-lg font-semibold text-sm transition-all duration-300 inline-block text-center mt-4"
              >
                Let's Talk
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
