// src/components/Footer.tsx
import React from "react";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-background border-t border-foreground/10 py-8 mt-auto">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-lg font-bold text-foreground mb-4">
              Cecilia Bartlewski
            </h3>
            <p className="text-foreground/70 mb-4">
              Moderne Webentwicklung mit Next.js, React, TypeScript und Tailwind
              CSS.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/cc-co-code"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:text-primary"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/cecilia-bartlewski/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:text-primary"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-lg font-bold text-foreground mb-4">Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-foreground/70 hover:text-primary transition-colors"
                >
                  Startseite
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="text-foreground/70 hover:text-primary transition-colors"
                >
                  Projekte
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-foreground/70 hover:text-primary transition-colors"
                >
                  Über mich
                </Link>
              </li>
            </ul>
          </div>

          {/* Kontakt */}
          <div>
            <h3 className="text-lg font-bold text-foreground mb-4">Kontakt</h3>
            <ul className="space-y-2">
              <li className="text-foreground/70">
                <a
                  href="mailto:info@example.com"
                  className="hover:text-primary transition-colors"
                >
                  info@example.com
                </a>
              </li>
              <li className="text-foreground/70">
                <a
                  href="tel:+491234567890"
                  className="hover:text-primary transition-colors"
                >
                  +49 123 456 7890
                </a>
              </li>
              <li className="text-foreground/70">Berlin, Deutschland</li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-foreground/10 mt-8 pt-8 text-center text-foreground/60">
          <p>© {currentYear} Cecilia Bartlewski. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  );
}
