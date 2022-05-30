import React,{useState} from 'react'
import './Login.css'
import { Link } from 'react-router-dom';
import axios from "axios"
import {  useNavigate } from 'react-router-dom';


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
        e.preventDefault()
        axios.post("http://localhost:5000/login", user)
        .then(res => {
             
            alert(res.data.message)
            if(res.data.message === "Login Successfull")
            {
                navigate("/Home2")
            }
            else{
                alert("error")
            }
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
                   <form action="" className="log-form text-center col-12 " onSubmit={login}>                  
                   <input className='log-in text-center' type="email"  name="email" value={user.email} onChange={handleChange} required=" " placeholder={name+" Email...."}/>
                        <input className='log-in text-center' type="password"  name="password" value={user.password} onChange={handleChange} required=" " placeholder={name+" Password...."}/>
                        <input className='log-btn text-center' type="submit"  value="Submit" />
                        <Link to="/Signup" className='' >Create an account...</Link>
                    </form>
               </div>
           </div>
        </div>
    </>
  )
}

export default Login