import React, { ReactNode, useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default function Header() {

    const [dropDown, setDropDown] = useState<boolean>(false);
    const dropdownRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        // Function to close dropdown when a click occurs outside of it
        function handleClickOutside(event: React.FormEvent<HTMLFormElement>): void {
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
        <header className="bg-gray-800 text-white fixed w-full">
            
            <div className="container mx-auto flex justify-between p-5 h-[80px] md:h-[104px]">

                <p className="font-Pacifico font-normal text-2xl hover:scale-125 origin-left transition-all duration-1000 flex items-center justify-center">MANIK Portfolio</p>

                <div className="hidden md:flex items-center justify-center gap-7 font-Comic-Neue font-bold text-[1.01rem]">
                    <button className="uppercase hover:scale-105 px-1 hover:border-b-2 transition-all duration-300">Services</button>
                    <button className="uppercase hover:scale-105 px-1 hover:border-b-2 transition-all duration-300">Toolbox</button>
                    <button className="uppercase hover:scale-105 px-1 hover:border-b-2 transition-all duration-300">Project</button>
                    <button className="uppercase hover:scale-105 px-1 hover:border-b-2 transition-all duration-300">Contact</button>
                </div>

                <div className="flex md:hidden flex-col items-end relative" ref={dropdownRef}>

                    <button className="md:hidden hover:text-gray-300 p-1 transition-all inset-0" onClick={() => setDropDown(!dropDown)}>
                        <FontAwesomeIcon icon={faBars}/>
                    </button>

                    <div className={`${dropDown ? 'absolute scale-100' : 'scale-0'} flex flex-col md:hidden transition-all origin-top-right duration-500 bg-gray-300/40 text-white top-8 font-Comic-Neue font-bold text-[1rem] w-[110px] h-auto rounded-lg`}>
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