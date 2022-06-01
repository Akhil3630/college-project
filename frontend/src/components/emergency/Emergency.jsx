import React from 'react'
import { Icon } from '@iconify/react';
import '../emergency/Emergency.css'
import { EyData } from '../../EyData';
function Emergency() {
  return (
    <>
      <div className="emergency">
        <div className="container text-center">
          <div className="ey-h1-div text-center ">
            <h1 className="ey-h1 text-light pt-5">Emergency Now</h1>
          </div>
          <div className="ey-row row">

            {EyData.map((item,index) => {
            return (
              <div  key={index}  className="ey-card col-12 col-md-6 col-lg-4">
                <div className="ey-card-icon">{item.icon}</div>
                <div className="ey-card-text">{item.title}</div>
                <div className="ey-card-des">{item.desc}</div>
              </div>  
            )})}
          </div>
        </div>
      </div>
    </>
  )
}

export default Emergency
