import React from "react";
import { FaReact } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { IoLogoNodejs } from "react-icons/io";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { SiVercel } from "react-icons/si";
import { SiGit } from "react-icons/si";
import { SiGithub } from "react-icons/si";
import { SiFigma } from "react-icons/si";
import { SiPostman } from "react-icons/si";
import { SiSlack } from "react-icons/si";
import { SiDiscord } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

const stackItems = [
  { id: 1, icon: FaReact, name: "React", color: "#61DAFB" },
  { id: 2, icon: SiTypescript, name: "TypeScript", color: "#3178C6" },
  { id: 3, icon: IoLogoNodejs, name: "Node.js", color: "#339933" },
  { id: 4, icon: SiMongodb, name: "MongoDB", color: "#4EA94B" },
  { id: 5, icon: SiExpress, name: "Express.js", color: "#444" },
  { id: 6, icon: SiTailwindcss, name: "TailwindCSS", color: "#38B2AC" },
  { id: 7, icon: SiVercel, name: "Vercel", color: "#000" },
  { id: 8, icon: SiGit, name: "Git", color: "#F05032" },
  { id: 9, icon: SiGithub, name: "Github", color: "#181717" },
  { id: 10, icon: SiFigma, name: "Figma", color: "#F24E1E" },
  { id: 12, icon: SiPostman, name: "Postman", color: "#FF6C37" },
  { id: 13, icon: SiSlack, name: "Slack", color: "#4A154B" },
  { id: 14, icon: SiDiscord, name: "Discord", color: "#5865F2" },
  { id: 15, icon: TbBrandNextjs, name: "Next.js", color: "#000000" },
];

export const Stack = () => {
  return (
    <section className="py-16 glass">
      <div className="max-w-[1200px] mx-auto px-4 text-center">
        <h2 className="text-5xl font-bold text-gray-200 mb-4">My Stack</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2">
          {stackItems.map((item) => (
            <div
              key={item.id}
              className="flex flex-col items-center rounded-xl p-4"
            >
              <div className="mb-4 bg-white/10 p-6 rounded-xl">
                {React.createElement(item.icon, {
                  className: "w-32 h-32",
                  style: { color: item.color },
                })}
              </div>
              <p className=" font-semibold text-gray-400">{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
