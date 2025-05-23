import React from 'react'
import { Icons } from './Icons'
import FadeInFromRight from './FadeInFromRight'
const Experience = () => {
  return (
   
    <div className='experience font-mono md:h-[780px] md:mb-[70px]'>
        <div className="heading m-auto items-center justify-center text-center">
            <p className='text-gray-400'>My</p>
            <p className='text-4xl text-cyan-500'>Experience</p>
        </div>
         <FadeInFromRight>
        <div className="firstcontainer flex justify-center-safe p-5 md:p-8 m-3 md:mt-12 text-gray-400">
            <div className="first justify-center text-center md:w-[250px] p-2 md:p-3">
                <div className="year text-2xl text-cyan-500 p-2">
                    <p>Since 2023</p>
                </div>
                
                <div className="count justify-center md:p-2 flex">
                    <div className="years-into-dev p-2">
                        <p className='text-cyan-500 text-6xl font-mono'>3</p>
                        <p>Years</p>
                    </div>
                    <div className="hyphen p-2 justify-center pt-6 bold">
                        <p>-</p>
                    </div>
                      <div className="website-number p-2">
                        <p className='text-cyan-500 text-6xl'>10</p>
                        <p>WEBSITES</p>
                    </div>
                </div>
                <div className="des">
                    <p>With 3 years of experience building dynamic and user-friendly web applications.</p>
                </div>
            </div>
            <div className="second">
                <img src="src/assets/developer computer.png" alt="computer image" className='w-[350px] h-[280px] m-1 md-m-3' />
            </div>
            <div className="third md:w-[300px] text-center border border-cyan-500 rounded-2xl p-5">
                <p>I specialize in  <span className="font-bold text-gray-300">React </span>and  <span className="font-bold text-gray-300">Modern Javascript</span>, leveraging best practices to create scalable and maintainable solutions.
My experience spans working on diverse projects, from small business websites to  <span className="font-bold text-gray-300">Complex front-end systems</span>, always aiming for clean code and exceptional user experiences.</p>
            </div>
        </div>

        <div className="secondcontainer flex justify-center items-center text-gray-400">
            <div className="first m-2 p-4 border border-gray-700 rounded ">
                <div className="icon flex justify-between">
                    <Icons.code className='text-gray-200  p-3 w-12 h-12 rounded-full bg-gray-700'/>
                    <p className='text-5xl font-extrabold p-2 text-stone-300'>7</p>
                </div>

                <div className="title">
                    <p className='font-bold text-stone-300'>Total Projects</p>
                </div>
                <div className="des">
                    <p className=''>Innovative web solutions crafted</p>
                </div>
            </div>
            <div className="second m-2 p-4 border border-gray-700 rounded ">
                 <div className="icon flex justify-between">
                    <Icons.certificate className='text-gray-200  p-3 w-12 h-12 rounded-full bg-gray-700'/>
                    <p className='text-5xl font-extrabold p-2 text-stone-300'>5</p>
                </div>

                <div className="title">
                    <p className='font-bold text-stone-300'>Certificates</p>
                </div>
                <div className="des">
                    <p className=''>Professional skills validated

</p>
                </div>
            </div>
            <div className="third m-2 p-4 border border-gray-700 rounded ">
                 <div className="icon flex justify-between">
                    <Icons.star className='text-gray-200  p-3 w-12 h-12 rounded-full bg-gray-700'/>
                    <p className='text-5xl font-extrabold p-2 text-stone-300'>3</p>
                </div>

                <div className="title">
                    <p className='font-bold text-stone-300'>Continuous learning journey</p>
                </div>
                <div className="des">
                    <p className=''>Professional skills validated

</p>
                </div>
            </div>
        </div>
        </FadeInFromRight>
    </div>
    
  )
}

export default Experience
