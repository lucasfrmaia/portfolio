"use client";

import { motion } from "framer-motion";
import { portfolio } from "@/entities/const";
import Image from "next/image";
import SectionTitle from "../ui/SectionTitle";
import { Card, CardContent } from "../ui/card";

export default function AboutMeSection() {
   return (
      <section id="aboutMe" className="py-24 bg-[#0c0c0c]">
         <div className="container mx-auto">
            <SectionTitle>Sobre Mim</SectionTitle>

            <motion.div
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="mt-16"
            >
               <Card className="bg-gray-800/50 border-gray-700">
                  <CardContent className="p-6">
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                        <div className="space-y-4">
                           <h3 className="text-2xl font-semibold text-white">
                              {portfolio.data.about.presetation}
                           </h3>
                           <p className="text-gray-300 leading-relaxed">
                              {portfolio.data.about.aboutMe}
                           </p>
                           <p className="text-gray-300 leading-relaxed">
                              {portfolio.data.about.resume}
                           </p>
                        </div>
                        <div className="relative h-[300px] rounded-lg overflow-hidden">
                           <Image
                              src="/images/profile.jpg"
                              alt="Profile"
                              fill
                              className="object-cover"
                           />
                        </div>
                     </div>
                  </CardContent>
               </Card>
            </motion.div>
         </div>
      </section>
   );
}
