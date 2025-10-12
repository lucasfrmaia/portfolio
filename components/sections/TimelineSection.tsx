"use client";

import { motion } from "framer-motion";
import { portfolio } from "@/entities/const";

const fadeInUp = {
   initial: { y: 20, opacity: 0 },
   animate: { y: 0, opacity: 1 },
};

export default function TimelineSection() {
   return (
      <section className="py-16 bg-gradient-to-b from-background to-secondary/10">
         <div className="container px-4">
            <motion.h2
               className="text-3xl font-bold text-center mb-12"
               initial={{ opacity: 0 }}
               whileInView={{ opacity: 1 }}
               viewport={{ once: true }}
            >
               {portfolio.data.sectionTitle.timeline}
            </motion.h2>

            <div className="max-w-3xl mx-auto">
               {portfolio.data.timeline.map((item, index) => (
                  <motion.div
                     key={item.title}
                     className="flex gap-4 mb-8"
                     variants={fadeInUp}
                     initial="initial"
                     whileInView="animate"
                     viewport={{ once: true }}
                     transition={{ delay: index * 0.1 }}
                  >
                     <div className="flex flex-col items-center">
                        <div className="w-3 h-3 rounded-full bg-primary" />
                        {index !== portfolio.data.timeline.length - 1 && (
                           <div className="w-0.5 h-full bg-border" />
                        )}
                     </div>
                     <div className="flex-1 bg-card p-6 rounded-lg shadow-md">
                        <h3 className="font-semibold text-lg mb-2">
                           {item.title}
                        </h3>
                        <p className="text-sm text-muted-foreground mb-2">
                           {item.date}
                        </p>
                        <p className="text-muted-foreground">{item.text}</p>
                     </div>
                  </motion.div>
               ))}
            </div>
         </div>
      </section>
   );
}
