"use client";
import React, { useState } from 'react';
import { motion } from "framer-motion";

const ContactSection = () => {

  
    return (
        <motion.div
          initial="hidden"
          animate="visible"
          className="flex flex-row items-center justify-center px-20 mt-20 mb-40 w-full z-[20]"
        >
          <div className="h-full w-full flex items-center flex-col gap-5 justify-center m-auto text-start">
          <h1 className="text-[40px] font-semibold  text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
            Contáctame!
            </h1>
    
            <input
                type="text"
                placeholder="Nombre"
                className="w-[700px] p-4 overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] bg-transparent text-white placeholder-gray-300"
              />
            <input
                type="email"
                placeholder="email"
                className="w-[700px] p-4 overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] bg-transparent text-white placeholder-gray-300"
              />
              <textarea
                placeholder="Mensaje"
                className="w-[700px] p-4 relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] bg-transparent text-white placeholder-gray-300"
            ></textarea>
            <button
            type="submit"
            className="w-[700px] py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
          >
            Enviar mensaje
          </button>
          </div>
    
         
        </motion.div>
      );
    };

export default ContactSection;