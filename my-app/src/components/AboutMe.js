import React from 'react'

import DenizcanArslanCircled from "../assets/images/Denizcan-Arslan-modified.png";

const AboutMe = () => {
  return (
    <div class="container text-center additional-gap" id='AboutMe'>
        <div class="row">
        <div className='col-md-12 py-5'>
        <hr style={{width:"7rem",margin:"auto"}} className="py-5"/>
        <h2 className='WelcomingHeading'>About me</h2>
        </div>
    <div class="col-lg-6  " >
      <p className='text-box lh-lg'>
          Hello, my name is Denizcan Arslan. I am from Antalya, Turkey. I studied Information Technologies at Vilnius Gediminas Technical University (Vilnius Tech) and graduated in 2023. I develop websites. Moreover I am  willing to learn mobile app development.
      </p>
    </div>
    <div class="col-lg-6 ">
    <div class="text-center">
     <img src={DenizcanArslanCircled} class="img-fluid rounded" alt="Denizcan Arslan" style={{width:"20rem"}}/>
    </div>
    </div>
   
  </div>
    </div>
  )
}

export default AboutMe