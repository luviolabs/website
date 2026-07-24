import Link from "next/link";

export default function NotFound() {
  return (
    <section className="hero" style={{ minHeight: "70vh" }}>
      <div className="shell" style={{ textAlign: "center" }}>
        <span className="pill" style={{ margin: "0 auto" }}>404</span>
        <h1 style={{ maxWidth: "720px", margin: "26px auto 0" }}>
          Page Not Found
        </h1>
        <p
          style={{
            maxWidth: "560px",
            margin: "28px auto 0",
            color: "var(--muted)",
            fontSize: "clamp(16px, 1.55vw, 20px)",
            lineHeight: 1.6,
          }}
        >
          The page you&apos;re looking for doesn&apos;t exist or has been
          moved. Let&apos;s get you back on track.
        </p>
        <div
          className="hero-actions"
          style={{ justifyContent: "center", marginTop: "32px" }}
        >
          <Link className="btn btn-primary" href="/">
            Back to Home
          </Link>
          <Link className="btn btn-secondary" href="/services">
            Explore Services
          </Link>
        </div>
      </div>
    </section>
  );
}

