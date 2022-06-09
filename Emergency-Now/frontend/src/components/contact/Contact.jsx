import React,{useRef} from 'react'
import './Contact.css'
import { Icon } from '@iconify/react'
import emailjs from '@emailjs/browser';
import img from './assets/Emergency call-bro.png'
function Contact() {

    const form = useRef();

    const submit = (event) =>{
        event.preventDefault()
        emailjs.sendForm('service_kfkvvbt', 'template_zudgimp', form.current, 'fSUab5zPpr83f72Na')
      .then((result) => {
          alert("Thanks for submitting")
      }, (error) => {
          alert("Something went wrong")
      });
      
      event.target.reset()
  };

  return (
      <div className="container-fluid ">
      <div className='row'>
          <div className=" contact-left  col-lg-6 pt-5">
            <h1 className='text-danger text-center'>CONTAT US</h1>
            <form action="" ref={form} className="contact-form-form " onSubmit={submit}>
                <div className="contact-left-form-items col-12">
                    <input className='form-control ' type="text" name='name' />
                    <label className='text-center' htmlFor="">Name</label>
                </div>
                <div className="contact-left-form-items col-12">
                    <input className='form-control' type="email" name="email" />
                    <label className='text-center' htmlFor="">Email</label>
                </div>
                <div className="contact-left-form-items col-12">
                    <textarea className='form-control' rows={8}  name='message' ></textarea>
                    <label className='text-center' htmlFor="">Message</label>
                </div>
                <div className="contact-left-form-items col-12 mt-4 ">
                    <input type="submit" value="SEND" className='btn btn-danger ' />
                </div>
            </form>
            <div className="social-media-icons mt-5">
                <Icon className='contact-icon text-danger ' icon="akar-icons:facebook-fill" />
                <Icon className='contact-icon text-danger' icon="ant-design:instagram-filled" />
                <Icon className='contact-icon text-danger' icon="akar-icons:twitter-fill" />
                <Icon className='contact-icon text-danger' icon="bi:globe" />
            </div>
          </div>
          <div className="contact-right p-5 col-lg-5">
              <img className='img-fluid' src={img} alt="" srcset="" />
          </div>
      </div>
      </div>
  )
}

export default Contact