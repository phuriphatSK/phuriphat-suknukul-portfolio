"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import css from "@/assets/resume/icons/css3.svg";
import html from "@/assets/resume/icons/html5.svg";
import javascript from "@/assets/resume/icons/javascript.svg";
import nextjs from "@/assets/resume/icons/nextjs.svg";
import react from "@/assets/resume/icons/react.svg";
import tailwind from "@/assets/resume/icons/tailwind.svg";
import typescript from "@/assets/resume/icons/typescript.svg";

const images = [
  { src: html, alt: "HTML" },
  { src: css, alt: "CSS" },
  { src: javascript, alt: "JavaScript" },
  { src: react, alt: "React" },
  { src: tailwind, alt: "Tailwind" },
  { src: nextjs, alt: "Next.js" },
  { src: typescript, alt: "TypeScript" },
  { src: html, alt: "HTML" },
  { src: css, alt: "CSS" },
  { src: javascript, alt: "JavaScript" },
  { src: react, alt: "React" },
  { src: tailwind, alt: "Tailwind" },
  { src: nextjs, alt: "Next.js" },
  { src: typescript, alt: "TypeScript" },
  { src: html, alt: "HTML" },
  { src: css, alt: "CSS" },
  { src: javascript, alt: "JavaScript" },
  { src: react, alt: "React" },
  { src: tailwind, alt: "Tailwind" },
  { src: nextjs, alt: "Next.js" },
  { src: typescript, alt: "TypeScript" },
  { src: html, alt: "HTML" },
  { src: css, alt: "CSS" },
  { src: javascript, alt: "JavaScript" },
  { src: react, alt: "React" },
  { src: tailwind, alt: "Tailwind" },
  { src: nextjs, alt: "Next.js" },
  { src: typescript, alt: "TypeScript" },
];
export const LogoAnimation = () => {
  return (
    <div className="py-8 bg-purple-200/10 opacity-80 glass">
      <div className="container mx-auto">
        <div className="overflow-hidden [mask-image:linear-gradient(to_right,_transparent,_back_25%,_back_75%,_transparent)]">
          <motion.div
            className="flex flex-none pr-14 gap-14"
            animate={{ translateX: "-50%" }}
            transition={{
              repeat: Infinity,
              duration: 35,
              ease: "linear",
              repeatType: "loop",
            }}
          >
            {images.map((image, index) => (
              <Image
                key={index}
                src={image.src}
                alt={image.alt}
                height={30}
                className="rounded-full"
              />
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};
