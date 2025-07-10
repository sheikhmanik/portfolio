"use client"
import dp from "@/assets/dp.jpg";
import TypewriterText from "@/ui/Typewriter";
import Image from "next/image";

export default function Hero() {
    return (
        <div>
            <div className="flex flex-col items-center justify-center mt-5 md:mt-10 gap-5">                
                <Image
                    src={dp}
                    alt="Manik's Profile"
                    draggable="false"
                    className="h-28 w-28 md:h-40 md:w-40 rounded-full object-cover border-4 border-gray-700 shadow-[0_0_12px_rgba(255,255,255,0.1)] ring-2 ring-indigo-500 ring-offset-2 ring-offset-gray-900 transition-transform duration-500 hover:scale-105 animate-floatX sm:animate-floatY"
                />
                <section className="flex flex-col items-center justify-center px-4 text-white md:text-center gap-3">
                    <TypewriterText text="Hy! I’m Manik.." />
                    <p className="text-gray-300 text-lg leading-relaxed max-w-2xl font-playfair text-start">
                        A <span className="text-indigo-400 font-semibold">Frontend Developer</span> focused on building accessible, performant, and beautiful web apps using <span className="text-yellow-600 font-semibold">Next.js</span>, <span className="text-rose-400 font-semibold">React.js</span>, <span className="text-blue-400 font-semibold">TypeScript</span>, and <span className="text-cyan-400 font-semibold">Tailwind CSS</span>.
                    </p>
                    <div className="flex items-center justify-center gap-5">
                        <button onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })} className="font-inter font-semibold px-7 py-3 rounded-3xl bg-gradient-to-r from-fuchsia-500 via-pink-500 to-orange-400 text-white cursor-pointer">
                            Connect with me
                        </button>
                    </div>
                </section>
            </div>
        </div>
    )
}