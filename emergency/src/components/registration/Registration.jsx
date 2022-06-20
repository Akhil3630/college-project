import React from 'react';
import {useState} from 'react'
import './Registration.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Registration = () => {

  const navigate = useNavigate();

  const [data,setData] = useState({
    fname:"",
    sname:"",
    phone:"",
    email:"",
    district:"",
    blood:"",
    service:""

  })
  const handleChange = (e) =>{
    const newData = {...data}
    newData[e.target.id] = e.target.value
    setData(newData)
    console.log(newData)
  }
  const submit = (e) =>{
    e.preventDefault();
    const {  fname, sname, phone, email, district, blood, service  } = data
    if( fname && sname && phone && email && district && blood && service){
        axios.post("http://localhost:5000/Registration", data)
        .then( res => {
            if(res.data.message=== "Successfully Registered, Please login now." )
            {
                navigate("/Home2")
            }
            alert(res.data.message)
           
           
        })
    }
  }
  return (
    <div>
      <div className="registration">
        
        <div className="container">
        
          <form action="" className="register-form" onSubmit={(e) =>submit(e)}>
            <div className="registration-h1-div bg-danger">
              <h2 className="registration-h1  text-light p-3 text-center">Emergency Service Registation</h2>
            </div>
            <div className="container">
            <div className="row">
              <div className="reg-fname col-md-6 pt-4">
                <label htmlFor="" className="reg-fname-label">First Name *</label><br />
                <input className="form-control" onChange={(e)=>handleChange(e)} type="text" id="fname" value={data.fname} required=" "/>
              </div>
              <div className="reg-sname col-md-6 pt-4">
                <label htmlFor="" className="reg-sname-label">Last Name</label><br />
                <input className="form-control" onChange={(e)=>handleChange(e)} type="text"  id="sname" value={data.sname} />
              </div>
              <div className="reg-phone col-sm-12 pt-4">
                <label htmlFor="" className="reg-label-phone">Phone *</label><br />
                <input className="form-control" onChange={(e)=>handleChange(e)} type="number" id="phone" value={data.phone} required=" "/>
              </div>
              <div className="reg-email col-sm-12 pt-4">
                <label htmlFor="" className="reg-label-email">Email *</label><br />
                <input className="form-control" onChange={(e)=>handleChange(e)} type="email"  id="email" value={data.email} required=" "/>
              </div>
              <div className="reg-district col-sm-12 pt-4">
                <label htmlFor="" className="reg-label-district">District *</label><br />
                <select  className="form-control" onChange={(e)=>handleChange(e)} id="district" value={data.district} required=" " >
                  <option value=""   selected hidden >Select a District</option>
                  <option value="Thiruvanathapuram">Thiruvanathapuram</option>
                  <option value="Kollam">Kollam</option>
                  <option value="Kottayam">Kottayam</option>
                  <option value="Pathanamthitta">Pathanamthitta</option>
                  <option value="Idukki">Idukki</option>
                  <option value="Alapuzha">Alapuzha</option>
                  <option value="Eranamkulam">Eranamkulam</option>
                  <option value="Thrissur">Thrissur</option>
                  <option value="Palakkad">Palakkad</option>
                  <option value="Malappuram">Malappuram</option>
                  <option value="Kozhikkode">Kozhikkode</option>
                  <option value="Wayanad">Wayanad</option>
                  <option value="Kannur">Kannur</option>
                  <option value="Kasaragod">Kasaragod</option>
                </select>
              </div>
              <div className="reg-blood col-sm-12 pt-4">
                <label htmlFor="" className="reg-label-blood">Blood Group *</label><br />
                <select className="form-control" onChange={(e)=>handleChange(e)} id="blood" value={data.blood}  required=" ">
                <option value=" " selected hidden >Select a Blood Group</option>
                  <option value="A+">A+ve</option>
                  <option value="A-">A-ve</option>
                  <option value="B+">B+ve</option>
                  <option value="B-">B-ve</option>
                  <option value="O+">O+ve</option>
                  <option value="O-">O-ve</option>
                  <option value="AB+">AB+ve</option>
                  <option value="AB-">AB-ve</option>
                </select>
              </div>
              <div className="reg-district col-sm-12 pt-4">
                <label htmlFor="" className="reg-label-service">Service *</label><br />
                <select className="form-control" onChange={(e)=>handleChange(e)} id="service" value={data.service}  required=" ">
                  <option value=" " selected hidden >Select Your Service</option>
                  <option value="Ambulance">Ambulance Service</option>
                  <option value="Blood Bank">Blood Bank</option>
                  <option value="Tow Truck">Tow Truck Service</option>
                </select>
              </div>
              <div className="reg-submit  pt-5 pb-4">
                <input className="btn btn-danger" type="submit" value="ADD SERVICE" />
              </div>
            </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Registration;
