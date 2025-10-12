"use client";

import { motion } from "framer-motion";
import {
   Card,
   CardContent,
   CardDescription,
   CardHeader,
   CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const contactSchema = z.object({
   name: z.string().min(2, "Nome deve ter pelo menos 2 caracteres"),
   email: z.string().email("Email inválido"),
   message: z.string().min(10, "Mensagem deve ter pelo menos 10 caracteres"),
});

type ContactForm = z.infer<typeof contactSchema>;

export default function ContactSection() {
   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm<ContactForm>({
      resolver: zodResolver(contactSchema),
   });

   const onSubmit = async (data: ContactForm) => {
      // Here you would typically send the form data to your backend
      console.log(data);
   };

   return (
      <section className="py-16">
         <div className="container px-4">
            <motion.div
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="max-w-2xl mx-auto text-center mb-12"
            >
               <h2 className="text-3xl font-bold mb-4">
                  Vamos trabalhar juntos?
               </h2>
               <p className="text-muted-foreground">
                  Traga suas ideias à vida. Vamos transformar sua visão em
                  realidade.
               </p>
            </motion.div>

            <motion.div
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.2 }}
            >
               <Card className="max-w-2xl mx-auto">
                  <CardHeader>
                     <CardTitle>Entre em Contato</CardTitle>
                     <CardDescription>
                        Preencha o formulário abaixo e entrarei em contato em
                        breve.
                     </CardDescription>
                  </CardHeader>
                  <CardContent>
                     <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="space-y-6"
                     >
                        <div className="space-y-2">
                           <Label htmlFor="name">Nome</Label>
                           <Input
                              id="name"
                              placeholder="Seu nome"
                              {...register("name")}
                           />
                           {errors.name && (
                              <p className="text-sm text-red-500">
                                 {errors.name.message}
                              </p>
                           )}
                        </div>

                        <div className="space-y-2">
                           <Label htmlFor="email">Email</Label>
                           <Input
                              id="email"
                              type="email"
                              placeholder="seu.email@exemplo.com"
                              {...register("email")}
                           />
                           {errors.email && (
                              <p className="text-sm text-red-500">
                                 {errors.email.message}
                              </p>
                           )}
                        </div>

                        <div className="space-y-2">
                           <Label htmlFor="message">Mensagem</Label>
                           <Textarea
                              id="message"
                              placeholder="Digite sua mensagem..."
                              className="min-h-[150px]"
                              {...register("message")}
                           />
                           {errors.message && (
                              <p className="text-sm text-red-500">
                                 {errors.message.message}
                              </p>
                           )}
                        </div>

                        <Button type="submit" className="w-full">
                           Enviar Mensagem
                        </Button>
                     </form>
                  </CardContent>
               </Card>
            </motion.div>
         </div>
      </section>
   );
}
