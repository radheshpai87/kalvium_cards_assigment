import React from 'react'
import Cards from './components/cards'
import './App.css'

function App() {

  return (
    <>
      <h1>Radhesh Pai</h1>
      <p>Full Stack Developer & Cyber Security Enthusiast</p>
      <div className='grid'>
        <Cards title="Web Development" description="Building mordern web applications using React, Javascript and modern CSS framework." image="https://img.freepik.com/free-photo/computer-program-coding-screen_53876-138060.jpg?semt=ais_hybrid&w=740&q=80" />
        <Cards title="Photography" description="Capturing beautiful moments and landscapes, specializing in street photography and natural lighting." image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfxPedWjxkXJc2auRUiKEWahf_7ONYV_JkFQ&s"/>
        <Cards title="Fitness & Health" description="Passionate about maintaining a healthy lifestyle through regular exercise, yoga and mindful nutrition practices." image="https://www.mrsindiaqueen.com/blog/uploads/images/2024/12/image_750x_676515e9295e5.jpg" />
      </div>
    </>
  )
}

export default App
