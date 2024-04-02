import React, { useRef } from 'react'
import './Contact.css'
import emailjs from '@emailjs/browser';
import Fade from 'react-reveal/Fade';
import { RiSendPlaneFill } from "react-icons/ri"
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {

    const formRef = useRef();
    const handleSubmit = (e) => {
            e.preventDefault();
            emailjs
              .sendForm(
                "service_p0ibenf",
                "template_w4jlawt",
                formRef.current,
                "0RvzbREEtgEPIaNgi"
              )
              .then(
                (result) => {
                  console.log(result.text);
                  
                },
                (error) => {
                  console.log(error.text);
                }
              );
          };


          const notify = () => toast("your mail send ");

    return (
        <div className='container contact-section' id='contact'>
            <div className="row" >
                <Fade bottom>
                    <div className="col-xl-5 col-lg-5 col-md-5 col-sm-5">
                        <div className="contact-form-image">
                            <img src="https://img.freepik.com/free-vector/contact-us-concept-illustration_114360-2299.jpg?w=2000" alt="contact form mage" />
                        </div>
                    </div>
                </Fade>

                <Fade right>
                    <div className="col-xl-7 col-lg-7 col-md-7 col-sm-7">


                        <div className="contact-form-design">
                            <div className="text-center">
                                <h5>Contact Me</h5>
                            </div>

                            <form ref={formRef} onSubmit={handleSubmit} >
                                <div className="contact-form">
                                    <label className="form-label" >Name</label>
                                    <input type="text" className="form-control" name='user_name' />
                                    {/* <input  type="text" placeholder="Name" name="user_name" /> */}
                                </div>

                                <div className="contact-form">
                                    <label className="form-label">Phone Number</label>
                                    <input type="text" className="form-control" name='user_number' />
                                {/* <input  type="text" placeholder="phone Number" name="user_number" /> */}

                                </div>


                                <div className="contact-form">
                                    <label className="form-label" >Email</label>
                                    <input type="text" className="form-control" name="user_email" />
                                    {/* <input type="text" placeholder="Email" name="user_email" /> */}

                                </div>

                                <div className="contact-form">
                                    <label className="form-label">Address</label>
                                    <input type="text" className="form-control"  name='user_address'/>
                                    {/* <input  type="text" placeholder="Address" name="user_address" /> */}

                                </div>

                               

                                <div className="contact-form">
                                    <label className="form-label">Message</label>
                                    <textarea rows="4" type="text" className="form-control" name='message'/>
                                   {/* <textarea  rows="5" placeholder="Message" name="message" /> */}

                                </div>


                                {/* <div className="btn-submit">

                                    <p>Send <RiSendPlaneFill size={20} /></p>
                                </div> */}
                               <button className="btn-submit" onClick={notify}>Send <RiSendPlaneFill size={20} /></button>


                            </form>
                        </div>
                    </div>
                </Fade>
            </div>


            <ToastContainer className="pop-up" autoClose={8000} theme="dark"/>
        </div>

        

    )
}

export default Contact;




