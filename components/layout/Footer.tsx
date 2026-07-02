"use client";

import { portfolio } from "@/entities/const";
import Link from "next/link";
import SocialButtons from "../ui/SocialButtons";
import { Terminal } from "lucide-react";

export default function Footer() {
   const currentYear = new Date().getFullYear();

   return (
      <footer className="py-10 border-t border-border bg-card/50">
         <div className="container px-4">
            <div className="flex flex-col md:flex-row justify-between items-center gap-8">
               {/* Left: terminal style branding */}
               <div className="flex flex-col items-center md:items-start gap-2">
                  <div className="flex items-center gap-2 font-mono text-sm text-muted-foreground">
                     <Terminal className="h-4 w-4 text-primary" />
                     <span>
                        <span className="text-primary">$</span> {portfolio.name}{" "}
                        --version {currentYear}
                     </span>
                  </div>
               </div>

               {/* Center: nav links */}
               <nav className="flex gap-6">
                  {Object.entries(portfolio.data.naveBar).map(
                     ([key, value]) => (
                        <Link
                           key={key}
                           href={`#${key}`}
                           className="text-sm font-mono text-muted-foreground hover:text-primary transition-colors"
                        >
                           .{value.toLowerCase()}
                        </Link>
                     ),
                  )}
               </nav>

               {/* Right: socials */}
               <SocialButtons />
            </div>
         </div>
      </footer>
   );
}
