import React from 'react'


import Icon from './Icon'



/*ICONS*/
import wordpress from "../assets/icons/wordpress-logo.svg";
import htmlLogo from "../assets/icons/html5-logo.svg";
import cssLogo from "../assets/icons/css-logo.svg";
import jsLogo from  "../assets/icons/javascipt-logo.svg";
import ejsLogo from "../assets/icons/ejs-logo.svg";
import reactLogo from "../assets/icons/reactjs-logo.svg";
import boostrapLogo from "../assets/icons/boostrap-logo.svg";
import tailwindLogo from "../assets/icons/tailwind-logo.svg";
import javaLogo from "../assets/icons/java-logo.svg";
import nodejsLogo from "../assets/icons/nodejs-logo.svg";
import postgresLogo from "../assets/icons/postgres-logo.svg";
import mysqlLogo from "../assets/icons/mysql-logo.svg"
import apiLogo from "../assets/icons/api-logo.svg";
import githubLogo from "../assets/icons/github-logo.svg";
import canvaLogo from "../assets/icons/canva-logo.svg";
const TechStack = () => {
  return (
    <div className='container text-center additional-gap' id='TechStack'>
    <h2 className='WelcomingHeading'>Tech Stack</h2>
     <div className='row' style={{marginTop:"7rem"}}>
         <div className='col-lg-4 px-5 mt-sm-5 mt-lg-0'>
         <h2 className='tech-stack-heading'>Front End</h2>
         <div className='row'>
         <Icon IconName={htmlLogo} alt={"html-logo"} size={"3"} />
            <Icon IconName={cssLogo} alt={"css-logo"} size="3"/>    
            <Icon IconName={jsLogo} alt={"js-logo"} size="2.5"/>    
            <Icon IconName={ejsLogo} alt={"ejs-logo"} size="2.5"/>    
            <Icon IconName={reactLogo} alt={"react-logo"} size="2.5"/>    
            <Icon IconName={boostrapLogo} alt={"boostrap-logo"} size="2.5"/>    
            <Icon IconName={tailwindLogo} alt={"tailwind-logo"} size="5"/> 
         </div>
         </div>



         <div className='col-lg-4 px-5  mt-sm-5 mt-lg-0'>
         <h2 className='tech-stack-heading'>Back End</h2>
         <div className='row'>
         <Icon IconName={javaLogo} alt={"java-logo"} size="3"/>    
         <Icon IconName={nodejsLogo} alt={"nodejs-logo"} size="3.5"/>    
         <Icon IconName={postgresLogo} alt={"postgresql-logo"} size="3.5"/>    
         <Icon IconName={mysqlLogo} alt={"mysql-logo"} size="5"/>    
         <Icon IconName={apiLogo} alt={"api-logo"} size="5"/>    
         </div>
         </div>

         <div className='col-lg-4 px-5  mt-sm-5 mt-lg-0'>
         <h2 className='tech-stack-heading'>Others</h2>
         <div className='row'>
         <Icon IconName={wordpress} alt={"wordpress-logo"} size="2.8"/>    
          <Icon IconName={githubLogo} alt={"github-logo"} size={"2.5"}/>
          <Icon IconName={canvaLogo} alt={"canva-logo"} size={"3"}/>
        </div>  
         </div>
     </div>
    </div>
  )
}

export default TechStack