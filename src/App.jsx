import React from 'react'
import About from './components/About';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Work from './components/Work';
import Education from './components/Education';
import Skills from './components/Skills';
import BlurBob from './BlurBob';
//import './index.css'

function App() {
  

  return (
    <div className="bg-[#050414]">
      <BlurBob position={{top:'35%',left:'20%'}} size={{width:'30%',height:'40%'}}></BlurBob>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]">
      </div>
      <div className='relative pt-20'>
        <About/>
        <Skills/>
        <Navbar/>
        <Work/>
        <Education/>
        <Contact/>
        <Footer/>
      </div>
    </div>

  )
}

export default App
