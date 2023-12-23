import React,{useState,useEffect} from 'react'


const Footer = () => {

    const [date,setDate]=useState("");

  const  updateDate=()=>{
        let currentDate = new Date();
        

        setDate(currentDate.getFullYear().toString());
    }
    
    useEffect(()=>{
        updateDate();
    },[]);

   

  return (
      <div className='container-fluid mx-0 my-0 px-0'>
    <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
    <div class="col-md-4 d-flex align-items-center">
      <a href="/" class="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
      
      </a>
      <span class="mb-3 mb-md-0 text-muted">© {date} Denizcan Arslan</span>
    </div>

    <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
    <li className={`nav-item  px-1 `}>
              <a className="nav-link" href="https://github.com/DenizcanArslan" target="_blank" rel="noreferrer">
              <i className="fa-brands fa-github text-secondary"></i>
              </a>
            </li>
            <li className={`nav-item  px-1 `}>
              <a className="nav-link" href="https://www.instagram.com/denizcan.arslan/" target="_blank" rel="noreferrer">
              <i className="fa-brands fa-instagram text-secondary"></i>             
               </a>
            </li>
    </ul>
  </footer>
  </div>
  )
}

export default Footer;