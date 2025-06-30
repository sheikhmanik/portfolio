import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default function Header() {

    const [dropDown, setDropDown] = useState<boolean>(false);
    const dropdownRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        // Function to close dropdown when a click occurs outside of it
        function handleClickOutside(event: MouseEvent): void {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setDropDown(false);
            }
        }

        // Bind the event listener
        document.addEventListener("mousedown", handleClickOutside);

        // Unbind the event listener on component unmount
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [dropdownRef]);

    return (
        <header className="bg-gray-800/40 backdrop-blur-md text-white fixed w-full z-50 border-b border-white/10 shadow-md">
            
            <div className="container mx-auto flex justify-between p-3 md:p-5 h-[80px] md:h-[104px]">

                <p className="font-Shizuru font-bold text-4xl hover:scale-125 origin-left transition-all duration-1000 flex items-center justify-center text-transparent bg-clip-text bg-[length:300%_300%] animate-gradient-x bg-gradient-to-r from-fuchsia-500 via-pink-500 to-orange-400">MANIK</p>

                {/* <span className="text-2xl pl-2 text-end">Portfolio</span> */}

                <div className="hidden md:flex items-center justify-center gap-7 font-Shizuru font-bold text-[1.2rem]">
                    <button className="hover:scale-105 px-1 hover:border-b-2 transition-all duration-300">Services</button>
                    <button className="hover:scale-105 px-1 hover:border-b-2 transition-all duration-300">Toolbox</button>
                    <button className="hover:scale-105 px-1 hover:border-b-2 transition-all duration-300">Project</button>
                    <button className="hover:scale-105 px-1 hover:border-b-2 transition-all duration-300">Contact</button>
                </div>

                <div className="flex md:hidden flex-col items-end relative pt-5" ref={dropdownRef}>

                    <button className="hover:text-gray-300 transition-all flex items-center justify-center text-2xl" onClick={() => setDropDown(!dropDown)}>
                        <FontAwesomeIcon icon={faBars}/>
                    </button>

                    <div className={`${dropDown ? 'scale-100' : 'scale-0'} absolute flex flex-col transition-all origin-top-right duration-500 bg-gray-300/40 text-white top-12 font-Shizuru font-bold text-[1rem] w-[110px] h-auto rounded-lg`}>
                        <button className="uppercase p-4 transition-all duration-300 hover:bg-gray-300/20 rounded-lg">Services</button>
                        <button className="uppercase p-4 transition-all duration-300 hover:bg-gray-300/20 rounded-lg">Toolbox</button>
                        <button className="uppercase p-4 transition-all duration-300 hover:bg-gray-300/20 rounded-lg">Project</button>
                        <button className="uppercase p-4 transition-all duration-300 hover:bg-gray-300/20 rounded-lg">Contact</button>
                    </div>

                </div>
            </div>

        </header>
    )
}