"use client";

import { useState, useEffect } from "react";
import { Button } from "./button";
import { ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function ScrollToTop() {
   const [show, setShow] = useState(false);

   useEffect(() => {
      const handleScroll = () => {
         setShow(window.scrollY > 300);
      };

      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
   }, []);

   const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
   };

   return (
      <AnimatePresence>
         {show && (
            <motion.div
               className="fixed bottom-4 left-4 z-50"
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               exit={{ opacity: 0, y: 20 }}
            >
               <Button
                  onClick={scrollToTop}
                  size="icon"
                  className="rounded-full shadow-lg bg-primary hover:bg-primary/90"
               >
                  <ChevronUp className="h-5 w-5" />
               </Button>
            </motion.div>
         )}
      </AnimatePresence>
   );
}
