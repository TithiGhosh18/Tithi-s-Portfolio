import React from 'react'
import { Icons } from './Icons'
import FadeInFromRight from './FadeInFromRight'
import computerimage from '../assets/developercomputer.png'

const Experience = () => {
  return (
    <div className='experience font-mono mt:[500px] md:mb-[70px] px-4 pt-10 pb-10'>
      <div className="heading text-center mb-10">
        <p className='text-gray-400'>My</p>
        <p className='text-4xl text-cyan-500'>Experience</p>
      </div>

      <FadeInFromRight>
        <div className="firstcontainer flex flex-col md:flex-row justify-center items-center gap-8 text-gray-400 mb-12">
          {/* Left Box */}
          <div className="first text-center md:w-[250px] p-3">
            <div className="year text-2xl text-cyan-500 p-2">
              <p>Since 2023</p>
            </div>

            <div className="count flex justify-center items-center md:p-2">
              <div className="years-into-dev p-2">
                <p className='text-cyan-500 text-6xl font-mono'>3</p>
                <p>Years</p>
              </div>
              <div className="hyphen p-2 pt-6 font-bold">
                <p>-</p>
              </div>
              <div className="website-number p-2">
                <p className='text-cyan-500 text-6xl'>10</p>
                <p>WEBSITES</p>
              </div>
            </div>

            <div className="des mt-2">
              <p>With 3 years of experience building dynamic and user-friendly web applications.</p>
            </div>
          </div>

          {/* Middle Image */}
          <div className="second">
            <img
             src={computerimage}
              alt="computer image"
              className='w-full max-w-[350px] h-auto mx-auto'
            />
          </div>

          {/* Right Box */}
          <div className="third md:w-[300px] text-center border border-cyan-500 rounded-2xl p-5">
            <p>
              I specialize in <span className="font-bold text-gray-300">React</span> and <span className="font-bold text-gray-300">Modern Javascript</span>, leveraging best practices to create scalable and maintainable solutions.
              My experience spans working on diverse projects, from small business websites to <span className="font-bold text-gray-300">Complex front-end systems</span>, always aiming for clean code and exceptional user experiences.
            </p>
          </div>
        </div>

        {/* Second Container */}
        <div className="secondcontainer flex flex-col md:flex-row justify-center items-center gap-5 text-gray-400">
          <div className="first m-2 p-4 border border-gray-700 rounded w-full max-w-[300px]">
            <div className="icon flex justify-between items-center">
              <Icons.code className='text-gray-200 p-3 w-12 h-12 rounded-full bg-gray-700' />
              <p className='text-5xl font-extrabold p-2 text-stone-300'>7</p>
            </div>
            <div className="title">
              <p className='font-bold text-stone-300'>Total Projects</p>
            </div>
            <div className="des">
              <p>Innovative web solutions crafted</p>
            </div>
          </div>

          <div className="second m-2 p-4 border border-gray-700 rounded w-full max-w-[300px]">
            <div className="icon flex justify-between items-center">
              <Icons.certificate className='text-gray-200 p-3 w-12 h-12 rounded-full bg-gray-700' />
              <p className='text-5xl font-extrabold p-2 text-stone-300'>5</p>
            </div>
            <div className="title">
              <p className='font-bold text-stone-300'>Certificates</p>
            </div>
            <div className="des">
              <p>Professional skills validated</p>
            </div>
          </div>

          <div className="third m-2 p-4 border border-gray-700 rounded w-full max-w-[300px]">
            <div className="icon flex justify-between items-center">
              <Icons.star className='text-gray-200 p-3 w-12 h-12 rounded-full bg-gray-700' />
              <p className='text-5xl font-extrabold p-2 text-stone-300'>3</p>
            </div>
            <div className="title">
              <p className='font-bold text-stone-300'>Continuous learning journey</p>
            </div>
            <div className="des">
              <p>Professional skills validated</p>
            </div>
          </div>
        </div>
      </FadeInFromRight>
    </div>
  )
}

export default Experience
