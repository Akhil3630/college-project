import React,{useState} from 'react';
import { useNavigate } from "react-router-dom"
import "./UserOTP.css"
function UserOTP() {
    
    const navigate = useNavigate()

    const [OTP, setOTP] = useState()

    const handleInputChange = (e) =>
    {
            e.preventDefault();
          let  newData =e.target.value
          setOTP(newData)
    }
    let OtpFromSignUp = JSON.parse(localStorage.getItem('token-otp'))
    console.log(OtpFromSignUp)
  

    const handleSubmit = (e) =>{
        console.log(OtpFromSignUp)
        console.log(OTP);  
            e.preventDefault();
             if(OtpFromSignUp == OTP){
           alert("Your email has been verified.Login now");
           navigate("/Login")  
            console.log("verifed")         
             }
           else
           {alert("Wrong OTP")}
    }
    return (
        <div className="container-fluid body">
           <div className="otp-box">
           <form onSubmit={(e)=>{handleSubmit(e)}}>
                <div className="otp-header text-center m-5">
                    <h3>Enter the OTP </h3>
                </div>
                <div className="otp-inputs">
                    <div className="otp-field">
                    <input type="number" 
                    onChange={(e) => {handleInputChange(e)}}  
                    className="form-control otp-input mb-5" 
                    id="otp" 
                    name='otp' 
                    placeholder={"Enter the OTP"} 
                    required
                    minLength="4" 
                    maxLength="4"/></div>
                    <div className="otp-button media"><input type="submit" value="Verify" className="btn btn-danger form-control " /></div>
                </div>
            </form>
           </div>
        </div>
    );
}

export default UserOTP;