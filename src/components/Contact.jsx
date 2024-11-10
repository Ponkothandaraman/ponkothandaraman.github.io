import { CONTACT } from "../constants";
import { FaLinkedin } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"
import { Mail } from 'lucide-react';
const Contact =() => {
    return (
        <div className="border-t border-stone-900 mt-20 pb-16">
            <h2 className="my-10 text-center text-4xl">
                Get in Touch
            </h2>
            <div className="text-center tracking-tighter">
                <p className="my-4">
                    {CONTACT.address}
                </p>
                <p className="my-4">
                    {CONTACT.phoneNo}
                </p>
            </div> 
            <div className="m-8 flex justify-center  gap-4 text-2xl" >
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
        
        </div>
    )
}

export default Contact