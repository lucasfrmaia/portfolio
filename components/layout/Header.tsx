"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { motion } from "framer-motion";

const navItems = {
   home: "Início",
   aboutMe: "Sobre Mim",
   skills: "Skills",
   timeline: "Timeline",
   projects: "Projetos",
};

export default function Header() {
   const [mounted, setMounted] = useState(false);
   const { theme, setTheme } = useTheme();

   useEffect(() => {
      setMounted(true);
   }, []);

   if (!mounted) {
      return null;
   }

   return (
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm bg-background/80 border-b">
         <nav className="container mx-auto h-16 flex items-center justify-between">
            <Link
               href="/"
               className="text-xl font-bold hover:text-primary transition"
            >
               Portfolio
            </Link>

            <div className="hidden md:flex items-center space-x-8">
               {Object.entries(navItems).map(([key, value]) => (
                  <Link
                     key={key}
                     href={`#${key}`}
                     className="text-sm hover:text-primary transition"
                  >
                     {value}
                  </Link>
               ))}
            </div>

            <Button
               variant="ghost"
               size="icon"
               onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            >
               <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
               <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
               <span className="sr-only">Toggle theme</span>
            </Button>
         </nav>
      </header>
   );
}
