"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

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
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    const current = document.documentElement.getAttribute("data-theme");
    if (current === "light" || current === "dark") {
      // schedule state update to avoid cascading renders warning
      queueMicrotask(() => setTheme(current));
    }
  }, []);


  function toggleTheme() {
    const next: "dark" | "light" = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem("theme", next);
    } catch {
      // ignore
    }
  }

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
          <button
            type="button"
            className="moon"
            onClick={toggleTheme}
            aria-label="Toggle light/dark mode"
            title="Toggle light/dark mode"
          >
            {theme === "dark" ? "◐" : "☀"}
          </button>
          <a
            className="btn btn-primary btn-small"
            href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ2x72QaNcN_HMzss85moSMFndIvRyNmczgcgCTWAfUFm8T0OdQCsGdwB8azt-wm2_hlDrJsXL6y"
            target="_blank"
            rel="noopener noreferrer"
          >
            Book Consultation
          </a>
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

