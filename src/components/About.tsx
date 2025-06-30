import about from "../assets/about.svg";

export default function About() {
    return (
        <div className="container mx-auto flex flex-col sm:flex-row items-center justify-center gap-5">
            <img src={about} className="sm:w-1/2 animate-floatY sm:animate-floatX" />
            <div className="sm:w-1/2 text-gray-300 font-ComicNeue leading-relaxed text-lg px-3">
                I'm a passionate frontend developer who enjoys turning complex problems into clean, scalable UI solutions. I specialize in building responsive web applications using <span className="text-indigo-400 font-semibold">React</span>, <span className="text-blue-400 font-semibold">TypeScript</span>, and <span className="text-cyan-400 font-semibold">Tailwind CSS</span>. I care deeply about writing readable code, improving user experience, and continuously learning new technologies.
            </div>
        </div>
    )
}