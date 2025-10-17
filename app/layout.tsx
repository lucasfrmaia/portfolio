import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { cn } from "../lib/utils";
import { ThemeProvider } from "@/components/theme/theme-provider";
import Header from "@/components/layout/Header";
import ScrollToTop from "@/components/ui/ScrollToTop";

const inter = Inter({
   subsets: ["latin"],
   display: "swap",
   variable: "--font-inter",
});

export const metadata: Metadata = {
   title: "Lucas Portifólio",
   description:
      "Explore meu portfólio e descubra uma gama de projetos. Apresento uma variedade de trabalhos, como  projetos webs, bots para discord e sistemas.",
   icons: {
      icon: "/images/portfolio-icon.png",
   },
   authors: {
      name: "Lucas Ferreira Maia",
   },
   keywords: [
      "Programador Python",
      "Desenvolvimento Web",
      "Java",
      "C",
      "Desenvolvedor de Software",
      "Desenvolvimento Front-end",
      "Desenvolvimento Back-end",
      "HTML",
      "CSS",
      "JavaScript",
      "Framework Django",
      "Flask",
      "Java Spring",
      "C Sharp",
      "Projetos Web",
      "Portfólio de Desenvolvimento",
      "Experiência em Python",
      "Experiência em Java",
      "Experiência em C",
      "Desenvolvedor Full Stack",
      "Desenvolvimento de Aplicações Web",
      "React",
      "Node.js",
      "Express.js",
      "Banco de Dados",
      "SQL",
      "MongoDB",
      "RESTful API",
      "Git",
      "Controle de Versão",
      "Responsive Design",
      "UX/ui",
      "Web Design",
      "Desempenho Web",
      "Version Control",
      "Responsive Design",
      "Web Projects",
      "Development Portfolio",
      "Python Experience",
      "Java Experience",
      "C Experience",
      "Full Stack Developer",
      "Web Application Development",
      "Software Developer",
      "Front-end Development",
      "Back-end Development",
   ],
};

export default function RootLayout({
   children,
}: {
   children: React.ReactNode;
}) {
   return (
      <html lang="pt" className={cn(inter.variable, "scroll-smooth")}>
         <body
            className={cn("min-h-screen bg-background font-sans antialiased")}
         >
            <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
               <Header />
               {children}
               <ScrollToTop />
            </ThemeProvider>
         </body>
      </html>
   );
}
