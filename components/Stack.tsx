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
import { SiJavascript } from "react-icons/si";
import { SiPhpmyadmin } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { SiCss3 } from "react-icons/si";
import { SiSocketdotio } from "react-icons/si";
import { SiAntdesign } from "react-icons/si";

const stackItems = [
  { id: 1, icon: FaReact, name: "React", color: "#61DAFB" },
  { id: 2, icon: TbBrandNextjs, name: "Next.js", color: "#000000" },
  { id: 3, icon: SiTypescript, name: "TypeScript", color: "#3178C6" },
  { id: 4, icon: SiJavascript, name: "JavaScript", color: "#F7DF1E" },
  { id: 5, icon: SiPhpmyadmin, name: "PHP", color: "#777BB4" },
  { id: 6, icon: SiMysql, name: "MySQL", color: "#4479A1" },
  { id: 7, icon: SiCss3, name: "CSS3", color: "#1572B6" },
  { id: 8, icon: SiSocketdotio, name: "Socket.io", color: "#000000" },
  { id: 9, icon: SiAntdesign, name: "Ant Design", color: "#3178C6" },
  { id: 10, icon: IoLogoNodejs, name: "Node.js", color: "#339933" },
  { id: 11, icon: SiMongodb, name: "MongoDB", color: "#4EA94B" },
  { id: 12, icon: SiExpress, name: "Express.js", color: "#444" },
  { id: 13, icon: SiTailwindcss, name: "TailwindCSS", color: "#38B2AC" },
  { id: 14, icon: SiVercel, name: "Vercel", color: "#000" },
  { id: 15, icon: SiGit, name: "Git", color: "#F05032" },
  { id: 16, icon: SiGithub, name: "Github", color: "#181717" },
  { id: 17, icon: SiFigma, name: "Figma", color: "#F24E1E" },
  { id: 18, icon: SiPostman, name: "Postman", color: "#FF6C37" },
  { id: 19, icon: SiSlack, name: "Slack", color: "#4A154B" },
  { id: 20, icon: SiDiscord, name: "Discord", color: "#5865F2" },
];

export const Stack = () => {
  return (
    <section className="py-16 glass" id="stack">
      <div className="max-w-[1050px] mx-auto px-4 text-center">
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
