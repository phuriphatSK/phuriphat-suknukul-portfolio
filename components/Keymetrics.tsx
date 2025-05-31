"use client";
import React from "react";
import { motion, useInView } from "framer-motion";

const metrics = [
  {
    id: 1,
    value: "4+",
    label: "month of experience",
    description: "Dedicated to honing my skills in Fornt End Development",
  },
  {
    id: 2,
    value: "10+",
    label: "projects",
    description:
      "Completed and small projects showcasing my expertise in React and Next.js",
  },
  {
    id: 3,
    value: "10+",
    label: "Technologies Mastered",
    description:
      "Proficient in a wide range of technologies including React, Next.js, and TypeScript",
  },
  {
    id: 4,
    value: "80%",
    label: "clean code",
    description: "Committed to writing clean, maintainable code",
  },
  {
    id: 5,
    value: "500+",
    label: "commits on GitHub",
    description:
      "Consistent contributions to open source and personal projects",
  },
];

export const Keymetrics = () => {
  const ref = React.useRef<HTMLElement>(null);

  const isInView = useInView(ref, {
    once: false,
  });
  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8 }}
      className="container mx-auto px-4 py-32 text-white"
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-6xl font-bold mb-12"
      >
        KEY METRICS
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {metrics.map((metric, index) => (
          <motion.div
            key={metric.id}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
            className="flex flex-col "
          >
            <motion.h3
              initial={{ scale: 0.5 }}
              animate={isInView ? { scale: 1 } : { scale: 0.5 }}
              transition={{
                delay: 0.6 + index * 0.1,
                duration: 0.4,
                type: "spring",
              }}
              className="text-5xl font-bold mb-2 text-purple-300"
            >
              {metric.value}
            </motion.h3>
            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
              className="text-xl font-semibold mb-2"
            >
              {metric.label}
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.4, delay: 1 + index * 0.1 }}
              className=" text-gray-400"
            >
              {metric.description}
            </motion.p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};
