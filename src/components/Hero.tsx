// src/components/Hero.tsx
import React from "react";

interface HeroProps {
  title: string;
  subtitle: string;
}

export default function Hero({ title, subtitle }: HeroProps) {
  return (
    <section className="py-20 md:py-32 px-6 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Hero Text */}
        <div className="space-y-6">
          <h1 className="text-5xl md:text-6xl font-bold text-primary leading-tight">
            {title}
          </h1>
          <p className="text-xl text-text/80">{subtitle}</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-primary hover:bg-primary-dark text-text font-medium py-3 px-6 rounded-md transition-colors">
              Projekte entdecken
            </button>
            <button className="bg-primary border border-accent text-text font-medium py-3 px-6 rounded-md transition-colors">
              Kontakt aufnehmen
            </button>
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative h-80 md:h-96 rounded-lg overflow-hidden">
          <div className="absolute inset-0 bg-primary/10 flex items-center justify-center">
            <span className="text-primary font-medium">Dein Profilbild</span>
          </div>
          {/* Wenn du ein Bild hast, kannst du es so einbinden:
          <img 
            src="/images/profile.jpg" 
            alt="Cecilia Bartlewski" 
            className="object-cover w-full h-full"
          />
          */}
        </div>
      </div>
    </section>
  );
}
