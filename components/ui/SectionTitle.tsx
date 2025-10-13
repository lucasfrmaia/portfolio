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
      <motion.h2
         className={cn(
            "text-3xl md:text-4xl font-bold text-center relative w-fit mx-auto",
            className
         )}
         initial={{ opacity: 0, y: 20 }}
         whileInView={{ opacity: 1, y: 0 }}
         viewport={{ once: true }}
      >
         <span className="bg-gradient-to-r from-purple-500 to-purple-800 bg-clip-text text-transparent font-mono">
            {children}
         </span>
         <motion.div
            className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-purple-800 rounded-full"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
         />
      </motion.h2>
   );
}
