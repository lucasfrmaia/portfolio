"use client";

import { Badge } from "@/components/ui/badge";
import { FaJava, FaNodeJs, FaPython, FaReact } from "react-icons/fa";
import {
   SiTypescript,
   SiMongodb,
   SiNextdotjs,
   SiC,
   SiJavascript,
   SiExpress,
} from "react-icons/si";

const techIcons: { [key: string]: JSX.Element } = {
   Java: <FaJava className="h-3 w-3" />,
   NodeJs: <FaNodeJs className="h-3 w-3" />,
   Python: <FaPython className="h-3 w-3" />,
   TypeScript: <SiTypescript className="h-3 w-3" />,
   JavaScript: <SiJavascript className="h-3 w-3" />,
   MongoDB: <SiMongodb className="h-3 w-3" />,
   NextJs: <SiNextdotjs className="h-3 w-3" />,
   C: <SiC className="h-3 w-3" />,
   React: <FaReact className="h-3 w-3" />,
   ExpressJs: <SiExpress className="h-3 w-3" />,
};

interface LanguageBadgeProps {
   name: string;
   className?: string;
}

export default function LanguageBadge({ name, className }: LanguageBadgeProps) {
   return (
      <Badge variant="outline" className={className}>
         {techIcons[name] && <span className="mr-1.5">{techIcons[name]}</span>}
         {name}
      </Badge>
   );
}
