"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Moon, Sun, Terminal } from "lucide-react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import MobileNav from "./MobileNav";
import { scrollToSection } from "@/lib/scroll";
import Link from "next/link";

const navItems = {
   home: "inicio",
   skills: "skills",
   timeline: "timeline",
   projects: "projetos",
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
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/70 border-b border-border/50">
         <nav className="container mx-auto h-16 flex items-center justify-between">
            <Link
               href="/"
               className="flex items-center gap-2 text-lg font-mono font-bold hover:text-primary transition-colors group"
            >
               <Terminal className="h-5 w-5 text-primary" />
               <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                  {"<"}
               </span>
               <span>LucasMaia</span>
               <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                  {"/>"}
               </span>
            </Link>

            <div className="hidden md:flex items-center space-x-1">
               {Object.entries(navItems).map(([key, value]) => (
                  <button
                     key={key}
                     onClick={() => scrollToSection(key)}
                     className="relative px-4 py-2 text-sm font-mono text-muted-foreground hover:text-foreground transition-colors group"
                  >
                     <span className="text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                        .
                     </span>
                     {value}
                     <span className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] w-0 bg-primary group-hover:w-3/4 transition-all duration-300 rounded-full" />
                  </button>
               ))}
            </div>

            <div className="flex items-center gap-2">
               <Button
                  variant="ghost"
                  size="icon"
                  onClick={() =>
                     setTheme(theme === "light" ? "dark" : "light")
                  }
                  className="rounded-lg hover:bg-primary/10"
               >
                  <Sun className="h-[18px] w-[18px] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                  <Moon className="absolute h-[18px] w-[18px] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                  <span className="sr-only">Toggle theme</span>
               </Button>
               <MobileNav />
            </div>
         </nav>
      </header>
   );
}
