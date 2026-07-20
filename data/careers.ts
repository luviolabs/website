// ───────────────────────────────────────────────
// Careers – Job Openings Data & Helpers
// ───────────────────────────────────────────────

/** Single job opening shape */
export type JobOpening = {
  /** Unique identifier (optional – can use slug or index) */
  id?: string;
  /** Role title, e.g. "Senior Software Engineer" */
  title: string;
  /** Department / team, e.g. "Engineering" */
  department: string;
  /** Employment type: Full-time, Part-time, Internship, Contract */
  type: "Full-time" | "Part-time" | "Internship" | "Contract";
  /** Location or remote-status, e.g. "Remote / Sri Lanka" */
  location: string;
  /** Short one-line pitch (shown on the card) */
  description: string;
  /** Array of key requirements */
  requirements: string[];
  /** Array of key responsibilities */
  responsibilities: string[];
};

// ───────────────────────────────────────────────
// WhatsApp configuration – CHANGE NUMBER HERE ONLY
// ───────────────────────────────────────────────
export const WHATSAPP_NUMBER = "94766433434";

/**
 * Build a WhatsApp deep-link URL with a pre-filled apply message.
 * The message template can be customised here without touching any component.
 */
export function getWhatsAppApplyLink(jobTitle: string): string {
  const message = `Hello Luvio Labs team,

I would like to apply for the position of ${jobTitle}.

Please let me know the next steps.

Thank you.`;

  const encoded = encodeURIComponent(message);
  return `https://api.whatsapp.com/send/?phone=${WHATSAPP_NUMBER}&text=${encoded}&type=phone_number&app_absent=0`;
}

// ───────────────────────────────────────────────
// Job openings – add new objects here to auto-populate the Careers page
// ───────────────────────────────────────────────
export const jobOpenings: JobOpening[] = [
  // ── sample job 1 ────────────────────────────
  {
    id: "sr-software-engineer",
    title: "Senior Software Engineer",
    department: "Engineering",
    type: "Full-time",
    location: "Remote / Sri Lanka",
    description:
      "Build scalable backends and resilient distributed systems. You will work with modern stacks to handle massive traffic and drive product innovation.",
    requirements: [
      "5+ years of experience in software engineering",
      "Strong proficiency in TypeScript, React, and Node.js",
      "Experience with cloud platforms (AWS / GCP)",
      "Understanding of microservices architecture",
      "Excellent problem-solving and communication skills",
    ],
    responsibilities: [
      "Design, build, and maintain high-performance backend services",
      "Collaborate with cross-functional teams to define and ship new features",
      "Mentor junior engineers and contribute to code reviews",
      "Ensure system reliability, scalability, and security",
    ],
  },

  // ── sample job 2 ────────────────────────────
  {
    id: "ui-ux-designer",
    title: "UI/UX Designer",
    department: "Design",
    type: "Full-time",
    location: "Remote / Sri Lanka",
    description:
      "Craft beautiful, intuitive interfaces for complex data workflows. We value clean aesthetics, functional excellence, and user-centred design.",
    requirements: [
      "3+ years of experience in UI/UX design",
      "Proficiency in Figma, Sketch, or similar design tools",
      "Strong portfolio demonstrating web & mobile design work",
      "Understanding of design systems and component libraries",
      "Excellent visual design skills with attention to detail",
    ],
    responsibilities: [
      "Create wireframes, prototypes, and high-fidelity mockups",
      "Conduct user research and usability testing to inform design decisions",
      "Collaborate with developers to ensure pixel-perfect implementation",
      "Maintain and evolve the Luvio Labs design system",
    ],
  },
];

