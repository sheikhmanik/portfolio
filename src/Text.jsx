"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Text;
function Text() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            console.log(entry);
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
            else {
                entry.target.classList.remove('show');
            }
        });
    });
    const hiddenElements = document.querySelectorAll('.content-hidden');
    hiddenElements.forEach((el) => observer.observe(el));
    return (<div className="dark:bg-gray-800 dark:text-white">
            <section className="content-hidden h-[100vh] container mx-auto flex items-center">
                <p className="content-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque eaque error a explicabo natus ea voluptatibus sapiente rem quis fugiat?</p>
            </section>
            
            <section className="content-hidden h-[100vh] container mx-auto flex items-center">
                <p className="content-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque eaque error a explicabo natus ea voluptatibus sapiente rem quis fugiat?</p>
            </section>
            
            <section className="content-hidden h-[100vh] container mx-auto flex items-center">
                <p className="content-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque eaque error a explicabo natus ea voluptatibus sapiente rem quis fugiat?</p>
            </section>
        </div>);
}
