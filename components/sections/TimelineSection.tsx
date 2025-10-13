"use client";

import { portfolio } from "@/entities/const";
import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import SectionTitle from "../ui/SectionTitle";

export default function TimelineSection() {
   return (
      <section
         id="timeline"
         className="relative overflow-hidden py-24 bg-[#0c0c0c]"
      >
         <div className="container mx-auto">
            <SectionTitle>Timeline</SectionTitle>

            <div className="mt-16 relative">
               {/* Line */}
               <div className="absolute left-8 top-0 bottom-0 w-[1px] bg-gray-700" />

               {/* Timeline Items */}
               <div className="space-y-12">
                  {portfolio.data.timeline.map((item, index) => (
                     <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                        className="relative pl-16 group"
                     >
                        {/* Icon */}
                        <div className="absolute left-0 p-3 rounded-full bg-gray-800 border border-gray-700 group-hover:border-primary group-hover:text-primary transition-all duration-300">
                           <Briefcase size={24} />
                        </div>

                        {/* Content */}
                        <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700 hover:translate-x-1 transition-all duration-300">
                           <h3 className="text-xl font-semibold text-white">
                              {item.title}
                           </h3>
                           <p className="text-gray-400 text-sm mt-1">
                              {item.company}
                           </p>
                           <p className="text-blue-400 text-sm mt-1">
                              {item.period}
                           </p>
                           <p className="text-gray-300 text-sm leading-relaxed mt-3">
                              {item.description}
                           </p>
                        </div>
                     </motion.div>
                  ))}
               </div>
            </div>
         </div>
      </section>
   );
}
