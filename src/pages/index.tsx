import { Geist, Geist_Mono } from "next/font/google";
import Header from "../components/Header";
import Hero from "../components/Hero";
//import Projects from "../components/Projects";
//import About from "../components/About";
//import Contact from "../components/Contact";
import Footer from "../components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div
      className={`${geistSans.className} ${geistMono.className} font-sans text-text bg-background min-h-screen flex flex-col`}
    >
      {/* Header mit Navigation */}
      <Header />

      {/* Hauptinhalt der Seite */}
      <main>
        <Hero
          title={"Hi, I'm Cecilia "}
          subtitle={
            "A web developer with an eye for detail, a heart for clean user experiences, and a drive to build digital spaces that truly support people. "
          }
        />
        {/* <Projects />
        <About />
        <Contact /> */}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
