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
        e.preventDefault()
        console.log(Array.from((new FormData(document.getElementById("form"))).entries()))
        // console.log(input)
        
        const { name, email, password } = input
        if( name && email && password ){
            axios.post("http://localhost:5000/Signup",  (new FormData(document.getElementById("form"))).entries()  )
            .then( res => {
                
                if(res.data.message === "Successfully Registered, Please login now.")
                {navigate("/Login")}
                
               
            })
        } else {
            alert("invlid input")
        }
     
    }
    
    
    
  return (
    <>
     <div className="signup text-center">
         <div className="container ">
            <div className="row sup-row">
                
                <div className="left-signup col-lg-6">
                    <h2 className='sup-h2'>Welcome to Emergency Now</h2>
                    <form action="" onSubmit={handleClick} id="form"  >
                    <table className='sup-table'>
                            <tr>
                                <td><label className='sup-label' htmlFor="">Name:</label></td>
                                <td><input className='sup-in ' name="name"onChange={handleChange} id='name' type="text" required=" " placeholder={name+" name...."} /></td>
                            </tr>
                            <tr>
                                <td><label className='sup-label' htmlFor="">Email:</label></td>
                                <td><input className='sup-in' name="email" onChange={handleChange} type="email"  required=" " placeholder={name+" email...."} /></td>
                            </tr>
                            <tr>
                                <td><label className='sup-label' htmlFor="">Password:</label></td>
                                <td><input className='sup-in' name="password" onChange={handleChange} type="password"  required=" " placeholder={"Enter password...."} /></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td><input   className='sup-btn' type="submit" value="Submit" /></td>
                            </tr>
                        </table>
                    </form>
                </div>
                
                <div className=" right-signup col-lg-6">
                    <div className="sup-image">
                        <img className='sup-img img-fluid' src={img} alt="" />
                    </div>
                </div>
            </div>
        </div>
        <script>
            
        </script>
     </div>
    </>
  )
}

export default Signup