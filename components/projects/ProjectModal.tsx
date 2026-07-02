"use client";

import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, FileCode } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import LanguageBadge from "../ui/LanguageBadge";
import { FaGithub } from "react-icons/fa";

interface ProjectModalProps {
   isOpen: boolean;
   onClose: () => void;
   project: {
      name: string;
      description: string;
      images: string[];
      languages: string[];
      github?: string;
      liveDemo?: string;
   };
}

export default function ProjectModal({
   isOpen,
   onClose,
   project,
}: ProjectModalProps) {
   const [currentImageIndex, setCurrentImageIndex] = useState(0);

   const nextImage = () => {
      setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
   };

   const previousImage = () => {
      setCurrentImageIndex(
         (prev) => (prev - 1 + project.images.length) % project.images.length
      );
   };

   return (
      <Dialog open={isOpen} onOpenChange={onClose}>
         <DialogContent className="max-w-3xl w-[90vw] p-0 bg-card border-border overflow-hidden">
            <DialogTitle className="sr-only">{project.name}</DialogTitle>
            <DialogDescription className="sr-only">{project.description}</DialogDescription>
            {/* Editor-style window bar */}
            <div className="flex items-center gap-2 px-4 py-2.5 border-b border-border bg-muted/30">
               <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/70" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                  <div className="w-3 h-3 rounded-full bg-green-500/70" />
               </div>
               <div className="flex-1 flex justify-center">
                  <span className="text-xs font-mono text-muted-foreground flex items-center gap-1.5">
                     <FileCode className="h-3 w-3" />
                     {project.name.toLowerCase().replace(/[\s/]+/g, "-")}.tsx
                  </span>
               </div>
            </div>

            {/* Image Carousel */}
            <div className="relative aspect-video bg-muted/20">
               <AnimatePresence mode="wait">
                  <motion.div
                     key={currentImageIndex}
                     initial={{ opacity: 0 }}
                     animate={{ opacity: 1 }}
                     exit={{ opacity: 0 }}
                     transition={{ duration: 0.3 }}
                     className="absolute inset-0"
                  >
                     <Image
                        src={project.images[currentImageIndex]}
                        alt={`${project.name} screenshot ${
                           currentImageIndex + 1
                        }`}
                        fill
                        className="object-cover"
                     />
                  </motion.div>
               </AnimatePresence>

               {project.images.length > 1 && (
                  <>
                     <Button
                        variant="ghost"
                        size="icon"
                        className="absolute left-2 top-1/2 -translate-y-1/2 bg-background/40 hover:bg-background/70 backdrop-blur-sm rounded-lg"
                        onClick={previousImage}
                     >
                        <ChevronLeft className="h-5 w-5" />
                     </Button>
                     <Button
                        variant="ghost"
                        size="icon"
                        className="absolute right-2 top-1/2 -translate-y-1/2 bg-background/40 hover:bg-background/70 backdrop-blur-sm rounded-lg"
                        onClick={nextImage}
                     >
                        <ChevronRight className="h-5 w-5" />
                     </Button>
                  </>
               )}

               {/* Image Counter */}
               {project.images.length > 1 && (
                  <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-background/60 backdrop-blur-sm px-3 py-1 rounded-full">
                     <p className="text-xs font-mono text-foreground">
                        {currentImageIndex + 1} / {project.images.length}
                     </p>
                  </div>
               )}
            </div>

            {/* Project Details */}
            <div className="p-6">
               <h2 className="text-xl font-bold font-mono mb-3">
                  {project.name}
               </h2>
               <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                  {project.description}
               </p>

               <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.languages.map((tech) => (
                     <LanguageBadge key={tech} name={tech} />
                  ))}
               </div>

               <div className="flex gap-3">
                  {project.github && (
                     <Button
                        variant="outline"
                        size="sm"
                        asChild
                        className="font-mono text-xs hover:border-primary hover:text-primary"
                     >
                        <a
                           href={project.github}
                           target="_blank"
                           rel="noopener noreferrer"
                        >
                           <FaGithub className="h-3.5 w-3.5 mr-1.5" />
                           Ver Código
                        </a>
                     </Button>
                  )}
                  {project.liveDemo && (
                     <Button
                        size="sm"
                        asChild
                        className="font-mono text-xs"
                     >
                        <a
                           href={project.liveDemo}
                           target="_blank"
                           rel="noopener noreferrer"
                        >
                           Ver Demo
                        </a>
                     </Button>
                  )}
               </div>
            </div>
         </DialogContent>
      </Dialog>
   );
}
