import { ExternalLink, Github, Star } from 'lucide-react'
import { useState } from 'react'

interface Project {
  id: number
  title: string
  description: string
  image: string
  tags: string[]
  link: string
  github: string
  featured: boolean
  stats?: { label: string; value: string }[]
}

export default function Projects() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  const projects: Project[] = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with real-time inventory, payment processing, and admin dashboard. Handles 10K+ daily users.',
      image: 'https://images.unsplash.com/photo-1460925895917-adf4e565db20?w=600&h=400&fit=crop',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      link: 'https://example.com',
      github: 'https://github.com',
      featured: true,
      stats: [
        { label: 'Performance', value: '98/100' },
        { label: 'Users', value: '10K+' },
      ],
    },
    {
      id: 2,
      title: 'Analytics Dashboard',
      description: 'Real-time data visualization with interactive charts, custom reports, and export functionality. 60fps animations.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
      tags: ['React', 'TypeScript', 'D3.js', 'Tailwind'],
      link: 'https://example.com',
      github: 'https://github.com',
      featured: true,
      stats: [
        { label: 'Load Time', value: '1.2s' },
        { label: 'Queries', value: '1M+' },
      ],
    },
    {
      id: 3,
      title: 'Design System',
      description: 'Comprehensive component library with 100+ components, accessibility guidelines, and Figma integration for design-to-code workflow.',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop',
      tags: ['React', 'Storybook', 'Tailwind', 'Figma'],
      link: 'https://example.com',
      github: 'https://github.com',
      featured: true,
    },
    {
      id: 4,
      title: 'AI Chat Application',
      description: 'Intelligent chat interface with real-time messaging and AI-powered responses using WebSocket integration.',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop',
      tags: ['React', 'WebSocket', 'OpenAI', 'PostgreSQL'],
      link: 'https://example.com',
      github: 'https://github.com',
      featured: false,
    },
    {
      id: 5,
      title: 'SaaS Analytics',
      description: 'Multi-tenant analytics platform with sentiment analysis, trend detection, and competitor benchmarking capabilities.',
      image: 'https://images.unsplash.com/photo-1559526323-cd4628902d4a?w=600&h=400&fit=crop',
      tags: ['Next.js', 'Python', 'AWS', 'PostgreSQL'],
      link: 'https://example.com',
      github: 'https://github.com',
      featured: false,
    },
    {
      id: 6,
      title: 'Portfolio Website',
      description: 'Modern, responsive portfolio with beautiful animations and smooth transitions. Fully optimized for performance.',
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop',
      tags: ['React', 'TypeScript', 'Tailwind', 'Vite'],
      link: 'https://example.com',
      github: 'https://github.com',
      featured: false,
    },
  ]

  const featuredProjects = projects.filter((p) => p.featured)
  const otherProjects = projects.filter((p) => !p.featured)

  const ProjectCard = ({ project, isFeatured }: { project: Project; isFeatured: boolean }) => (
    <div
      className={`group card-hover fade-in-up ${
        isFeatured ? 'md:col-span-2 lg:col-span-1' : ''
      }`}
      onMouseEnter={() => setHoveredId(project.id)}
      onMouseLeave={() => setHoveredId(null)}
      style={{ animationDelay: `${project.id * 0.1}s` }}
    >
      {/* Image Container */}
      <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-40"></div>

        {/* Featured Badge */}
        {project.featured && (
          <div className="absolute top-4 right-4 flex items-center gap-1 px-3 py-1 bg-emerald-500/20 border border-emerald-500/50 rounded-full">
            <Star size={14} className="text-emerald-400 fill-emerald-400" />
            <span className="text-emerald-400 text-xs font-semibold">Featured</span>
          </div>
        )}
      </div>

      {/* Content */}
      <h3 className="text-xl font-bold text-slate-100 mb-3 group-hover:text-emerald-400 transition-colors">
        {project.title}
      </h3>
      <p className="text-slate-400 text-sm mb-4 leading-relaxed">
        {project.description}
      </p>

      {/* Stats */}
      {project.stats && (
        <div className="grid grid-cols-2 gap-4 mb-4 pb-4 border-b border-slate-700/50">
          {project.stats.map((stat) => (
            <div key={stat.label}>
              <div className="text-emerald-400 font-bold">{stat.value}</div>
              <div className="text-slate-500 text-xs">{stat.label}</div>
            </div>
          ))}
        </div>
      )}

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-6">
        {project.tags.map((tag) => (
          <span key={tag} className="badge-emerald">
            {tag}
          </span>
        ))}
      </div>

      {/* Links */}
      <div className="flex gap-4 pt-4 border-t border-slate-700/50">
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors text-sm font-medium group/link"
        >
          <span>Live Demo</span>
          <ExternalLink size={14} className="group-hover/link:translate-x-1 transition-transform" />
        </a>
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-slate-400 hover:text-slate-300 transition-colors text-sm font-medium group/link"
        >
          <span>Code</span>
          <Github size={14} className="group-hover/link:translate-x-1 transition-transform" />
        </a>
      </div>
    </div>
  )

  return (
    <section id="projects" className="section-container bg-gradient-to-b from-slate-800 to-slate-900">
      <div className="content-container">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="section-title">Featured Work</h2>
          <p className="section-subtitle">
            A selection of projects showcasing my expertise in web development and design
          </p>
        </div>

        {/* Featured Projects */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} isFeatured={true} />
          ))}
        </div>

        {/* Other Projects */}
        {otherProjects.length > 0 && (
          <>
            <div className="mb-8 fade-in-up">
              <h3 className="text-2xl font-bold text-slate-100">Other Projects</h3>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {otherProjects.map((project) => (
                <ProjectCard key={project.id} project={project} isFeatured={false} />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  )
}
