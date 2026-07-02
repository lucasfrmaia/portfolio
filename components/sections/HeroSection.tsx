"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { portfolio } from "@/entities/const";
import SocialButtons from "../ui/SocialButtons";
import { FileCode, Download, FolderGit2 } from "lucide-react";

const fadeInUp = {
   initial: { y: 20, opacity: 0 },
   animate: { y: 0, opacity: 1 },
};

export default function HeroSection() {
   return (
      <section
         id="home"
         className="min-h-screen flex items-center justify-center bg-background pt-16"
      >
         <div className="container px-3 flex flex-col lg:flex-row items-center justify-around gap-12">
            <motion.div
               className="flex-1 text-center lg:text-left max-w-2xl"
               initial="initial"
               animate="animate"
               transition={{ staggerChildren: 0.12 }}
            >
               {/* Status badge */}
               <motion.div variants={fadeInUp} className="mb-6">
                  <span className="inline-flex items-center gap-2 px-1 py-1.5 rounded-full border border-border bg-card font-mono text-xs text-muted-foreground">
                     <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
                     </span>
                     Disponível para oportunidades
                  </span>
               </motion.div>

               {/* Greeting */}
               <motion.div
                  variants={fadeInUp}
                  className="text-base text-muted-foreground mb-2 font-mono"
               >
                  <span className="text-primary">$</span>{" "}
                  {portfolio.data.about.presetation}
               </motion.div>

               {/* Name */}
               <motion.h1
                  variants={fadeInUp}
                  className="text-4xl md:text-6xl font-bold mb-4 font-mono tracking-tight"
               >
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-emerald-400 to-cyan-400 dark:from-emerald-400 dark:via-green-300 dark:to-cyan-400">
                     {portfolio.name}
                  </span>
               </motion.h1>

               {/* Profession */}
               <motion.div
                  variants={fadeInUp}
                  className="text-lg md:text-xl font-mono text-muted-foreground mb-6 flex items-center justify-center lg:justify-start gap-2 flex-wrap"
               >
                  <span className="text-primary">{">"}</span>
                  {portfolio.data.about.profession.profession}
                  <span className="inline-block w-[2px] h-5 bg-primary animate-cursor-blink" />
               </motion.div>

               {/* Resume */}
               <motion.p
                  variants={fadeInUp}
                  className="text-muted-foreground max-w-lg mx-auto lg:mx-0 mb-8 leading-relaxed"
               >
                  {portfolio.data.about.resume}
               </motion.p>

               {/* Buttons */}
               <motion.div
                  variants={fadeInUp}
                  className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3"
               >
                  <Button
                     asChild
                     size="lg"
                     className="font-mono bg-primary hover:bg-primary/90 text-primary-foreground"
                  >
                     <Link href="/CV.pdf" target="_blank">
                        <Download className="h-4 w-4 mr-2" />
                        {portfolio.data.about.buttons.cv}
                     </Link>
                  </Button>

                  <Button
                     asChild
                     variant="outline"
                     size="lg"
                     className="font-mono border-border hover:border-primary hover:text-primary"
                  >
                     <Link href="#projects">
                        <FolderGit2 className="h-4 w-4 mr-2" />
                        {portfolio.data.about.buttons.projects}
                     </Link>
                  </Button>
               </motion.div>

               {/* Social */}
               <motion.div variants={fadeInUp} className="mt-8">
                  <SocialButtons className="justify-center lg:justify-start" />
               </motion.div>
            </motion.div>

            {/* Right side: Code block */}
            <motion.div
               className="flex-1 hidden lg:block max-w-md w-full"
               initial={{ opacity: 0, x: 40 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ duration: 0.6, delay: 0.3 }}
            >
               <div className="rounded-xl border border-border bg-card overflow-hidden dev-glow">
                  {/* Window bar */}
                  <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-card">
                     <div className="flex gap-1.5">
                        <div className="w-3 h-3 rounded-full bg-red-500/80" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                        <div className="w-3 h-3 rounded-full bg-green-500/80" />
                     </div>
                     <div className="flex-1 flex justify-center">
                        <span className="text-xs font-mono text-muted-foreground flex items-center gap-1.5">
                           <FileCode className="h-3 w-3" />
                           about.ts
                        </span>
                     </div>
                  </div>
                  {/* Code content */}
                  <div className="p-5 font-mono text-sm leading-relaxed">
                     <div className="text-muted-foreground">
                        <span className="text-purple-400 dark:text-purple-300">
                           const
                        </span>{" "}
                        <span className="text-cyan-600 dark:text-cyan-300">
                           developer
                        </span>{" "}
                        <span className="text-muted-foreground">=</span>{" "}
                        <span className="text-muted-foreground">{"{"}</span>
                     </div>
                     <div className="pl-4 mt-1">
                        <span className="text-foreground">name</span>
                        <span className="text-muted-foreground">: </span>
                        <span className="text-emerald-600 dark:text-emerald-400">{`"${portfolio.name}"`}</span>
                        <span className="text-muted-foreground">,</span>
                     </div>
                     <div className="pl-4">
                        <span className="text-foreground">role</span>
                        <span className="text-muted-foreground">: </span>
                        <span className="text-emerald-600 dark:text-emerald-400">
                           &quot;Software Dev&quot;
                        </span>
                        <span className="text-muted-foreground">,</span>
                     </div>
                     <div className="pl-4">
                        <span className="text-foreground">location</span>
                        <span className="text-muted-foreground">: </span>
                        <span className="text-emerald-600 dark:text-emerald-400">
                           &quot;Campina Grande, PB&quot;
                        </span>
                        <span className="text-muted-foreground">,</span>
                     </div>
                     <div className="pl-4">
                        <span className="text-foreground">stack</span>
                        <span className="text-muted-foreground">: [</span>
                        <span className="text-orange-500 dark:text-orange-300">
                           &quot;TypeScript&quot;
                        </span>
                        <span className="text-muted-foreground">, </span>
                        <span className="text-orange-500 dark:text-orange-300">
                           &quot;React&quot;
                        </span>
                        <span className="text-muted-foreground">, </span>
                        <span className="text-orange-500 dark:text-orange-300">
                           &quot;Node&quot;
                        </span>
                        <span className="text-muted-foreground">],</span>
                     </div>
                     <div className="pl-4">
                        <span className="text-foreground">available</span>
                        <span className="text-muted-foreground">: </span>
                        <span className="text-primary">true</span>
                        <span className="text-muted-foreground">,</span>
                     </div>
                     <div className="text-muted-foreground">{"}"}</div>
                  </div>
               </div>
            </motion.div>
         </div>
      </section>
   );
}
