import React, {useState,useEffect} from 'react';

import logo from "../assets/images/denizcanArslanLogo.jpeg"

const Navbar = () => {

    
     const [isMobile, setIsMobile] = useState(false);  //false=desktop - true=mobile

     const handleResize = () => {
       setIsMobile(window.innerWidth <= 991);
     };

    

  
     useEffect(() => {
       // Add event listener for window resize
      window.addEventListener('resize', handleResize);
      
    //   // Initial check for mobile view
       handleResize();
  
    //   // Remove event listener on component unmount
      return () => {
        window.removeEventListener('resize', handleResize);
     };
     }, []);

    

  return (
      <>
    <nav className="navbar navbar-expand-lg bg-white text-capitalize"  id="scrollHome">
      <div className="container-fluid">
        <a className="navbar-brand" href="#scrollHome">
          <img src={logo} alt="Denizcan Arslan Logo" className="img-fluid"  style={{ width: '10rem' }} />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto mx-2">
            <li className="nav-item px-3">
              <a className="nav-link active" aria-current="page" href="#scrollHome">
                Home
              </a>
            </li>
           
            <li className="nav-item  px-3">
              <a className="nav-link" href="#AboutMe">
                About me
              </a>
            </li>

            <li className="nav-item  px-3">
              <a className="nav-link" href="#TechStack">
                Tech Stack
              </a>
            </li>
            {/* <li className="nav-item  px-3">
              <a className="nav-link" href="#">
                Portfolio
              </a>
            </li> */}
            <li className={`nav-item px-3 ${isMobile ? '' : ' border-end'}`}>
              <a className="nav-link" href="#contact">
                Contact
              </a>
            </li>

            <li className={`nav-item  px-1 `}>
              <a className="nav-link" href="https://github.com/DenizcanArslan" target="_blank" rel="noreferrer">
              <i className="fa-brands fa-github"></i>
              </a>
            </li>
            <li className={`nav-item  px-1 `}>
              <a className="nav-link" href="https://www.instagram.com/denizcan.arslan/" target="_blank" rel="noreferrer">
              <i className="fa-brands fa-instagram"></i>             
               </a>
            </li>
         
          </ul>
        </div>
      </div>
    </nav>
    
</>
   

  );
  
};



export default Navbar;
