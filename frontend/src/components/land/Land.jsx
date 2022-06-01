import React from 'react'
import './Land.css'
import pic2 from './img/455977-PFCCHJ-609 (1).jpg'
import {Link} from 'react-router-dom'
function Land() {
  return (
      <div>
        <div className="container">
          <div className="row home2-row ">
            <div className="home21st-div col-12 col-lg-7">
              <h1 className="text-responsive text-light">Emergency Now</h1>
              <div className="p-tag-home2 text-light">
                <p className="p-responsive">24x7 Emergecy Support</p>
                <p className="p-responsive">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy</p>
              </div>
              <div className="row btn-- text-center">
              <Link to={'/Home2/Registration'}>
                        <button type="button" className=" add-service-bt btn btn-light  ">Add Service</button>
                    </Link>
                <button className='add-support-bt btn  text-center'>Contact</button>
              </div>
            </div>
            <div className="home22nd-div col-12 col-lg-5 ">
              <div className="img-div-home2">
                <img className='img-div-home2-img img-fluid' src={pic2} alt="" srcset="" />
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Land