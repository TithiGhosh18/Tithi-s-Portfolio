import { useRef, useEffect, useState } from "react";
import { Menu, X } from 'lucide-react'; // You can use any icon library

import GooeyNav from "./GooeyNav";
export default function Navbar() {

  // update with your own items
const items = [
  { label: 'Home', url: '/' },
  { label: "About", href: "#" },
  
  { label: "Skills", href: "#" },
  
  { label: "Projects", href: "#" },
  
];


  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        
        <div className="text-xl font-bold text-gray-800 flex items-center space-x-2">
         <div className="Name sm:text-sm md:text-3xl lg:text-4xl noto-sans-regular ">
          <span>&lt;TithiGhosh/&gt;</span>
          </div>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6 text-sm font-medium text-black">
           <GooeyNav
    items={items}
    particleCount={15}
    particleDistances={[90, 10]}
    particleR={100}
    initialActiveIndex={0}
    animationTime={600}
    timeVariance={300}
    colors={[1, 2, 3, 1, 2, 3, 1, 4]}
  />
  
          <a
            href="#contact"
            className="bg-transparent border-solid border-2 border-cyan-500 hover:bg-gray-800 text-white px-4 py-2 rounded-full transition duration-300"
          >
            Contact
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-700 focus:outline-none">
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden mt-4 space-y-4 text-sm font-medium text-gray-700">
          <a href="#home" className="block hover:text-blue-500">Home</a>
          <a href="#about" className="block hover:text-blue-500">About</a>
          <a href="#skills" className="block hover:text-blue-500">Skills</a>
          <a href="#projects" className="block hover:text-blue-500">Projects</a>
          <a
            href="#contact"
            className="block w-fit bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-full transition duration-300"
          >
            Contact
          </a>
        </div>
      )}
    </nav>
  );
}
