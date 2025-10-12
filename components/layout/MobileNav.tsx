"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { portfolio } from "@/entities/const";
import Link from "next/link";
import { useState } from "react";

export default function MobileNav() {
   const [isOpen, setIsOpen] = useState(false);

   return (
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
         <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
               <Menu className="h-6 w-6" />
               <span className="sr-only">Toggle menu</span>
            </Button>
         </SheetTrigger>
         <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <nav className="flex flex-col gap-4">
               {Object.entries(portfolio.data.naveBar).map(([key, value]) => (
                  <Link
                     key={key}
                     href={`#${key}`}
                     className="block px-2 py-1 text-lg hover:text-primary transition"
                     onClick={() => setIsOpen(false)}
                  >
                     {value}
                  </Link>
               ))}
            </nav>
         </SheetContent>
      </Sheet>
   );
}
