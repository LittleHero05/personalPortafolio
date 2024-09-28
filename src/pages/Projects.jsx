 // Blog.js
 import React from 'react'
 import Navbar from '../components/Navbar'
 import ProjectCard from '../components/ProjectCard'
import Footer from '../components/Footer'

 function Projects() {
   return (
     <div>
         <Navbar />
       <h1>
         Write your projects here!
       </h1>
        <ProjectCard
          title='Bookify'
          description='Developed a data visualization tool for Goodreads users to view their reading trends.'
          technologies='Python, Pandas, Flask, Plotly'
          link="https://bookify-4stx.onrender.com/"
        />
        <ProjectCard
          title='Admin Dashboard'
          description='Crafted a Admin Dashboard as part of The Odin Project Curriculum.'
          technologies='JavaScript, CSS, HTML'
          link="https://littlehero05.github.io/AdminDash/"/>

        <Footer />
     </div>

   )
 }

 export default Projects
