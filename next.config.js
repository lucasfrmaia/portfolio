/** @type {import('next').NextConfig} */
const nextConfig = {
   images: {
      remotePatterns: [
         {
            protocol: "https",
            hostname: "istack.iium.edu.my",
         },
         {
            protocol: "https",
            hostname: "appmaster.io",
         },
         {
            protocol: "https",
            hostname: "t3.ftcdn.net",
         },
         {
            protocol: "https",
            hostname: "camo.githubusercontent.com",
         },
         {
            protocol: "https",
            hostname: "i.pinimg.com",
         },
         {
            protocol: "https",
            hostname: "i.ibb.co",
         },
      ],
   },
   async headers() {
      return [
         {
            source: "/cv.pdf",
            headers: [
               {
                  key: "Content-Disposition",
                  value: 'attachment; filename="cv.pdf"',
               },
               {
                  key: "Content-Type",
                  value: "application/pdf",
               },
            ],
         },
         {
            source: "/CV.pdf",
            headers: [
               {
                  key: "Content-Disposition",
                  value: 'attachment; filename="cv.pdf"',
               },
               {
                  key: "Content-Type",
                  value: "application/pdf",
               },
            ],
         },
      ];
   },
};

module.exports = nextConfig;
