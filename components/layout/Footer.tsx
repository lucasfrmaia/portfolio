"use client";

import { portfolio } from "@/entities/const";
import Link from "next/link";
import SocialButtons from "../ui/SocialButtons";
import ScrollToTop from "../ui/ScrollToTop";

export default function Footer() {
   const currentYear = new Date().getFullYear();

   return (
      <footer className="py-8 border-t">
         <div className="container px-4">
            <div className="flex flex-col md:flex-row justify-between items-center gap-8">
               <div className="flex flex-col items-center md:items-start gap-4">
                  <p className="text-sm text-muted-foreground">
                     © {currentYear} {portfolio.name}.
                  </p>
               </div>

               <nav className="flex gap-8">
                  {Object.entries(portfolio.data.naveBar).map(
                     ([key, value]) => (
                        <Link
                           key={key}
                           href={`#${key}`}
                           className="text-sm text-muted-foreground hover:text-primary transition"
                        >
                           {value}
                        </Link>
                     )
                  )}
               </nav>

               <div className="text-center">
                  <SocialButtons />
               </div>
            </div>
         </div>
         <ScrollToTop />
      </footer>
   );
}
