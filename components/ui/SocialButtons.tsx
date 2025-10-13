"use client";

import { portfolio } from "@/entities/const";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "../ui/button";
import { Github, Linkedin, Twitter } from "lucide-react";

export default function SocialButtons({ className }: { className?: string }) {
   const socialIcons = {
      github: <Github className="h-5 w-5" />,
      linkedin: <Linkedin className="h-5 w-5" />,
      twitter: <Twitter className="h-5 w-5" />,
   };

   const buttonVariants = {
      initial: { scale: 1 },
      hover: { scale: 1.1 },
   };

   return (
      <div className={`flex gap-2 ${className}`}>
         {Object.entries(portfolio.socials).map(([platform, url]) => (
            <motion.div
               key={platform}
               variants={buttonVariants}
               initial="initial"
               whileHover="hover"
            >
               <Link href={url} target="_blank" rel="noopener noreferrer">
                  <Button
                     variant="ghost"
                     size="icon"
                     className="rounded-full hover:bg-primary/20 hover:text-primary"
                  >
                     {socialIcons[platform as keyof typeof socialIcons]}
                  </Button>
               </Link>
            </motion.div>
         ))}
      </div>
   );
}
