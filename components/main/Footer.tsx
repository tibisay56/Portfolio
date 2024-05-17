import React from 'react'
import {
    RxDiscordLogo,
    RxGithubLogo,
    RxLinkedinLogo,
  } from "react-icons/rx";
import Image from "next/image";


const Footer = () => {

    return (
        <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px] ">
            <div className="w-full flex flex-col items-center justify-center m-auto">
                <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
                
                    <Image
                    src="/NavLogo.png"
                    alt="logo"
                    width={100}
                    height={20}
                    className="cursor-pointer hover:animate-slowspin"
                    />
                    <div >
                    <div className="min-w-[200px] h-auto flex items-center justify-center mb-4 gap-6 z-10">
                        <RxLinkedinLogo className="text-4xl cursor-pointer"/>
                        <RxGithubLogo className="text-4xl cursor-pointer"/>
                        <RxDiscordLogo className="text-4xl cursor-pointer"/>    
                    </div>
                        &copy; Tibisay Dev 2024. All Rights Reserved
                    </div>
                </div>           
            </div>
        </div>
        
  )
}

export default Footer