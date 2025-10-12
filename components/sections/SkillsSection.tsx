"use client";

import { motion } from "framer-motion";
import { portfolio } from "@/entities/const";
import { TRandomIcon } from "@/entities/types";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import {
   SiJavascript,
   SiTypescript,
   SiHtml5,
   SiCss3,
   SiReact,
   SiNextdotjs,
   SiNodedotjs,
   SiExpress,
   SiPython,
   SiOpenjdk,
   SiC,
   SiMongodb,
   SiGit,
   SiGithub,
   SiVisualstudiocode,
   SiLinkedin,
   SiTwitter,
} from "react-icons/si";

const iconComponents: Record<TRandomIcon, React.ElementType> = {
   JavaScript: SiJavascript,
   TypeScript: SiTypescript,
   HTML: SiHtml5,
   CSS: SiCss3,
   React: SiReact,
   NextJs: SiNextdotjs,
   NodeJs: SiNodedotjs,
   ExpressJs: SiExpress,
   Python: SiPython,
   Java: SiOpenjdk,
   C: SiC,
   MongoDB: SiMongodb,
   Git: SiGit,
   Github: SiGithub,
   VSCode: SiVisualstudiocode,
   Linkedin: SiLinkedin,
   Twitter: SiTwitter,
};

const fadeInUp = {
   initial: { y: 20, opacity: 0 },
   animate: { y: 0, opacity: 1 },
   transition: { duration: 0.5 },
};

const containerAnimation = {
   initial: { opacity: 0 },
   animate: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

export default function SkillsSection() {
   type SkillCategory = {
      key: keyof typeof portfolio.data.skills;
      color: string;
   };

   const skillCategories: SkillCategory[] = [
      { key: "frontend", color: "from-blue-500 to-cyan-500" },
      { key: "backend", color: "from-purple-500 to-pink-500" },
      { key: "database", color: "from-green-500 to-emerald-500" },
      { key: "tools", color: "from-orange-500 to-yellow-500" },
   ];

   return (
      <section className="py-24 bg-background/80">
         <div className="container px-4">
            <motion.div
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="text-center mb-16"
            >
               <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-600 mb-4">
                  Skills
               </h2>
               <p className="text-muted-foreground max-w-2xl mx-auto">
                  Tecnologias e ferramentas que utilizo no desenvolvimento dos
                  meus projetos
               </p>
            </motion.div>

            <div className="grid lg:grid-cols-[300px,1fr] gap-12">
               {/* Categories */}
               <motion.div
                  variants={containerAnimation}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  className="space-y-6"
               >
                  {skillCategories.map(({ key, color }) => (
                     <motion.div
                        key={key}
                        variants={fadeInUp}
                        className="relative"
                     >
                        <h3
                           className={cn(
                              "text-3xl font-extrabold tracking-wider",
                              "bg-clip-text text-transparent bg-gradient-to-r",
                              color
                           )}
                        >
                           {portfolio.data.skills[key].title}
                        </h3>
                     </motion.div>
                  ))}
               </motion.div>

               {/* Skills Grid */}
               <motion.div
                  variants={containerAnimation}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  className="grid gap-8"
               >
                  {skillCategories.map(({ key, color }) => (
                     <motion.div key={key} variants={fadeInUp}>
                        <Card className="p-6 bg-card/50 backdrop-blur border-border">
                           <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                              {portfolio.data.skills[key].skills.map(
                                 (skill) => {
                                    const Icon = iconComponents[skill.icon];
                                    return (
                                       <motion.div
                                          key={skill.name}
                                          whileHover={{ scale: 1.05 }}
                                          className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
                                       >
                                          <Icon className="w-6 h-6" />
                                          <span className="text-sm font-medium">
                                             {skill.name}
                                          </span>
                                       </motion.div>
                                    );
                                 }
                              )}
                           </div>
                        </Card>
                     </motion.div>
                  ))}
               </motion.div>
            </div>
         </div>
      </section>
   );
}
