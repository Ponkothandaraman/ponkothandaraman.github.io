import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Skills from "./components/Skills.jsx";
import Experience from "./components/Experience.jsx";
import Projects from "./components/Projects.jsx";
import Education from "./components/Education.jsx";
import Contact from "./components/Contact.jsx";
import Copyright from "./components/Copyright.jsx";
import { Helmet } from "react-helmet";
import profilePic from "/ponkothandaraman.jpg"

const App = () => {
  return (
    <div className="overflow-x-hidden text-stone-300 antialiased">
      <Helmet>
        <title>Ponkothandaraman</title>
        <link rel="icon" type="img/jpg" href={profilePic} className="rounded-full w-16 h-16 "/>
      </Helmet>
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      </div>
      <div className="container mx-auto px-8 lg:px-36">
        <Navbar />
        <section id="hero">
          <Hero />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="experience">
          <Experience />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="education">
          <Education />
        </section>
        <section id="contact">
          <Contact />
        </section>
        <Copyright />
      </div>
    </div>
  );
};

export default App;
