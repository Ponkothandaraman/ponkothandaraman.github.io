import profilePic from "../assets/nantha.jpg"
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaLinkedin } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"
import { Mail } from 'lucide-react';


function Typewriter() {
    const [text] = useTypewriter({
        words: ["ML Engineer", "Data Scientist", "Gen AI Engineer"],
        loop: 0, // 0 for infinite loop
        delaySpeed: 2000, // delay between words
    });

    return (
        <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent">
            {text}
            <Cursor cursorStyle="|" className="blinking-cursor" cursorColor= "#6B7280" />
        </span>
    );
}


const Hero = () => {
    return (
        <div className="pb-4 lg:mb-36">
            <div className="flex flex-wrap lg:flex-row-reverse">
                <div className="w-full lg:w-1/2 lg">
                    <img src={profilePic} alt="Ram" className="rounded-full border-2 border-primary border-stone-900
                    md:max-w-lg md:max-h-lg 
                    sm:max-w-xs sm:max-h-xs
                    mx-auto
                    hover:scale-105 hover:shadow-lg hover:shadow-blue-500/50 duration-300" />
                </div>
                <div className="w-full lg:w-1/2">
                    <div className="flex flex-col items-center lg:items-middle">
                        <h2 className="pt-5 pb-2 text-3xl tracking-tighter lg:mt-16 lg:text-5xl">
                            Hi, I&apos;m
                        </h2>
                        <h2 className="pb-2 text-4xl tracking-tighter lg:text-6xl">
                            Ponkothandaraman 
                        </h2>
                        <span>
                            <Typewriter />
                        </span>
                        <div className="m-8 flex items-center justfy-center gap-4 text-2xl" >
                            <a href="https://www.linkedin.com/in/ponkothandaraman-s/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Linkedin"
                                className="hover:scale-125">
                                <FaLinkedin />
                            </a>
                            <a href="https://github.com/Ponkothandaraman"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="github"
                                className="hover:scale-125">
                                <FaGithub />
                            </a>
                            <a href="mailto:ponkothandaraman2002@gmail.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Gmail"
                                className="hover:scale-125">
                                <Mail />
                            </a>
                        </div>

                        <a href="/Ponkothandaraman.pdf"
                        target="_bklank"
                        rel="noopener noreferrer"
                        className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 rounded-full
                         p-4 text-sm text-stone-950 font-semibold hover:scale-110
                       ">
                            Check Resume
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero