import './App.css'

export default function App() {
  const handleGetStarted = () => {
    alert('Welcome! Start your journey here.');
  }

  const handleLearnMore = () => {
    document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <div className="app">
      {/* Navigation */}
      <nav className="navbar">
        <div className="container">
          <div className="logo">Simple</div>
          <ul className="nav-links">
            <li><a href="#features">Features</a></li>
            <li><a href="#pricing">Pricing</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>Welcome to Simple</h1>
            <p>The easiest way to get started with something amazing</p>
            <div className="hero-buttons">
              <button className="btn btn-primary" onClick={handleGetStarted}>
                Get Started
              </button>
              <button className="btn btn-secondary" onClick={handleLearnMore}>
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="features">
        <div className="container">
          <h2>Features</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">✨</div>
              <h3>Beautiful Design</h3>
              <p>Clean and modern interface that looks great on any device</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">⚡</div>
              <h3>Lightning Fast</h3>
              <p>Optimized performance for the best user experience</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🔒</div>
              <h3>Secure</h3>
              <p>Enterprise-grade security to protect your data</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="pricing">
        <div className="container">
          <h2>Simple Pricing</h2>
          <div className="pricing-grid">
            <div className="pricing-card">
              <h3>Starter</h3>
              <p className="price">$9<span>/month</span></p>
              <ul className="features-list">
                <li>✓ Basic features</li>
                <li>✓ Email support</li>
                <li>✓ Up to 10 users</li>
              </ul>
              <button className="btn btn-secondary">Choose Plan</button>
            </div>
            <div className="pricing-card featured">
              <div className="badge">Popular</div>
              <h3>Professional</h3>
              <p className="price">$29<span>/month</span></p>
              <ul className="features-list">
                <li>✓ All starter features</li>
                <li>✓ Priority support</li>
                <li>✓ Up to 100 users</li>
                <li>✓ Advanced analytics</li>
              </ul>
              <button className="btn btn-primary">Choose Plan</button>
            </div>
            <div className="pricing-card">
              <h3>Enterprise</h3>
              <p className="price">Custom</p>
              <ul className="features-list">
                <li>✓ Everything included</li>
                <li>✓ Dedicated support</li>
                <li>✓ Unlimited users</li>
                <li>✓ Custom integrations</li>
              </ul>
              <button className="btn btn-secondary">Contact Sales</button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <h2>Get in Touch</h2>
          <form className="contact-form" onSubmit={(e) => {
            e.preventDefault();
            alert('Thank you for your message! We\'ll get back to you soon.');
          }}>
            <div className="form-group">
              <input
                type="text"
                placeholder="Your Name"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                placeholder="Your Email"
                required
              />
            </div>
            <div className="form-group">
              <textarea
                placeholder="Your Message"
                rows={5}
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2024 Simple. All rights reserved.</p>
          <div className="footer-links">
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
