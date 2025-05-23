import React from 'react'
import { Download } from 'lucide-react';
import SpotlightCard from './SpotlightCard';
import FadeInFromLeft from './FadeInFromLeft';
const About = () => {
  return (
    <>
    <FadeInFromLeft>
    <div id='About' className="About w-full h-[800px] font-mono">
      <div className="heading text-cyan-500 text-4xl justify-center text-center items-center">
        <p>About Me</p>
        <hr className="w-50 bg-cyan-500 m-auto "/>
      </div>

      <div className='container flex justify-center m-5 p-20'>
       <div className="wriiten">
          
       <SpotlightCard className="custom-spotlight-card w-[550px] h-[500px] text-neutral-400" spotlightColor="rgba(0, 229, 255, 0.6)">

        <svg class="w-6 h-6 text-cyan-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.78552 9.5 12.7855 14l9-4.5-9-4.5-8.99998 4.5Zm0 0V17m3-6v6.2222c0 .3483 2 1.7778 5.99998 1.7778 4 0 6-1.3738 6-1.7778V11"/>
</svg>
    

       <p>👋 Hello My name is Tithi Ghosh and I am a fourth-year Computer Science Student attending the University of Engineering and Management, Kolkata.</p>
       


    <svg class="w-6 h-6  text-cyan-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m8 8-4 4 4 4m8 0 4-4-4-4m-2-3-4 14"/>
</svg>
       <p>I specialize in React and front-end development, build real-world projects and master modern web technologies. I specialize in the MERN stack and other modern technologies to create seamless user experiences and efficient solutions.</p>
       <svg class="w-6 h-6 text-cyan-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.35709 16V5.78571c0-.43393.34822-.78571.77777-.78571H18.5793c.4296 0 .7778.35178.7778.78571V16M5.35709 16h-1c-.55229 0-1 .4477-1 1v1c0 .5523.44771 1 1 1H20.3571c.5523 0 1-.4477 1-1v-1c0-.5523-.4477-1-1-1h-1M5.35709 16H19.3571M9.35709 8l2.62501 2.5L9.35709 13m4.00001 0h2"/>
</svg>

       <p> Outside of coding, I enjoy continuous learning and sharing knowledge to inspire others to achieve their goals.</p>
       <svg class="w-6 h-6 text-cyan-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
  <path fillRule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm5.495.93A.5.5 0 0 0 6.5 13c0 1.19.644 2.438 1.618 3.375C9.099 17.319 10.469 18 12 18c1.531 0 2.9-.681 3.882-1.625.974-.937 1.618-2.184 1.618-3.375a.5.5 0 0 0-.995-.07.764.764 0 0 1-.156.096c-.214.106-.554.208-1.006.295-.896.173-2.111.262-3.343.262-1.232 0-2.447-.09-3.343-.262-.452-.087-.792-.19-1.005-.295a.762.762 0 0 1-.157-.096ZM8.99 8a1 1 0 0 0 0 2H9a1 1 0 1 0 0-2h-.01Zm6 0a1 1 0 1 0 0 2H15a1 1 0 1 0 0-2h-.01Z" clipRule="evenodd"/>
</svg>
<p>Beyond my professional life, I enjoy painting, reading novels, and solving puzzles. These creative outlets help me stay inspired, think critically, and maintain a balanced mindset in my development work.</p>
<a
            href="/Tithi_Ghosh_resume.pdf"
            download
            className="flex items-center justify-center gap-2 px-4 py-2 bg-transparent border border-cyan-500 text-cyan-500 hover:bg-gray-800 transition rounded w-full sm:w-60"
          >
            <Download className="w-5 h-5 md:w-6 md:h-6" />
            <span>Download Resume</span>
          </a>

</SpotlightCard>
       </div>
       <div className="photo w-1/3 relative flex justify-center items-center py-10">
  {/* Profile Image Container */}
  <div className="profile relative w-80 h-80">
    <img
      src="src/assets/TithiGhosh.png"
      alt="Tithi Ghosh Image"
      className="rounded-full w-full h-full object-cover shadow-[0_0_50px_10px_rgba(255,255,255,0.2)]"
    />

    {/* Overlapping Badge */}
    <div className="absolute bottom-3 left-3 z-10">
      <img
        src="src/assets/Open to work.png"
        alt="Open to work badge"
        className="rounded-lg w-32" // Adjust width as needed
      />
    </div>
  </div>
</div>
      </div>

    </div>
    </FadeInFromLeft>
    </>
  )
}

export default About