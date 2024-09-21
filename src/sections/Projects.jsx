import React from 'react'

const Projects = () => {
  return (
    <main>
        <section className='c-space my-20'>
          <div className='grid-container'>
          <p className='mx-auto text-white sm:text-5xl text-2xl font-medium hero_tag text-gray_gradient p-3 '>Projects</p>
            <div className='text-center text-white font-thin mx-auto max-w-screen-sm p-4 border-2 border-white-500 rounded-md'>
                <ul>
                    <li>1. Property Rental Destination Platform + NLP integration</li>
                    <li>2. Word with Anon</li>
                    <li>3. Text Sentimental Analyzer </li>
                    <li>4. Saas Website</li>
                    <li>5. React Component to scale certain whole div element on screen while user scrolls to that portion</li>
                </ul>
            </div>
          </div>
        </section>
    </main>
  )
}

export default Projects;