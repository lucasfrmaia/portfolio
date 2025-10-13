export const scrollToSection = (sectionId: string) => {
   const section = document.getElementById(sectionId);
   if (section) {
      const headerOffset = 80; // Height of your fixed header plus some padding
      const elementPosition = section.getBoundingClientRect().top;
      const offsetPosition =
         elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
         top: offsetPosition,
         behavior: "smooth",
      });
   }
};
