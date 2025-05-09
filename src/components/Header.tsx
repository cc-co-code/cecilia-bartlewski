import React, { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 left-0 right-0 bg-background border-b border-text/10 py-4 z-50">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center">
          <div className="text-text font-bold text-xl font-mono">
            <Link href="/">Cecilia Bartlewski</Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link
              href="#projects"
              className="text-text hover:text-primary transition-colors font-mono"
            >
              Projects
            </Link>
            <Link
              href="#about"
              className="text-text hover:text-primary transition-colors font-mono"
            >
              About me
            </Link>
            <Link
              href="#contact"
              className="text-text hover:text-primary transition-colors font-mono"
            >
              Contact
            </Link>
          </nav>
        </div>
      </div>

      {/* Floating Action Button und Menü */}
      <div className="md:hidden">
        <button
          className="fixed bottom-6 right-6 bg-primary text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg z-50 text-2xl"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? "×" : "+"}
        </button>

        {isMenuOpen && (
          <div className="fixed bottom-24 right-6 z-40">
            <div className="flex flex-col-reverse gap-4">
              <Link
                href="#contact"
                className="bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center shadow-md transform transition-transform duration-300 hover:scale-110"
                onClick={() => setIsMenuOpen(false)}
              >
                📧
              </Link>
              <Link
                href="#about"
                className="bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center shadow-md transform transition-transform duration-300 hover:scale-110"
                onClick={() => setIsMenuOpen(false)}
              >
                👩
              </Link>
              <Link
                href="#projects"
                className="bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center shadow-md transform transition-transform duration-300 hover:scale-110"
                onClick={() => setIsMenuOpen(false)}
              >
                📂
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
