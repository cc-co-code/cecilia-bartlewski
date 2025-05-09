export type ProjectData = {
  title: string;
  description: string;
  image: string;
  link: string;
  technologies: string[];
  badge?: string;
  badgeColor?: string;
};

export const projects: ProjectData[] = [
  {
    title: "ALBY - Abortion Support App",
    description:
      "ALBY is a mobile-first web app dedicated to supporting women seeking information and community around abortion. The app provides verified resources, links to trusted articles, and a safe space where users can connect, share experiences, and find support on this sensitive topic.",
    image: "/images/ALBY.png",
    link: "https://cece-capstone-project.vercel.app/",
    technologies: [
      "React",
      "Next.js",
      "MongoDB",
      "Zustand",
      "SWR",
      "NextAuth",
      "CSS",
    ],
    badge: "Work in Progress",
    badgeColor: "bg-orange-400 text-black",
  },
  {
    title: "Website for a Certified Supervisor",
    description:
      "A clean website for a professional supervisor offering individual, team, and group supervision. Built with Next.js and Tailwind CSS, the site includes smooth scrolling, anchor-based navigation, and a contact section. The design is minimalist and responsive, reflecting the clarity and structure of the supervisor’s work.",
    image: "/images/Supervisorin.png",
    link: "https://koehler-supervision.vercel.app/",
    technologies: ["Next.js", "JavaScript", "HTML", "CSS"],
  },
  {
    title: "Quiz App",
    description:
      "A small interactive quiz app built with JavaScript. Features include a dynamic card system with toggleable answers, bookmark functionality, a dark mode, and a custom form to add new questions. Designed with a focus on user interaction and accessible layout.",
    image: "/images/QuizApp.png",
    link: "https://cc-co-code.github.io/cece-quiz-app/",
    technologies: ["JavaScript", "HTML", "CSS"],
  },

  {
    title: "Rick and Morty Explorer",
    description:
      "A React app using the Rick and Morty API to display character cards with real-time data fetching via SWR. Includes pagination, filtering, and state management. Built with Next.js and styled using CSS, this project demonstrates clean API handling and responsive design..",
    image: "/images/RickandMorty.png",
    link: "https://cc-co-code.github.io/leo-cece-ricky-and-morty/",
    technologies: ["React", "Next.js", "SWR", "CSS"],
  },
];
