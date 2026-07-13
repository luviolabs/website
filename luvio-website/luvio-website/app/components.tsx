import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { Logo } from "./logo";

type Service = {
  title: string;
  copy: string;
  icon: string;
  tone: string;
};

type WorkItem = {
  eyebrow: string;
  title: string;
  result: string;
  problem: string;
  solution: string;
  image: string;
};

type BlogItem = {
  category: string;
  title: string;
  copy: string;
  date: string;
  time: string;
  image: string;
};

export const services: Service[] = [
  {
    title: "Growth Marketing",
    copy: "Performance-driven marketing strategies that translate directly into ROI and user acquisition.",
    icon: "↗",
    tone: "blue",
  },
  {
    title: "Business Consulting",
    copy: "Strategic advisory to help SMEs and startups navigate technical scaling and market entry.",
    icon: "▣",
    tone: "violet",
  },
  {
    title: "AI Automation",
    copy: "Streamline operations and drive efficiency using cutting-edge LLMs and custom AI agents.",
    icon: "✦",
    tone: "purple",
  },
  {
    title: "UI/UX Design",
    copy: "Premium digital products where aesthetic meets high-conversion user experience architecture.",
    icon: "✣",
    tone: "violet",
  },
  {
    title: "Mobile Apps",
    copy: "Native and cross-platform mobile experiences that users love and businesses grow from.",
    icon: "▯",
    tone: "blue",
  },
  {
    title: "Software Engineering",
    copy: "Scalable, enterprise-grade architectures and custom applications tailored to your business needs.",
    icon: "</>",
    tone: "purple",
  },
];

export const workItems: WorkItem[] = [
  {
    eyebrow: "E-commerce Brand",
    title: "Luxe Retail Engine",
    result: "+120% Revenue",
    problem: "High cart abandonment due to slow mobile performance.",
    solution: "Headless Shopify implementation with Next.js frontend.",
    image: "/assets/work-retail.png",
  },
  {
    eyebrow: "Social Tech",
    title: "Vibe Social App",
    result: "50,000+ Users",
    problem: "Scalability issues during viral growth spikes.",
    solution: "Global edge computing with real-time sync via WebSockets.",
    image: "/assets/work-social.png",
  },
  {
    eyebrow: "AI Platform",
    title: "InsightFlow AI",
    result: "-80% Op-Costs",
    problem: "Manual data entry for thousands of daily reports.",
    solution: "Custom LLM integration for automated data extraction.",
    image: "/assets/work-ai.png",
  },
  {
    eyebrow: "Healthcare",
    title: "Tele Health Plus",
    result: "99.99% Uptime",
    problem: "HIPAA compliance hurdles in video conferencing.",
    solution: "End-to-end encrypted RTC protocols with automated auditing.",
    image: "/assets/work-health.png",
  },
];

export const blogItems: BlogItem[] = [
  {
    category: "Software Engineering",
    title: "Micro-Frontends in 2024: Moving Beyond the Hype",
    copy: "Scaling large-scale web applications requires a modular approach. We analyze why most teams fail at implementation.",
    date: "May 14, 2024",
    time: "8 min read",
    image: "/assets/blog-micro.png",
  },
  {
    category: "Growth Strategy",
    title: "The CAC Trap: Scaling Without Losing Profitability",
    copy: "How to identify and mitigate diminishing returns in performance marketing as your SaaS scales.",
    date: "May 11, 2024",
    time: "6 min read",
    image: "/assets/blog-growth.png",
  },
  {
    category: "Product Design",
    title: "Emotional UI: Why Delight is No Longer Optional",
    copy: "Functional design is table stakes. To win in 2024, your product must evoke a distinct emotional response.",
    date: "May 09, 2024",
    time: "5 min read",
    image: "/assets/blog-design.png",
  },
];

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <div className="footer-brand">
          <Logo />
          <p>
            Leading global partner for high-performance software, AI automation,
            and strategic growth.
          </p>
          <div className="socials" aria-label="Social links">
            <SocialIcon type="linkedin" />
            <SocialIcon type="github" />
            <SocialIcon type="instagram" />
          </div>
        </div>
        <FooterColumn
          title="Services"
          links={["IT Solutions", "Business Consultancy", "Digital Marketing", "Investment Match-Making"]}
        />
        <FooterColumn title="Company" links={["About Us", "Our Work", "Careers", "Privacy Policy"]} />
        <div className="newsletter">
          <h3>Newsletter</h3>
          <p>Insights on AI and growth sent to your inbox.</p>
          <form className="newsletter-form">
            <input aria-label="Email address" placeholder="email@example.com" type="email" />
            <button aria-label="Subscribe" type="button">
              ↗
            </button>
          </form>
        </div>
      </div>
      <div className="shell footer-bottom">
        <span>© 2024 Luvio Labs. All rights reserved.</span>
        <span>Terms of Service&nbsp;&nbsp;&nbsp;&nbsp; Cookie Policy</span>
      </div>
    </footer>
  );
}

function FooterColumn({ title, links }: { title: string; links: string[] }) {
  return (
    <div className="footer-column">
      <h3>{title}</h3>
      {links.map((link) => (
        <a href="#" key={link}>
          {link}
        </a>
      ))}
    </div>
  );
}

export function Pill({ children }: { children: React.ReactNode }) {
  return <span className="pill">{children}</span>;
}

export function Hero({
  eyebrow,
  title,
  accent,
  copy,
  align = "center",
  actions,
}: {
  eyebrow: string;
  title: string;
  accent?: string;
  copy: string;
  align?: "center" | "left";
  actions?: ReactNode;
}) {
  return (
    <section className={`hero hero-${align}`}>
      <div className="shell">
        <Pill>{eyebrow}</Pill>
        <h1>
          {title}
          {accent ? (
            <>
              <br />
              <em>{accent}</em>
            </>
          ) : null}
        </h1>
        <p>{copy}</p>
        {actions ? <div className="hero-actions">{actions}</div> : null}
      </div>
    </section>
  );
}

export function ButtonRow() {
  return (
    <div className="button-row">
      <Link className="btn btn-primary" href="/contact">
        Book Your Consultation
      </Link>
      <Link className="btn btn-secondary" href="/contact">
        Schedule a Demo
      </Link>
    </div>
  );
}

export function ServiceCard({ service }: { service: Service }) {
  return (
    <article className="service-card">
      <span className={`icon-badge ${service.tone}`}>{service.icon}</span>
      <h3>{service.title}</h3>
      <p>{service.copy}</p>
      <a href="#">Learn More →</a>
    </article>
  );
}

export function ServicesGrid() {
  return (
    <div className="services-grid">
      {services.map((service) => (
        <ServiceCard key={service.title} service={service} />
      ))}
    </div>
  );
}

export function Process() {
  const steps = [
    ["01", "Discover", "Deep-dive into your business model and growth bottlenecks."],
    ["02", "Build", "Agile development and high-fidelity design execution."],
    ["03", "Launch", "Secure deployment with zero downtime and QA perfection."],
    ["04", "Scale", "Ongoing optimization, marketing, and feature expansion."],
  ];

  return (
    <section className="section process-section">
      <div className="shell">
        <h2 className="center-title">How we work</h2>
        <div className="process-line">
          {steps.map(([num, title, copy]) => (
            <div className="process-step" key={num}>
              <span>{num}</span>
              <h3>{title}</h3>
              <p>{copy}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Cta({
  title = "Ready to scale faster?",
  copy = "Stop juggling multiple agencies. Get the unfair advantage with a single technical and growth partner.",
  framed = false,
}: {
  title?: string;
  copy?: string;
  framed?: boolean;
}) {
  return (
    <section className={`cta-section ${framed ? "cta-framed" : ""}`}>
      <div className="shell">
        <div className="cta-card">
          <h2>{title}</h2>
          <p>{copy}</p>
          <ButtonRow />
          <div className="cta-notes">
            <span>● 15min Discovery</span>
            <span>● Custom Strategy</span>
            <span>● No Obligation</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export function HomePage() {
  return (
    <>
      <section className="home-hero">
        <div className="shell home-hero-grid">
          <div>
            <Pill>Business Growth Partner</Pill>
            <h1>
              Build Smarter.
              <br />
              <em>Grow Faster.</em>
            </h1>
            <p>
              Your One-Stop Technology Partner for Software, AI, Automation &
              Digital Growth. We build scalable products and accelerate revenue.
            </p>
            <div className="hero-actions">
              <Link className="btn btn-primary" href="/contact">
                Book Free Consultation →
              </Link>
              <Link className="btn btn-secondary" href="/work">
                View Case Studies
              </Link>
            </div>
            <div className="stats-row">
              <strong>50+<span>Projects Delivered</span></strong>
              <strong>12+<span>Industries Served</span></strong>
              <strong>98%<span>Satisfaction</span></strong>
            </div>
          </div>
          <div className="hero-visual">
            <Image src="/assets/home-hero.png" alt="Data analytics dashboard" fill priority sizes="(max-width: 900px) 100vw, 45vw" />
          </div>
        </div>
      </section>
      <section className="trust-strip">
        <div className="shell">
          <p>Trusted by ambitious businesses and teams</p>
          <div className="brand-logo-row" aria-label="Trusted company logos">
            <TrustedLogo brand="aws" />
            <TrustedLogo brand="shopify" />
            <TrustedLogo brand="meta" />
            <TrustedLogo brand="google" />
            <TrustedLogo brand="hubspot" />
            <TrustedLogo brand="microsoft" />
          </div>
        </div>
      </section>
      <section className="section">
        <div className="shell">
          <h2 className="center-title">Everything you need to scale</h2>
          <ServicesGrid />
        </div>
      </section>
      <section className="section credibility">
        <div className="shell credibility-grid">
          <div>
            <h2>Engineered for Credibility</h2>
            {["Accountable Execution", "Rapid Velocity", "Expert Experts"].map((item, index) => (
              <div className="mini-point" key={item}>
                <span>{index + 1}</span>
                <div>
                  <h3>{item}</h3>
                  <p>No more finger-pointing between agencies. We own the tech stack and the results.</p>
                </div>
              </div>
            ))}
          </div>
          <div className="metric-grid">
            <strong>150%<span>Avg. Client Revenue Lift</span></strong>
            <strong>24/7<span>Monitoring & Support</span></strong>
            <strong>12M+<span>Lines of Code Written</span></strong>
            <strong>4.9/5<span>Client Satisfaction</span></strong>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="shell chart-card">
          <div>
            <h2>Data-Driven Decision Making</h2>
            <p>We don’t guess. We analyze. Our proprietary dashboarding tools give you real-time visibility into your growth funnel, from initial click to final conversion.</p>
          </div>
          <div className="chart-lines" aria-hidden="true">
            <span />
            <span />
            <span />
            <span />
          </div>
        </div>
      </section>
      <section className="section">
        <div className="shell">
          <div className="section-heading split">
            <div>
              <h2>
                Real outcomes.
                <br />
                <em>Real growth.</em>
              </h2>
              <p>Case studies of performance and scale.</p>
            </div>
            <Link className="btn btn-secondary btn-small" href="/work">
              View All Work
            </Link>
          </div>
          <div className="case-grid">
            <CaseCard image="/assets/case-revenue.png" title="Revenue +120%" copy="Global E-commerce Brand" />
            <CaseCard image="/assets/case-6week.png" title="6 Week Launch" copy="Fintech SaaS Startup" />
            <CaseCard image="/assets/case-mobile.png" title="50k+ Downloads" copy="HealthTech Mobile App" />
          </div>
        </div>
      </section>
      <Process />
      <Testimonials />
      <Cta />
    </>
  );
}

function TrustedLogo({
  brand,
}: {
  brand: "aws" | "shopify" | "meta" | "google" | "hubspot" | "microsoft";
}) {
  const logos = {
    aws: (
      <svg viewBox="0 0 112 48" role="img" aria-label="AWS">
        <text x="17" y="27">aws</text>
        <path d="M22 35c18 7 39 7 57-2" />
        <path d="M75 33l7 2-5 5" />
      </svg>
    ),
    shopify: (
      <svg viewBox="0 0 144 48" role="img" aria-label="Shopify">
        <path d="M22 12h17l5 28H17l5-28Z" />
        <path d="M26 12c1-7 10-7 11 0" />
        <text x="54" y="30">shopify</text>
      </svg>
    ),
    meta: (
      <svg viewBox="0 0 122 48" role="img" aria-label="Meta">
        <path d="M18 30c7-18 17-18 27 0 10-18 20-18 27 0 6 11 17 7 16-4-1-15-14-20-25-6L45 30 27 20C16 6 3 11 2 26c-1 11 10 15 16 4Z" />
      </svg>
    ),
    google: (
      <svg viewBox="0 0 142 48" role="img" aria-label="Google">
        <text x="8" y="31">Google</text>
      </svg>
    ),
    hubspot: (
      <svg viewBox="0 0 154 48" role="img" aria-label="HubSpot">
        <circle cx="25" cy="24" r="8" />
        <circle cx="42" cy="15" r="4" />
        <circle cx="43" cy="34" r="4" />
        <path d="M32 20l7-4M32 28l8 5M25 16V8" />
        <text x="58" y="31">HubSpot</text>
      </svg>
    ),
    microsoft: (
      <svg viewBox="0 0 178 48" role="img" aria-label="Microsoft">
        <path d="M8 10h12v12H8zM23 10h12v12H23zM8 25h12v12H8zM23 25h12v12H23z" />
        <text x="48" y="31">Microsoft</text>
      </svg>
    ),
  };

  return <span className={`trusted-logo trusted-logo-${brand}`}>{logos[brand]}</span>;
}

function CaseCard({ image, title, copy }: { image: string; title: string; copy: string }) {
  return (
    <article className="case-card">
      <div className="case-image">
        <Image src={image} alt="" fill sizes="(max-width: 900px) 100vw, 30vw" />
      </div>
      <h3>{title}</h3>
      <p>{copy}</p>
    </article>
  );
}

function Testimonials() {
  const quotes = [
    ["James Wilson", "CTO, HealthTech", "Luvio Labs transformed our legacy platform into a modern powerhouse. Their AI automation saved us 30+ hours a week."],
    ["Sarah Chen", "Founder, Green AI", "Finally a partner that understands business first. They don’t just build; they actually help us grow revenue."],
    ["David Miller", "VP Growth, DataSync", "The speed of execution was incredible. We went from concept to a scaled product in under 3 months."],
  ];

  return (
    <section className="section testimonials">
      <div className="shell testimonial-grid">
        {quotes.map(([name, role, quote]) => (
          <article className="testimonial-card" key={name}>
            <div className="stars">★★★★★</div>
            <p>“{quote}”</p>
            <h3>{name}</h3>
            <span>{role}</span>
          </article>
        ))}
      </div>
    </section>
  );
}

export function ServicesPage() {
  return (
    <>
      <Hero
        eyebrow="Our Services"
        title="Engineering Growth"
        accent="Through Technology"
        copy="We build scalable systems that improve products and revenue. From concept to deployment, we are your strategic technology partner."
        actions={
          <>
            <Link className="btn btn-primary" href="/work">
              View Our Work
            </Link>
            <Link className="btn btn-secondary" href="/contact">
              Talk to an Expert
            </Link>
          </>
        }
      />
      <section className="section border-top">
        <div className="shell">
          <ServicesGrid />
        </div>
      </section>
      <Process />
      <section className="section stack-section">
        <div className="shell stack-grid">
          <div>
            <h2>Modern Stack for Modern Problems</h2>
            <p>We utilize the most reliable and high-performance technologies to ensure your project is built with longevity and scale in mind.</p>
            <div className="stack-tags">
              <span>⚛ React / Next.js</span>
              <span>⬢ Node.js</span>
              <span>aws AWS Cloud</span>
              <span>◖ AI Tools</span>
            </div>
          </div>
          <div className="code-window">
            <div className="window-dots"><span /><span /><span /></div>
            <code>{`01  import { engine } from "@luvio-labs/core"
02  // initialize growth architecture
03  const project = engine.create({
04    scale: "enterprise",
05    ai: true,
06    marketing: "optimized"
07  });
08  project.deploy();`}</code>
          </div>
        </div>
      </section>
      <Cta />
    </>
  );
}

export function WorkPage() {
  return (
    <>
      <Hero
        eyebrow="Case Studies"
        title="Real Impact."
        accent="Real Systems."
        copy="We bridge the gap between ambitious ideas and technical excellence. Explore how we've helped global brands scale through precision engineering and AI-driven design."
        align="left"
      />
      <section className="section featured-work">
        <div className="shell featured-grid">
          <div>
            <Pill>Featured Case Study</Pill>
            <h2>SaaS Infrastructure: Launch Accelerated</h2>
            <p>Streamlining complex internal workflows for a Fortune 500 Fintech partner.</p>
            <div className="problem-solution">
              <span><b>Problem</b>Outdated legacy systems causing 6-month product launch delays.</span>
              <span><b>Solution</b>Cloud-native microservices architecture with automated CI/CD.</span>
            </div>
            <div className="launch-metric"><strong>6w</strong><span><b>Launch Cycle Time</b>Reduced from 6 months to 6 weeks</span></div>
            <a className="text-link" href="#">View Detailed Case Study →</a>
          </div>
          <div className="featured-image">
            <Image src="/assets/work-featured.png" alt="SaaS analytics interface" fill sizes="(max-width: 900px) 100vw, 45vw" />
          </div>
        </div>
      </section>
      <section className="section">
        <div className="shell">
          <FilterPills items={["All Work", "Web Apps", "Mobile Apps", "AI Systems", "Marketing"]} />
          <div className="work-grid">
            {workItems.map((item) => (
              <article className="work-card" key={item.title}>
                <div className="work-card-top">
                  <span>{item.eyebrow}</span>
                  <b>{item.result}</b>
                </div>
                <h2>{item.title}</h2>
                <div className="problem-solution compact">
                  <span><b>Problem</b>{item.problem}</span>
                  <span><b>Solution</b>{item.solution}</span>
                </div>
                <div className="work-image">
                  <Image src={item.image} alt="" fill sizes="(max-width: 900px) 100vw, 45vw" />
                </div>
                <a className="text-link" href="#">Explore Project ›</a>
              </article>
            ))}
          </div>
        </div>
      </section>
      <Cta />
    </>
  );
}

function FilterPills({ items }: { items: string[] }) {
  return (
    <div className="filter-pills">
      {items.map((item, index) => (
        <button className={index === 0 ? "active" : ""} key={item} type="button">
          {item}
        </button>
      ))}
    </div>
  );
}

export function BlogsPage() {
  return (
    <>
      <Hero
        eyebrow="Editorial Archive"
        title="Insights for"
        accent="Modern Growth"
        copy="Engineering, AI, and business scaling strategies for the next generation of digital-first organizations."
      />
      <section className="section blog-feature">
        <div className="shell">
          <FilterPills items={["All Articles", "AI & Automation", "Software Engineering", "Growth Strategy", "Product Design"]} />
          <article className="blog-hero-card">
            <div className="blog-hero-image">
              <Image src="/assets/blog-featured.png" alt="" fill sizes="(max-width: 900px) 100vw, 50vw" />
            </div>
            <div>
              <span className="category">AI & Automation&nbsp;&nbsp; · &nbsp;&nbsp;12 min read</span>
              <h2>The Future of Autonomous Engineering: How AI Agents are Reshaping the SDLC</h2>
              <p>In the next 24 months, the role of the software engineer will shift from writing code to orchestrating complex AI agents. Here is our framework for the transition.</p>
              <div className="author">
                <span />
                <b>Julian Vance</b>
                <small>CTO at Luvio Labs</small>
              </div>
            </div>
          </article>
        </div>
      </section>
      <section className="section">
        <div className="shell">
          <div className="section-heading split">
            <h2>Latest Thinking</h2>
            <a className="text-link" href="#">View archive →</a>
          </div>
          <div className="blog-grid">
            {blogItems.map((item) => (
              <article className="blog-card" key={item.title}>
                <div className="blog-image">
                  <Image src={item.image} alt="" fill sizes="(max-width: 900px) 100vw, 30vw" />
                </div>
                <div className="blog-card-body">
                  <span className="category">{item.category}<small>{item.time}</small></span>
                  <h3>{item.title}</h3>
                  <p>{item.copy}</p>
                  <div><span>{item.date}</span><b>→</b></div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <Cta />
    </>
  );
}

export function CareersPage() {
  const values = [
    ["Ownership Culture", "We give you the autonomy to own your projects from start to finish. You define the path.", "↗", "blue"],
    ["Fast Execution", "Shipping is our lifeblood. We iterate quickly and value progress over perfection.", "✦", "purple"],
    ["Real Impact", "Your code and decisions affect millions of users. We solve problems that matter.", "◉", "green"],
    ["Learning Environment", "Continuous growth through mentoring, technical deep-dives, and challenging work.", "▰", "gold"],
  ];
  const roles = [
    ["Full-time", "Remote-friendly", "Software Engineer", "Build scalable backends and resilient distributed systems. You'll work with Go, Rust, and Kubernetes to handle massive traffic."],
    ["Product", "London / Remote", "UI/UX Designer", "Craft beautiful, intuitive interfaces for complex data workflows. We value clean aesthetics and functional excellence."],
    ["Deep Tech", "New York HQ", "AI Engineer", "Integrate LLMs and predictive models into core product features. Experience with PyTorch and productionizing ML is key."],
    ["Marketing", "Remote", "Growth Marketer", "Scale our user base through data-driven experiments and community initiatives. We're looking for a creative strategist."],
  ];

  return (
    <>
      <Hero
        eyebrow="We're Hiring"
        title="Build the Future"
        accent="With Us"
        copy="Join a high-performance team that builds and scales real systems. We move fast, take risks, and push the boundaries of what's possible."
        actions={
          <>
            <Link className="btn btn-primary" href="#open-roles">
              View Openings ↓
            </Link>
            <Link className="btn btn-secondary" href="/about">
              Learn More
            </Link>
          </>
        }
      />
      <section className="section">
        <div className="shell">
          <h2 className="center-title underline">Why Work With Us</h2>
          <div className="value-grid">
            {values.map(([title, copy, icon, tone]) => (
              <article className="value-card" key={title}>
                <span className={`icon-badge ${tone}`}>{icon}</span>
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section" id="open-roles">
        <div className="shell">
          <div className="section-heading split">
            <div>
              <h2>Open Roles</h2>
              <p>We&apos;re looking for world-class talent to help us redefine the digital infrastructure. Check out our current openings.</p>
            </div>
            <FilterPills items={["All Roles", "Engineering", "Design"]} />
          </div>
          <div className="roles-grid">
            {roles.map(([type, place, title, copy]) => (
              <article className="role-card" key={title}>
                <div><span>{type}</span><em>{place}</em></div>
                <h3>{title}</h3>
                <p>{copy}</p>
                <a href="#">Apply for Role ›</a>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section culture-section">
        <div className="shell culture-grid">
          <div className="culture-image">
            <Image src="/assets/careers-culture.png" alt="Luvio Labs collaborative office culture" fill sizes="(max-width: 900px) 100vw, 45vw" />
            <strong>Work that inspires.</strong>
            <span>Our London Innovation Hub</span>
          </div>
          <div>
            <h2>Our Culture</h2>
            {["Speed", "Innovation", "Collaboration", "Responsibility"].map((item) => (
              <div className="culture-point" key={item}>
                <span>✦</span>
                <div>
                  <h3>{item}</h3>
                  <p>We optimize for momentum. Making decisions quickly is better than perfect consensus.</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Cta />
    </>
  );
}

export function ContactPage() {
  return (
    <>
      <Hero
        eyebrow="Connect with us"
        title="Let’s Build Something"
        accent="Scalable"
        copy="Ready to transform your vision into a high-performance digital reality? Our team is standing by to help you scale."
      />
      <section className="section contact-section">
        <div className="shell contact-grid">
          <form className="contact-form">
            <h2>Send us a message</h2>
            <label>Full Name<input defaultValue="John Doe" /></label>
            <label>Email Address<input defaultValue="john@company.com" /></label>
            <label>Company<input defaultValue="Acme Inc." /></label>
            <label>Project Type<select defaultValue="SaaS Platform"><option>SaaS Platform</option><option>AI Automation</option><option>Mobile App</option></select></label>
            <div className="budget-row">
              {["$10k–25k", "$25k–50k", "$50k–100k", "$100k+"].map((budget, index) => (
                <button className={index === 2 ? "active" : ""} key={budget} type="button">{budget}</button>
              ))}
            </div>
            <button className="btn btn-primary submit" type="button">Launch Your Project</button>
          </form>
          <div className="contact-side">
            <div className="info-card">
              <h2>Direct Communication</h2>
              <Info icon="✉" label="Email Support" value="hello@luviolabs.com" />
              <Info icon="☎" label="Phone Line" value="+94 76 643 34 34" />
              <Info icon="⌖" label="Global Office" value="NO: 532/1, Medamandiya, Dadigamuwa. Kaduwela" />
            </div>
            <div className="info-card">
              <h2>Stay Connected</h2>
              <div className="round-socials">
                <SocialIcon type="dribbble" />
                <SocialIcon type="linkedin" />
                <SocialIcon type="github" />
                <SocialIcon type="instagram" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="shell booking-card">
          <div>
            <h2>Book a 1:1 Technical Consultation</h2>
            <p>Skip the back-and-forth emails. Choose a time that works for you and meet with our lead engineers to discuss technical requirements.</p>
            <ul>
              <li>30-minute discovery call</li>
              <li>Technical feasibility audit</li>
              <li>Initial roadmap estimation</li>
            </ul>
          </div>
          <Calendar />
        </div>
      </section>
      <Cta
        framed
        title="Ready to scale your next big idea?"
        copy="Don’t let technical debt slow you down. Partner with experts who build for the long-term success of your business."
      />
    </>
  );
}

function SocialIcon({
  type,
}: {
  type: "linkedin" | "github" | "instagram" | "dribbble";
}) {
  const paths = {
    linkedin: (
      <>
        <path d="M7.5 10.5v13" />
        <path d="M7.5 7.2v.1" />
        <path d="M13 23.5v-8.2" />
        <path d="M13 15.3c.9-1.4 2-2.1 3.6-2.1 2.7 0 4.4 1.8 4.4 5v5.3" />
      </>
    ),
    github: (
      <>
        <path d="M12 22.5c-5.4 1.6-5.4-2.7-7.5-3.2" />
        <path d="M18.5 25v-4.1c.1-1-.2-1.8-.8-2.5 2.7-.3 5.5-1.3 5.5-6A4.7 4.7 0 0 0 22 9.1c.1-.3.5-1.7-.2-3.4 0 0-1-.3-3.4 1.3a11.7 11.7 0 0 0-6.2 0C9.8 5.4 8.8 5.7 8.8 5.7c-.7 1.7-.3 3.1-.2 3.4a4.7 4.7 0 0 0-1.2 3.3c0 4.7 2.8 5.7 5.5 6-.5.5-.9 1.3-.8 2.5V25" />
      </>
    ),
    instagram: (
      <>
        <rect x="6" y="6" width="18" height="18" rx="5" />
        <circle cx="15" cy="15" r="4" />
        <path d="M20.5 9.5h.1" />
      </>
    ),
    dribbble: (
      <>
        <circle cx="15" cy="15" r="9" />
        <path d="M7.5 12.2c4.4 1 8.4.5 12.4-3" />
        <path d="M11.2 23.2c1.4-5.2 4.2-8.7 9.7-10.2" />
        <path d="M10 7.8c3.5 3.5 6.2 8.5 7.6 15.2" />
      </>
    ),
  };

  return (
    <span className="social-icon" aria-hidden="true">
      <svg viewBox="0 0 30 30">{paths[type]}</svg>
    </span>
  );
}

function Info({ icon, label, value }: { icon: string; label: string; value: string }) {
  return (
    <div className="info-row">
      <span>{icon}</span>
      <div>
        <small>{label}</small>
        <b>{value}</b>
      </div>
    </div>
  );
}

function Calendar() {
  const days = ["28", "29", "30", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"];
  return (
    <div className="calendar">
      <div className="calendar-top"><span>October 2024</span><div><button>‹</button><button>›</button></div></div>
      <div className="calendar-week"><span>MO</span><span>TU</span><span>WE</span><span>TH</span><span>FR</span><span>SA</span><span>SU</span></div>
      <div className="calendar-days">
        {days.map((day) => <span className={day === "6" ? "active" : day === "1" ? "selected" : ""} key={day}>{day}</span>)}
      </div>
      <small>Available Timeslots</small>
      <div className="times"><button>09:00 AM</button><button>11:30 AM</button><button>02:00 PM</button><button>04:30 PM</button></div>
    </div>
  );
}

export function AboutPage() {
  return (
    <>
      <Hero
        eyebrow="About Luvio Labs"
        title="Built for Teams"
        accent="That Move Fast"
        copy="We are a technical and growth partner for founders and operators who need scalable software, AI automation, and measurable execution."
      />
      <section className="section">
        <div className="shell credibility-grid">
          <div>
            <h2>One partner for product, automation, and growth.</h2>
            <p className="lead-copy">Luvio Labs combines senior engineering, conversion-focused design, and business strategy into one accountable delivery team.</p>
          </div>
          <div className="metric-grid">
            <strong>50+<span>Projects Delivered</span></strong>
            <strong>12+<span>Industries Served</span></strong>
            <strong>24/7<span>Support</span></strong>
            <strong>4.9/5<span>Client Satisfaction</span></strong>
          </div>
        </div>
      </section>
      <Process />
      <Cta />
    </>
  );
}
