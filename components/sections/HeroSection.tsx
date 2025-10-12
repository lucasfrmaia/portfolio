"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { portfolio } from "@/entities/const";

const fadeInUp = {
   initial: { y: 20, opacity: 0 },
   animate: { y: 0, opacity: 1 },
};

export default function HeroSection() {
   return (
      <section className="min-h-screen flex items-center justify-center bg-hero-gradient dark:bg-none dark:bg-background pt-16">
         <div className="container px-4 flex flex-col lg:flex-row items-center justify-between">
            <motion.div
               className="flex-1 text-center lg:text-left"
               initial="initial"
               animate="animate"
               transition={{ staggerChildren: 0.1 }}
            >
               <motion.div
                  variants={fadeInUp}
                  className="text-lg text-muted-foreground mb-2"
               >
                  {portfolio.data.about.presetation}
               </motion.div>

               <motion.h1
                  variants={fadeInUp}
                  className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-600"
               >
                  {portfolio.name}
               </motion.h1>

               <motion.div
                  variants={fadeInUp}
                  className="text-xl md:text-2xl font-semibold mb-6"
               >
                  {portfolio.data.about.profession.profession}
               </motion.div>

               <motion.p
                  variants={fadeInUp}
                  className="text-muted-foreground max-w-lg mx-auto lg:mx-0 mb-8"
               >
                  {portfolio.data.about.resume}
               </motion.p>

               <motion.div
                  variants={fadeInUp}
                  className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
               >
                  <Button asChild size="lg">
                     <Link href="/cv.pdf" target="_blank">
                        {portfolio.data.about.buttons.cv}
                     </Link>
                  </Button>

                  <Button asChild variant="secondary" size="lg">
                     <Link href="#projects">
                        {portfolio.data.about.buttons.aboutMe}
                     </Link>
                  </Button>
               </motion.div>

               <motion.div
                  variants={fadeInUp}
                  className="flex items-center justify-center lg:justify-start gap-6 mt-8"
               >
                  <Link
                     href={portfolio.socials.github}
                     target="_blank"
                     className="text-2xl hover:text-primary transition"
                  >
                     <FaGithub />
                  </Link>
                  <Link
                     href={portfolio.socials.linkedin}
                     target="_blank"
                     className="text-2xl hover:text-primary transition"
                  >
                     <FaLinkedin />
                  </Link>
                  <Link
                     href={portfolio.socials.twitter}
                     target="_blank"
                     className="text-2xl hover:text-primary transition"
                  >
                     <FaTwitter />
                  </Link>
               </motion.div>
            </motion.div>

            <motion.div
               className="flex-1 mt-8 lg:mt-0"
               initial={{ opacity: 0, scale: 0.8 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ duration: 0.5 }}
            >
               <div className="relative w-64 h-64 mx-auto bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center text-4xl font-bold text-white">
                  {portfolio.name
                     .split(" ")
                     .map((n) => n[0])
                     .join("")}
               </div>
            </motion.div>
         </div>
      </section>
   );
}
