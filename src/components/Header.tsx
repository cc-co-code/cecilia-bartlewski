// src/components/Header.tsx
import React, { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-background border-b border-text/10 py-4 z-50">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center">
          {/* Logo/Marke */}
          <div className="text-text font-bold text-xl">
            <Link href="/">Cecilia Bartlewski</Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link
              href="#projects"
              className="text-text hover:text-primary transition-colors"
            >
              Projekte
            </Link>
            <Link
              href="#about"
              className="text-text hover:text-primary transition-colors"
            >
              Über mich
            </Link>
            <Link
              href="#contact"
              className="text-text hover:text-primary transition-colors"
            >
              Kontakt
            </Link>
          </nav>

          {/* Mobile Menü Button */}
          <button
            className="md:hidden text-text"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-text/10">
            <nav className="flex flex-col space-y-4">
              <Link
                href="#projects"
                className="text-text hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Projekte
              </Link>
              <Link
                href="#about"
                className="text-text hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Über mich
              </Link>
              <Link
                href="#contact"
                className="text-text hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Kontakt
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
