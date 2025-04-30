import React from "react";
import Image from "next/image";
import profilePic from "../images/profile.jpg";

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
              Look at my projects
            </button>
            <button className="bg-primary border border-accent text-text font-medium py-3 px-6 rounded-md transition-colors">
              Contact me
            </button>
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative h-80 md:h-96 rounded-lg overflow-hidden">
          <div className="absolute inset-0 bg-primary/10 flex items-center justify-center">
            {/* <span className="text-primary font-medium">Dein Profilbild</span> */}
          </div>

          <Image
            src={profilePic}
            alt="Cecilia Bartlewski"
            quality={100}
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </section>
  );
}
