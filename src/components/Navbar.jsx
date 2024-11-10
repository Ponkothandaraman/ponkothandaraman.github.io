import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false); // Close menu after clicking
    }
  };

  const navItems = [
    { id: "hero", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "education", label: "Education" },
  ];

  return (
    <nav className="relative">
      <div className="flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
          <a href="/" aria-label="Home">
            <span className="mx-2 text-2xl text-white bg-clip-text text-transparent drop-shadow-lg">
              SP
            </span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex m-4 md:m-8 items-center justify-center gap-3 md:gap-6 text-base md:text-xl">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleScroll(item.id)}
              className="transition-colors duration-300 hover:text-blue-400"
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-stone-300 hover:text-white p-2"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Dropdown */}
      <div
        className={`absolute top-full left-0 right-0 md:hidden bg-neutral-950/80 backdrop-blur-sm 
          ${isOpen 
            ? 'opacity-100 translate-y-0 visible'
            : 'opacity-0 -translate-y-2 invisible'
          } transition-all duration-300 ease-in-out z-50`}
      >
        <div className="flex flex-col p-4 space-y-4">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleScroll(item.id)}
              className="text-left py-2 text-base transition-colors duration-300 hover:text-blue-400"
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;