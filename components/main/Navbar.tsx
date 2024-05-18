"use client";

import { Socials } from "@/constants";
import Image from "next/image";
import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-5 md:px-10">
      <div className="w-full h-full flex items-center justify-between m-auto px-[10px]">
        <a href="#about-me" className="flex items-center">
          <Image
            src="/NavLogo.png"
            alt="logo"
            width={100}
            height={20}
            className="cursor-pointer hover:animate-slowspin"
          />
        </a>

        <div className="flex items-center md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-200">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>

        <div className={`w-full h-full flex-col md:flex-row items-center justify-between ${isOpen ? 'flex' : 'hidden'} md:flex`}>
          <div className="flex flex-col md:flex-row items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] md:mr-20 px-[20px] py-[10px] rounded-full text-gray-200">
            <a href="#" className="cursor-pointer my-2 md:my-0 md:mx-2">
              About me
            </a>
            <a href="#skills" className="cursor-pointer my-2 md:my-0 md:mx-2">
              Skills
            </a>
            <a href="#projects" className="cursor-pointer my-2 md:my-0 md:mx-2">
              Projects
            </a>
          </div>
        </div>

        <div className="hidden md:flex gap-5">
          {Socials.map((social) => (
            <a href={social.link} key={social.name} target="_blank" rel="noopener noreferrer">
              <Image
                src={social.src}
                alt={social.name}
                key={social.name}
                width={24}
                height={24}
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Navbar;