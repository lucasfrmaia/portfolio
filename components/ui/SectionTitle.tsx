"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionTitleProps {
   children: ReactNode;
   className?: string;
}

export default function SectionTitle({
   children,
   className,
}: SectionTitleProps) {
   return (
      <motion.div
         className={cn(
            "flex items-center gap-3 w-fit mx-auto mb-12",
            className
         )}
         initial={{ opacity: 0, y: 20 }}
         whileInView={{ opacity: 1, y: 0 }}
         viewport={{ once: true }}
      >
         <span className="text-primary font-mono text-xl md:text-2xl select-none">
            {"//"}
         </span>
         <h2 className="text-3xl md:text-4xl font-mono font-bold tracking-tight text-foreground">
            {children}
         </h2>
         <motion.div
            className="hidden sm:block h-[2px] w-16 bg-gradient-to-r from-primary to-transparent rounded-full mt-1"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
            style={{ transformOrigin: "left" }}
         />
      </motion.div>
   );
}
