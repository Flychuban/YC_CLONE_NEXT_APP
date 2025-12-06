import { Star } from 'lucide-react'

interface Testimonial {
  id: number
  name: string
  role: string
  company: string
  image: string
  quote: string
  rating: number
}

export default function Testimonials() {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Product Manager',
      company: 'TechFlow Inc',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop',
      quote: 'Alex delivered an exceptional e-commerce platform that increased our conversion rate by 40%. His attention to detail and performance optimization is outstanding.',
      rating: 5,
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Founder',
      company: 'DataViz Startup',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop',
      quote: 'Working with Alex on our analytics dashboard was a game-changer. The real-time data visualization and performance are exactly what we needed.',
      rating: 5,
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      role: 'CTO',
      company: 'CloudBuild Solutions',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop',
      quote: 'Alex created a comprehensive design system that standardized our development process. His documentation and component library are production-ready.',
      rating: 5,
    },
  ]

  return (
    <section className="section-container bg-gradient-to-b from-slate-800 to-slate-900">
      <div className="content-container">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="section-title">Client Testimonials</h2>
          <p className="section-subtitle">
            What clients and colleagues say about working together
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="card-hover fade-in-up flex flex-col"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="text-emerald-400 fill-emerald-400"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-slate-300 text-sm leading-relaxed mb-6 flex-grow italic">
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="pt-6 border-t border-slate-700/50 flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold text-slate-100 text-sm">
                    {testimonial.name}
                  </div>
                  <div className="text-slate-400 text-xs">
                    {testimonial.role} at {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
