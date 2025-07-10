"use client"
import project from "@/assets/project.png";
import amazon from "@/assets/amazon.jpg";
import weather from "@/assets/weather.webp";
import todo from "@/assets/todo.png";
import restaurant from "@/assets/restaurant.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faTachographDigital } from "@fortawesome/free-solid-svg-icons";
import Image, { StaticImageData } from "next/image";

export default function Project() {
    const items: {
        title: string;
        img: StaticImageData;
        text: string;
        github: string;
        live: string;
    }[] = [
        {
            title: "Amazon Clone",
            img: amazon,
            text: "A responsive full-stack Amazon clone with product listing, cart, and authentication. Built with React and Firebase.",
            github: "https://github.com/sheikhmanik/amazon",
            live: "https://teal-heliotrope-50b11d.netlify.app/",
        },
        {
            title: "Weather App",
            img: weather,
            text: "A clean and minimal weather app that fetches and displays weather data. Built using React, OpenWeatherMap API, and Tailwind CSS.",
            github: "https://github.com/sheikhmanik/weather-app",
            live: "https://ephemeral-unicorn-826761.netlify.app/",
        },
        {
            title: "Restaurant",
            img: restaurant,
            text: "A fully responsive website for a real Bangladeshi restaurant — Emran's Heritage Home. Built with HTML, CSS, and JavaScript, it includes a menu section, gallery, contact form, and a clean modern layout.",
            github: "https://github.com/sheikhmanik/",
            live: "https://www.emransheritagehome.com",
        },
        {
            title: "To-Do App",
            img: todo,
            text: "A simple yet powerful To-Do app with task creation, deletion, and local storage. Built with React + TypeScript.",
            github: "https://github.com/sheikhmanik/todoapp",
            live: "https://timely-jalebi-954d48.netlify.app",
        },
    ];

    return (
        <div className="pt-10 scroll-mt-20" id="project">
            <div className="container mx-auto flex flex-col sm:flex-row items-center justify-center gap-5">
                <Image alt="" src={project} className="sm:w-1/2 rounded-xl" />
                <div className="sm:w-1/2 pt-3 space-y-5 text-center sm:text-start">
                    <p className="font-playfair font-bold text-2xl lg:text-5xl origin-left transition-all duration-1000 bg-[length:300%_300%] animate-gradient-x text-transparent bg-clip-text bg-gradient-to-r to-red-500 via-slate-500 from-slate-400">
                        Some Things I’ve Built
                    </p>
                    <p className="font-lato font-bold text-xl lg:text-2xl origin-left transition-all duration-1000 bg-[length:300%_300%] animate-gradient-x text-transparent bg-clip-text bg-gradient-to-r to-red-500 via-slate-500 from-slate-400">
                        Real-world projects showcasing my skills in React, TypeScript, and Tailwind CSS.
                    </p>
                </div>
            </div>

            <section className="p-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {items.map((item, index) => (
                        <div
                            key={index}
                            className="bg-gray-800/80 backdrop-blur-sm rounded-2xl p-4 shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
                        >
                            <Image
                                src={item.img}
                                alt={item.title}
                                className="rounded-xl h-40 w-full object-cover mb-4"
                            />
                            <h2 className="font-playfair font-bold text-2xl text-center text-transparent bg-clip-text bg-[length:300%_300%] animate-gradient-x bg-gradient-to-r from-fuchsia-500 via-pink-500 to-orange-400">
                                {item.title}
                            </h2>
                            <p className="font-lato text-gray-300 text-base leading-relaxed text-center p-2">
                                {item.text}
                            </p>
                            <div className="flex justify-center gap-4 mt-4">
                                <a
                                    href={item.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 font-lato text-white border border-gray-600 px-4 py-2 rounded-xl hover:bg-gray-700 transition"
                                >
                                    <FontAwesomeIcon icon={faGithub}/> GitHub
                                </a>
                                <a
                                    href={item.live}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 font-lato text-white border border-blue-600 px-4 py-2 rounded-xl hover:bg-blue-800 transition"
                                >
                                    <FontAwesomeIcon icon={faTachographDigital}/> Live
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};