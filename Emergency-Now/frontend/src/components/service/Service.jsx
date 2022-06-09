import React from 'react'
import {EyData} from '../../EyData'
import './Service.css'
function Service() {
  return (
    <div className='service'>
      <div className="container text-center">
        <div className="srv-h1-div text-center ">
          <h1 className="srv-h1 text-light pb-3 pt-3">Emergency Now</h1>
        </div>
        <div className="srv-row row">
          {EyData.map((item,index) => {
            return (
              <div onClick={""} key={index}  className="srv-card col-12 col-md-6 col-lg-4">
              <div className="srv-card-icon">
                {item.icon}
              </div>
              <div className="srv-card-text">
                {item.title}
              </div>
              <div className="srv-card-des">
                {item.desc}
              </div>
              </div> 
            )})}
        </div>
      </div>
    </div>
  )
}

export default Service