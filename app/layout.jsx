import "./globals.css";
import { Analytics } from "@vercel/analytics/react"

export const metadata = {
  title: "Afonso Queiroz | Portfolio",
  description: "Dive into the innovative world of Afonso Queiroz, a visionary full-stack developer and software engineer. Specializing in building transformative solutions that blend performance, design, and functionality, with expertise in technologies like Vue.js, React, Node.js, Go, MongoDB, and React Native. Afonso Queiroz leads ambitious projects, crafting intelligent applications, intuitive interfaces, and scalable backend systems. Renowned for his ability to integrate emerging technologies, including Type AI, Neoflow, and more, he is the ideal choice to turn your ideas into reality. Contact Afonso Queiroz and elevate your projects to the next level.",
  keywords: [
    "Afonso Queiroz",
    "Full-stack Developer",
    "Vue.js",
    "React",
    "Node.js",
    "React Native",
    "MongoDB",
    "Artificial Intelligence",
    "Software Development",
    "Scalable Solutions",
    "Responsive Design",
    "Software Engineering",
    "Digital Transformation"
  ],
  author: "Afonso Queiroz",
  social: {
    linkedin: "https://www.linkedin.com/in/afonso-queiroz-7a515b316/",
    github: "https://github.com/itsMeAfonsoQueiroz",
    portfolio: "https://www.afonsoqueiroz.pt"
  },
  og: {
    title: "Afonso Queiroz | Full-Stack Developer & Visionary Creator",
    description: "Explore the groundbreaking work of Afonso Queiroz, a software engineer specializing in advanced applications and emerging technologies.",
    url: "https://www.afonsoqueiroz.pt"
  }
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Inter" />
        <link rel="icon" href="/1.jpg" sizes="any" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className="h-full w-full ">
        <Analytics />
        {children}
      </body>
    </html>
  );
}
