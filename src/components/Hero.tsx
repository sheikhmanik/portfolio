import dp from "../assets/dp.jpg";
import resume from "../assets/manik-resume.pdf";
import TypewriterText from "../ui/Typewriter";

export default function Hero() {
    return (
        <div>
            <div className="flex flex-col items-center justify-center mt-5 md:mt-10">
                <img
                    src={dp}
                    alt="Manik's Profile"
                    draggable="false"
                    className="h-28 w-28 md:h-40 md:w-40 rounded-full object-cover border-4 border-gray-700 shadow-[0_0_12px_rgba(255,255,255,0.1)] ring-2 ring-indigo-500 ring-offset-2 ring-offset-gray-900 transition-transform duration-500 hover:scale-105 animate-floatX"
                />
                <section className="flex flex-col items-center justify-center mt-5 px-4 text-white md:text-center">
                    <TypewriterText text="Hy! I'm Manik.." />
                    <div>
                        <p className="text-gray-300 text-lg leading-relaxed max-w-2xl font-Eater mb-2 text-start">
                            A <span className="text-indigo-400 font-semibold">Frontend Developer</span> focused on building accessible, performant, and beautiful web apps using <span className="text-rose-400 font-semibold">React</span>, <span className="text-blue-400 font-semibold">TypeScript</span>, and <span className="text-cyan-400 font-semibold">Tailwind CSS</span>.
                        </p>
                        <p className="text-gray-400 text-base leading-relaxed max-w-xl font-ComicNeue text-start">
                            I'm experienced in managing component state, optimizing rendering performance, and working with design systems. I value clean abstractions, predictable code, and great user experiences.
                        </p>
                    </div>
                </section>
                <div className="mt-5 flex items-center justify-center gap-5">
                    <button className="font-ComicNeue font-semibold px-7 py-3 rounded-3xl bg-gradient-to-r from-fuchsia-500 via-pink-500 to-orange-400 text-white">
                        Connect with me
                    </button>
                    <a
                        href={resume}
                        download
                        className="font-ComicNeue font-semibold border-2 transition-colors duration-150 hover:border-blue-700 px-7 py-3 rounded-3xl text-white"
                    >
                        My Resume
                    </a>

                </div>
            </div>
        </div>
    )
}