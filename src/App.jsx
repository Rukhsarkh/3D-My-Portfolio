import React from 'react'
import Navbar from './sections/Navbar'
import Hero from './sections/Hero'

const App = () => {
  return (
    <main className='max-w-7xl mx-auto relative'> 
      <Navbar/>
      <Hero/>
      {/* <About/> */}
      {/* <Projects/> */}
      {/* <Contact/> */}
    </main>
  )
}

export default App