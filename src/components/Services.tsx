import services from "../assets/services.png";
import resume from "../assets/manik-resume.pdf";
import frontend from "../assets/frontend.png";
import fastSecure from "../assets/fast-secure.png";
import crossPlatform from "../assets/cross-platform.jpg";
import scalable from "../assets/scalable.webp";

export default function Services() {

    const items: {title: string, img: string, text: string}[] = [
        {
            title: "Front-End",
            img: frontend,
            text: "First impressions matter. I craft modern, responsive UIs that deliver a strong first impression using React and Tailwind CSS.",
        },
        {
            title: "Fast & Secure",
            img: fastSecure,
            text: "Performance and security are top priorities. I ensure that your apps are optimized, fast, and secure from the ground up.",
        },
        {
            title: "Cross-Platform",
            img: crossPlatform,
            text: "From desktops to mobile screens, your application will adapt smoothly to every platform using flexible, responsive layouts.",
        },
        {
            title: "Scalable",
            img: scalable,
            text: "I write clean, scalable, and maintainable code using TypeScript and component-based architecture that grows with your product.",
        },
    ];

    return (
        <div className="pt-10 scroll-mt-20" id="services">
            <div className="container mx-auto flex flex-col sm:flex-row gap-5">
                <img src={services} className="sm:w-1/2 animate-floatY sm:animate-floatX rounded-xl" />
                <div className="sm:w-1/2 pt-3 space-y-5 text-center sm:text-start">
                    <p className="font-Playfair font-bold text-4xl lg:text-7xl origin-left transition-all duration-1000 bg-[length:300%_300%] animate-gradient-x text-transparent bg-clip-text bg-gradient-to-r to-red-500 via-slate-500 from-slate-400">My Awesome Services</p>
                    <p className="font-Lato font-bold text-xl md:text-3xl origin-left transition-all duration-1000 bg-[length:300%_300%] animate-gradient-x text-transparent bg-clip-text bg-gradient-to-r to-red-500 via-slate-500 from-slate-400 px-5 sm:px-0">I always strive to deliver the best user experience..</p>
                    <button className="pt-3">
                        <a
                            href={resume}
                            download
                            className="font-Lato font-semibold border-2 transition-colors duration-150 hover:border-blue-700 px-7 py-3 rounded-3xl text-white"
                        >
                            My Resume
                        </a>
                    </button>
                </div>

            </div>
            <section className="py-10 px-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {items.map((item, index) => (
                        <div
                            key={index}
                            className="bg-gray-800/80 backdrop-blur-sm rounded-2xl p-4 shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
                        >
                            <img
                                src={item.img}
                                alt={item.title}
                                className="rounded-xl h-40 w-full object-cover mb-4"
                            />
                            <h2 className="font-Playfair font-bold text-2xl transition-all duration-1000 flex items-center justify-center text-transparent bg-clip-text bg-[length:300%_300%] animate-gradient-x bg-gradient-to-r from-fuchsia-500 via-pink-500 to-orange-400">{item.title}</h2>
                            <p className="font-Lato text-gray-300 text-base leading-relaxed text-center p-2">
                                {item.text}
                            </p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
}