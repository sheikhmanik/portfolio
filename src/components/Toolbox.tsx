"use client"
import toolboxImg from "@/assets/toolbox.jpg";
import html from "@/assets/html.png";
import css from "@/assets/css.jpg";
import tailwind from "@/assets/tailwind.png";
import js from "@/assets/js.png";
import nextjs from "@/assets/nextjs.png";
import react from "@/assets/react.png";
import typescript from "@/assets/typescript.png";
import vscode from "@/assets/vscode.jpg";
import git from "@/assets/git.png";
import github from "@/assets/github.webp";
import npm from "@/assets/npm.png";
import vite from "@/assets/vite.png";
import Image, { StaticImageData } from "next/image";

export default function Toolbox() {

    const tools: { img: StaticImageData; label: string }[] = [
        { img: html, label: "HTML" },
        { img: css, label: "CSS" },
        { img: tailwind, label: "Tailwind" },
        { img: js, label: "JavaScript" },
        { img: nextjs, label: "Next.js" },
        { img: react, label: "React.js" },
        { img: typescript, label: "TypeScript" },
        { img: vscode, label: "VS Code" },
        { img: git, label: "Git" },
        { img: github, label: "GitHub" },
        { img: npm, label: "npm" },
        { img: vite, label: "Vite" },
    ];

    return (
        <div className="pt-7 scroll-mt-20" id="toolbox">
            <div className="container mx-auto flex flex-col sm:flex-row items-center justify-center gap-5">
                <Image alt="" src={toolboxImg} className="sm:w-1/2 rounded-xl" />
                <div className="sm:w-1/2 gap-3 lg:gap-5 text-center sm:text-start flex flex-col sm:items-start justify-center">
                    <p className="font-playfair font-extrabold text-3xl md:text-5xl leading-tight origin-left transition-all duration-1000 bg-[length:300%_300%] animate-gradient-x text-transparent bg-clip-text bg-gradient-to-r to-red-500 via-slate-500 from-slate-400">What’s in my toolbox?</p>
                    <p className="font-lato font-medium text-base md:text-lg origin-left transition-all duration-1000 bg-[length:300%_300%] animate-gradient-x text-transparent bg-clip-text bg-gradient-to-r to-red-500 via-slate-500 from-slate-400 px-5 sm:px-0">Here are some of the incredible technologies I genuinely enjoy working with—tools and frameworks that not only empower my creativity but also help me build efficient, beautiful, and scalable user interfaces.</p>
                </div>
            </div>
            <div className="mt-7 sm:mt-12 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-6 place-items-center">
                {tools.map((tool, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center text-center transition-transform hover:scale-110 duration-500"
                    >
                        <Image
                            src={tool.img}
                            alt={tool.label}
                            className="w-14 h-14 sm:w-16 sm:h-16 object-contain bg-cover border-2 border-indigo-500 rounded-xl p-2 shadow-sm"
                        />
                        <span className="text-sm text-gray-300 mt-2 font-lato tracking-wide">
                            {tool.label}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    )
}