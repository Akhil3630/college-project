import React from 'react'
import './Contact.css'
import { Icon } from '@iconify/react';
function Contact() {
  let name="Enter your"
  return (
    <div className='contact'>

        <div className="contact-container">
            
                <div className="con-h1-div">
                  <h1 className="con-h1">Contact</h1>
                </div>
                <div className="row con-row">


                  <div className="con-left col-12 col-md-6">
                    <div className="container">
                    <div className="con-left-title-div">
                      <h1 className="con-title">GET IN TOUCH</h1>
                    </div>
                    <div className="con-title-des">
                      <p className="con-p">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet quas hic voluptatum temporibus voluptates ab a quia voluptatem debitis quam ad consequatur minima, nesciunt, blanditiis similique asperiores quasi, harum dignissimos.</p>
                    </div>
                    <div className="con-left-info">
                      <div className="con-left-info-des">
                        <Icon icon="ant-design:mail-outlined" />
                        <span className="info-des">aswinkcmji@gmail.com</span>
                      </div>
                      <div className="con-left-info-des">
                      <Icon icon="carbon:phone" />
                        <span className="info-des">+91 8606833002</span>
                      </div>
                      <div className="con-left-info-des">
                        <Icon icon="akar-icons:location" />
                        <span className="info-des">Manjeri,malappuram,kerala</span>
                      </div>
                    </div>
                    </div>
                  </div>

                  <div className="con-right col-12 col-md-6">
                    <div className="container">
                    <div className="right-h1-div">
                      <h1 className="con-title">SAY SOMETHING</h1>
                    </div>
                    <form action="">
                        <table className='con-table'>
                            <tr>
                                <td><label className='con-label' htmlFor="">Name:</label></td>
                                <td><input className='con-in' type="text" required=" " placeholder={name+" name...."}/></td>
                            </tr>
                            <tr>
                                <td><label className='con-label' htmlFor="">Email:</label></td>
                                <td><input className='con-in' type="email"  required=" " placeholder={name+" email...."}/></td>
                            </tr>
                            <tr>
                                <td><label className='con-label' htmlFor="">Password:</label></td>
                                <td><input className='con-in' type="password"  required=" " placeholder={"Enter password...."}/></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td><input className='con-btn' type="submit" value="Submit" /></td>
                            </tr>
                        </table>
                    </form>
                    </div>
                  </div>


                </div>
            
        </div>
    </div>
  )
}

export default Contact