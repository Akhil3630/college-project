import React, { useState } from 'react'
import img from './assets/Mobile-login.jpg';
import './Signup.css'
import axios from "axios"
import { useNavigate } from "react-router-dom"

function Signup() {
    let name="Enter your"
  
    const navigate = useNavigate();

   
    const [input, setInput] = useState({
        name: "",
        email:"",
        password:"",
    })

    const handleChange = e => {
        const {name, value} = e.target;

        setInput( {
            ...input,
            [name]:value
        })
    }
    const handleClick = (e) => {
        e.preventDefault();
        const { name, email, password,  } = input
        if( name && email && password ){
            axios.post("http://localhost:5000/Signup", input)
            .then( res => {
                    let otp = res.data.otp
                    if(res.data.otp != null && res.data.dbMessage != "error"){
                        localStorage.setItem('token-otp', JSON.stringify(otp));
                        localStorage.setItem('token-user', JSON.stringify(input.email));
                        alert("Verify your email")
                        navigate("/UserOTP")
                    }else if(res.data.message === "User already registerd"){
                        alert("User is already registered")
                        navigate("/signup")
                    }else if(res.data.dbMessage === "error"){
                        alert("Something went wrong")
                        navigate("/signup")  
                    }
                    else{
                        alert("Something went wrong")
                        navigate("/signup")  
                    }
                  



                    // res.data = null?
                    // alert("Something went wrong"):
                    // alert("Please verify your email.An otp has been sent to your email ")
                
                    // navigate("/UserOTP")
               
            })
        }
    }
  return (
    <>
     <div className="signup text-center">
         <div className="container-fluid">
            <div className="row sup-row">
                
                <div className="left-signup col-lg-6">
                    <h2 className='sup-h2'>Welcome to Emergency Now</h2>
                    <div action="">
                    <form action="" autoComplete='off' onSubmit={handleClick}>
                    <table className='sup-table'>
                            <tr>
                                <td><label className='sup-label' htmlFor="">Name:</label></td>
                                <td><input className='sup-in ' name="name" value={input.name} type="text" required=" " placeholder={name+" name...."} onChange={handleChange}/></td>
                            </tr>
                            <tr>
                                <td><label className='sup-label' htmlFor="">Email:</label></td>
                                <td><input className='sup-in' name="email" value={input.email} type="email"  required=" " placeholder={name+" email...."} onChange={handleChange}/></td>
                            </tr>
                            <tr>
                                <td><label className='sup-label' htmlFor="">Password:</label></td>
                                <td><input className='sup-in' name="password" value={input.password} type="password"  required=" " placeholder={"Enter password...."} onChange={handleChange}/></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td className='sup-btn-td'><input    className='sup-btn' type="submit" value="Submit" /></td>
                            </tr>
                        </table>
                    </form>
                    </div>
                </div>
                
                <div className=" right-signup col-lg-6">
                    <div className="sup-image">
                        <img className='sup-img img-fluid' src={img} alt="" />
                    </div>
                </div>
            </div>
        </div>
     </div>
    </>
  )
}

export default Signup