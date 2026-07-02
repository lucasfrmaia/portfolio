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
import { ExternalLink, Info, FolderGit2 } from "lucide-react";
import { portfolio } from "@/entities/const";
import Image from "next/image";
import Link from "next/link";
import ProjectModal from "@/components/projects/ProjectModal";
import { FaGithub } from "react-icons/fa";
import LanguageBadge from "../ui/LanguageBadge";
import SectionTitle from "../ui/SectionTitle";

const fadeInUp = {
   initial: { y: 20, opacity: 0 },
   animate: { y: 0, opacity: 1 },
};

export default function ProjectsSection() {
   const [selectedProject, setSelectedProject] = useState<
      (typeof portfolio.data.projects)[0] | null
   >(null);

   return (
      <section id="projects" className="py-20 bg-background">
         <div className="container px-4">
            <SectionTitle>
               {portfolio.data.sectionTitle.projects}
            </SectionTitle>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
               {portfolio.data.projects.map((project, index) => (
                  <motion.div
                     key={`${project.name}-${index}`}
                     variants={fadeInUp}
                     initial="initial"
                     whileInView="animate"
                     viewport={{ once: true }}
                     transition={{ delay: index * 0.08 }}
                  >
                     <Card className="h-full overflow-hidden group border-border hover:border-primary/30 transition-all duration-300 hover:dev-glow-sm bg-card">
                        {/* File tab header */}
                        <div className="flex items-center gap-2 px-4 py-2 border-b border-border bg-muted/30">
                           <FolderGit2 className="h-3.5 w-3.5 text-primary" />
                           <span className="text-xs font-mono text-muted-foreground truncate">
                              ~/projects/{project.name.toLowerCase().replace(/[\s/]+/g, "-")}
                           </span>
                        </div>

                        {/* Image */}
                        <div className="relative h-44 overflow-hidden">
                           {project.images[0] ? (
                              <Image
                                 src={project.images[0]}
                                 alt={project.name}
                                 fill
                                 className="object-cover transition-transform duration-500 group-hover:scale-105"
                                 sizes="(max-width: 1080px) 100vw, (max-width: 1920px) 50vw, 33vw"
                                 quality={75}
                              />
                           ) : (
                              <div className="w-full h-full bg-gradient-to-br from-primary/5 to-primary/10 flex items-center justify-center">
                                 <span className="text-lg font-mono font-semibold text-primary/40">
                                    {project.name}
                                 </span>
                              </div>
                           )}
                        </div>

                        <CardHeader className="pb-2">
                           <CardTitle className="text-lg font-mono">
                              {project.name}
                           </CardTitle>
                        </CardHeader>

                        <CardContent className="pb-3">
                           <p className="text-sm text-muted-foreground line-clamp-3 leading-relaxed">
                              {project.description}
                           </p>
                           <div className="flex flex-wrap gap-1.5 mt-4">
                              {project.languages.map((tech) => (
                                 <LanguageBadge key={tech} name={tech} />
                              ))}
                           </div>
                        </CardContent>

                        <CardFooter className="flex gap-2 pt-0">
                           {project.github && (
                              <Button
                                 variant="outline"
                                 size="sm"
                                 asChild
                                 className="font-mono text-xs hover:border-primary hover:text-primary"
                              >
                                 <Link href={project.github} target="_blank">
                                    <FaGithub className="h-3.5 w-3.5 mr-1.5" />
                                    Código
                                 </Link>
                              </Button>
                           )}
                           {project?.liveDemo && (
                              <Button
                                 size="sm"
                                 asChild
                                 className="font-mono text-xs"
                              >
                                 <Link
                                    href={project?.liveDemo}
                                    target="_blank"
                                 >
                                    <ExternalLink className="h-3.5 w-3.5 mr-1.5" />
                                    Demo
                                 </Link>
                              </Button>
                           )}
                           <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => setSelectedProject(project)}
                              className="font-mono text-xs ml-auto hover:text-primary"
                           >
                              <Info className="h-3.5 w-3.5 mr-1.5" />
                              Detalhes
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
