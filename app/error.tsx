"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <section className="hero" style={{ minHeight: "70vh" }}>
      <div className="shell" style={{ textAlign: "center" }}>
        <span className="pill" style={{ margin: "0 auto" }}>
          Error
        </span>
        <h1 style={{ maxWidth: "720px", margin: "26px auto 0" }}>
          Something Went Wrong
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
          An unexpected error occurred. Please try again, or contact us if
          the problem persists.
        </p>
        <div
          className="hero-actions"
          style={{ justifyContent: "center", marginTop: "32px" }}
        >
          <button className="btn btn-primary" type="button" onClick={reset}>
            Try Again
          </button>
          <a
            className="btn btn-secondary"
            href="https://api.whatsapp.com/send/?phone=94766433434&text=Hi%20Luvio%20Labs!%20I%20encountered%20an%20error%20on%20your%20website.&type=phone_number&app_absent=0"
            target="_blank"
            rel="noopener noreferrer"
          >
            Contact Support
          </a>
        </div>
      </div>
    </section>
  );
}

