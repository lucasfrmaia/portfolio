export type TRandomIcon =
   | "JavaScript"
   | "TypeScript"
   | "HTML"
   | "CSS"
   | "React"
   | "NodeJs"
   | "Python"
   | "Java"
   | "ExpressJs"
   | "C"
   | "MongoDB"
   | "Github"
   | "Linkedin"
   | "Twitter"
   | "Git"
   | "NextJs"
   | "VSCode";

export interface IPortfolio {
   name: string;
   socials: {
      github: string;
      linkedin: string;
      twitter: string;
   };
   data: {
      naveBar: {
         home: string;
         aboutMe: string;
         skills: string;
         timeline: string;
         projects: string;
      };
      sectionTitle: {
         aboutMe: string;
         skills: string;
         timeline: string;
         projects: string;
      };
      about: {
         presetation: string;
         profession: {
            presetation: string;
            profession: string;
         };
         resume: string;
         aboutMe: string;
         buttons: {
            cv: string;
            aboutMe: string;
         };
      };
      timeline: Array<{
         title: string;
         date: string;
         text: string;
      }>;
      skills: {
         frontend: {
            title: string;
            skills: Array<{
               name: string;
               icon: TRandomIcon;
            }>;
         };
         backend: {
            title: string;
            skills: Array<{
               name: string;
               icon: TRandomIcon;
            }>;
         };
         database: {
            title: string;
            skills: Array<{
               name: string;
               icon: TRandomIcon;
            }>;
         };
         tools: {
            title: string;
            skills: Array<{
               name: string;
               icon: TRandomIcon;
            }>;
         };
      };
      projects: Array<{
         name: string;
         github?: string;
         liveDemo?: string;
         images: string[];
         description: string;
         languages: string[];
      }>;
   };
}
