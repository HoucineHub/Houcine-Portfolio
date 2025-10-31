import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Service from './components/Service/Service'
import Work from './components/Work/Work'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div>
        <Navbar />
        <Hero />
        <About />
        <Service />
        <Work />
        <Contact />
        <Footer />
    </div>
  )
}

export default App
