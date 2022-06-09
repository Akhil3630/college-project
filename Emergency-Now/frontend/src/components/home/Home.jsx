import './Home.css';
import { Icon } from '@iconify/react';
import React from 'react';
import { Link } from 'react-router-dom';
function Home() {
  const name="EMERGENCY"
  return (
        <div className="home">
          <div className="container">
            <div className="col col-home text-center">
              <h1 className='em-h1'>{name} NOW</h1>
              <div className="e-b-d btn-div">
                <Icon className='icon' icon="ic:outline-emergency" />
                <Link to="/Emergency" className='e-b btn' >{name}</Link>
              </div>
              <div className="or-div">
                <h1 className="or">OR</h1>
              </div>
              <div className="r-b-d btn-div">
                <Icon className='icon' icon="majesticons:edit-pen-2-line" />
                  <Link to="/Signup" className='r-b btn' >SIGN UP</Link>
              </div>
              <div className="login-div">
                <Link to="/Login" className="login">Already have an account?</Link>  
              </div>
              <div className="login-div">
                <Link to="/admin" className="login">Admin?</Link>  
              </div>
            </div>
          </div>
        </div>
  )}

export default Home;


