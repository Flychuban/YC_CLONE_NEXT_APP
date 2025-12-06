import { useState } from 'react'
import { Mail, Linkedin, Github, Twitter, Send, MapPin, Phone } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isLoading, setIsLoading] = useState(false)

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email'
    }
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required'
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message should be at least 10 characters'
    }

    return newErrors
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }))
    }
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setErrors({})

    const newErrors = validateForm()
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    setIsLoading(true)

    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted:', formData)
      setSubmitted(true)
      setFormData({ name: '', email: '', subject: '', message: '' })
      setIsLoading(false)

      // Reset success message after 5 seconds
      setTimeout(() => setSubmitted(false), 5000)
    }, 1500)
  }

  const socialLinks = [
    { icon: Mail, label: 'Email', href: 'mailto:hello@example.com' },
    { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com' },
    { icon: Github, label: 'GitHub', href: 'https://github.com' },
    { icon: Twitter, label: 'Twitter', href: 'https://twitter.com' },
  ]

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'hello@example.com',
      href: 'mailto:hello@example.com',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'San Francisco, CA',
      href: '#',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+1 (555) 123-4567',
      href: 'tel:+15551234567',
    },
  ]

  return (
    <section id="contact" className="section-container bg-gradient-to-b from-slate-800 to-slate-900">
      <div className="content-container">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="section-title">Let's Work Together</h2>
          <p className="section-subtitle">
            Have a project in mind? I'd love to hear about it and discuss how I can help bring your vision to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1 fade-in-up" style={{ animationDelay: '0.1s' }}>
            <h3 className="text-2xl font-bold text-slate-100 mb-8">Get in touch</h3>

            <div className="space-y-6 mb-12">
              {contactInfo.map((info) => {
                const Icon = info.icon
                return (
                  <a
                    key={info.label}
                    href={info.href}
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-emerald-500/20 to-teal-500/20 flex items-center justify-center flex-shrink-0 border border-emerald-500/30 group-hover:border-emerald-500/60 group-hover:bg-emerald-500/10 transition-all">
                      <Icon className="text-emerald-400" size={22} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-100 mb-1">{info.label}</h4>
                      <p className="text-slate-400 group-hover:text-emerald-400 transition-colors text-sm">
                        {info.value}
                      </p>
                    </div>
                  </a>
                )
              })}
            </div>

            {/* Social Links */}
            <h4 className="font-semibold text-slate-100 mb-4">Connect with me</h4>
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

            {/* Availability */}
            <div className="mt-12 p-4 rounded-lg bg-emerald-500/10 border border-emerald-500/30">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></div>
                <span className="text-emerald-400 font-semibold text-sm">Available for new projects</span>
              </div>
              <p className="text-slate-400 text-xs">
                Quick turnaround on consultations and project estimates
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2 fade-in-up" style={{ animationDelay: '0.2s' }}>
            <form onSubmit={handleSubmit} className="card bg-slate-900/80 border-emerald-500/30 p-8">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-slate-300 mb-2"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="input-field"
                  />
                  {errors.name && (
                    <p className="text-red-400 text-xs mt-2">{errors.name}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-slate-300 mb-2"
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="input-field"
                  />
                  {errors.email && (
                    <p className="text-red-400 text-xs mt-2">{errors.email}</p>
                  )}
                </div>
              </div>

              {/* Subject */}
              <div className="mb-6">
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-slate-300 mb-2"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Project Inquiry"
                  className="input-field"
                />
                {errors.subject && (
                  <p className="text-red-400 text-xs mt-2">{errors.subject}</p>
                )}
              </div>

              {/* Message */}
              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-slate-300 mb-2"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  rows={5}
                  className="input-field resize-none"
                />
                {errors.message && (
                  <p className="text-red-400 text-xs mt-2">{errors.message}</p>
                )}
              </div>

              {/* Status Messages */}
              {submitted && (
                <div className="mb-4 p-4 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-sm fade-in">
                  Thank you for reaching out! I'll get back to you within 24 hours.
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full px-6 py-3 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 disabled:from-emerald-600/50 disabled:to-teal-600/50 text-white rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 disabled:hover:scale-100 hover-scale flex items-center justify-center gap-2 shadow-lg hover:shadow-emerald-500/50"
              >
                {isLoading ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    <span>Send Message</span>
                  </>
                )}
              </button>

              <p className="text-slate-500 text-xs text-center mt-4">
                I respond to all inquiries within 24 hours
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
