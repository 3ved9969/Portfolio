import React from 'react'
import {Typewriter} from 'react-simple-typewriter';
import Tilt from 'react-parallax-tilt';
import profileImage from '../assets/GOPR0440.JPG'


export default function About() {
  return (
    <section
    id='about'
    className='py-4 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt-16 md:mt-24 lg:mt-32'
    >
      <div className='flex flex-col-reverse md:flex-row justify-between items-center'>
        {/*left side */}
        <div className='md:w-1/2 text-center md:text-left mt-8 md:mt-0'>
        <h1 className='text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-2 leading-tight'>
          Hi,I am
        </h1>
        <h2 className='text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight'>
          A Thrived Sai
        </h2>
        {/* Skills heading with typing effect */}
        <h3 className='text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#8245ec] leading-tight'>
          <span className='text-white'>
            I am a
          </span>
          <Typewriter
          words={[' Full Stack Developer', ' Coder']}
          loop={true}
          cursor
          cursorStyle="|"
          typeSpeed={100}
          deleteSpeed={50}
          delaySpeed={2000}
          />

        </h3>
        {/* About Me */}
        <p className='text-base sm:text-lg md:text-lg text-gray-400 mb-10 mt-8 leading-relaxed'>
         I'm an enthusiastic and self-driven Data Science student with a solid foundation in programming, data analysis, and statistical modeling. I enjoy uncovering insights from data and solving real-world problems through analytical and machine learning techniques. With hands-on experience in Python, SQL, and data visualization tools, I continuously seek opportunities to explore, innovate, and grow. I'm passionate about learning, collaborating, and making a meaningful impact through data-driven projects.
        </p>
        {/* Resume */}
        <a href='https://drive.google.com/file/d/1faaC514ViK8RKNGpRcNO8Fk9YaUyxE1I/view?usp=sharing'
        target='_blank'
        rel='noopener noreferrer'
        className='inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 transform hover:scale-105'
        style={{
          background:'linear-gradient(90deg,#8245ec,#a855f7)',
          boxShadow:'0 0 2px #8245ec,0 0 2px #8245ec,0 0 40px #8245ec',
        }}>
          Download Resume
        </a>
        </div>
        {/* Right Side */}
        <div className='md:w-1/2 flex justify-center md:justify-end'>
        <Tilt
        className='inline-block p-1 rounded-full border-4 border-purple-700 shadow-lg drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]'
        tiltMaxAngleX={20}
        tiltMaxAngleY={20}
        perspective={1000}
        scale={1.05}
        transitionSpeed={1000}
        gyroscope={true}>
          <img
          src={profileImage}
          alt='A Thrived Sai'
          className='w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 rounded-full object-cover'/>
        </Tilt>

        

        </div>
      </div>
      
    </section>
  )
}
