import React, { useRef,useState } from 'react';
import emailjs from '@emailjs/browser';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ReCAPTCHA from "react-google-recaptcha";

//6Lf8XDopAAAAAE44w8Oj3qb3X1ZAKNMNPbsvYVqW// KEY FOR RECAPTCHA

const Contact = () => {
  const form = useRef();

  const [capVal,setCapVal]=useState(null); 


  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_wo4rhal', 'template_xbvouhp', form.current, 'o8i6D0cD5_pZ2hLi2')
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
          // Başarıyla gönderildiğinde toast göster
          toast.success('Email sent successfully!');
          window.scrollTo({ top: 0, behavior: 'smooth' });

        },
        (error) => {
          console.log(error.text);
          // Hata durumunda toast göster
          toast.error('An error occurred. Please try again later.');
        }
      );
  };

  return (
    <div className='container-lg text-center ' id='contact'>
      <h2 className='WelcomingHeading' style={{ marginBottom: '5rem' }}>
        Contact
      </h2>

      <div className='row '>
        <form ref={form} onSubmit={sendEmail}>
          <div className='col-12 '>
            <div className='row'>
              <div className='col-sm-12 col-md-6'>
                <input type='text' name='user_name' className='form-control input-box' required placeholder='Name' />
              </div>
              <div className='col-sm-12 col-md-6 '>
                <input type='email' name='user_email' className='form-control input-box' required placeholder='Email' />
              </div>
            </div>
          </div>

          <div className='col-12 mx-auto'>
            <div className='row'>
              <div className='col-sm-12 col-md-6'>
                <input type='text' name='subject' className='form-control input-box' placeholder='Subject' />
              </div>
              <div className='col-sm-12 col-md-6'>
                <textarea name='message' className='form-control input-box' required placeholder='Message' />
              </div>
            </div>    
          </div>
          
          <div className='col-12 text-center mt-5'>
            <ReCAPTCHA sitekey='6Lf8XDopAAAAAE44w8Oj3qb3X1ZAKNMNPbsvYVqW'
                onChange={(val)=>setCapVal(val)}
            className="mb-5"/>
              <input type='submit' value='Send' disabled={!capVal} className='btn btn-primary btn-grad' />
            </div>
        </form>
      </div>

      {/* Toast bildirimleri için container */}
      <ToastContainer />
    </div>
  );
};

export default Contact;
