import Image, { StaticImageData } from "next/image";

import nodejs from "@/assets/nodejs.png";
import expressjs from "@/assets/expressjs.png";
import mongodb from "@/assets/mongodb.png";
import postgresql from "@/assets/postgresql.png";
import mysql from "@/assets/mysql.png";
import prisma from "@/assets/prisma.png";
import js from "@/assets/js.png";
import typescript from "@/assets/typescript.png";

export default function Backend() {

    const tools: { img: StaticImageData; label: string }[] = [
        { img: js, label: "JavaScript" },
        { img: nodejs, label: "Node.js" },
        { img: expressjs, label: "Express.js" },
        { img: postgresql, label: "PostgreSQL" },
        { img: mysql, label: "MySQL" },
        { img: prisma, label: "Prisma" },
        { img: typescript, label: "TypeScript" },
        { img: mongodb, label: "Mongodb" },
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