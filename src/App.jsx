import React from 'react'
import Cards from './components/cards'
import codingimg from '/coding.png'
import photoimg from '/photography.jpeg'
import fitnessimg from '/fitness.jpg'
import './App.css'

function App() {

  return (
    <>
      <h1>Radhesh Pai</h1>
      <p>Full Stack Developer & Cyber Security Enthusiast</p>
      <div className='grid'>
        <Cards title="Web Development" description="Building mordern web applications using React, Javascript and modern CSS framework." image={codingimg} />
        <Cards title="Photography" description="Capturing beautiful moments and landscapes, specializing in street photography and natural lighting." image={photoimg}/>
        <Cards title="Fitness & Health" description="Passionate about maintaining a healthy lifestyle through regular exercise, yoga and mindful nutrition practices." image={fitnessimg} />
      </div>
    </>
  )
}

export default App
