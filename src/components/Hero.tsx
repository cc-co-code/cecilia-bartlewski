import React from "react";
import Image from "next/image";
import profilePic from "../images/profile.jpg";
import smiley from "../images/smiley.png";

interface HeroProps {
  title: string;
  subtitle: string;
}

export default function Hero({ title, subtitle }: HeroProps) {
  return (
    <section className="py-20 md:py-32 px-6 max-w-6xl mx-auto">
      <div className="bg-yellow-100 text-yellow-800 border border-yellow-300 rounded-md px-4 py-3 mx-auto mt-1 mb-9 flex items-center gap-3 shadow-sm">
        <span className="text-xl">🐣🛠️</span>
        <div className="text-sm">
          <p className="font-semibold">This site is still hatching...</p>
          <p className="text-xs">
            I&apos;m currently building it with lots of love — feel free to
            explore while it&apos;s growing! ✨
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="space-y-6">
          <h2
            className="text-5xl md:text-2xl font-bold text-primary leading-tight"
            style={{ color: "var(--primary-light)" }}
          >
            {title}
          </h2>
          <Image
            src={smiley}
            alt="Cecilia Bartlewski"
            className="w-32 h-32 rounded-full logo mx-auto"
            quality={100}
          />

          <p className="text-lg text-text">{subtitle}</p>
          <p className="text-lg text-text">
            I love building accessible, responsive apps using modern tools like
            React, TypeScript, and Next.js.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#projects"
              className="border border-accent text-text font-medium py-3 px-6 rounded-md transition-colors"
            >
              View my projects
            </a>
            <a
              href="#about"
              className="border border-accent text-text font-medium py-3 px-6 rounded-md transition-colors"
            >
              More about me
            </a>
          </div>
        </div>

        <div className="relative h-80 md:h-96 rounded-lg overflow-hidden">
          <div className="absolute inset-0 bg-primary/10 flex items-center justify-center"></div>

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
