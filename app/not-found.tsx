import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Terminal, Home } from "lucide-react";

export default function NotFound() {
   return (
      <div className="min-h-screen flex items-center justify-center bg-background p-4">
         <div className="max-w-md w-full space-y-8 text-center">
            <div className="space-y-4">
               <div className="flex justify-center mb-8">
                  <div className="rounded-xl border border-border bg-card p-6 dev-glow">
                     <Terminal className="h-12 w-12 text-primary" />
                  </div>
               </div>
               
               <h1 className="text-4xl font-bold font-mono tracking-tight">
                  <span className="text-primary">404</span>
                  <span className="text-muted-foreground"> | </span>
                  <span className="text-foreground">Not Found</span>
               </h1>
               
               <p className="text-muted-foreground font-mono text-sm mt-4">
                  <span className="text-primary">{">"}</span> O arquivo ou diretório solicitado não foi encontrado.
                  <span className="inline-block w-[2px] h-4 bg-primary animate-cursor-blink ml-1 align-middle" />
               </p>
            </div>

            <Button asChild size="lg" className="font-mono mt-8 bg-primary hover:bg-primary/90 text-primary-foreground">
               <Link href="/">
                  <Home className="h-4 w-4 mr-2" />
                  Voltar ao Início
               </Link>
            </Button>
         </div>
      </div>
   );
}
