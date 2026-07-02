"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { portfolio } from "@/entities/const";
import { scrollToSection } from "@/lib/scroll";
import { useState } from "react";

export default function MobileNav() {
   const [isOpen, setIsOpen] = useState(false);

   return (
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
         <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden rounded-lg">
               <Menu className="h-5 w-5" />
               <span className="sr-only">Toggle menu</span>
            </Button>
         </SheetTrigger>
         <SheetContent side="right" className="w-[280px] sm:w-[340px] bg-card">
            <nav className="flex flex-col gap-1 mt-8">
               {Object.entries(portfolio.data.naveBar).map(([key, value]) => (
                  <button
                     key={key}
                     onClick={() => {
                        scrollToSection(key);
                        setIsOpen(false);
                     }}
                     className="flex items-center gap-3 px-4 py-3 text-base font-mono text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-lg transition-all text-left group"
                  >
                     <span className="text-primary text-sm">{">"}</span>
                     <span>{value}</span>
                  </button>
               ))}
            </nav>
         </SheetContent>
      </Sheet>
   );
}
