"use client";

import {
  animate,
  useMotionTemplate,
  useMotionValue,
  motion,
} from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { handleDownloadExternal } from "./download/HandleDownload";

const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];

export const Hero = () => {
  const color = useMotionValue(COLORS_TOP[0]);

  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = async () => {
    setIsDownloading(true);
    try {
      await handleDownloadExternal(); // เลือกวิธีที่ต้องการ
    } catch (error) {
      console.error("Download failed:", error);
    } finally {
      setIsDownloading(false);
    }
  };

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

        <p className="my-6 max-w-xl text-center">
          Font End Developer besed in Songkla, with 4 months of experience
        </p>

        <motion.button
          style={{
            border,
            boxShadow,
          }}
          className="flex w-fit items-center gap-2 rounded-full px-4 py-2 cursor-pointer"
          whileHover={{
            scale: 1.015,
          }}
          whileTap={{
            scale: 0.985,
          }}
          onClick={handleDownload}
          disabled={isDownloading}
        >
          {isDownloading ? (
            <>
              <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                  fill="none"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>
              Downloading...
            </>
          ) : (
            <>
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              Download Resume
            </>
          )}
        </motion.button>
      </div>

      <div className="bg-circle-container">
        <div className="bg-circle-bac"></div>
        <div className="bg-circle"></div>
      </div>
    </motion.section>
  );
};
