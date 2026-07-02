"use client";

import { portfolio } from "@/entities/const";
import { motion } from "framer-motion";
import { GitCommitHorizontal, Building2, Calendar } from "lucide-react";
import SectionTitle from "../ui/SectionTitle";

function generateHash(str: string) {
   let hash = 0;
   for (let i = 0; i < str.length; i++) {
      hash = str.charCodeAt(i) + ((hash << 5) - hash);
   }
   return Math.abs(hash).toString(16).substring(0, 7).padStart(7, "0");
}

const commitHashes = portfolio.data.timeline.map((item) => generateHash(item.title + item.company));

export default function TimelineSection() {
   return (
      <section
         id="timeline"
         className="relative overflow-hidden py-20 bg-muted/30"
      >
         <div className="container mx-auto px-4">
            <SectionTitle>Timeline</SectionTitle>

            <div className="mt-12 relative max-w-5xl mx-auto">
               {/* Main trunk line */}
               <div className="absolute left-6 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-[2px]">
                  <div className="h-full w-full bg-gradient-to-b from-primary via-primary/60 to-primary/20 rounded-full" />
               </div>

               {/* Timeline Items */}
               <div className="space-y-10">
                  {portfolio.data.timeline.map((item, index) => {
                     const isLeft = index % 2 === 0;

                     return (
                        <motion.div
                           key={index}
                           initial={{ opacity: 0, y: 30 }}
                           whileInView={{ opacity: 1, y: 0 }}
                           viewport={{ once: true, margin: "-50px" }}
                           transition={{ duration: 0.5, delay: index * 0.15 }}
                           className={`relative flex items-start gap-6 ${
                              // mobile: always right of the line
                              // desktop: alternate sides
                              "md:gap-0"
                           }`}
                        >
                           {/* === MOBILE layout (always left-aligned) === */}
                           <div className="md:hidden flex items-start gap-4 pl-2 w-full">
                              {/* Dot on the line */}
                              <div className="relative z-10 flex-shrink-0 mt-1">
                                 <div className="w-10 h-10 rounded-full border-2 border-primary bg-card flex items-center justify-center animate-dot-pulse">
                                    <GitCommitHorizontal className="w-4 h-4 text-primary" />
                                 </div>
                              </div>

                              {/* Branch line + Card */}
                              <div className="flex-1 min-w-0">
                                 <TimelineCard
                                    item={item}
                                    hash={commitHashes[index]}
                                    index={index}
                                 />
                              </div>
                           </div>

                           {/* === DESKTOP layout (alternating) === */}
                           <div className="hidden md:flex items-start w-full">
                              {/* Left content */}
                              <div className="w-1/2 pr-8 flex justify-end">
                                 {isLeft && (
                                    <div className="w-full max-w-lg">
                                       <TimelineCard
                                          item={item}
                                          hash={commitHashes[index]}
                                          index={index}
                                       />
                                    </div>
                                 )}
                              </div>

                              {/* Center dot */}
                              <div className="relative z-10 flex-shrink-0 -mx-5">
                                 <div className="w-10 h-10 rounded-full border-2 border-primary bg-card flex items-center justify-center animate-dot-pulse">
                                    <GitCommitHorizontal className="w-4 h-4 text-primary" />
                                 </div>
                              </div>

                              {/* Right content */}
                              <div className="w-1/2 pl-8">
                                 {!isLeft && (
                                    <div className="w-full max-w-lg">
                                       <TimelineCard
                                          item={item}
                                          hash={commitHashes[index]}
                                          index={index}
                                       />
                                    </div>
                                 )}
                              </div>
                           </div>
                        </motion.div>
                     );
                  })}
               </div>

               {/* End dot */}
               <div className="absolute left-6 md:left-1/2 md:-translate-x-1/2 bottom-0 z-10">
                  <div className="w-4 h-4 rounded-full bg-primary/40 border-2 border-primary/20" />
               </div>
            </div>
         </div>
      </section>
   );
}

function TimelineCard({
   item,
   hash,
   index,
}: {
   item: (typeof portfolio.data.timeline)[0];
   hash: string;
   index: number;
}) {
   const isFirst = index === 0;

   return (
      <div
         className={`rounded-xl border bg-card p-5 transition-all duration-300 hover:dev-glow-sm group ${
            isFirst
               ? "border-primary/40 hover:border-primary/60"
               : "border-border hover:border-primary/30"
         }`}
      >
         {/* Commit hash */}
         <div className="flex items-center gap-2 mb-3">
            <span className="font-mono text-xs text-primary/70 bg-primary/10 px-2 py-0.5 rounded">
               {hash}
            </span>
            {isFirst && (
               <span className="font-mono text-[10px] text-emerald-500 bg-emerald-500/10 px-1.5 py-0.5 rounded uppercase tracking-wider">
                  HEAD
               </span>
            )}
         </div>

         {/* Title */}
         <h3 className="text-base font-semibold text-foreground font-mono leading-snug">
            {item.title}
         </h3>

         {/* Company */}
         <div className="flex items-center gap-1.5 mt-2 text-muted-foreground">
            <Building2 className="w-3.5 h-3.5 shrink-0" />
            <p className="text-sm truncate">{item.company}</p>
         </div>

         {/* Period */}
         <div className="flex items-center gap-1.5 mt-1.5">
            <Calendar className="w-3.5 h-3.5 text-primary shrink-0" />
            <p className="text-xs font-mono text-primary">{item.period}</p>
         </div>

         {/* Description */}
         <p className="text-sm text-muted-foreground leading-relaxed mt-3">
            {item.description}
         </p>
      </div>
   );
}
