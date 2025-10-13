"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
   Card,
   CardContent,
   CardFooter,
   CardHeader,
   CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Info } from "lucide-react";
import { portfolio } from "@/entities/const";
import Image from "next/image";
import Link from "next/link";
import ProjectModal from "@/components/projects/ProjectModal";
import { FaGithub } from "react-icons/fa";
import { Badge } from "../ui/badge";

const fadeInUp = {
   initial: { y: 20, opacity: 0 },
   animate: { y: 0, opacity: 1 },
};

export default function ProjectsSection() {
   const [selectedProject, setSelectedProject] = useState<
      (typeof portfolio.data.projects)[0] | null
   >(null);
   return (
      <section id="projects" className="py-16">
         <div className="container px-4">
            <motion.h2
               className="text-3xl font-bold text-center mb-12"
               initial={{ opacity: 0 }}
               whileInView={{ opacity: 1 }}
               viewport={{ once: true }}
            >
               {portfolio.data.sectionTitle.projects}
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
               {portfolio.data.projects.map((project, index) => (
                  <motion.div
                     key={project.name}
                     variants={fadeInUp}
                     initial="initial"
                     whileInView="animate"
                     viewport={{ once: true }}
                     transition={{ delay: index * 0.1 }}
                  >
                     <Card className="h-full overflow-hidden group hover:shadow-lg transition-shadow duration-300">
                        <div className="relative h-48 overflow-hidden">
                           {project.images[0] ? (
                              <Image
                                 src={project.images[0]}
                                 alt={project.name}
                                 fill
                                 className="object-cover transition-transform duration-300 group-hover:scale-110"
                                 sizes="(max-width: 1080px) 100vw, (max-width: 1920px) 50vw, 33vw"
                                 quality={75}
                              />
                           ) : (
                              <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                                 <span className="text-xl font-semibold text-primary/60">
                                    {project.name}
                                 </span>
                              </div>
                           )}
                        </div>

                        <CardHeader>
                           <CardTitle>{project.name}</CardTitle>
                        </CardHeader>

                        <CardContent>
                           <p className="text-muted-foreground line-clamp-3">
                              {project.description}
                           </p>
                           <div className="flex flex-wrap gap-2 mt-4">
                              {project.languages.map((tech) => (
                                 <Badge variant="outline" key={tech}>
                                    {tech}
                                 </Badge>
                              ))}
                           </div>
                        </CardContent>

                        <CardFooter className="flex gap-4">
                           {project.github && (
                              <Button variant="secondary" size="sm" asChild>
                                 <Link href={project.github} target="_blank">
                                    <FaGithub className="h-4 w-4 mr-2" /> Código
                                 </Link>
                              </Button>
                           )}
                           {project.liveDemo && (
                              <Button size="sm" asChild>
                                 <Link href={project.liveDemo} target="_blank">
                                    <ExternalLink className="h-4 w-4 mr-2" />{" "}
                                    Demo
                                 </Link>
                              </Button>
                           )}
                           <Button
                              variant="outline"
                              size="sm"
                              onClick={() => setSelectedProject(project)}
                           >
                              <Info className="h-4 w-4 mr-2" /> Detalhes
                           </Button>
                        </CardFooter>
                     </Card>
                  </motion.div>
               ))}
            </div>
         </div>

         {selectedProject && (
            <ProjectModal
               isOpen={!!selectedProject}
               onClose={() => setSelectedProject(null)}
               project={selectedProject}
            />
         )}
      </section>
   );
}
