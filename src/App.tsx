import { Button } from './components/ui/button'

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Navigation */}
      <nav className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <h1 className="text-2xl font-bold text-slate-900">Brand</h1>
          <div className="flex items-center gap-6">
            <a href="#features" className="text-slate-600 hover:text-slate-900 transition-colors">
              Features
            </a>
            <a href="#pricing" className="text-slate-600 hover:text-slate-900 transition-colors">
              Pricing
            </a>
            <Button variant="default">Get Started</Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="mx-auto max-w-6xl px-6 py-24 text-center">
        <h2 className="text-5xl font-bold text-slate-900 mb-6">
          Simple, Elegant Landing Page
        </h2>
        <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
          A clean and modern landing page built with React, Tailwind CSS, and Shadcn UI components.
        </p>
        <div className="flex items-center justify-center gap-4">
          <Button variant="default" size="lg">
            Start Now
          </Button>
          <Button variant="outline" size="lg">
            Learn More
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="bg-white py-24">
        <div className="mx-auto max-w-6xl px-6">
          <h3 className="text-3xl font-bold text-slate-900 mb-12 text-center">
            Features
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="p-8 border border-slate-200 rounded-lg hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 rounded-lg bg-slate-200 mb-4"></div>
                <h4 className="text-lg font-semibold text-slate-900 mb-2">
                  Feature {item}
                </h4>
                <p className="text-slate-600">
                  Description of feature {item}. Add your own content here.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white py-8">
        <div className="mx-auto max-w-6xl px-6 text-center text-slate-600">
          <p>&copy; 2024 Brand. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
