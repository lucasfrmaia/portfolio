import type { Config } from "tailwindcss";

const config: Config = {
   darkMode: ["class"],
   content: [
      "./pages/**/*.{ts,tsx}",
      "./components/**/*.{ts,tsx}",
      "./app/**/*.{ts,tsx}",
      "./src/**/*.{ts,tsx}",
   ],
   prefix: "",

   theme: {
      container: {
         center: true,
         padding: "2rem",
         screens: {
            "2xl": "1400px",
         },
      },
      extend: {
         colors: {
            border: "hsl(var(--border))",
            input: "hsl(var(--input))",
            ring: "hsl(var(--ring))",
            background: "hsl(var(--background))",
            foreground: "hsl(var(--foreground))",
            primary: {
               DEFAULT: "hsl(var(--primary))",
               foreground: "hsl(var(--primary-foreground))",
            },
            secondary: {
               DEFAULT: "hsl(var(--secondary))",
               foreground: "hsl(var(--secondary-foreground))",
            },
            destructive: {
               DEFAULT: "hsl(var(--destructive))",
               foreground: "hsl(var(--destructive-foreground))",
            },
            muted: {
               DEFAULT: "hsl(var(--muted))",
               foreground: "hsl(var(--muted-foreground))",
            },
            accent: {
               DEFAULT: "hsl(var(--accent))",
               foreground: "hsl(var(--accent-foreground))",
            },
            popover: {
               DEFAULT: "hsl(var(--popover))",
               foreground: "hsl(var(--popover-foreground))",
            },
            card: {
               DEFAULT: "hsl(var(--card))",
               foreground: "hsl(var(--card-foreground))",
            },
         },
         borderRadius: {
            lg: "var(--radius)",
            md: "calc(var(--radius) - 2px)",
            sm: "calc(var(--radius) - 4px)",
         },
         animation: {
            "accordion-down": "accordion-down 0.2s ease-out",
            "accordion-up": "accordion-up 0.2s ease-out",
            typing: "typing 2s steps(20) infinite alternate",
            blink: "blink .7s infinite",
            "fade-in": "fadeIn 1s ease-in",
         },
         backgroundImage: {
            "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
            "gradient-conic":
               "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            "hero-gradient":
               "linear-gradient(to bottom right, #4F46E5, #7C3AED)",
            "card-gradient":
               "linear-gradient(to bottom right, rgba(79, 70, 229, 0.1), rgba(124, 58, 237, 0.1))",
         },
         keyframes: {
            "accordion-down": {
               from: { height: "0" },
               to: { height: "var(--radix-accordion-content-height)" },
            },
            "accordion-up": {
               from: { height: "var(--radix-accordion-content-height)" },
               to: { height: "0" },
            },
            typing: {
               "0%": {
                  width: "0%",
                  visibility: "hidden",
               },
               "100%": {
                  width: "100%",
               },
            },
            blink: {
               "50%": {
                  borderColor: "transparent",
               },
               "100%": {
                  borderColor: "white",
               },
            },
            fadeIn: {
               "0%": {
                  opacity: "0",
                  transform: "translateY(20px)",
               },
               "100%": {
                  opacity: "1",
                  transform: "translateY(0)",
               },
            },
         },
         height: {
            "header-height": "96px",
         },

         width: {
            "custom-full": "calc(100% - 160px)",
         },

         padding: {
            "spacing-page": "10%",
            "header-height": "96px",
         },

         margin: {
            "spacing-section": "4rem",
         },

         spacing: {
            "header-height": "96px",
            "timeline-circle-right": "calc(-13.1% + 0.1px)",
            "timeline-circle-left": "calc(-13.1% - 1px)",
         },
      },
   },
   plugins: [require("tailwindcss-animate")],
};

export default config;
