import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogItems } from "../data";

export function generateStaticParams() {
  return blogItems.map((post) => ({ slug: post.slug }));
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogItems.find((item) => item.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="section">
      <div className="shell" style={{ maxWidth: "920px" }}>
        <Link className="text-link" href="/blogs">
          ← Back to articles
        </Link>
        <article className="blog-hero-card" style={{ marginTop: "24px" }}>
          <div className="blog-hero-image">
            <Image src={post.image} alt="" fill sizes="(max-width: 900px) 100vw, 50vw" />
          </div>
          <div>
            <span className="category">{post.category}&nbsp;&nbsp; · &nbsp;&nbsp;{post.time}</span>
            <h2>{post.title}</h2>
            <p>{post.copy}</p>
            <div className="author">
              <span />
              <b>luvio labs</b>
            </div>
          </div>
        </article>

        <div style={{ marginTop: "36px", display: "grid", gap: "24px" }}>
          {post.content.map((section) => (
            <section key={section.heading} className="blog-article-section">
              <h3>{section.heading}</h3>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </section>
          ))}
        </div>

        {post.externalLink ? (
          <div style={{ marginTop: "32px" }}>
            <a className="text-link" href={post.externalLink} target="_blank" rel="noopener noreferrer">
              Read the original article →
            </a>
          </div>
        ) : null}
      </div>
    </main>
  );
}
