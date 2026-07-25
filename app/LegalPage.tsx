import type { ReactNode } from "react";
import styles from "./styles/legal.module.css";

type SocialLink = {
  label: string;
  href: string;
  icon: string;
};

type LegalPageProps = {
  title: string;
  lead: string;
  content: string;
  email: string;
  phone: string;
  whatsapp: string;
  office: string;
  socialLinks: SocialLink[];
};

function parseLegalText(text: string): ReactNode[] {
  const lines = text.split(/\r?\n/).map((line) => line.trim());
  const blocks: Array<{ type: "heading" | "paragraph" | "list"; content: string | string[] }> = [];
  let current: { type: "paragraph" | "list"; content: string[] } | null = null;

  const pushCurrent = () => {
    if (!current) return;
    if (current.type === "paragraph") {
      blocks.push({ type: "paragraph", content: current.content.join(" ") });
    } else {
      blocks.push({ type: "list", content: current.content });
    }
    current = null;
  };

  for (const line of lines) {
    if (!line) {
      pushCurrent();
      continue;
    }

    const headingMatch = line.match(/^\d+(?:\.\d+)*\.\s+(.*)$/);
    const bulletMatch = line.match(/^(?:●|\*|-|•)\s*(.*)$/);

    if (headingMatch) {
      pushCurrent();
      blocks.push({ type: "heading", content: headingMatch[1] });
      continue;
    }

    if (bulletMatch) {
      if (current?.type !== "list") {
        pushCurrent();
        current = { type: "list", content: [] };
      }
      current.content.push(bulletMatch[1]);
      continue;
    }

    if (current?.type === "paragraph") {
      current.content.push(line);
    } else {
      pushCurrent();
      current = { type: "paragraph", content: [line] };
    }
  }

  pushCurrent();

  const sections: Array<{ title?: string; blocks: typeof blocks }> = [];
  let activeSection = { title: undefined as string | undefined, blocks: [] as typeof blocks };

  for (const block of blocks) {
    if (block.type === "heading") {
      if (activeSection.blocks.length) {
        sections.push(activeSection);
      }
      activeSection = { title: block.content as string, blocks: [] };
    } else {
      activeSection.blocks.push(block);
    }
  }
  if (activeSection.blocks.length || activeSection.title) {
    sections.push(activeSection);
  }

  return sections.map((section, sectionIndex) => (
    <section className={styles.legalSection} key={`section-${sectionIndex}`}>
      {section.title ? <h2>{section.title}</h2> : null}
      {section.blocks.map((block, blockIndex) => {
        if (block.type === "paragraph") {
          return <p key={blockIndex}>{block.content as string}</p>;
        }

        return (
          <ul key={blockIndex}>
            {(block.content as string[]).map((item, itemIndex) => (
              <li key={itemIndex}>{item}</li>
            ))}
          </ul>
        );
      })}
    </section>
  ));
}

export default function LegalPage({ title, lead, content, email, phone, whatsapp, office, socialLinks }: LegalPageProps) {
  return (
    <main className={styles.legalPage}>
      <div className={`shell ${styles.legalShell}`}>
        <section className={styles.legalHero}>
          <h1 className={styles.legalTitle}>{title}</h1>
          <p className={styles.legalLead}>{lead}</p>
          <div className={styles.legalNote}>Effective Date: 23 July 2026 • Last Updated: 23 July 2026</div>
        </section>
        <article className={styles.legalContent}>{parseLegalText(content)}</article>

        <section className={styles.legalContactSection}>
          <div className={styles.legalSection}>
            <h2>Direct Communication</h2>
            <div className={styles.legalContactGrid}>
              <a className={styles.contactCard} href={`mailto:${email}?subject=Project%20Inquiry`}>
                <span className={styles.contactCardIcon}>✉</span>
                <div className={styles.contactCardContent}>
                  <span className={styles.contactCardLabel}>Email Support</span>
                  <strong>{email}</strong>
                </div>
              </a>
              <a className={styles.contactCard} href={`tel:${phone.replace(/\s+/g, "")}`}>
                <span className={styles.contactCardIcon}>☎</span>
                <div className={styles.contactCardContent}>
                  <span className={styles.contactCardLabel}>Phone Line</span>
                  <strong>{phone}</strong>
                </div>
              </a>
              <a className={styles.contactCard} href={whatsapp} target="_blank" rel="noreferrer">
                <span className={styles.contactCardIcon}>💬</span>
                <div className={styles.contactCardContent}>
                  <span className={styles.contactCardLabel}>WhatsApp</span>
                  <strong>Message us instantly</strong>
                </div>
              </a>
              <div className={styles.contactCard}>
                <span className={styles.contactCardIcon}>⌖</span>
                <div className={styles.contactCardContent}>
                  <span className={styles.contactCardLabel}>Global Office</span>
                  <strong>{office}</strong>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.legalSection}>
            <h2>Stay Connected</h2>
            <p className={styles.socialNote}>Follow us on the platforms below to stay up to date with Luvio Labs.</p>
            <div className={styles.socialLinks}>
              {socialLinks.map((link) => (
                <a
                  key={link.href}
                  className={styles.socialLink}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={link.label}
                >
                  <span aria-hidden="true">{link.icon}</span>
                  <span>{link.label}</span>
                </a>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
