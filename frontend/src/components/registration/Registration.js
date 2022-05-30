import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import './Registration.css';
import axios from 'axios';

function Registration() {
 const navigate = useNavigate();
  const [input, setInput] = useState({
    name:'',
    district:'',
    mobile:'',
    email:'',
    blood:'',
    service:'',
    password:''
  })
// const [first, setfirst] = useState("");

  const handleChange = e =>{
   const inputData = {...input}
   inputData[e.target.id] = e.target.value;
   setInput(inputData)
   console.log(inputData)
  }
  



  const handleClick = (e) => {
    e.preventDefault()
  
    
    const { name, district, mobile, email, blood, service, password } = input
    if( name && district && mobile && email && blood && service && password ){
        axios.post("http://localhost:5000/Registration",  input  )
        .then( res => {
            
            if(res.data.message === "Thank you for providing your service")
            alert(res.data.message)
            {navigate("/home2")}
            
           
        })
    } else {
        alert("invlid input")
    }
 
}

  return (
   <>
   <div className="r-con">
   <div className="container">
        <div className="title-div">
          <h1 className="title">
            Registration 
          </h1>
          <form action="" method='post' id='form' onSubmit={handleClick}>
            <div className="row r-row">
              <table>
                <tr className="input-boxs col-12">
                  <td> <label htmlFor="">Name :</label></td>
                  <td><input  onChange={handleChange}  type="text" id='name' value={input.name} required=""/></td>
                </tr>
                <tr className='input-boxs col-12'>
                  <td><label htmlFor="">District :</label></td>

                  <td><select className='select-box' onChange={handleChange}  name="district" id="district" value={input.district}>
                  <option disabled value="">Select District</option>
                  <option value="kasargod">Kasaragod</option>
                  <option value="kannur">Kannur</option>
                  <option value="kozhikoe">Kozhikode</option>
                  <option value="wayanad">Wayanad</option>
                  <option value="malappuram">Malappuram</option>
                  <option value="thrissur">Thrissur</option>
                  <option value="eranamkulam">Ernakulam</option>
                  <option value="alappuzha">Alappuzha</option>
                  <option value="palakkad">Palakkad</option>
                  <option value="idukki">Idukki</option>
                  <option value="perinthalmann">Pathanamthitta</option>
                  <option value="kottayam">Kottayam</option>
                  <option value="kollam">Kollam</option>
                  <option value="thiruvanandhapuram">Thiruvananthapuram</option>
                  
                </select>
                </td>
                
                </tr>
                <tr className="input-boxs">
                  <td><label htmlFor="">Mobile :</label></td>
                  <td><input  onChange={handleChange} type="tel" value={input.mobile} id='mobile' /></td>
                </tr>
                <tr className="input-boxs">
                  <td><label htmlFor="">Email :</label></td>
                  <td> <input  onChange={handleChange} id="email" value={input.email} type="email" /></td>
                </tr>
                <tr className="input-boxs">
                  <td><label htmlFor="">Blood :</label></td>
                  <td> <select   onChange={handleChange} className='select-box' value={input.blood} name="blood" id="blood">
                  <option disabled  value="">Select Blood</option>
                  <option  value="A+">A+</option>
                  <option value="B+">B+</option>
                  <option value="0+">O+</option>
                  <option value="AB+">AB+</option>
                  <option value="A-">A-</option>
                  <option value="B-">B-</option>
                  <option value="O-">O-</option>
                  <option value="AB-">AB-</option>
                </select></td>
                </tr>
                <tr className="input-boxs">
                  <td><label htmlFor="">Service :</label></td>
                  <td><select  onChange={handleChange} className='select-box' value={input.service} name="service" id="service">
                  <option disabled value="">Select Service</option>
                  <option value="ambulance">Ambulance</option>
                  <option value="blood">Blood</option>
                  <option value="crane">Crane</option>
                </select></td>
                </tr>
                <tr className="input-boxs">
                  <td> <label htmlFor="">Password :</label></td>
                  <td><input  onChange={handleChange} id="password" value={input.password} type="password" /></td>
                </tr>
                <tr className='input-boxs'>
                  <td></td>
                  <td className='text-center'><input className='s-button text-center' type="submit" value="Submit" /></td>
                </tr>
              </table>
              
             


            </div>
          </form>
        </div>
      </div>
   </div>
      
   </>
  )
}
export default Registration


