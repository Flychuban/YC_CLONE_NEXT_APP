import { TrendingUp } from 'lucide-react'

interface Skill {
  category: string
  items: string[]
  icon: string
}

export default function Skills() {
  const skills: Skill[] = [
    {
      category: 'Frontend',
      icon: '⚛️',
      items: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js', 'Vue.js', 'HTML/CSS'],
    },
    {
      category: 'Backend',
      icon: '⚙️',
      items: ['Node.js', 'Express', 'Python', 'PostgreSQL', 'MongoDB', 'Firebase'],
    },
    {
      category: 'Design & Tools',
      icon: '🎨',
      items: ['Figma', 'UI/UX Design', 'Framer Motion', 'Adobe Suite', 'Git', 'Docker'],
    },
    {
      category: 'Specializations',
      icon: '🚀',
      items: ['Performance Optimization', 'SEO', 'Accessibility', 'Web3', 'Cloud Deployment'],
    },
  ]

  const expertise = [
    { name: 'React & TypeScript', level: 95, color: 'from-emerald-600 to-teal-600' },
    { name: 'Full Stack Development', level: 90, color: 'from-teal-600 to-cyan-600' },
    { name: 'UI/UX Design', level: 85, color: 'from-cyan-600 to-emerald-600' },
  ]

  return (
    <section id="skills" className="section-container bg-gradient-to-b from-slate-900 via-slate-900 to-slate-800">
      <div className="content-container">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="section-title">Skills & Expertise</h2>
          <p className="section-subtitle">
            A comprehensive toolkit of technologies and methodologies I use to build digital products
          </p>
        </div>

        {/* Skill Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {skills.map((skill, categoryIndex) => (
            <div
              key={skill.category}
              className="card-hover fade-in-up group"
              style={{ animationDelay: `${categoryIndex * 0.1}s` }}
            >
              <div className="text-4xl mb-4">{skill.icon}</div>
              <h3 className="text-lg font-bold text-slate-100 mb-4 group-hover:text-emerald-400 transition-colors">
                {skill.category}
              </h3>
              <div className="space-y-2">
                {skill.items.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 group/item"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-emerald-400 to-teal-400 group-hover/item:scale-150 transition-transform"></div>
                    <span className="text-slate-300 text-sm group-hover/item:text-slate-200 transition-colors">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Expertise Levels */}
        <div className="fade-in-up" style={{ animationDelay: '0.4s' }}>
          <div className="flex items-center gap-2 mb-8">
            <TrendingUp className="text-emerald-400" />
            <h3 className="text-2xl font-bold text-slate-100">Technical Proficiency</h3>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {expertise.map((skill, index) => (
              <div key={skill.name} className="fade-in-up" style={{ animationDelay: `${0.5 + index * 0.1}s` }}>
                <div className="flex justify-between items-center mb-3">
                  <span className="text-slate-300 font-medium text-sm">{skill.name}</span>
                  <span className="text-emerald-400 font-bold text-sm">{skill.level}%</span>
                </div>
                <div className="h-2.5 rounded-full bg-slate-800 border border-slate-700/50 overflow-hidden">
                  <div
                    className={`h-full bg-gradient-to-r ${skill.color} transition-all duration-1000`}
                    style={{
                      width: '0%',
                      animation: `fillBar ${0.8 + index * 0.2}s ease-out forwards`,
                      animationDelay: `${0.5 + index * 0.1}s`,
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Stats */}
        <div className="mt-16 grid md:grid-cols-3 gap-8 fade-in-up" style={{ animationDelay: '0.7s' }}>
          {[
            { label: 'Languages', value: '5+' },
            { label: 'Frameworks', value: '8+' },
            { label: 'Tools & Platforms', value: '15+' },
          ].map((stat) => (
            <div key={stat.label} className="card text-center hover:border-emerald-500/50">
              <div className="text-3xl font-bold gradient-text mb-2">{stat.value}</div>
              <div className="text-slate-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes fillBar {
          to {
            width: var(--bar-width, 100%);
          }
        }
      `}</style>
    </section>
  )
}
