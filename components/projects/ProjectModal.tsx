"use client";

import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Badge } from "../ui/badge";

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
         <DialogContent className="max-w-3xl w-[90vw] p-0 bg-background">
            {/* Image Carousel */}
            <div className="relative aspect-video bg-muted">
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
                        className="absolute left-2 top-1/2 -translate-y-1/2 bg-background/20 hover:bg-background/40"
                        onClick={previousImage}
                     >
                        <ChevronLeft className="h-6 w-6" />
                     </Button>
                     <Button
                        variant="ghost"
                        size="icon"
                        className="absolute right-2 top-1/2 -translate-y-1/2 bg-background/20 hover:bg-background/40"
                        onClick={nextImage}
                     >
                        <ChevronRight className="h-6 w-6" />
                     </Button>
                  </>
               )}

               {/* Image Counter */}
               {project.images.length > 1 && (
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-background/20 backdrop-blur px-2 py-1 rounded-full">
                     <p className="text-sm">
                        {currentImageIndex + 1} / {project.images.length}
                     </p>
                  </div>
               )}
            </div>

            {/* Project Details */}
            <div className="p-6">
               <h2 className="text-2xl font-bold mb-4">{project.name}</h2>
               <p className="text-muted-foreground mb-6">
                  {project.description}
               </p>

               <div className="flex flex-wrap gap-2 mb-6">
                  {project.languages.map((tech) => (
                     <Badge variant="outline" key={tech}>
                        {tech}
                     </Badge>
                  ))}
               </div>

               <div className="flex gap-4">
                  {project.github && (
                     <Button variant="secondary" asChild>
                        <a
                           href={project.github}
                           target="_blank"
                           rel="noopener noreferrer"
                        >
                           Ver Código
                        </a>
                     </Button>
                  )}
                  {project.liveDemo && (
                     <Button asChild>
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
