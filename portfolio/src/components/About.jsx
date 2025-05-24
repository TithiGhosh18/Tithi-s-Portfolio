import React from 'react';
import { Download } from 'lucide-react';
import SpotlightCard from './SpotlightCard';
import FadeInFromLeft from './FadeInFromLeft';
import './Hero.css';

const About = () => {
  return (
    <div id="About" className="w-full min-h-screen md:h-[900px] font-mono py-10 px-4 md:px-10">
      <div className="text-cyan-500 text-3xl md:text-4xl text-center mb-4">
        <p>About Me</p>
        <hr className="w-24 border-cyan-500 mx-auto mt-2" />
      </div>

      <FadeInFromLeft>
        <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 max-w-7xl mx-auto">
          
          {/* Text Card */}
          <div className="w-full md:w-[550px]">
            <SpotlightCard className="custom-spotlight-card w-[700px] md:w-full text-neutral-400" spotlightColor="rgba(0, 229, 255, 0.6)">
              
              {/* Icon and Paragraph 1 */}
              <svg className="w-6 h-6 text-cyan-500" viewBox="0 0 24 24" fill="none">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.78552 9.5 12.7855 14l9-4.5-9-4.5-8.99998 4.5Zm0 0V17m3-6v6.2222c0 .3483 2 1.7778 5.99998 1.7778 4 0 6-1.3738 6-1.7778V11"/>
              </svg>
              <p className="text-sm md:text-base mt-2">
                👋 Hello! I'm Tithi Ghosh, a fourth-year Computer Science student at the University of Engineering and Management, Kolkata.
              </p>

              {/* Icon and Paragraph 2 */}
              <svg className="w-6 h-6 text-cyan-500 mt-4" viewBox="0 0 24 24" fill="none">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m8 8-4 4 4 4m8 0 4-4-4-4m-2-3-4 14"/>
              </svg>
              <p className="text-sm md:text-base mt-2">
                I specialize in React and front-end development, building real-world projects using the MERN stack and other modern technologies.
              </p>

              {/* Icon and Paragraph 3 */}
              <svg className="w-6 h-6 text-cyan-500 mt-4" viewBox="0 0 24 24" fill="none">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.35709 16V5.78571c0-.43393.34822-.78571.77777-.78571H18.5793c.4296 0 .7778.35178.7778.78571V16M5.35709 16h-1c-.55229 0-1 .4477-1 1v1c0 .5523.44771 1 1 1H20.3571c.5523 0 1-.4477 1-1v-1c0-.5523-.4477-1-1-1h-1M5.35709 16H19.3571M9.35709 8l2.62501 2.5L9.35709 13m4.00001 0h2"/>
              </svg>
              <p className="text-sm md:text-base mt-2">
                Outside coding, I enjoy continuous learning and sharing knowledge to inspire others.
              </p>

              {/* Icon and Paragraph 4 */}
              <svg className="w-6 h-6 text-cyan-500 mt-4" viewBox="0 0 24 24" fill="currentColor">
                <path fillRule="evenodd" clipRule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm5.495.93A.5.5 0 0 0 6.5 13c0 1.19.644 2.438 1.618 3.375C9.099 17.319 10.469 18 12 18c1.531 0 2.9-.681 3.882-1.625.974-.937 1.618-2.184 1.618-3.375a.5.5 0 0 0-.995-.07.764.764 0 0 1-.156.096c-.214.106-.554.208-1.006.295-.896.173-2.111.262-3.343.262-1.232 0-2.447-.09-3.343-.262-.452-.087-.792-.19-1.005-.295a.762.762 0 0 1-.157-.096ZM8.99 8a1 1 0 0 0 0 2H9a1 1 0 1 0 0-2h-.01Zm6 0a1 1 0 1 0 0 2H15a1 1 0 1 0 0-2h-.01Z"/>
              </svg>
              <p className="text-sm md:text-base mt-2">
                I love painting, reading novels, and solving puzzles – creative outlets that inspire and balance me.
              </p>

              <a
                href="/Tithi_Ghosh_resume.pdf"
                download
                className="mt-6 flex items-center justify-center gap-2 px-4 py-2 border border-cyan-500 text-cyan-500 hover:bg-gray-800 transition rounded w-full sm:w-60"
              >
                <Download className="w-5 h-5 md:w-6 md:h-6" />
                <span>Download Resume</span>
              </a>

            </SpotlightCard>
          </div>

          {/* Image Section */}
          <div className="animate-float w-full md:w-1/3 flex justify-center items-center hover:scale-110 transition-transform duration-200 ease-in-out">
            <div className="relative w-60 h-60 sm:w-72 sm:h-72 md:w-80 md:h-80">
              <img
                src="src/assets/tithighosh.png"
                alt="Tithi Ghosh"
                className="rounded-full w-full h-full object-cover shadow-[0_0_50px_10px_rgba(255,255,255,0.2)]"
              />
              <div className="absolute bottom-2 left-2 z-10">
                <img
                  src="src/assets/opentowork.png"
                  alt="Open to work badge"
                  className="rounded-lg w-24 sm:w-28 md:w-32"
                />
              </div>
            </div>
          </div>
        </div>
      </FadeInFromLeft>
    </div>
  );
};

export default About;
