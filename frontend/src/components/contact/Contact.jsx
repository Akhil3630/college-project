import React from 'react'
import './Contact.css'
import { Icon } from '@iconify/react';
function Contact() {
  let name="Enter Your"
  return (
      <div className='contact'>
          <div className="contact-container">
              <div className="con-h1-div pt-4 pb-4 text-danger text-center" >
                  <h1 className="con-h1">CONTACT</h1>
              </div>
              <div className="row con-row">

                  <div className="con-left col-12 col-md-6 text-light">
                      <div className="container">
                          <div className="con-left-title-div pt-4 text-light">
                              <h1 className="con-title-">GET IN TOUCH</h1>
                          </div>
                          <div className="con-title-des">
                              <p className="con-p">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet quas hic voluptatum temporibus voluptates ab a quia voluptatem debitis quam ad consequatur minima, nesciunt, blanditiis similique asperiores quasi, harum dignissimos.</p>
                          </div>
                          <div className="con-left-info">
                              <div className="con-left-info-des">
                                  <div className="con-icon-div"><Icon className='con-icon' icon="ant-design:mail-outlined" /></div>
                                  <span className="info-des pl-4 ml-3">aswinkcmji@gmail.com</span>
                              </div>
                              <div className="con-left-info-des ">
                                  <div className="con-icon-div"><Icon className='con-icon' icon="carbon:phone" /></div>
                                  <span className="info-des pl-4 ml-3">+91 8606833002</span>
                              </div>
                              <div className="con-left-info-des pb-5">
                                  <div className="con-icon-div"><Icon className='con-icon' icon="akar-icons:location" /></div>
                                  <span className="info-des pl-4 ml-3">Manjeri,malappuram,kerala</span>
                              </div>
                          </div>
                      </div>
                  </div>

                  <div className="con-right col-12 col-md-6 ">
                      <div className="container con-right-container mt-4">
                          <div className="right-h1-div pt-3 text-danger">
                              <h1 className="con-title">SAY SOMETHING</h1>
                          </div>
                          <form id="submit-form" action="">
                              <table className='con-table '>
                                  <tr>
                                      <td><input className='con-in mt-0 pl-2' name="name" id="name" type="text" required=" " placeholder={name+" Name...."}/></td>
                                  </tr>
                                  <tr>
                                      <td><input className='con-in mt-3 pl-2' name="email" id="email"  type="email"  required=" " placeholder={name+" Email...."}/></td>
                                  </tr>
                                  <tr>
                                      <td><input name="message" id="message" style={{height:'6rem',paddingBottom:'4.5rem'}} className='con-in mt-3 pl-2' type="text"  required=" " placeholder={name+" Message...."}/></td>
                                  </tr>
                                  <tr>
                                      <td><input style={{width:'16.3rem'}} className= 'btn btn-danger  con-btn mt-2' type="submit" value="Submit" /></td>
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