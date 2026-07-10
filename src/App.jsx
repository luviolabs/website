import { useEffect, useState } from 'react';
import { Link, NavLink, Route, Routes, useLocation } from 'react-router-dom';

const moonIcon = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <path d="M21 12.8A9 9 0 1 1 11.2 3 7 7 0 0 0 21 12.8z" />
  </svg>
);

const sunIcon = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <circle cx="12" cy="12" r="4.5" />
    <path d="M12 2v2.5M12 19.5V22M4.93 4.93l1.77 1.77M17.3 17.3l1.77 1.77M2 12h2.5M19.5 12H22M4.93 19.07l1.77-1.77M17.3 6.7l1.77-1.77" />
  </svg>
);

function ThemeToggle({ theme, onToggle }) {
  return (
    <button className="icon-btn" aria-label="Toggle theme" title="Toggle theme" onClick={onToggle}>
      {theme === 'dark' ? moonIcon : sunIcon}
    </button>
  );
}

function Layout({ children }) {
  const [theme, setTheme] = useState('dark');
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const savedTheme = window.localStorage.getItem('luvio-theme');
    const initialTheme = savedTheme || 'dark';
    setTheme(initialTheme);
    document.documentElement.setAttribute('data-theme', initialTheme);
    document.body.setAttribute('data-theme', initialTheme);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    document.body.setAttribute('data-theme', theme);
    window.localStorage.setItem('luvio-theme', theme);
  }, [theme]);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  const toggleTheme = () => setTheme((current) => (current === 'dark' ? 'light' : 'dark'));

  return (
    <>
      <div className="bg-glow" />
      <header className="navbar">
        <div className="container">
          <Link to="/" className="logo" aria-label="Luvio Labs home">
            <img src="assests/Lockup Horizontal - Color on Dark.png" alt="Luvio Labs" className="logo-img logo-img-lockup" />
            <img src="assests/Mark - Gradient.png" alt="Luvio Labs" className="logo-img logo-img-mark" />
          </Link>
          <ul className={`nav-links${menuOpen ? ' open' : ''}`}>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/services">Services</NavLink></li>
            <li><NavLink to="/work">Work</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/blogs">Blogs</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
            <li><NavLink to="/careers">Careers</NavLink></li>
          </ul>
          <div className="nav-right">
            <ThemeToggle theme={theme} onToggle={toggleTheme} />
            <a href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ2x72QaNcN_HMzss85moSMFndIvRyNmczgcgCTWAfUFm8T0OdQCsGdwB8azt-wm2_hlDrJsXL6y" target="_blank" rel="noreferrer" className="btn btn-gradient btn-sm">Book Consultation</a>
            <button className="nav-toggle" aria-label="Menu" onClick={() => setMenuOpen((open) => !open)}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {children}

      <footer>
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <Link to="/" className="footer-logo" aria-label="Luvio Labs home">
                <img src="assests/Lockup Horizontal - Color on Dark.png" alt="Luvio Labs" className="footer-logo-img logo-img-lockup" />
                <img src="assests/Mark - Gradient.png" alt="Luvio Labs" className="footer-logo-img logo-img-mark" />
              </Link>
              <p>Leading global partner for high-performance software, AI automation, and strategic growth.</p>
              <div className="footer-social">
                <a className="icon-btn" href="#"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3zM9 9h3.8v1.7h.05c.53-.95 1.83-1.95 3.77-1.95C20.9 8.75 22 11 22 14.4V21h-4v-5.6c0-1.34-.02-3.06-1.86-3.06-1.87 0-2.16 1.46-2.16 2.96V21H9z" /></svg></a>
                <a className="icon-btn" href="#"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.49 0-.24-.01-1.04-.01-1.88-2.78.61-3.37-1.2-3.37-1.2-.46-1.18-1.11-1.5-1.11-1.5-.91-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.55 2.34 1.1 2.91.84.09-.66.35-1.1.63-1.36-2.22-.26-4.56-1.13-4.56-5.03 0-1.11.39-2.02 1.03-2.73-.1-.26-.45-1.31.1-2.72 0 0 .84-.27 2.75 1.05a9.3 9.3 0 0 1 5 0c1.91-1.32 2.75-1.05 2.75-1.05.55 1.41.2 2.46.1 2.72.64.71 1.03 1.62 1.03 2.73 0 3.91-2.35 4.77-4.58 5.02.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.6.69.49A10.26 10.26 0 0 0 22 12.25C22 6.58 17.52 2 12 2z" /></svg></a>
                <a className="icon-btn" href="#"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="2" y="2" width="20" height="20" rx="5" /><circle cx="12" cy="12" r="4.2" /><circle cx="17.3" cy="6.7" r="1" fill="currentColor" stroke="none" /></svg></a>
              </div>
            </div>
            <div className="footer-col">
              <h4>Services</h4>
              <ul>
                <li><Link to="/services">IT Solutions</Link></li>
                <li><Link to="/services">Business Consultancy</Link></li>
                <li><Link to="/services">Digital Marketing</Link></li>
                <li><Link to="/services">Investment Match-Making</Link></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Company</h4>
              <ul>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/work">Our Work</Link></li>
                <li><Link to="/careers">Careers</Link></li>
                <li><a href="#">Privacy Policy</a></li>
              </ul>
            </div>
            <div className="footer-col footer-newsletter">
              <h4>Newsletter</h4>
              <p>Insights on AI and growth sent to your inbox.</p>
              <form className="newsletter-form">
                <input type="email" placeholder="email@example.com" required />
                <button type="submit" aria-label="Subscribe"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M2 12 21 3l-6 18-4-8-9-1z" /></svg></button>
              </form>
            </div>
          </div>
          <div className="footer-bottom">
            <span>© 2024 Luvio Labs. All rights reserved.</span>
            <div className="footer-bottom-links">
              <a href="#">Terms of Service</a>
              <a href="#">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

function PageHero({ eyebrow, title, text, action }) {
  return (
    <section className="section-pad">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">{eyebrow}</span>
          <h2>{title}</h2>
          {text && <p>{text}</p>}
          {action}
        </div>
      </div>
    </section>
  );
}

function HomePage() {
  return (
    <main>
      <section className="hero">
        <div className="container hero-split">
          <div className="reveal hero-copy">
            <span className="eyebrow"><span className="dot" />Business Growth Partner</span>
            <h1 style={{ marginTop: 20 }}>Build Smarter.<br /><span className="grad-text">Grow Faster.</span></h1>
            <p className="lead">Your One-Stop Technology Partner for Software, AI, Automation &amp; Digital Growth. We build scalable products and accelerate revenue.</p>
            <div className="hero-actions">
              <a href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ2x72QaNcN_HMzss85moSMFndIvRyNmczgcgCTWAfUFm8T0OdQCsGdwB8azt-wm2_hlDrJsXL6y" target="_blank" rel="noreferrer" className="btn btn-gradient">Book Free Consultation <span className="icon-wrap"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 6l6 6-6 6" /></svg></span></a>
              <Link to="/work" className="btn btn-outline">View Case Studies</Link>
            </div>
            <div className="stats-row">
              <div className="stat"><b>50+</b><span>Projects Delivered</span></div>
              <div className="stat"><b>12+</b><span>Industries Served</span></div>
              <div className="stat"><b>98%</b><span>Satisfaction</span></div>
            </div>
          </div>
          <div className="hero-visual reveal">
            <div className="hero-visual-glow" />
            <video className="hero-video" autoPlay muted loop playsInline poster="https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=900&q=80">
              <source src="https://assets.mixkit.co/videos/preview/mixkit-team-working-on-a-project-3919-large.mp4" type="video/mp4" />
            </video>
            <div className="hero-float-card">
              <span className="eyebrow eyebrow-soft">Luxury Digital Growth</span>
              <strong>Premium launch experiences</strong>
              <p>Strategy, design, and engineering fused into one elevated partner.</p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <p className="trusted-caption" style={{ textAlign: 'center' }}>Trusted by ambitious businesses and teams</p>
          <div className="logos-row reveal">
            <span className="logo-item"><img src="assests/brand-logos/aws.jpg" alt="AWS" /></span>
            <span className="logo-item"><img src="assests/brand-logos/stripe.png" alt="Stripe" /></span>
            <span className="logo-item"><img src="assests/brand-logos/meta.jpg" alt="Meta" /></span>
            <span className="logo-item"><img src="assests/brand-logos/google.jpg" alt="Google" /></span>
            <span className="logo-item"><img src="assests/brand-logos/hubspot.jpg" alt="HubSpot" /></span>
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container">
          <div className="section-head reveal"><h2>Everything you need to scale</h2></div>
          <div className="grid-2 reveal services-grid">
            {[
              ['Growth Marketing', 'Performance-driven marketing strategies that translate directly into ROI and user acquisition.'],
              ['Business Consulting', 'Strategic advisory to help SMEs and startups navigate technical scaling and market entry.'],
              ['AI Automation', 'Streamline operations and drive efficiency using cutting-edge LLMs and custom AI agents.'],
              ['UI/UX Design', 'Premium digital products where aesthetic meets high-conversion user experience architecture.'],
              ['Mobile Apps', 'Native and cross-platform mobile experiences that users love and businesses grow from.'],
              ['Software Engineering', 'Scalable, enterprise-grade architectures and custom applications tailored for your business needs.']
            ].map(([title, desc]) => (
              <div className="card" key={title}>
                <div className="icon-tile tile-blue"><span className="icon-wrap"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M3 3v18h18" /><path d="M7 16l4-6 3 4 6-8" /></svg></span></div>
                <h4>{title}</h4>
                <p>{desc}</p>
                <Link to="/services">Learn More →</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad" style={{ paddingTop: 0 }}>
        <div className="container eng-split">
          <div className="reveal">
            <h2 style={{ fontSize: 30, marginBottom: 30 }}>Engineered for Credibility</h2>
            <ul className="eng-list">
              <li><div className="icon-tile tile-purple" style={{ width: 40, height: 40 }}><span className="icon-wrap"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M12 2 4 5v6c0 5 3.5 9 8 11 4.5-2 8-6 8-11V5z" /></svg></span></div><div><h4>Accountable Execution</h4><p>No more finger-pointing between agencies. We own the tech stack and the results.</p></div></li>
              <li><div className="icon-tile tile-pink" style={{ width: 40, height: 40 }}><span className="icon-wrap"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M13 2 3 14h7l-1 8 10-12h-7l1-8z" /></svg></span></div><div><h4>Rapid Velocity</h4><p>Our pre-built internal components allow us to deploy production-ready systems in weeks, not months.</p></div></li>
              <li><div className="icon-tile tile-green" style={{ width: 40, height: 40 }}><span className="icon-wrap"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="12" cy="12" r="10" /><path d="M2 12h20M12 2a15 15 0 0 1 0 20 15 15 0 0 1 0-20z" /></svg></span></div><div><h4>Export Experts</h4><p>We specialize in taking local SMEs to the global stage through localized digital strategies.</p></div></li>
            </ul>
          </div>
          <div className="stat-grid reveal">
            <div className="stat-card grad"><b>150%</b><span>Avg. Client Revenue Lift</span></div>
            <div className="stat-card"><b>24/7</b><span>Monitoring &amp; Support</span></div>
            <div className="stat-card grad"><b>12M+</b><span>Lines of Code Written</span></div>
            <div className="stat-card"><b>4.9/5</b><span>Client Satisfaction</span></div>
          </div>
        </div>
      </section>

      <section className="section-pad" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section-foot-link reveal">
            <div><h3>Real outcomes.<br /><span className="grad-text">Real growth.</span></h3><p style={{ fontSize: 13, marginTop: 8 }}>Case studies of performance and scale.</p></div>
            <Link to="/work" className="btn btn-outline btn-sm">View All Work</Link>
          </div>
          <div className="grid-3 reveal">
            <div className="project-card"><div className="project-media" style={{ background: 'radial-gradient(circle at 50% 100%, rgba(139,92,246,0.35), transparent 60%), #0d0d13' }} /> <h4 style={{ fontSize: 18 }} className="grad-text">Revenue +120%</h4><p style={{ fontSize: 13, marginTop: 6 }}>Global E-commerce Brand - Full digital transformation and automated supply chain management.</p></div>
            <div className="project-card"><div className="project-media" style={{ background: 'linear-gradient(135deg,#0f2418,#0d0d13)' }} /> <h4 style={{ fontSize: 18 }} className="grad-text">6 Week Launch</h4><p style={{ fontSize: 13, marginTop: 6 }}>Fintech SaaS Startup - Rapid prototyping and MVP development for market disruption.</p></div>
            <div className="project-card"><div className="project-media" style={{ background: 'linear-gradient(160deg,#e8e2f7,#c9bce8)' }} /> <h4 style={{ fontSize: 18 }} className="grad-text">50k+ Downloads</h4><p style={{ fontSize: 13, marginTop: 6 }}>HealthTech Mobile App - User-centric design and cross-platform mobile engineering.</p></div>
          </div>
        </div>
      </section>

      <section className="section-pad" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section-head reveal"><h2>Your Project in 6 Simple Steps</h2><p>From your first idea to a live product - here's how we bring your vision to life.</p></div>
          <div className="process-grid reveal">
            {['Discovery Call','Research & Strategy','Proposal & Planning','Design & Development','Launch & Deploy','Continuous Support'].map((title, index) => (
              <div className="process-step" key={title}><div className="step-num">0{index + 1}</div><h4>{title}</h4><p>We guide your team from concept to launch with clarity, execution, and measurable momentum.</p></div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section-head reveal"><h2>Social Media Marketing Packages</h2><p>End-to-end social media management from strategy to execution, built to grow visibility, engagement, trust, and leads.</p></div>
          <div className="package-grid reveal">
            <div className="package-card">
              <h3>Starter Package</h3>
              <span className="pkg-price">For brands that need consistency</span>
              <p>Perfect for startups, small businesses, and personal brands looking to establish a consistent online presence.</p>
              <ul className="package-list">
                <li>Facebook &amp; Instagram</li>
                <li>4–5 Static Posts / Month</li>
                <li>2–3 Reels / Month</li>
              </ul>
              <a href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ2x72QaNcN_HMzss85moSMFndIvRyNmczgcgCTWAfUFm8T0OdQCsGdwB8azt-wm2_hlDrJsXL6y" target="_blank" rel="noreferrer" className="btn btn-outline btn-block">Get Started</a>
            </div>
            <div className="package-card highlight">
              <h3>Booster Package</h3>
              <span className="pkg-price">For brands that want growth</span>
              <p>Great for growing brands seeking greater reach, engagement, and audience growth.</p>
              <ul className="package-list">
                <li>Facebook, Instagram &amp; TikTok</li>
                <li>8–10 Static Posts / Month</li>
                <li>4–6 Reels / Month</li>
              </ul>
              <a href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ2x72QaNcN_HMzss85moSMFndIvRyNmczgcgCTWAfUFm8T0OdQCsGdwB8azt-wm2_hlDrJsXL6y" target="_blank" rel="noreferrer" className="btn btn-gradient btn-block">Book a Consultation</a>
            </div>
            <div className="package-card">
              <h3>Scale Package</h3>
              <span className="pkg-price">For brands ready to scale</span>
              <p>Built for established businesses focused on building authority, generating demand, and increasing leads.</p>
              <ul className="package-list">
                <li>Facebook, Instagram, TikTok &amp; LinkedIn</li>
                <li>Up to 16 Static Posts / Month</li>
                <li>Up to 10 Reels / Month</li>
              </ul>
              <a href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ2x72QaNcN_HMzss85moSMFndIvRyNmczgcgCTWAfUFm8T0OdQCsGdwB8azt-wm2_hlDrJsXL6y" target="_blank" rel="noreferrer" className="btn btn-outline btn-block">Get a Free Consultation</a>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad" style={{ paddingTop: 0 }}>
        <div className="container grid-3 reveal">
          <div className="testimonial-card">
            <p>“Luvio Labs transformed our legacy platform into a modern powerhouse. Their AI automation set us up 30+ hours a week.”</p>
            <div className="testi-author"><div className="av" style={{ background: '#7c3aed' }}>JW</div><div><b>James Wilson</b><span>CTO, RevoDyne</span></div></div>
          </div>
          <div className="testimonial-card">
            <p>“Finally a partner that understands business first. They don't just build, they actually help us grow revenue.”</p>
            <div className="testi-author"><div className="av" style={{ background: '#5b7cfa' }}>SC</div><div><b>Sarah Chen</b><span>Founder, Bloom It</span></div></div>
          </div>
          <div className="testimonial-card">
            <p>“The speed of execution was incredible. We went from concept to a scaled product in under 3 months.”</p>
            <div className="testi-author"><div className="av" style={{ background: '#db2777' }}>DM</div><div><b>David Miller</b><span>VP Growth, Stratcap</span></div></div>
          </div>
        </div>
      </section>

      <section className="section-pad" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="cta-banner reveal">
            <h2>Ready to scale faster?</h2>
            <p>Stop juggling multiple agencies. Get the unfair advantage with a single technical and growth partner.</p>
            <div className="cta-actions">
              <a href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ2x72QaNcN_HMzss85moSMFndIvRyNmczgcgCTWAfUFm8T0OdQCsGdwB8azt-wm2_hlDrJsXL6y" target="_blank" rel="noreferrer" className="btn btn-gradient">Book Your Consultation</a>
              <a href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ2x72QaNcN_HMzss85moSMFndIvRyNmczgcgCTWAfUFm8T0OdQCsGdwB8azt-wm2_hlDrJsXL6y" target="_blank" rel="noreferrer" className="btn btn-outline">Schedule a Demo</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function ServicesPage() {
  return (
    <main>
      <PageHero
        eyebrow="Our Services"
        title="Engineering growth through technology"
        text="We build scalable systems that improve products and revenue. From concept to deployment, we are your strategic technology partner."
        action={<Link to="/work" className="btn btn-gradient">View Our Work</Link>}
      />
      <section className="section-pad">
        <div className="container grid-2 reveal" style={{ gridTemplateColumns: 'repeat(2, 1fr)', gap: 22 }}>
          <div className="card">
            <div className="icon-tile tile-blue">
              <span className="icon-wrap">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M3 3v18h18" />
                  <path d="M7 16l4-6 3 4 6-8" />
                </svg>
              </span>
            </div>
            <h4>Growth Marketing</h4>
            <p>Performance-driven marketing strategies that translate directly into ROI and user acquisition.</p>
          </div>
          <div className="card">
            <div className="icon-tile tile-purple">
              <span className="icon-wrap">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <rect x="2" y="7" width="20" height="14" rx="2" />
                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                </svg>
              </span>
            </div>
            <h4>Business Consulting</h4>
            <p>Strategic advisory to help SMEs and startups navigate technical scaling and market entry.</p>
          </div>
          <div className="card">
            <div className="icon-tile tile-pink">
              <span className="icon-wrap">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <rect x="7" y="7" width="10" height="10" rx="1" />
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <path d="M9 1v2M15 1v2M9 21v2M15 21v2M1 9h2M1 15h2M21 9h2M21 15h2" />
                </svg>
              </span>
            </div>
            <h4>AI Automation</h4>
            <p>Streamline operations and drive efficiency using cutting-edge LLMs and custom AI agents.</p>
          </div>
          <div className="card">
            <div className="icon-tile tile-amber">
              <span className="icon-wrap">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <circle cx="13.5" cy="6.5" r="0.5" fill="currentColor" />
                  <circle cx="17.5" cy="10.5" r="0.5" fill="currentColor" />
                  <circle cx="8.5" cy="7.5" r="0.5" fill="currentColor" />
                  <circle cx="6.5" cy="12.5" r="0.5" fill="currentColor" />
                  <path d="M12 2a10 10 0 1 0 0 20c1.1 0 2-.9 2-2 0-.5-.2-1-.5-1.4-.3-.4-.5-.9-.5-1.4 0-1.1.9-2 2-2h2.3c1.5 0 2.7-1.2 2.7-2.7C22 6.9 17.5 2 12 2z" />
                </svg>
              </span>
            </div>
            <h4>UI/UX Design</h4>
            <p>Premium digital products where aesthetic meets high-conversion user experience architecture.</p>
          </div>
          <div className="card">
            <div className="icon-tile tile-green">
              <span className="icon-wrap">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <rect x="6" y="2" width="12" height="20" rx="2" />
                  <path d="M11 18h2" />
                </svg>
              </span>
            </div>
            <h4>Mobile Apps</h4>
            <p>Native and cross-platform mobile experiences that users love and businesses grow from.</p>
          </div>
          <div className="card">
            <div className="icon-tile tile-blue">
              <span className="icon-wrap">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="m8 16-4-4 4-4M16 8l4 4-4 4" />
                </svg>
              </span>
            </div>
            <h4>Software Engineering</h4>
            <p>Scalable, enterprise-grade architectures and custom applications tailored for your business needs.</p>
          </div>
        </div>
      </section>

      <section className="section-pad" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section-head reveal"><h2>Your Project in 6 Simple Steps</h2><p>From your first idea to a live product - here's how we bring your vision to life.</p></div>
          <div className="process-grid reveal">
            {['Discovery Call','Research & Strategy','Proposal & Planning','Design & Development','Launch & Deploy','Continuous Support'].map((title, index) => (
              <div className="process-step" key={title}><div className="step-num">0{index + 1}</div><h4>{title}</h4><p>We guide your team from concept to launch with clarity, execution, and measurable momentum.</p></div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad" style={{ paddingTop: 0 }}>
        <div className="container stack-split">
          <div className="stack-text reveal">
            <h2>Modern stack for modern problems</h2>
            <p>We utilize the most reliable and high-performance technologies to ensure your project is built with longevity and scale in mind.</p>
            <div className="tech-grid">
              <div className="tech-chip">⚡ React / Vite</div>
              <div className="tech-chip">◯ Node.js</div>
              <div className="tech-chip">☁ AWS Cloud</div>
              <div className="tech-chip">○ AI Tools</div>
            </div>
          </div>
          <div className="code-window reveal">
            <div className="code-window-head">
              <div className="code-dots"><span style={{ background: '#f87171' }} /><span style={{ background: '#fbbf24' }} /><span style={{ background: '#34d399' }} /></div>
              <small>deployment-v2.0.config</small>
            </div>
            <div className="code-body">
              <pre>
                <code>
                  <span className="ln">01</span> <span className="code-kw">import</span> {'{'} engine {'}'} <span className="code-kw">from</span> <span className="code-str">'@luvio-labs/core'</span>
                  <br />
                  <span className="ln">02</span> <span className="code-com">// Initialize growth architecture</span>
                  <br />
                  <span className="ln">03</span> <span className="code-kw">const</span> project = <span className="code-fn">engine.create</span>({'{'}
                  <br />
                  <span className="ln">04</span> &nbsp;&nbsp;scale: <span className="code-str">'enterprise'</span>,
                  <br />
                  <span className="ln">05</span> &nbsp;&nbsp;ai: <span className="code-kw">true</span>,
                  <br />
                  <span className="ln">06</span> &nbsp;&nbsp;marketing: <span className="code-str">'optimized'</span>
                  <br />
                  <span className="ln">07</span> {'}'});
                  <br />
                  <span className="ln">08</span> <span className="code-fn">project.deploy</span>();
                </code>
              </pre>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function WorkPage() {
  return (
    <main>
      <PageHero
        eyebrow="Case Studies"
        title="Real impact. Real systems."
        text="We bridge the gap between ambitious ideas and technical excellence. Explore how we've helped global brands scale through precision engineering and AI-driven design."
        action={<Link to="/contact" className="btn btn-outline">Book a Consultation</Link>}
      />

      <section className="section-pad" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section-head reveal"><h2>Your Project in 6 Simple Steps</h2><p>From your first idea to a live product - here's how we bring your vision to life.</p></div>
          <div className="process-grid reveal">
            {['Discovery Call','Research & Strategy','Proposal & Planning','Design & Development','Launch & Deploy','Continuous Support'].map((title, index) => (
              <div className="process-step" key={title}><div className="step-num">0{index + 1}</div><h4>{title}</h4><p>We guide your team from concept to launch with clarity, execution, and measurable momentum.</p></div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section-head reveal"><h2>Social Media Marketing Packages</h2><p>End-to-end social media management from strategy to execution, built to grow visibility, engagement, trust, and leads.</p></div>
          <div className="package-grid reveal">
            {[{
              title: 'Starter Package',
              subtitle: 'For brands that need consistency',
              items: ['Facebook & Instagram', '4–5 Static Posts / Month', '2–3 Reels / Month'],
              variant: 'outline',
              button: 'Get Started'
            }, {
              title: 'Booster Package',
              subtitle: 'For brands that want growth',
              items: ['Facebook, Instagram & TikTok', '8–10 Static Posts / Month', '4–6 Reels / Month'],
              variant: 'highlight',
              button: 'Book a Consultation'
            }, {
              title: 'Scale Package',
              subtitle: 'For brands ready to scale',
              items: ['Facebook, Instagram, TikTok & LinkedIn', 'Up to 16 Static Posts / Month', 'Up to 10 Reels / Month'],
              variant: 'outline',
              button: 'Get a Free Consultation'
            }].map((pkg) => (
              <div className={`package-card${pkg.variant === 'highlight' ? ' highlight' : ''}`} key={pkg.title}>
                <h3>{pkg.title}</h3>
                <span className="pkg-price">{pkg.subtitle}</span>
                <p>{pkg.subtitle}</p>
                <ul className="package-list">
                  {pkg.items.map((item) => <li key={item}>{item}</li>)}
                </ul>
                <a href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ2x72QaNcN_HMzss85moSMFndIvRyNmczgcgCTWAfUFm8T0OdQCsGdwB8azt-wm2_hlDrJsXL6y" target="_blank" rel="noreferrer" className={`btn ${pkg.variant === 'highlight' ? 'btn-gradient' : 'btn-outline'} btn-block`}>{pkg.button}</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container">
          <div className="featured-tag reveal"><span className="icon-wrap"><svg viewBox="0 0 24 24" fill="currentColor"><path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01z" /></svg></span> Featured Case Study</div>
          <div className="featured-case reveal">
            <div className="featured-case-top">
              <div>
                <h2>SaaS infrastructure: launch accelerated</h2>
                <p>Streamlining complex internal workflows for a Fortune 500 fintech partner.</p>
                <div className="ps-row">
                  <div className="ps-box"><span className="label">Problem</span><p>Outdated legacy systems causing 6-month product launch delays.</p></div>
                  <div className="ps-box"><span className="label">Solution</span><p>Cloud-native microservices architecture with automated CI/CD.</p></div>
                </div>
                <div className="metric-box">
                  <b>6w</b>
                  <div className="metric-info"><b>Launch Cycle Time</b><span>Reduced from 6 months to 6 weeks</span></div>
                </div>
                <a href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ2x72QaNcN_HMzss85moSMFndIvRyNmczgcgCTWAfUFm8T0OdQCsGdwB8azt-wm2_hlDrJsXL6y" target="_blank" rel="noreferrer" className="view-case-link">Book a Consultation <span className="icon-wrap"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 6l6 6-6 6" /></svg></span></a>
              </div>
              <div className="case-media" />
            </div>
          </div>
          <div className="filter-row reveal" data-tabs data-tabs-scope="work">
            <button className="pill is-active" data-tab-target="all">All Work</button>
            <button className="pill" data-tab-target="web">Web Apps</button>
            <button className="pill" data-tab-target="mobile">Mobile Apps</button>
            <button className="pill" data-tab-target="ai">AI Systems</button>
            <button className="pill" data-tab-target="marketing">Marketing</button>
          </div>

          <div className="project-grid reveal">
            {[
              {
                title: 'Luxe Retail Engine',
                tag: 'E-commerce Brand',
                stat: '+120% Revenue',
                metadata: { problem: 'High cart abandonment due to slow mobile performance.', solution: 'Headless Shopify implementation with Next.js frontend.' },
                color: 'linear-gradient(160deg,#f6d98b,#e0b45c)'
              },
              {
                title: 'Vibe Social App',
                tag: 'Social Tech',
                stat: '50,000+ Users',
                metadata: { problem: 'Scalability issues during viral growth spikes.', solution: 'Global edge computing with real-time sync via WebSockets.' },
                color: 'radial-gradient(circle at 40% 50%, rgba(236,72,153,0.5), rgba(139,92,246,0.3) 50%, transparent 75%), #0d0d13'
              },
              {
                title: 'InsightFlow AI',
                tag: 'AI Platform',
                stat: '-80% Op-Costs',
                metadata: { problem: 'Manual data entry for thousands of daily reports.', solution: 'Custom LLM integration for automated data extraction.' },
                color: 'radial-gradient(circle at 30% 60%, rgba(59,130,246,0.4), transparent 60%), #0d0d13'
              },
              {
                title: 'Tele Health Plus',
                tag: 'Healthcare',
                stat: '99.99% Uptime',
                metadata: { problem: 'HIPAA compliance hurdles in video conferencing.', solution: 'End-to-end encrypted RTC protocols with automated auditing.' },
                color: 'radial-gradient(circle at 60% 40%, rgba(52,211,153,0.3), transparent 60%), #0d0d13'
              }
            ].map((project) => (
              <div className="project-card" key={project.title}>
                <div className="project-top"><div><span className="eyebrow-sm">{project.tag}</span><h4>{project.title}</h4></div><span className="stat-chip">{project.stat}</span></div>
                <div className="ps-mini"><div><span className="label">Problem</span><p>{project.metadata.problem}</p></div><div><span className="label">Solution</span><p>{project.metadata.solution}</p></div></div>
                <div className="project-media" style={{ background: project.color }} />
                <a href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ2x72QaNcN_HMzss85moSMFndIvRyNmczgcgCTWAfUFm8T0OdQCsGdwB8azt-wm2_hlDrJsXL6y" target="_blank" rel="noreferrer" className="explore-link">Discuss Your Project <span className="icon-wrap"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 6l6 6-6 6" /></svg></span></a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

function AboutPage() {
  return (
    <main>
      <PageHero
        eyebrow="Partnership First"
        title="A growth partner, not just a vendor"
        text="Most agencies build and leave. We build to grow. Luvio Labs is the bridge between world-class engineering and sustainable revenue growth."
        action={<Link to="/careers" className="btn btn-gradient">See openings</Link>}
      />

      <section className="section-pad">
        <div className="container problem-grid reveal">
          <div className="quote-card">
            <div>
              <blockquote>“We saw companies failing not because of their product, but because the gap between building and selling was too wide.”</blockquote>
              <cite>- The Founders</cite>
            </div>
          </div>
          <div className="problem-text">
            <h2>The Problem We Solve</h2>
            <p>For years, we watched founders struggle with <b>fragmented agencies</b>. One group would build a beautiful app, another would try to market it, and a third would manage the infrastructure. Nothing talked to each other.</p>
            <p>Data was lost, momentum died, and capital was wasted. We knew there had to be a better way.</p>
            <div className="highlight-box"><b>The Unified Model:</b> Luvio Labs was born from a simple thesis - engineering and growth are two sides of the same coin. We don't just ship code; we build the engine that drives your revenue.</div>
          </div>
        </div>
      </section>

      <section className="section-pad" style={{ paddingTop: 0 }}>
        <div className="container grid-2 reveal">
          <div className="card">
            <div className="icon-tile tile-purple"><span className="icon-wrap"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" /><path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" /><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" /><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" /></svg></span></div>
            <h3>Our Mission</h3>
            <p>To build scalable products and grow real revenue for the next generation of industry leaders. We measure success by our clients' bottom line, not just lines of code.</p>
          </div>
          <div className="card">
            <div className="icon-tile tile-blue"><span className="icon-wrap"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="12" cy="12" r="10" /><path d="M2 12h20M12 2a15 15 0 0 1 0 20 15 15 0 0 1 0-20z" /></svg></span></div>
            <h3>Our Vision</h3>
            <p>To make world-class technology and strategic growth expertise accessible globally, democratizing the tools needed to disrupt legacy industries.</p>
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container">
          <div className="section-head reveal"><h2>Built on foundation</h2><p>Our core values aren't slogans on a wall - they're the filters we use for every decision we make.</p></div>
          <div className="values-grid reveal">
            {[{
              title: 'Engineering Rigor',
              desc: 'We don’t cut corners. Quality isn’t a luxury; it’s our standard for every feature we ship.',
              icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="7" y="7" width="10" height="10" rx="1" /><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M9 1v2M15 1v2M9 21v2M15 21v2M1 9h2M1 15h2M21 9h2M21 15h2" /></svg>),
              color: 'tile-purple'
            }, {
              title: 'Transparency',
              desc: 'No black boxes. You have real-time access to our work, our wins, and our challenges.',
              icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" /></svg>),
              color: 'tile-blue'
            }, {
              title: 'Speed',
              desc: 'In SaaS, the fastest learner wins. We iterate quickly to find your market edge.',
              icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M13 2 3 14h7l-1 8 10-12h-7l1-8z" /></svg>),
              color: 'tile-pink'
            }, {
              title: 'Outcomes',
              desc: 'We value results over activity. If it doesn’t move the needle, we don’t build it.',
              icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" /></svg>),
              color: 'tile-blue'
            }, {
              title: 'Craft',
              desc: 'We take pride in the details. From API structure to UI micro-interactions.',
              icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M9 18h6M10 22h4" /><path d="M12 2a7 7 0 0 0-4 12.7c.6.5 1 1.3 1 2.3h6c0-1 .4-1.8 1-2.3A7 7 0 0 0 12 2z" /></svg>),
              color: 'tile-amber'
            }].map((card) => (
              <div className="card" key={card.title}><div className={`icon-tile ${card.color}`}><span className="icon-wrap">{card.icon}</span></div><h4>{card.title}</h4><p>{card.desc}</p></div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="team-head reveal"><div><h2>The minds behind the tech</h2><p>A global team of engineers, growth hackers, and product designers.</p></div><a href="/careers" className="btn btn-gradient">Join our team →</a></div>
          <div className="team-grid reveal">
            {[{
              name: 'Mr Janitha',
              role: 'Owner & Technical Lead',
              quote: 'Technology should feel seamless, reliable, and built to create real momentum for the people using it.',
              img: 'assests/mr janitha.png',
              color: '#7c3aed'
            }, {
              name: 'Mr Punsara',
              role: 'Head of Operations',
              quote: 'Strong operations turn ambitious ideas into consistent delivery and calm, confident execution.',
              img: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=80',
              color: '#5b7cfa'
            }, {
              name: 'Mr Imran',
              role: 'Head of Marketing',
              quote: 'Great marketing is about clarity, connection, and making the right story impossible to ignore.',
              img: 'assests/Mr imran.png',
              color: '#db2777'
            }].map((member) => (
              <div className="team-card" key={member.name} role="button" tabIndex="0">
                <div className="team-card-inner">
                  <div className="team-card-face team-card-front">
                    <div className="team-photo"><img src={member.img} alt={`Portrait of ${member.name}`} /></div>
                    <h4>{member.name}</h4>
                    <span>{member.role}</span>
                  </div>
                  <div className="team-card-face team-card-back">
                    <h4>{member.name}</h4>
                    <span>{member.role}</span>
                    <p>{member.quote}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

function BlogsPage() {
  return (
    <main>
      <PageHero
        eyebrow="Editorial Archive"
        title="Insights for modern growth"
        text="Engineering, AI, and business scaling strategies for the next generation of digital-first organizations."
        action={<Link to="/contact" className="btn btn-outline">Request a workshop</Link>}
      />

      <section className="section-pad" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="filter-row reveal" data-tabs data-tabs-scope="blog">
            {['All Articles','AI & Automation','Software Engineering','Growth Strategy','Product Design'].map((tab, index) => (
              <button key={tab} className={`pill${index === 0 ? ' is-active' : ''}`} data-tab-target={tab.toLowerCase().replace(/[^a-z]+/g, '')}>{tab}</button>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="featured-post reveal">
            <div className="featured-post-media"><img src="https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=1200&q=80" alt="Team reviewing AI automation workflow on a large screen" /></div>
            <div className="featured-post-body">
              <div className="post-meta"><span>AI & Automation</span><span className="dot-sep" /><span>12 min read</span></div>
              <h3>The future of autonomous engineering: how AI agents are reshaping the SDLC</h3>
              <p>In the next 24 months, the role of the software engineer will shift from writing code to orchestrating complex AI agents. Here is our framework for the transition.</p>
              <div className="post-author"><div className="av" style={{ background: 'linear-gradient(135deg,#7c3aed,#4338ca)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, fontWeight: 700, color: '#fff' }}>AD</div><div><b>agustin de luca</b></div></div>
              <a href="https://medium.com/@agusdeluca/the-autonomous-sdlc-how-ai-agents-are-restructuring-the-engineering-organization-c18edc01c29a" target="_blank" rel="noreferrer" className="btn btn-outline" style={{ marginTop: 20, width: 'max-content' }}>Read the Article</a>
            </div>
          </div>

          <div className="section-foot-link reveal"><h3>Latest Thinking</h3><a href="#" className="btn btn-outline">View archive <span className="icon-wrap"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 6l6 6-6 6" /></svg></span></a></div>

          <div className="blog-grid reveal">
            {[{
              title: 'Micro-Frontends in 2024: Moving beyond the hype',
              category: 'Software Engineering',
              readTime: '8 min read',
              image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80',
              link: 'https://medium.com/@adityajani1/staying-ahead-the-top-micro-frontend-frameworks-of-2024-d7e7026efa24',
              date: 'May 14, 2024'
            }, {
              title: 'The CAC trap: scaling without losing profitability',
              category: 'Growth Strategy',
              readTime: '6 min read',
              image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=80',
              link: 'https://www.linkedin.com/pulse/cac-trap-why-more-leads-wont-save-leaky-business-jeremiah-o-brian-lpgyf/',
              date: 'May 11, 2024'
            }, {
              title: 'Emotional UI: why delight is no longer optional',
              category: 'Product Design',
              readTime: '5 min read',
              image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=900&q=80',
              link: 'https://vizcomsolutions.com/blogs/signs-your-business-needs-a-website-redesign/',
              date: 'May 09, 2024'
            }, {
              title: '18 ways to integrate AI into sales and marketing',
              category: 'AI & Automation',
              readTime: '10 min read',
              image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80',
              link: 'https://www.forbes.com/councils/forbesbusinesscouncil/2024/04/30/18-ways-to-integrate-ai-into-sales-and-marketing/',
              date: 'Apr 30, 2024'
            }, {
              title: 'SEO in 2026: the fundamentals that still matter',
              category: 'SEO & Growth',
              readTime: '7 min read',
              image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80',
              link: 'https://business.adobe.com/blog/seo-in-2026-fundamentals',
              date: 'Apr 29, 2024'
            }, {
              title: 'The autonomous SDLC: how AI agents are restructuring engineering',
              category: 'AI Engineering',
              readTime: '9 min read',
              image: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?auto=format&fit=crop&w=900&q=80',
              link: 'https://medium.com/@agusdeluca/the-autonomous-sdlc-how-ai-agents-are-restructuring-the-engineering-organization-c18edc01c29a',
              date: 'Apr 24, 2024'
            }].map((post) => (
              <div className="blog-card" key={post.title}>
                <div className="blog-card-media"><img src={post.image} alt={post.title} /></div>
                <div className="blog-card-body">
                  <div className="post-meta"><span>{post.category}</span><span>{post.readTime}</span></div>
                  <h4>{post.title}</h4>
                  <p>{post.date === 'Apr 24, 2024' ? 'Organizations are beginning to shift from human-only delivery to AI-assisted and AI-orchestrated execution.' : post.title}</p>
                  <div className="blog-card-foot"><span>{post.date}</span><a href={post.link} target="_blank" rel="noreferrer" className="icon-wrap"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 6l6 6-6 6" /></svg></a></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

function ContactPage() {
  return (
    <main>
      <PageHero
        eyebrow="Connect with us"
        title="Let's build something scalable"
        text="Ready to transform your vision into a high-performance digital reality? Our team is standing by to help you scale."
        action={<a href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ2x72QaNcN_HMzss85moSMFndIvRyNmczgcgCTWAfUFm8T0OdQCsGdwB8azt-wm2_hlDrJsXL6y" target="_blank" rel="noreferrer" className="btn btn-gradient">Launch Your Project</a>}
      />

      <section className="section-pad" style={{ paddingTop: 20 }}>
        <div className="container contact-grid">
          <div className="form-card reveal">
            <h3>Send us a message</h3>
            <form className="contact-form">
              <div className="field-row">
                <div className="field"><label>Full Name</label><input type="text" placeholder="John Doe" required /></div>
                <div className="field"><label>Email Address</label><input type="email" placeholder="john@company.com" required /></div>
              </div>
              <div className="field-row">
                <div className="field"><label>Company</label><input type="text" placeholder="Acme Inc." /></div>
                <div className="field"><label>Project Type</label><select><option>SaaS Platform</option><option>Mobile App</option><option>AI Automation</option><option>Digital Marketing</option></select></div>
              </div>
              <div className="field" style={{ marginBottom: 14 }}><label>Budget Range</label></div>
              <div className="choice-row" data-choice-group>
                {['$10k-25k','$25k-50k','$50k-100k','$100k+'].map((option, index) => (
                  <div key={option} className={`choice${index === 2 ? ' is-active' : ''}`} data-choice>{option}</div>
                ))}
              </div>
              <button type="submit" className="btn btn-gradient btn-block">Launch Your Project</button>
            </form>
          </div>

          <div>
            <div className="info-card reveal">
              <h3>Direct Communication</h3>
              {[{
                label: 'Email Support',
                value: 'hello@luviolabs.com',
                href: 'mailto:hello@luviolabs.com',
                icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m2 6 10 7 10-7"/></svg>)
              }, {
                label: 'Phone Line',
                value: '+94 76 643 34 34',
                href: 'https://api.whatsapp.com/send/?phone=94766433434&text&type=phone_number&app_absent=0',
                icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.1-8.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .3 2 .7 3a2 2 0 0 1-.4 2.1L8 10.1a16 16 0 0 0 6 6l1.3-1.4a2 2 0 0 1 2.1-.4c1 .4 2 .6 3 .7a2 2 0 0 1 1.6 2z"/></svg>)
              }, {
                label: 'Global Office',
                value: 'NO: 532/11, Medamandiya, Dadigamuwa. Kaduwela',
                href: '#',
                icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M21 10c0 7-9 12-9 12s-9-5-9-12a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>)
              }].map((row) => (
                <div className="info-row" key={row.label}>
                  <div className="icon-tile tile-purple" style={{ width: 38, height: 38, marginBottom: 0 }}><span className="icon-wrap">{row.icon}</span></div>
                  <div><span className="label">{row.label}</span>{row.href === '#' ? <span className="value">{row.value}</span> : <a className="value" href={row.href} target="_blank" rel="noreferrer">{row.value}</a>}</div>
                </div>
              ))}
            </div>
            <div className="info-card reveal" style={{ marginBottom: 0 }}>
              <h3>Stay Connected</h3>
              <div className="social-row">
                <a className="icon-btn" href="https://api.whatsapp.com/send/?phone=94766433434&text&type=phone_number&app_absent=0" target="_blank" rel="noreferrer"><span className="icon-wrap"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15 15 0 0 1 0 20 15 15 0 0 1 0-20z"/></svg></span></a>
                <a className="icon-btn" href="mailto:hello@luviolabs.com"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3zM9 9h3.8v1.7h.05c.53-.95 1.83-1.95 3.77-1.95C20.9 8.75 22 11 22 14.4V21h-4v-5.6c0-1.34-.02-3.06-1.86-3.06-1.87 0-2.16 1.46-2.16 2.96V21H9z"/></svg></a>
                <a className="icon-btn" href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ2x72QaNcN_HMzss85moSMFndIvRyNmczgcgCTWAfUFm8T0OdQCsGdwB8azt-wm2_hlDrJsXL6y" target="_blank" rel="noreferrer"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4.2"/><circle cx="17.3" cy="6.7" r="1" fill="currentColor" stroke="none"/></svg></a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad" style={{ paddingTop: 0 }}>
        <div className="container consult-split">
          <div className="consult-text reveal">
            <h3>Book a 1:1 technical consultation</h3>
            <p>Skip the back-and-forth emails. Choose a time that works for you and meet with our lead engineers to discuss technical requirements.</p>
            <ul>
              <li><span className="icon-wrap"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 6 9 17l-5-5"/></svg></span> 30-minute discovery call</li>
              <li><span className="icon-wrap"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 6 9 17l-5-5"/></svg></span> Technical feasibility audit</li>
              <li><span className="icon-wrap"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 6 9 17l-5-5"/></svg></span> Initial roadmap estimation</li>
            </ul>
          </div>
          <div className="calendar-card reveal">
            <div className="calendar-head"><h4>October 2024</h4><div className="cal-nav"><button>&lsaquo;</button><button>&rsaquo;</button></div></div>
            <div className="cal-grid">
              {['MO','TU','WE','TH','FR','SA','SU'].map((day) => <div key={day} className="cal-dow">{day}</div>)}
              {['28','29','30','1','2','3','4','5','6','7','8','9','10','11'].map((day, idx) => (
                <div key={day} className={`cal-day${['28','29','30'].includes(day) ? ' is-disabled' : ''}${day === '6' ? ' is-selected' : ''}`} data-day>{day}</div>
              ))}
            </div>
            <div className="slots-label">Available Timeslots</div>
            <div className="slots-grid">
              {['09:00 AM','11:30 AM','02:00 PM','04:30 PM'].map((slot) => <div key={slot} className="slot" data-slot>{slot}</div>)}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function CareersPage() {
  return (
    <main>
      <PageHero
        eyebrow="We're Hiring"
        title="Build the future with us"
        text="Join a high-performance team that builds and scales real systems. We move fast, take risks, and push the boundaries of what's possible."
        action={<a href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ2x72QaNcN_HMzss85moSMFndIvRyNmczgcgCTWAfUFm8T0OdQCsGdwB8azt-wm2_hlDrJsXL6y" target="_blank" rel="noreferrer" className="btn btn-gradient">View Openings</a>}
      />

      <section className="section-pad" id="why-work">
        <div className="container">
          <div className="section-head reveal"><h2>Why work with us</h2><p>We’re looking for world-class talent to help us redefine the digital infrastructure. Check out our current openings.</p></div>
          <div className="grid-4 reveal">
            {[{
              title: 'Ownership Culture',
              desc: 'We give you the autonomy to own your projects from start to finish. You define the path.',
              icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M13 2 3 14h7l-1 8 10-12h-7l1-8z"/></svg>),
              color: 'tile-purple'
            }, {
              title: 'Fast Execution',
              desc: 'Shipping is our lifeblood. We iterate quickly and value progress over perfection.',
              icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M9 18h6M10 22h4"/><path d="M12 2a7 7 0 0 0-4 12.7c.6.5 1 1.3 1 2.3h6c0-1 .4-1.8 1-2.3A7 7 0 0 0 12 2z"/></svg>),
              color: 'tile-pink'
            }, {
              title: 'Real Impact',
              desc: 'Your code and decisions affect millions of users. We solve problems that matter.',
              icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M22 10 12 5 2 10l10 5 10-5z"/><path d="M6 12v5c0 1 3 3 6 3s6-2 6-3v-5"/></svg>),
              color: 'tile-green'
            }, {
              title: 'Learning Environment',
              desc: 'Continuous growth through mentoring, technical deep-dives, and challenging work.',
              icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M22 10 12 5 2 10l10 5 10-5z"/><path d="M6 12v5c0 1 3 3 6 3s6-2 6-3v-5"/></svg>),
              color: 'tile-amber'
            }].map((card) => (
              <div className="card" key={card.title}><div className={`icon-tile ${card.color}`}><span className="icon-wrap">{card.icon}</span></div><h4>{card.title}</h4><p>{card.desc}</p></div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad" id="open-roles">
        <div className="container">
          <div className="section-foot-link reveal" style={{ alignItems: 'flex-start' }}>
            <div><h3>Open Roles</h3><p>We're looking for world-class talent to help us redefine the digital infrastructure. Check out our current openings.</p></div>
            <div className="filter-row" style={{ marginBottom: 0 }} data-tabs data-tabs-scope="roles">
              {['All Roles','Engineering','Design'].map((tab, index) => (
                <button key={tab} className={`pill${index === 0 ? ' is-active' : ''}`} data-tab-target={tab.toLowerCase().replace(/[^a-z]+/g, '')}>{tab}</button>
              ))}
            </div>
          </div>
          <div className="grid-2 reveal">
            {[{
              title: 'Software Engineer',
              tag: 'Full-time',
              meta: 'Remote-friendly',
              desc: 'Build scalable backends and resilient distributed systems. You’ll work with Go, Rust, and Kubernetes to handle massive traffic.',
              link: 'https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ2x72QaNcN_HMzss85moSMFndIvRyNmczgcgCTWAfUFm8T0OdQCsGdwB8azt-wm2_hlDrJsXL6y'
            }, {
              title: 'UI/UX Designer',
              tag: 'Product',
              meta: 'London / Remote',
              desc: 'Craft beautiful, intuitive interfaces for complex data workflows. We value clean aesthetics and functional excellence.',
              link: 'https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ2x72QaNcN_HMzss85moSMFndIvRyNmczgcgCTWAfUFm8T0OdQCsGdwB8azt-wm2_hlDrJsXL6y'
            }, {
              title: 'AI Engineer',
              tag: 'Deep Tech',
              meta: 'New York HQ',
              desc: 'Integrate LLMs and predictive models into core product features. Experience with PyTorch and productionizing ML is key.',
              link: 'https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ2x72QaNcN_HMzss85moSMFndIvRyNmczgcgCTWAfUFm8T0OdQCsGdwB8azt-wm2_hlDrJsXL6y'
            }, {
              title: 'Growth Marketer',
              tag: 'Marketing',
              meta: 'Remote',
              desc: 'Scale our user base through data-driven experiments and community initiatives. We’re looking for a creative strategist.',
              link: '/contact'
            }].map((job) => (
              <div className="job-card" key={job.title}>
                <div className="job-top"><span className="job-tag" style={{ background: 'rgba(91,124,250,0.15)', color: '#a5c0ff' }}>{job.tag}</span><span>{job.meta}</span></div>
                <h4>{job.title}</h4>
                <p>{job.desc}</p>
                {job.link.startsWith('/') ? <Link to={job.link} className="btn btn-outline btn-block">Apply for Role <span className="icon-wrap"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 6l6 6-6 6" /></svg></span></Link> : <a href={job.link} target="_blank" rel="noreferrer" className="btn btn-outline btn-block">Apply for Role <span className="icon-wrap"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 6l6 6-6 6" /></svg></span></a>}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad" style={{ paddingTop: 0 }}>
        <div className="container culture-split">
          <div className="culture-media reveal"><div><strong>Work that inspires.</strong><span>Our London Innovation Hub</span></div></div>
          <div className="reveal">
            <h2>Our culture</h2>
            <ul className="culture-list">
              {[{
                title: 'Speed',
                desc: 'We optimize for momentum. Making decisions quickly is better than perfect consensus.',
                color: '#5b7cfa'
              }, {
                title: 'Innovation',
                desc: 'We challenge the status quo every day. Innovation isn’t a buzzword here, it’s our survival.',
                color: '#fbbf24'
              }, {
                title: 'Collaboration',
                desc: 'No silos. We work across functions to deliver the best possible outcome for our users.',
                color: '#a855f7'
              }, {
                title: 'Responsibility',
                desc: 'We take deep responsibility for our work and its impact on the world around us.',
                color: '#22c55e'
              }].map((item) => (
                <li key={item.title}><div className="icon-tile" style={{ width: 40, height: 40, background: item.color }}><span className="icon-wrap"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/></svg></span></div><div><h4>{item.title}</h4><p>{item.desc}</p></div></li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section-pad" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="cta-banner reveal">
            <h2>Ready to scale faster?</h2>
            <p>Stop juggling multiple agencies. Get the unfair advantage with a single technical and growth partner.</p>
            <div className="cta-actions">
              <a href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ2x72QaNcN_HMzss85moSMFndIvRyNmczgcgCTWAfUFm8T0OdQCsGdwB8azt-wm2_hlDrJsXL6y" target="_blank" rel="noreferrer" className="btn btn-gradient">Book Your Consultation</a>
              <a href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ2x72QaNcN_HMzss85moSMFndIvRyNmczgcgCTWAfUFm8T0OdQCsGdwB8azt-wm2_hlDrJsXL6y" target="_blank" rel="noreferrer" className="btn btn-outline">Schedule a Demo</a>
            </div>
            <div className="cta-meta">
              <span><span className="icon-wrap"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 6 9 17l-5-5"/></svg></span> 15min Discovery</span>
              <span><span className="icon-wrap"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 6 9 17l-5-5"/></svg></span> Custom Strategy</span>
              <span><span className="icon-wrap"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 6 9 17l-5-5"/></svg></span> No Obligation</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/index.html" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/services.html" element={<ServicesPage />} />
        <Route path="/work" element={<WorkPage />} />
        <Route path="/work.html" element={<WorkPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/about.html" element={<AboutPage />} />
        <Route path="/blogs" element={<BlogsPage />} />
        <Route path="/blogs.html" element={<BlogsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/contact.html" element={<ContactPage />} />
        <Route path="/careers" element={<CareersPage />} />
        <Route path="/careers.html" element={<CareersPage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </Layout>
  );
}
