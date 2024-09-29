 // Blog.js
 import React from 'react'
 import Navbar from '../components/Navbar'
 import ProjectCard from '../components/ProjectCard'
import Footer from '../components/Footer'
import { ModelingCard } from '../components/ProjectCard'

 function Projects() {
   return (
     <div>
         <Navbar />
       <h1>
        My Projects
       </h1>
       <ProjectCard
        title="Bookify"
        description="Developed a data visualization tool for Goodreads users to view their reading trends."
        technologies="Python, Pandas, Flask, Plotly"
        links={[
          { url: "https://bookify-4stx.onrender.com/", label: "Bookify" }
        ]}
      />
        <ProjectCard
          title='Admin Dashboard'
          description='Crafted a Admin Dashboard as part of The Odin Project Curriculum.'
          technologies='JavaScript, CSS, HTML'
          links={[{url: "https://littlehero05.github.io/AdminDash/", label: "Admin Dashboard"}]}/>

        <ProjectCard
          title='Mini HTML/CSS/ Projects'
          description='Created a collection of mini projects using HTML, CSS and JS as part of The Odin Project Curriculum.'
          technologies='HTML, CSS, JavaScript'
          links={[
            { url: 'https://littlehero05.github.io/landing-page/', label: 'Landing Page' },
            { url: 'https://littlehero05.github.io/SignUpForm/', label: 'Sign Up Form' },
            { url: 'https://littlehero05.github.io/rock-paper-scissors/', label: 'Rock Paper Scissors' },
          ]}/>

        <ModelingCard
          title='3D Modeling and Animation'
          description='Create 3D models and animations using Blender.'
          technologies='Blender and Davinci Resolve'
          link='./Modeling'/>

        <Footer />
     </div>

   )
 }

 export default Projects
