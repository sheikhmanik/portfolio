"use client"
import { faLinkedin, faGithub, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Contact() {

    const sectionRef = useRef(null);

    useEffect(() => {
        // Register plugin (very important)
        gsap.registerPlugin(ScrollTrigger);
    
        gsap.fromTo(
            sectionRef.current,
            { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    ease: "power2.out",
                    scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%", // when top of element hits 80% of viewport
                    toggleActions: "play none none none", // control animation behavior
                },
            }
        );
    }, []);

    return (
        <section ref={sectionRef} id="contact" className="lg:mt-20 scroll-mt-28 container mx-auto p-4 text-center space-y-6">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 via-pink-500 to-orange-400">
                Let’s Connect
            </h2>

            <p className="text-gray-300 font-lato max-w-2xl mx-auto text-lg leading-relaxed">
                I’m always open to discussing new projects, creative ideas, or opportunities to collaborate. Feel free to connect with me through the platforms below. Let’s build something awesome together!
            </p>

            <div className="flex justify-center gap-8 pt-4">
                <a
                    href="https://github.com/sheikhmanik"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-gray-300 transition-colors text-3xl"
                >
                    <FontAwesomeIcon icon={faGithub} />
                </a>
                <a
                    href="https://www.linkedin.com/in/sheikhm01/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:text-blue-300 transition-colors text-3xl"
                >
                    <FontAwesomeIcon icon={faLinkedin} />
                </a>
                <a
                    href="mailto:manikullah.me@gmail.com"
                    className="text-red-400 hover:text-red-300 transition-colors text-3xl"
                >
                    <FontAwesomeIcon icon={faEnvelope} />
                </a>
                <a
                    href="https://wa.me/919201163155"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-400 hover:text-green-300 transition-colors text-3xl"
                >
                    <FontAwesomeIcon icon={faWhatsapp} />
                </a>
            </div>

            <p className="text-sm text-gray-500 pt-2">© {new Date().getFullYear()} Manik. All rights reserved.</p>
        </section>
    )
}