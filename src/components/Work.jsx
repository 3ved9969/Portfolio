import React, { useState } from 'react'
import {projects} from '../constants'

export default function Work() {
  const [selectedProject,setSelectedProject]=useState(null)
  const handleOpenModal=(project)=>{
    setSelectedProject(project);
  };

  const handleCloseModal=(project)=>{
    setSelectedProject(null);
  };
  return (
    <section
    id='work'
    className='py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans relative'
    >
      {/* Section Title */}
      <div className='text-center mb-16'>
        <h2 className='text-4xl font-bold text-white'>
          PROJECTS
        </h2>
        <div className='w-32 h-1 bg-[#8245ec] mx-auto mt-4'></div>
        <p className='text-gray-400 mt-4 text-lg font-semibold'>A showcase of the projects I have worked on,highlighting my skills and experience in various technologies.</p>
      </div>

      {/* Project Grid */}
      <div className='grid gap-12 grid-cols-2 md:grid-cols-3 lg:grid-cols-3'>
        {projects.map((project)=>(
          <div
          key={project.id}
          onClick={()=>handleOpenModal(project)}
          className='border-white bg-gray-900 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden cursor-pointer hover:shadow-purple-500/50
          hover:-translate-y-2 transition-transform duration-300'>
            <div className='p-4'>
              <img src={project.image} alt={project.title} className='w-full h-48 object-cover rounded-xl'/>
            </div>
            <div className='p-6'>
              <h3 className='text-2xl font-bold text-white mb-2'>
                {project.title}
              </h3>
              <p className='text-gray-500 mb-4 pt-5 line-clamp-3'>
                {project.description}
              </p>
              <div className='mb-4'>
                {project.tags.map((tag,index)=>(
                  <span
                  key={index}
                  className='inline-block bg-[#251f38] text-xs font-semibold text-purple-500 rounded-full px-2 py-1 mr-2 mb-2'
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Modal Container */}
      {selectedProject && (
        <div className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90p-4'>
          <div className='bg-gray-900 rounded-xl shadow-2xl lg:w-full w-[90%] max-w-3xl overflow-hiddedn relative'>
            <div className='flex justify-end p-4'>
              <button
              onClick={handleCloseModal}
              className='text-white text-3xl font-bold hover:text-purple-500'
              >
                &times;
              </button>
            </div>
            <div className='flex flex-col'>
              <div className='w-full flex justify-center bg-gray-900 px-4'>
                <img src={selectedProject.image} alt={selectedProject.title} className='lg:w-full w-[95%] object-contaim rounded-xl shadow-2xl'/>
              </div>
              <div className='lg:p-8 p-6'>
                <h3 className='lg:text-3xl font-bold text-white mb-4 text-md'>
                  {selectedProject.title}
                </h3>
                <p className='text-gray-400 mb-6 lg:text-base text-xs'>
                  {selectedProject.description}
                </p>
                <div className='flex flex-wrap gap-2 mb-6'>
                  {selectedProject.tags.map((tag,index)=>(
                    <span
                    key={index}
                    className='bg-[#251f38] text-xs font-semibold text-purple-500 rounded-full px-2 py-1'
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className='flex gap-4'>
                  <a href={selectedProject.github} target='_blank' rel='noopener noreferrer'
                  className='w-1/2 bg-purple-600 hover:bg-purple-800 lg:px-6 lg:py-2 px-2 py-1 rounded-xl lg:text-xl text-sm font-semibold text-center'>
                    View Code
                  </a>
                  <a href={selectedProject.webapp} target='_blank' rel='noopener noreferrer'
                  className='w-1/2 bg-purple-600 hover:bg-purple-800 lg:px-6 lg:py-2 px-2 py-1 rounded-xl lg:text-xl text-sm font-semibold text-center'>
                    View Live
                  </a>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      )}
    </section>
  )
}
