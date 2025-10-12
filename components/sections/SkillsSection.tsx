"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Monitor, Server, Palette } from "lucide-react";
import { portfolio } from "@/entities/const";

const fadeInUp = {
   initial: { y: 20, opacity: 0 },
   animate: { y: 0, opacity: 1 },
   transition: { duration: 0.5 },
};

const skillIcons = {
   frontend: <Monitor className="h-8 w-8" />,
   backend: <Server className="h-8 w-8" />,
   design: <Palette className="h-8 w-8" />,
};

export default function SkillsSection() {
   return (
      <section className="py-16 bg-gradient-to-b from-background to-secondary/10">
         <div className="container px-4">
            <motion.h2
               className="text-3xl font-bold text-center mb-12"
               initial={{ opacity: 0 }}
               whileInView={{ opacity: 1 }}
               viewport={{ once: true }}
            >
               {portfolio.data.sectionTitle.skills}
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
               {portfolio.data.skills.map((skill, index) => (
                  <motion.div
                     key={skill.title}
                     variants={fadeInUp}
                     initial="initial"
                     whileInView="animate"
                     viewport={{ once: true }}
                     custom={index}
                  >
                     <Card className="h-full bg-card-gradient hover:shadow-lg transition-shadow duration-300">
                        <CardHeader>
                           <CardTitle className="flex items-center gap-2">
                              {skill.title}
                           </CardTitle>
                        </CardHeader>
                        <CardContent>
                           <p className="text-muted-foreground">
                              {skill.description}
                           </p>
                           <div className="flex flex-wrap gap-2 mt-4">
                              {skill.icons.map((tech) => (
                                 <span
                                    key={tech}
                                    className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary-foreground"
                                 >
                                    {tech}
                                 </span>
                              ))}
                           </div>
                        </CardContent>
                     </Card>
                  </motion.div>
               ))}
            </div>
         </div>
      </section>
   );
}
