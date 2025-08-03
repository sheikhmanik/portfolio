import Image, { StaticImageData } from "next/image";

import html from "@/assets/html.png";
import css from "@/assets/css.jpg";
import tailwind from "@/assets/tailwind.png";
import js from "@/assets/js.png";
import nextjs from "@/assets/nextjs.png";
import react from "@/assets/react.png";
import typescript from "@/assets/typescript.png";
import materialui from "@/assets/materialui.png";

export default function Frontend() {

    const tools: { img: StaticImageData; label: string }[] = [
        { img: js, label: "JavaScript" },
        { img: typescript, label: "TypeScript" },
        { img: nextjs, label: "Next.js" },
        { img: react, label: "React.js" },
        { img: materialui, label: "Material UI" },
        { img: tailwind, label: "Tailwind" },
        { img: css, label: "CSS" },
        { img: html, label: "HTML" },
    ];

    return (
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
    )
}