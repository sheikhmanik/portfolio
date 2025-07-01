import project from "../assets/project.png";

export default function Project() {
    return (
        <>
            <div className="container mx-auto flex flex-col sm:flex-row gap-5">
                <img src={project} className="sm:w-1/2 animate-floatY sm:animate-floatX rounded-xl" />
                <div className="sm:w-1/2 pt-3 space-y-5 text-center sm:text-start">
                    <p className="font-Eater font-bold text-3xl lg:text-6xl origin-left transition-all duration-1000 bg-[length:300%_300%] animate-gradient-x text-transparent bg-clip-text bg-gradient-to-r to-red-500 via-slate-500 from-slate-400">Some Things I’ve Built</p>
                    <p className="font-Shizuru font-bold text-xl lg:text-3xl origin-left transition-all duration-1000 bg-[length:300%_300%] animate-gradient-x text-transparent bg-clip-text bg-gradient-to-r to-red-500 via-slate-500 from-slate-400">Real-world projects showcasing my skills in React, TypeScript, and Tailwind CSS. </p>
                </div>
            </div>
        </>
    )
}