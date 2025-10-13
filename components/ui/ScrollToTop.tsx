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
               initial={{ opacity: 0, scale: 0.5 }}
               animate={{ opacity: 1, scale: 1 }}
               exit={{ opacity: 0, scale: 0.5 }}
               className="fixed bottom-8 right-8 z-50"
            >
               <Button
                  onClick={scrollToTop}
                  size="icon"
                  className="rounded-full shadow-lg bg-primary hover:bg-primary/90"
               >
                  <motion.div
                     animate={{ y: [0, -3, 0] }}
                     transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                     }}
                  >
                     <ChevronUp className="h-5 w-5" />
                  </motion.div>
               </Button>
            </motion.div>
         )}
      </AnimatePresence>
   );
}
