"use client";

import {
  animate,
  useMotionTemplate,
  useMotionValue,
  motion,
} from "framer-motion";
import Image from "next/image";
import { useEffect } from "react";

const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];

export const Hero = () => {
  const color = useMotionValue(COLORS_TOP[0]);

  useEffect(() => {
    animate(color, COLORS_TOP, {
      duration: 10,
      repeat: Infinity,
      ease: "easeInOut",
      repeatType: "mirror",
    });
  }, []);

  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #000 50%, ${color})`;
  const border = useMotionTemplate`1px solid ${color}`;
  const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;

  return (
    <motion.section
      style={{ backgroundImage }}
      className="relative grid min-h-screen place-content-center overflow-hidden px-4 py-24 text-gray-200"
    >
      <div className="z-10 flex flex-col items-center p-6">
        <span className="mb-1.5 inline-block rounded-full bg-gray-600/50 px-3 py-1.5 text-sm">
          Open for Work
        </span>
        <h1 className="text-white/40 text-5xl font-black">Hi, I am</h1>
        <h1 className="max-w-3xl bg-gradient-to-br from-white to-gray-400 bg-clip-text font-black leading-tight text-transparent md:text-7xl pt-5 text-4xl">
          Folk Phuriphat
        </h1>
        <Image src="/profile2.png" alt="Phuriphat" width={400} height={400} />

        <div className="flex bg-white/10 shadow-xl p-3 rounded-3xl justify-center items-center space-x-2 m-4">
          <Image
            src="/obj1.webp"
            alt="object"
            width={30}
            height={30}
            className="rounded-2xl mx-auto"
          />
          <Image
            src="/obj1.webp"
            alt="object"
            width={30}
            height={30}
            className="rounded-2xl mx-auto"
          />
          <Image
            src="/obj1.webp"
            alt="object"
            width={30}
            height={30}
            className="rounded-2xl mx-auto"
          />
          <p className="font-medium pl-2">80+ Happy Clients</p>
        </div>

        <p className="my-6 max-w-xl">
          Font End Developer besed in Songkla, with 4 months of experience
        </p>

        <motion.button
          style={{
            border,
            boxShadow,
          }}
          className="flex w-fit item-center gap-2 rounded-full px-4 py-2 cursor-pointer"
          whileHover={{
            scale: 1.015,
          }}
          whileTap={{
            scale: 0.985,
          }}
        >
          Download Resume
        </motion.button>
      </div>

      <div className="bg-circle-container">
        <div className="bg-circle-bac"></div>
        <div className="bg-circle"></div>
      </div>
    </motion.section>
  );
};
