import { Calendar, ArrowRight, Eye } from 'lucide-react'

interface Article {
  id: number
  title: string
  excerpt: string
  date: string
  readTime: string
  category: string
  image: string
  views: number
}

export default function Articles() {
  const articles: Article[] = [
    {
      id: 1,
      title: 'Building Scalable React Applications with TypeScript',
      excerpt: 'Learn best practices for structuring large React applications with TypeScript, including type safety patterns and performance optimization techniques.',
      date: 'Mar 15, 2024',
      readTime: '12 min read',
      category: 'React',
      image: 'https://images.unsplash.com/photo-1633356713697-6d966fbc3006?w=600&h=300&fit=crop',
      views: 2400,
    },
    {
      id: 2,
      title: 'Mastering CSS Grid for Modern Layouts',
      excerpt: 'Comprehensive guide to CSS Grid features, practical examples for common layout patterns, and how to combine with Flexbox for responsive designs.',
      date: 'Mar 10, 2024',
      readTime: '10 min read',
      category: 'CSS',
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=300&fit=crop',
      views: 1800,
    },
    {
      id: 3,
      title: 'Web Performance: From Concepts to Implementation',
      excerpt: 'Explore Core Web Vitals, image optimization, code splitting, and practical strategies to improve your website performance scores.',
      date: 'Mar 05, 2024',
      readTime: '15 min read',
      category: 'Performance',
      image: 'https://images.unsplash.com/photo-1516321384915-c3400ca199e7?w=600&h=300&fit=crop',
      views: 3200,
    },
  ]

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'React':
        return 'badge-teal'
      case 'CSS':
        return 'badge-emerald'
      case 'Performance':
        return 'badge-blue'
      default:
        return 'badge-emerald'
    }
  }

  return (
    <section id="articles" className="section-container bg-gradient-to-b from-slate-900 via-slate-900 to-slate-800">
      <div className="content-container">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="section-title">Latest Articles</h2>
          <p className="section-subtitle">
            Insights on web development, design systems, and building better digital products
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <article
              key={article.id}
              className="card-hover fade-in-up group cursor-pointer flex flex-col"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image */}
              <div className="relative h-40 mb-4 rounded-lg overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col flex-grow">
                {/* Category */}
                <div className="mb-3">
                  <span className={`${getCategoryColor(article.category)}`}>
                    {article.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-slate-100 mb-3 group-hover:text-emerald-400 transition-colors line-clamp-2">
                  {article.title}
                </h3>

                {/* Excerpt */}
                <p className="text-slate-400 text-sm mb-4 leading-relaxed line-clamp-2 flex-grow">
                  {article.excerpt}
                </p>

                {/* Meta */}
                <div className="flex items-center justify-between text-xs text-slate-500 mb-4 pb-4 border-t border-slate-700/50 pt-4">
                  <div className="flex items-center gap-2">
                    <Calendar size={14} />
                    <span>{article.date}</span>
                  </div>
                  <span>{article.readTime}</span>
                </div>

                {/* Stats and Link */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-slate-400 text-xs">
                    <Eye size={14} />
                    <span>{article.views.toLocaleString()} views</span>
                  </div>
                  <a
                    href="#"
                    className="flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors group/link text-sm font-medium"
                  >
                    Read
                    <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* View All Link */}
        <div className="text-center mt-12 fade-in-up" style={{ animationDelay: '0.3s' }}>
          <a
            href="#"
            className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 font-semibold transition-colors group"
          >
            View All Articles
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  )
}
