import Link from "next/link";

export function Logo() {
  return (
    <Link className="logo" href="/" aria-label="Luvio Labs home">
      <span className="logo-mark" aria-hidden="true">
        <svg viewBox="0 0 44 44" role="img">
          <path d="M22 4 37 13v18L22 40 7 31V13L22 4Z" />
          <path d="M22 11 31 16.5v11L22 33l-9-5.5v-11L22 11Z" />
          <path d="M31 16.5 36 13.5M13 27.5 8 30.5" />
        </svg>
      </span>
      <span>LUVIO LABS</span>
    </Link>
  );
}
