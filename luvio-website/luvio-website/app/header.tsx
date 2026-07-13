"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Logo } from "./logo";

const navItems = [
  ["Home", "/"],
  ["Services", "/services"],
  ["Work", "/work"],
  ["About", "/about"],
  ["Blogs", "/blogs"],
  ["Contact", "/contact"],
  ["Careers", "/careers"],
];

export function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="shell nav-shell">
        <Logo />
        <nav className={`nav-links ${isOpen ? "is-open" : ""}`} aria-label="Main navigation">
          {navItems.map(([label, href]) => (
            <Link
              aria-current={pathname === href ? "page" : undefined}
              key={href}
              href={href}
              onClick={() => setIsOpen(false)}
            >
              {label}
            </Link>
          ))}
        </nav>
        <div className="nav-actions">
          <span className="moon" aria-hidden="true">
            ◐
          </span>
          <Link className="btn btn-primary btn-small" href="/contact">
            Book Consultation
          </Link>
          <button
            className="menu-toggle"
            type="button"
            aria-label="Toggle navigation"
            aria-expanded={isOpen}
            onClick={() => setIsOpen((value) => !value)}
          >
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  );
}
