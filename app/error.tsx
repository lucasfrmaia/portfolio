"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Terminal, RefreshCcw } from "lucide-react";

export default function Error({
   error,
   reset,
}: {
   error: Error & { digest?: string };
   reset: () => void;
}) {
   useEffect(() => {
      console.error(error);
   }, [error]);

   return (
      <div className="min-h-screen flex items-center justify-center bg-background p-4">
         <div className="max-w-md w-full space-y-8 text-center">
            <div className="space-y-4">
               <div className="flex justify-center mb-8">
                  <div className="rounded-xl border border-red-500/20 bg-card p-6 dev-glow shadow-[0_0_15px_rgba(239,68,68,0.2)]">
                     <Terminal className="h-12 w-12 text-red-500" />
                  </div>
               </div>

               <h1 className="text-4xl font-bold font-mono tracking-tight">
                  <span className="text-red-500">Erro</span>
                  <span className="text-muted-foreground"> | </span>
                  <span className="text-foreground">Fatal</span>
               </h1>

               <p className="text-muted-foreground font-mono text-sm mt-4">
                  <span className="text-red-500">{">"}</span> Ocorreu um erro
                  inesperado na aplicação.
                  <span className="inline-block w-[2px] h-4 bg-red-500 animate-cursor-blink ml-1 align-middle" />
               </p>
            </div>

            <Button
               onClick={() => reset()}
               size="lg"
               variant="outline"
               className="font-mono mt-8 border-red-500/50 hover:bg-red-500/10 hover:text-red-500"
            >
               <RefreshCcw className="h-4 w-4 mr-2" />
               Tentar Novamente
            </Button>
         </div>
      </div>
   );
}
