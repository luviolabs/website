"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, type ReactNode } from "react";
import { Logo } from "./logo";
import { ContinuousStat } from "./components/continuous-stat";
import { blogItems as blogPosts } from "./blogs/data";
import { jobOpenings, getWhatsAppApplyLink } from "../data/careers";
import { sendContactForm } from "./lib/emailjs";

const bookingUrl = "https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ2x72QaNcN_HMzss85moSMFndIvRyNmczgcgCTWAfUFm8T0OdQCsGdwB8azt-wm2_hlDrJsXL6y";
const whatsappUrl = "https://api.whatsapp.com/send/?phone=94766433434&text&type=phone_number&app_absent=0";
const emailAddress = "hello@luviolabs.com";
const emailHref = `mailto:${emailAddress}?subject=Project%20Inquiry`;

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

export const services: Service[] = [
  {
    title: "360 Digital Marketing & Growth Marketing",
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
    title: "Website Development",
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

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell footer-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">

        <div className="footer-brand">
          <Logo />
          <p>
            Leading global partner for high-performance software, AI automation,
            and strategic growth.
          </p>
          <div className="socials" aria-label="Social links">
            <a href="https://linkedin.com/company/luviolabs" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><SocialIcon type="linkedin" /></a>
            <a href="https://github.com/luviolabs" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><SocialIcon type="github" /></a>
            <a href="https://instagram.com/luviolabs" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><SocialIcon type="instagram" /></a>
          </div>
        </div>
        <FooterColumn
          title="Services"
          links={[
            { label: "IT Solutions", href: "/services" },
            { label: "Business Consultancy", href: "/services" },
            { label: "Digital Marketing", href: "/services" },
            { label: "Investment Match-Making", href: "/services" },
          ]}
        />
        <FooterColumn
          title="Company"
          links={[
            { label: "About Us", href: "/about" },
            { label: "Our Work", href: "/work" },
            { label: "Careers", href: "/careers" },
            { label: "Privacy Policy", href: "/privacy" },
          ]}
        />
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
        <span>
          <a href="/terms">Terms of Service</a>&nbsp;&nbsp;&nbsp;&nbsp;
          <a href="/privacy">Cookie Policy</a>
        </span>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div className="footer-column">
      <h3>{title}</h3>
      {links.map((link) => (
        <a href={link.href} key={link.label}>
          {link.label}
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
      <a className="btn btn-primary" href={bookingUrl} target="_blank" rel="noopener noreferrer">
        Book Your Consultation
      </a>
      <a className="btn btn-secondary" href={whatsappUrl} target="_blank" rel="noopener noreferrer">
        Chat on WhatsApp
      </a>
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
    <div className="services-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
      {services.map((service) => (
        <ServiceCard key={service.title} service={service} />
      ))}
    </div>
  );
}


export function Process() {
  const steps = [
    ["01", "Discovery Call", "Understand your goals, ideas, and business needs."],
    ["02", "Research & Strategy", "Analyze your market and create the right plan."],
    ["03", "Proposal & Planning", "Define scope, timeline, and project details."],
    ["04", "Design & Development", "Design and build your solution with regular updates."],
    ["05", "Launch & Deploy", "Test, launch, and ensure everything runs smoothly."],
    ["06", "Continuous Support", "Provide ongoing updates, maintenance, and growth support."],
  ];

  return (
    <section className="section process-section">
      <div className="shell">
        <h2 className="center-title">Your Project in 6 Simple Steps</h2>
        <p className="section-intro">From idea to launch, we guide you through every step.</p>
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
          <div className="hero-actions">
            <a className="btn btn-primary" href={bookingUrl} target="_blank" rel="noopener noreferrer">
              Book a Consultation
            </a>
            <a className="btn btn-secondary" href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              Message on WhatsApp
            </a>
          </div>
          <div className="cta-notes">
            <a href={emailHref}>Email Us</a>
            <span>● 15min Discovery</span>
            <span>● Custom Strategy</span>
            <span>● No Obligation</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function SocialMediaPackagesSection() {
  const packages = [
    {
      name: "Starter Package",
      tier: "For Consistency",
      copy: "For brands that need consistency across their online presence.",
      platforms: "Facebook, Instagram",
      includes: ["4–5 static posts/month", "2–3 reels/month", "Brand voice development", "Caption writing"],
      bestFor: "Startups and small businesses building trust online.",
    },
    {
      name: "Booster Package",
      tier: "For Growth",
      copy: "For brands that want more reach, engagement, and audience growth.",
      platforms: "Facebook, Instagram, TikTok",
      includes: ["8–10 static posts/month", "4–6 reels/month", "Messaging strategy", "Offer positioning"],
      bestFor: "Growing brands that want a stronger digital presence.",
    },
    {
      name: "Scale Package",
      tier: "For Authority",
      copy: "For brands ready to scale and generate demand with a full campaign engine.",
      platforms: "Facebook, Instagram, TikTok, LinkedIn",
      includes: ["Up to 16 static posts/month", "Up to 10 reels/month", "Full GTM planning", "Lead generation content"],
      bestFor: "Established businesses focused on authority and lead generation.",
    },
  ];

  return (
    <section className="section">
      <div className="shell">
        <div className="section-heading split">
          <div>
            <Pill>Marketing Services</Pill>
            <h2>Social Media Marketing Packages</h2>
            <p>End-to-end social media management from strategy to execution, built to grow visibility, engagement, trust, and leads.</p>
          </div>
          <a className="btn btn-secondary btn-small" href={bookingUrl} target="_blank" rel="noopener noreferrer">
            Get a Free Consultation
          </a>
        </div>
        <div className="package-grid">
          {packages.map((pkg) => (
            <article className="package-card" key={pkg.name}>
              <div className="package-card-top">
                <span className="package-tier">{pkg.tier}</span>
                <h3>{pkg.name}</h3>
                <p>{pkg.copy}</p>
              </div>
              <div className="package-details">
                <div>
                  <strong>Platforms</strong>
                  <span>{pkg.platforms}</span>
                </div>
                <div>
                  <strong>What’s Included</strong>
                  <ul>
                    {pkg.includes.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <strong>Best For</strong>
                  <span>{pkg.bestFor}</span>
                </div>
              </div>
              <a className="btn btn-primary" href={bookingUrl} target="_blank" rel="noopener noreferrer">
                Choose {pkg.name}
              </a>
            </article>
          ))}
        </div>
        <div className="package-comparison">
          <div className="package-row package-row-head">
            <span>Feature</span>
            <span>Starter</span>
            <span>Booster</span>
            <span>Scale</span>
          </div>
          <div className="package-row">
            <span>Platforms</span>
            <span>Facebook, Instagram</span>
            <span>Facebook, Instagram, TikTok</span>
            <span>Facebook, Instagram, TikTok, LinkedIn</span>
          </div>
          <div className="package-row">
            <span>Static Posts / Month</span>
            <span>4–5</span>
            <span>8–10</span>
            <span>Up to 16</span>
          </div>
          <div className="package-row">
            <span>Reels / Month</span>
            <span>2–3</span>
            <span>4–6</span>
            <span>Up to 10</span>
          </div>
          <div className="package-row">
            <span>Main Outcome</span>
            <span>Consistency & Trust</span>
            <span>Reach & Engagement</span>
            <span>Authority, Demand & Leads</span>
          </div>
        </div>
        <div className="cta-notes package-cta-links">
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">Chat on WhatsApp</a>
          <a href={emailHref}>Email Us</a>
        </div>
      </div>
    </section>
  );
}

export function HomePage() {
  return (
    <>
      <section className="home-hero">
        <div className="shell home-hero-grid grid grid-cols-1 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.15fr)] gap-10 sm:gap-14 lg:gap-16 items-center">

          <div>
            <Pill>Business Growth Partner</Pill>
            <h1>
              Building Brands That Matter
            </h1>
            <p>
              Your One-Stop Technology Partner for Digital Growth.
            </p>

            <div className="hero-actions">
              <a className="btn btn-primary" href={bookingUrl} target="_blank" rel="noopener noreferrer">
                Book Free Consultation →
              </a>
              <a className="btn btn-secondary" href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                Chat on WhatsApp
              </a>
            </div>
            <div className="stats-row flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-8 mt-8 sm:mt-10">

              <strong>
                <span className="stat-rise">
                  <ContinuousStat value={50} suffix="" durationMs={1600} />
                </span>
                <span>Projects Delivered</span>
              </strong>
              <strong>
                <span className="stat-rise">
                  <ContinuousStat value={12} suffix="" durationMs={1600} />
                </span>
                <span>Industries Served</span>
              </strong>
              <strong>
                <span className="stat-rise">
                  <ContinuousStat value={98} suffix="%" durationMs={1600} />
                </span>
                <span>Satisfaction</span>
              </strong>
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
          <div className="brand-logo-marquee" aria-label="Trusted company logos">
            <div className="brand-logo-marquee-track" aria-hidden="true">
              <div className="brand-logo-marquee-row">
                <TrustedLogo brand="aws" />
                <TrustedLogo brand="shopify" />
                <TrustedLogo brand="meta" />
                <TrustedLogo brand="google" />
                <TrustedLogo brand="hubspot" />
                <TrustedLogo brand="microsoft" />
              </div>
              <div className="brand-logo-marquee-row" aria-hidden="true">
                <TrustedLogo brand="aws" />
                <TrustedLogo brand="shopify" />
                <TrustedLogo brand="meta" />
                <TrustedLogo brand="google" />
                <TrustedLogo brand="hubspot" />
                <TrustedLogo brand="microsoft" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="shell">
          <h2 className="center-title">Everything you need to scale</h2>
          <ServicesGrid />
        </div>
      </section>
      <SocialMediaPackagesSection />
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
              <strong>
                <span className="stat-rise">
                  <ContinuousStat value={150} suffix="%" durationMs={1600} />
                </span>
                <span>Avg. Client Revenue Lift</span>
              </strong>
              <strong>
                <span className="stat-rise">
                  <ContinuousStat value={24} suffix="/7" durationMs={1600} />
                </span>
                <span>Monitoring & Support</span>
              </strong>
              <strong>
                <span className="stat-rise">
                  <ContinuousStat value={12} suffix="M+" durationMs={1600} />
                </span>
                <span>Lines of Code Written</span>
              </strong>
              <strong>
                <span className="stat-rise">
                  <ContinuousStat value={4.9} suffix="/5" durationMs={1600} />
                </span>
                <span>Client Satisfaction</span>
              </strong>
            </div>
        </div>
      </section>
      <section className="section">
        <div className="shell chart-card">
          <div>
            <h2>Data-Driven Growth</h2>
            <p>We use real data to understand what works, improve performance, and help your business grow faster.</p>
          </div>
          <div className="chart-lines" aria-hidden="true">
            <div className="chart-kpi">
              <div className="chart-kpi-item">
                <span className="chart-kpi-dot" />
                <div>
                  <b>+2.4%</b>
                  <span>Conversion Rate</span>
                </div>
              </div>
              <div className="chart-kpi-item">
                <span className="chart-kpi-dot" />
                <div>
                  <b>+18.7%</b>
                  <span>Revenue Growth</span>
                </div>
              </div>
              <div className="chart-kpi-item">
                <span className="chart-kpi-dot" />
                <div>
                  <b>+26.1k</b>
                  <span>Active Users</span>
                </div>
              </div>
              <div className="chart-kpi-item">
                <span className="chart-kpi-dot" />
                <div>
                  <b>3.2×</b>
                  <span>ROI</span>
                </div>
              </div>
            </div>

            <div className="chart-track">
              <svg className="chart-svg" viewBox="0 0 320 200" preserveAspectRatio="none" role="presentation">
                {/* solid main line (animated upward) */}
                <path
                  className="chart-solid"
                  d="M20 175 C 70 155, 95 158, 130 130 C 165 102, 205 110, 235 86 C 265 62, 295 72, 305 38"
                />

                {/* dotted comparison/trend line */}
                <path
                  className="chart-dotted"
                  d="M20 182 C 70 168, 95 170, 130 150 C 165 130, 205 132, 235 112 C 265 92, 295 98, 305 70"
                />

                {/* animated points */}
                <circle className="chart-point pulse" cx="130" cy="120" r="4.2" />
                <circle className="chart-point" cx="235" cy="70" r="3.8" />
                <circle className="chart-point pulse trend" cx="215" cy="96" r="4.0" />
                <circle className="chart-point" cx="305" cy="30" r="3.6" />
              </svg>
            </div>

            {/* keep existing spans for funnel fallback */}
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
              <p>Real projects, tracked the right way—so you can see exactly what changed, and how fast.</p>
            </div>
            <Link className="btn btn-secondary btn-small" href="/work">
              View Our Work
            </Link>
          </div>
          <div className="case-grid">
            <CaseCard
              image="/assets/case-revenue.png"
              title="Revenue +120%"
              copy="Cut checkout drop-offs on mobile with a faster storefront + conversion-focused UX. Measured over a 10-week post-launch window for a global e-commerce brand."
            />
            <CaseCard
              image="/assets/case-6week.png"
              title="6 Week Launch"
              copy="Rebuilt legacy workflows into a cloud-native delivery pipeline. We reduced launch cycle time from months to weeks by shipping an MVP in 6 weeks for a fintech SaaS startup."
            />
            <CaseCard
              image="/assets/case-mobile.png"
              title="50k+ Downloads"
              copy="Refreshed core onboarding + performance for better retention. With weekly releases and A/B testing, the HealthTech mobile app reached 50k+ downloads in the first campaign cycle."
            />
          </div>
        </div>
      </section>
      <Process />
      <Testimonials />
      <Cta />
    </>
  );
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

function Testimonials() {
  const quotes = [
    {
      name: "Dinesh Perera",
      role: "Founder, Ceylon Fresh Exports",
      quote:
        "Luvio Labs built our entire export management system from scratch. Orders that used to take hours now process in minutes. Our efficiency improved by 60% in the first quarter.",
    },
    {
      name: "Ravindu Silva",
      role: "Director, AutoParts.lk",
      quote:
        "From our e-commerce store to digital marketing, Luvio Labs handles everything. Our online sales grew 5x in 8 months. Their team feels like an extension of our own.",
    },
    {
      name: "Duran Perera",
      role: "CEO & Founder, RK Construction",
      quote:
        "Luvio Labs built our new website and the results have been outstanding. The design is professional, loads fast, and our clients regularly compliment how good it looks. It's made a real difference to how we win new business.",
    },
  ];

  return (
    <section className="section testimonials">
      <div className="shell testimonial-grid">
        {quotes.map(({ name, role, quote }) => (
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
            <a className="btn btn-primary" href={bookingUrl} target="_blank" rel="noopener noreferrer">
              View Our Work
            </a>
            <a className="btn btn-secondary" href={bookingUrl} target="_blank" rel="noopener noreferrer">
              Book a Consultation
            </a>
          </>
        }
      />
      <section className="section">
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
  const [workFilter, setWorkFilter] = useState("All Work");
  const workFilterOptions = ["All Work", "Web Apps", "Mobile Apps", "AI Systems", "Marketing"];
  const workCategoryMap: Record<string, string[]> = {
    "All Work": ["E-commerce Brand", "Social Tech", "AI Platform", "Healthcare"],
    "Web Apps": ["E-commerce Brand"],
    "Mobile Apps": ["Social Tech"],
    "AI Systems": ["AI Platform"],
    "Marketing": ["Healthcare"],
  };
  const filteredWork = workItems.filter((item) =>
    workFilter === "All Work" || (workCategoryMap[workFilter]?.includes(item.eyebrow))
  );

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
          <FilterPills items={workFilterOptions} active={workFilter} onSelect={setWorkFilter} />
          <div className="work-grid">
            {filteredWork.map((item) => (
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

function FilterPills({ items, active, onSelect }: { items: string[]; active: string; onSelect: (item: string) => void }) {
  return (
    <div className="filter-pills">
      {items.map((item) => (
        <button className={active === item ? "active" : ""} key={item} type="button" onClick={() => onSelect(item)}>
          {item}
        </button>
      ))}
    </div>
  );
}

function getPreviewText(content: Array<{ heading: string; paragraphs: string[] }>) {
  const paragraphs = content.flatMap((section) => section.paragraphs);
  const text = paragraphs.join(" ");
  return text.length > 200 ? `${text.slice(0, 197)}...` : text;
}

export function BlogsPage() {
  const [blogFilter, setBlogFilter] = useState("All Articles");
const blogFilterOptions = ["All Articles", "AI & Marketing", "Digital Marketing", "Web Strategy", "Local SEO", "Digital Parenting", "Web Design"];
  const filteredBlogs = blogFilter === "All Articles"
    ? blogPosts
    : blogPosts.filter((post) => post.category === blogFilter);
  const featuredPost = filteredBlogs[0];

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
          <FilterPills items={blogFilterOptions} active={blogFilter} onSelect={setBlogFilter} />
          <article className="blog-hero-card">
            <div className="blog-hero-image">
              <Image src={featuredPost.image} alt="" fill sizes="(max-width: 900px) 100vw, 50vw" />
            </div>
            <div>
              <span className="category">{featuredPost.category}&nbsp;&nbsp; · &nbsp;&nbsp;{featuredPost.time}</span>
              <h2>{featuredPost.title}</h2>
              <p>{featuredPost.copy}</p>
              <p className="blog-card-preview">{getPreviewText(featuredPost.content)}</p>
              <Link className="text-link" href={featuredPost.link}>
                Read article →
              </Link>
              <div className="author">
                <span />
                <b>luvio labs</b>
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
            {blogPosts.map((item) => (
              <article className="blog-card" key={item.title}>
                <div className="blog-image">
                  <Image src={item.image} alt="" fill sizes="(max-width: 900px) 100vw, 30vw" />
                </div>
                <div className="blog-card-body">
                  <span className="category">{item.category}<small>{item.time}</small></span>
                  <h3>{item.title}</h3>
                  <p>{item.copy}</p>
                  <p className="blog-card-preview">{getPreviewText(item.content)}</p>
                  <Link className="text-link" href={item.link}>
                    Read article →
                  </Link>
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

  const hasJobs = jobOpenings.length > 0;

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

      {/* ── Open Roles / Job Listings ── */}
      <section className="section" id="open-roles">
        <div className="shell">
          <div className="section-heading split">
            <div>
              <h2>Open Roles</h2>
              <p>
                {hasJobs
                  ? "We&apos;re looking for world-class talent to help us redefine the digital infrastructure. Check out our current openings."
                  : "We don&apos;t have any open positions right now, but we&apos;re always on the lookout for great talent."}
              </p>
            </div>
          </div>

          {hasJobs ? (
            <div className="roles-grid">
              {jobOpenings.map((job) => (
                <article className="role-card job-card" key={job.id ?? job.title}>
                  <div>
                    <span>{job.type}</span>
                    <em>{job.location}</em>
                  </div>
                  <h3>{job.title}</h3>
                  <span className="role-department">{job.department}</span>
                  <p>{job.description}</p>

                  {job.requirements.length > 0 && (
                    <div className="job-details">
                      <strong>Requirements</strong>
                      <ul>
                        {job.requirements.map((req) => (
                          <li key={req}>{req}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {job.responsibilities.length > 0 && (
                    <div className="job-details">
                      <strong>Responsibilities</strong>
                      <ul>
                        {job.responsibilities.map((resp) => (
                          <li key={resp}>{resp}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <a
                    className="btn btn-primary apply-btn"
                    href={getWhatsAppApplyLink(job.title)}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Apply Now via WhatsApp
                  </a>
                </article>
              ))}
            </div>
          ) : (
            /* ── Empty State ── */
            <div className="careers-empty">
              <div className="careers-empty-icon">📭</div>
              <h3>No openings available at the moment</h3>
              <p>
                We appreciate your interest in joining Luvio Labs. While there are no
                current vacancies, we are always looking to connect with talented
                individuals. Feel free to reach out to us on WhatsApp or email for
                future opportunities.
              </p>
              <div className="hero-actions" style={{ justifyContent: "center" }}>
                <a
                  className="btn btn-primary"
                  href={getWhatsAppApplyLink("Future Opportunities at Luvio Labs")}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Message Us on WhatsApp
                </a>
                <a className="btn btn-secondary" href={`mailto:${emailAddress}`}>
                  Email Us
                </a>
              </div>
            </div>
          )}
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
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    businessName: "",
    businessCategory: "Technology / Software",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const updateField = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setSubmitStatus("idle");

    try {
      await sendContactForm({
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        businessName: formData.businessName,
        businessCategory: formData.businessCategory,
        message: formData.message,
      });
      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        businessName: "",
        businessCategory: "Technology / Software",
        message: "",
      });
    } catch {
      setSubmitStatus("error");
    } finally {
      setSubmitting(false);
    }
  };

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
          <form className="contact-form" onSubmit={handleSubmit}>
            <h2>Send us a message</h2>

            {submitStatus === "success" && (
              <div className="form-status form-success">✓ Your message has been sent successfully! We&apos;ll get back to you shortly.</div>
            )}
            {submitStatus === "error" && (
              <div className="form-status form-error">✕ Something went wrong. Please try again or email us directly at hello@luviolabs.com.</div>
            )}

            <label>Full Name<input placeholder="Your full name" value={formData.name} onChange={(e) => updateField("name", e.target.value)} required /></label>
            <label>Email Address<input type="email" placeholder="your@email.com" value={formData.email} onChange={(e) => updateField("email", e.target.value)} required /></label>
            <label>Phone<input type="tel" placeholder="+94 77 123 4567" value={formData.phone} onChange={(e) => updateField("phone", e.target.value)} required /></label>
            <label>Business Name<input placeholder="Your business or startup name" value={formData.businessName} onChange={(e) => updateField("businessName", e.target.value)} required /></label>
            <label>Business Category / Industry
              <select value={formData.businessCategory} onChange={(e) => updateField("businessCategory", e.target.value)}>
                <option>Technology / Software</option>
                <option>Construction / Real Estate</option>
                <option>Cafe & Restaurants</option>
                <option>Travel & Tourism</option>
                <option>Educational Tech</option>
                <option>Healthcare</option>
                <option>E-commerce / Retail</option>
                <option>Finance & Banking</option>
                <option>Media & Entertainment</option>
                <option>Other</option>
              </select>
            </label>
            <label>Message<textarea rows={4} placeholder="Tell us about your project, goals, and how we can help..." value={formData.message} onChange={(e) => updateField("message", e.target.value)} required /></label>
            <button className="btn btn-primary submit" type="submit" disabled={submitting}>
              {submitting ? "Sending..." : "Launch Your Project"}
            </button>
          </form>
          <div className="contact-side">
            <div className="info-card">
              <h2>Direct Communication</h2>
              <Info icon="✉" label="Email Support" value={emailAddress} href={emailHref} />
              <Info icon="☎" label="Phone Line" value="+94 76 643 34 34" href={`tel:+94766433434`} />
              <Info icon="💬" label="WhatsApp" value="Message us instantly" href={whatsappUrl} />
              <Info icon="⌖" label="Global Office" value="NO: 532/1, Medamandiya, Dadigamuwa. Kaduwela" />
            </div>
            <div className="info-card">
              <h2>Stay Connected</h2>
              <div className="round-socials">
                <a href="https://dribbble.com/luviolabs" target="_blank" rel="noopener noreferrer" aria-label="Dribbble"><SocialIcon type="dribbble" /></a>
                <a href="https://linkedin.com/company/luviolabs" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><SocialIcon type="linkedin" /></a>
                <a href="https://github.com/luviolabs" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><SocialIcon type="github" /></a>
                <a href="https://instagram.com/luviolabs" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><SocialIcon type="instagram" /></a>
                <a className="social-icon-link" href={whatsappUrl} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                  <SocialIcon type="whatsapp" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="shell booking-card">
          <div>
            <h2>Book a 1:1 Strategic Consultation</h2>
            <p>Skip the back-and-forth emails. Choose a time that works for you and meet with our lead engineers to discuss technical requirements.</p>
            <ul>
              <li>30-minute discovery call</li>
              <li>Strategic planning session</li>
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
  type: "linkedin" | "github" | "instagram" | "dribbble" | "whatsapp";
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
    whatsapp: (
      <>
        <path d="M15 3.2c-6.2 0-11.3 5-11.3 11.2 0 2 .5 3.9 1.5 5.6L3 29l9-1.9c1.3.6 2.8.9 4.4.9 6.2 0 11.3-5 11.3-11.2C27.7 8.2 21.7 3.2 15 3.2Z" />
        <path d="M10.3 9.7c-.2-.5-.4-.5-.6-.5h-.5c-.2 0-.5.1-.7.4-.2.2-.9.9-.9 2.2 0 1.3.9 2.6 1 2.8.1.2 1.7 2.7 4.1 3.7 2 .8 2.4.7 2.9.6.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.1-1.2-.1-.1-.3-.2-.7-.4-.4-.2-1.9-.9-2.2-1-.3-.1-.5-.1-.7.2-.2.3-.8 1-.9 1.1-.1.2-.3.2-.6.1-.3-.1-1.2-.4-2.3-1.4-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.4.1-.6.1-.1.3-.3.4-.5.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5Z" />
      </>
    ),
  };

  return (
    <span className="social-icon" aria-hidden="true">
      <svg viewBox="0 0 30 30">{paths[type]}</svg>
    </span>
  );
}

function Info({ icon, label, value, href }: { icon: string; label: string; value: string; href?: string }) {
  const content = (
    <div className="info-row">
      <span>{icon}</span>
      <div>
        <small>{label}</small>
        <b>{value}</b>
      </div>
    </div>
  );

  if (href) {
    return (
      <a className="info-link" href={href} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    );
  }

  return content;
}

function Calendar() {
  const days = ["28", "29", "30", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"];
  const slots = ["09:00 AM", "11:30 AM", "02:00 PM", "04:30 PM"];
  return (
    <div className="calendar">
      <div className="calendar-top"><span>October 2024</span><div><button type="button">‹</button><button type="button">›</button></div></div>
      <div className="calendar-week"><span>MO</span><span>TU</span><span>WE</span><span>TH</span><span>FR</span><span>SA</span><span>SU</span></div>
      <div className="calendar-days">
        {days.map((day) => <span className={day === "6" ? "active" : day === "1" ? "selected" : ""} key={day}>{day}</span>)}
      </div>
      <small>Available Timeslots</small>
      <div className="times">
        {slots.map((slot) => (
          <a className="time-slot" href={bookingUrl} target="_blank" rel="noopener noreferrer" key={slot}>
            {slot}
          </a>
        ))}
      </div>
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
