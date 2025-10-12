"use client";

import { portfolio } from "@/entities/const";
import Link from "next/link";

export default function Footer() {
   const currentYear = new Date().getFullYear();

   return (
      <footer className="py-8 border-t">
         <div className="container px-4">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
               <div className="flex flex-col items-center md:items-start gap-2">
                  <p className="text-sm text-muted-foreground">
                     © {currentYear} {portfolio.name}. Todos os direitos
                     reservados.
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

               <p className="text-sm text-muted-foreground">
                  Desenvolvido com Next.js, TypeScript, Tailwind CSS, e
                  shadcn/ui
               </p>
            </div>
         </div>
      </footer>
   );
}
