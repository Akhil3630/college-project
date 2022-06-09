import React,{useState} from 'react'
import './Login.css'
import { Link } from 'react-router-dom';
import axios from "axios"
import {  useNavigate } from 'react-router-dom';
import { Icon } from '@iconify/react';

    const Login = ({ setLoginUser}) => {
        const name="Enter Your"
        const navigate = useNavigate()
    
        const [ user, setUser] = useState({
            email:"",
            password:""
        })
    
        const handleChange = e => {
            const { name, value } = e.target
            setUser({
                ...user,
                [name]: value
            })
        }
    
        const login = (e) => {
            e.preventDefault();
            axios.post("http://localhost:5000/login", user)
            .then(res => {
                if(res.data.message==="Login Successfull"){
                    navigate("/Home2")
                }
                alert(res.data.message)
                setLoginUser(res.data.user)
                
               
            })
        }
  return (
    <>
        <div className="login">
           <div className="container ">
               <div className="row login-row ">
                   <div className="login-h1-div col-12" >
                       <h1 className="login-h1 text-center">Login</h1>
                   </div>
                   <form className="log-form text-center col-12" onSubmit={login}>
                        <span className='log-span'>
                            <div className='log-icon-span'>
                                <Icon className='log-icon' icon="carbon:email" />
                            </div>
                            <input className='log-in ' type="email"  name="email" value={user.email} onChange={handleChange} required=" " placeholder={name+" Email...."}/>
                        </span>
                        <span className='log-span'>
                            <div className='log-icon-span'>
                                <Icon className='log-icon' icon="ri:lock-password-fill" />
                            </div>
                            <input className='log-in ' type="password"  name="password" value={user.password} onChange={handleChange} required=" " placeholder={name+" Password...."}/>
                        </span>
                        <input className='mt-4 log-btn btn btn-danger text-center' type="submit" value="Submit" />
                        <Link to="/Signup" className='mb-5' >Create an account...</Link>
                   </form>
               </div>
           </div>
        </div>
    </>
  )
}

export default Login