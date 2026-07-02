"use client";

import { portfolio } from "@/entities/const";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "../ui/button";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function SocialButtons({ className }: { className?: string }) {
   const socialIcons = {
      github: <FaGithub className="h-[18px] w-[18px]" />,
      linkedin: <FaLinkedin className="h-[18px] w-[18px]" />,
      twitter: <FaTwitter className="h-[18px] w-[18px]" />,
   };

   return (
      <div className={`flex gap-1.5 ${className}`}>
         {Object.entries(portfolio.socials).map(([platform, url]) => (
            <motion.div
               key={platform}
               whileHover={{ scale: 1.1 }}
               whileTap={{ scale: 0.95 }}
            >
               <Link href={url} target="_blank" rel="noopener noreferrer">
                  <Button
                     variant="ghost"
                     size="icon"
                     className="rounded-lg hover:bg-primary/10 hover:text-primary transition-colors"
                  >
                     {socialIcons[platform as keyof typeof socialIcons]}
                  </Button>
               </Link>
            </motion.div>
         ))}
      </div>
   );
}
