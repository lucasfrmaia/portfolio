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
   SiApacheairflow,
   SiApachespark,
   SiSqlite,
} from "react-icons/si";
import {
   FaAtlas,
   FaCode,
   FaCss3,
   FaDocker,
   FaLinkedin,
   FaTwitter,
} from "react-icons/fa";
import SectionTitle from "../ui/SectionTitle";

const iconComponents: Record<TRandomIcon, React.ElementType> = {
   JavaScript: SiJavascript,
   TypeScript: SiTypescript,
   HTML: SiHtml5,
   CSS: FaCss3,
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
   VSCode: FaCode,
   Linkedin: FaLinkedin,
   Twitter: FaTwitter,
   "Apache Airflow": SiApacheairflow,
   "Apache Atlas": FaAtlas,
   "Apache Spark": SiApachespark,
   Docker: FaDocker,
   SQL: SiSqlite,
};

const categoryPrefixes: Record<string, string> = {
   frontend: "import",
   backend: "require",
   data_enginner: "from",
   tools: "use",
};

const categoryColors: Record<string, string> = {
   frontend: "border-cyan-500/30 hover:border-cyan-500/60",
   backend: "border-purple-500/30 hover:border-purple-500/60",
   data_enginner: "border-emerald-500/30 hover:border-emerald-500/60",
   tools: "border-orange-500/30 hover:border-orange-500/60",
};

const categoryAccents: Record<string, string> = {
   frontend: "text-cyan-500",
   backend: "text-purple-500",
   data_enginner: "text-emerald-500",
   tools: "text-orange-500",
};

export default function SkillsSection() {
   const skillCategories = Object.keys(
      portfolio.data.skills,
   ) as (keyof typeof portfolio.data.skills)[];

   return (
      <section id="skills" className="py-20 bg-background">
         <div className="container px-4">
            <SectionTitle>Skills</SectionTitle>

            <motion.p
               className="text-muted-foreground max-w-2xl mx-auto text-center mb-12 text-sm"
               initial={{ opacity: 0 }}
               whileInView={{ opacity: 1 }}
               viewport={{ once: true }}
            >
               Tecnologias e ferramentas que utilizo no desenvolvimento dos meus
               projetos
            </motion.p>

            <div className="grid md:grid-cols-2 gap-6">
               {skillCategories.map((key, catIndex) => (
                  <motion.div
                     key={key}
                     initial={{ opacity: 0, y: 20 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     transition={{ delay: catIndex * 0.1, duration: 0.4 }}
                  >
                     <Card
                        className={cn(
                           "p-6 bg-card/80 backdrop-blur border transition-all duration-300",
                           categoryColors[key],
                        )}
                     >
                        {/* Category header styled as import statement */}
                        <div className="mb-6 font-mono text-sm">
                           <span className="text-purple-400 dark:text-purple-300">
                              {categoryPrefixes[key]}
                           </span>{" "}
                           <span className="text-muted-foreground">{"{ "}</span>
                           <span
                              className={cn(
                                 "font-semibold",
                                 categoryAccents[key],
                              )}
                           >
                              {portfolio.data.skills[key].title}
                           </span>
                           <span className="text-muted-foreground">{" }"}</span>
                        </div>

                        {/* Skills grid */}
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                           {portfolio.data.skills[key].skills.map(
                              (skill, index) => {
                                 const Icon =
                                    iconComponents[skill.icon as TRandomIcon];
                                 return (
                                    <motion.div
                                       key={skill.name}
                                       initial={{ opacity: 0 }}
                                       whileInView={{ opacity: 1 }}
                                       viewport={{ once: true }}
                                       transition={{
                                          delay: catIndex * 0.05 + index * 0.03,
                                       }}
                                       whileHover={{ scale: 1.03 }}
                                       className="flex items-center gap-3 p-2.5 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-all duration-200 group cursor-default"
                                    >
                                       <Icon className="w-5 h-5 shrink-0 group-hover:text-primary transition-colors" />
                                       <span className="text-sm font-mono truncate">
                                          {skill.name}
                                       </span>
                                    </motion.div>
                                 );
                              },
                           )}
                        </div>
                     </Card>
                  </motion.div>
               ))}
            </div>
         </div>
      </section>
   );
}
