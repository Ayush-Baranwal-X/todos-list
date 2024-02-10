import React from 'react'

const About = () => {
  return (
    <div style={{ minHeight: '85.5vh', marginLeft: '1%', marginTop: '1%' }}>

      <div>
        <button class="btn btn-dark" style={{ width: '245px', textAlign: 'left'}} type="button" disabled>
          <span class="spinner-grow spinner-grow-sm" aria-hidden="true"></span>
          <span role="status">Hi! I am Ayush. Welcome!</span>
        </button>
      </div>
      <button class="btn btn-dark" style={{ marginTop: '1%' }} type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
        Want to Know more about me?
      </button>

      <div class="offcanvas offcanvas-bottom" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel" style={{height:'70%'}}>
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="offcanvasExampleLabel">About Me</h5>
          <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
          <div>
            Hi! My name is Ayush Kumar Baranwal and this awesome todo list site is created by me. I am a fourth year students at the department of chemical engineering at IIT Delhi. My hobbies include playing video games, playing basketball, watching anime, etc. I am a cheerful person who is very passionate about web development, video game development and machine learning.
          </div>
          <div class="dropdown mt-3">
            <button class="btn btn-dark dropdown-toggle" type="button" data-bs-toggle="dropdown">
              Want to Reach Me?
            </button>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="https://www.linkedin.com/in/akbiitd/">LinkedIn</a></li>
              <li><a class="dropdown-item" href="https://github.com/Ayush-Baranwal-X">Github</a></li>
              <li><a class="dropdown-item" href="mailto:ayushkumarbaranwal1@gmail.com">Gmail</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About