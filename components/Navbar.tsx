"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

import { AiOutlineClose, AiOutlineHome, AiOutlineMenu } from "react-icons/ai";

const navLinks = [
  { title: "About", path: "#about" },
  { title: "Portfolio", path: "#portfolio" },
  { title: "Stack", path: "#stack" },
  { title: "Contact", path: "#contact" },
];

export const Navbar = () => {
  const [nav, setNav] = useState(false);

  const toggleNav = () => {
    setNav(!nav);
  };

  const closeNav = () => {
    setNav(false);
  };

  const scrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault(); // ป้องกัน default behavior ของ Link

    // ใช้ requestAnimationFrame เพื่อให้แน่ใจว่า DOM พร้อม
    requestAnimationFrame(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });

    closeNav(); // ปิด mobile menu ถ้าเปิดอยู่
  };

  // เพิ่ม CSS smooth scrolling behavior
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";

    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  return (
    <div className="z-50 fixed w-full text-white font-bold">
      {/* Logo/Home Button - ซ้ายบน */}
      <div className="absolute left-4 md:left-8 mt-8 cursor-pointer group">
        <Link href="/" onClick={scrollToTop} className="block">
          <div className="border border-white/20 backdrop-blur-3xl rounded-full p-3 hover:border-white/40 transition-all duration-300 hover:scale-110">
            <AiOutlineHome
              size={24}
              className="text-white/80 group-hover:text-white transition-colors duration-300"
            />
          </div>
        </Link>
      </div>

      {/* Navigation Menu - ตรงกลางจริงๆ */}
      <div className="flex justify-center w-full">
        <div className="border border-white/20 mt-8 backdrop-blur-3xl rounded-3xl hidden md:flex items-center justify-center p-2 max-w-[400px]">
          <ul className="flex flex-row p-2 space-x-8">
            {navLinks.map((link, index) => (
              <li key={index}>
                <Link
                  href={link.path}
                  onClick={closeNav}
                  className="transform hover:text-white/50 transition-all duration-300 ease-in-out scroll-smooth"
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Mobile Menu Toggle - ขวาบน */}
      <div
        onClick={toggleNav}
        className="md:hidden absolute right-4 md:right-8 top-0 mt-8 z-50 border rounded-full text-white/70 border-white/70 p-3 cursor-pointer hover:border-white/40 transition-all duration-300"
      >
        {nav ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed left-0 top-0 w-full h-full bg-black/90 transform transition-transform duration-300 ${
          nav ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <ul className="flex flex-col items-center justify-center space-y-8 h-full">
          {/* เพิ่ม Home/Top link ใน mobile menu */}
          <li>
            <Link
              href="/"
              onClick={scrollToTop}
              className="text-4xl hover:text-white/70 transition-colors duration-300 flex items-center gap-3"
            >
              <AiOutlineHome size={40} />
              Home
            </Link>
          </li>
          {navLinks.map((link, index) => (
            <li key={index}>
              <Link
                href={link.path}
                onClick={closeNav}
                className="text-4xl hover:text-white/70 transition-colors duration-300"
              >
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
