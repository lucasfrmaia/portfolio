import { TRandomIcon } from "./types";
import portfolioData from "../public/jsons/portfolio.json";

export const portfolio = portfolioData;

export const CSectionNames = {
   main: "main",
   aboutMe: "aboutMe",
   skills: "skills",
   timeline: "timeline",
   projects: "projects",
} as const;

export const TRandomIconColors: Record<TRandomIcon, string> = {
   JavaScript: "#F7DF1E",
   TypeScript: "#3178C6",
   HTML: "#E44D26",
   CSS: "#2965F1",
   React: "#61DAFB",
   NodeJs: "#8CC84B",
   Python: "#FFFFFF",
   Java: "#007396",
   ExpressJs: "#FFFFFF",
   C: "#5690ff",
   MongoDB: "#4DB33D",
   NextJs: "#FFFFFF",
   Github: "#FFFFFF",
   Linkedin: "#FFFFFF",
   Git: "#f05033",
   Twitter: "#FFFFFF",
   VSCode: "#007ACC",
} as const;
