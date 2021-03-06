import React from 'react'
import '../emergency/Emergency.css'
import { EyData } from '../../EyData';
import {Link} from "react-router-dom"
function Emergency(props) {
  return (
    <>
      <div className="emergency">
        <div className="container text-center">
          <div className="ey-h1-div text-center ">
            <h1 className="ey-h1 text-light pt-5">Emergency Now</h1>
          </div>
          <div className="ey-row row">

            {EyData.map((item,index) => {
            let title = item.title;

            if(title==="Police")
            {
              return <a key={index} className="ey-card col-12 col-md-6 col-lg-4" href={"tel:100"}>
                <div className="ey-card-icon">{item.icon}</div>
            <div className="ey-card-text">{item.title}</div>
            <div className="ey-card-des text-dark">{item.desc}</div>
              </a>
            }
            else if(title==="Fire Force")
            {
              return <a key={index} className="ey-card col-12 col-md-6 col-lg-4" href={"tel:101"}>
              <div className="ey-card-icon">{item.icon}</div>
          <div className="ey-card-text">{item.title}</div>
          <div className="ey-card-des text-dark">{item.desc}</div>
            </a>

            }
            else if(title==="Women Safety")
            {
              return <a key={index} className="ey-card col-12 col-md-6 col-lg-4" href={"tel:1091"}>
              <div className="ey-card-icon">{item.icon}</div>
          <div className="ey-card-text">{item.title}</div>
          <div className="ey-card-des text-dark">{item.desc}</div>
            </a>
            }else{
              return (
                <Link to={"/Show"} state={item.title}  key={index} className="ey-card col-12 col-md-6 col-lg-4">
                <div className="ey-card-icon">{item.icon}</div>
                <div className="ey-card-text">{item.title}</div>
                <div className="ey-card-des text-dark">{item.desc}</div>
              </Link>
              )  
                

            }
})}
          </div>
        </div>
      </div>
    </>
  )
}

export default Emergency
