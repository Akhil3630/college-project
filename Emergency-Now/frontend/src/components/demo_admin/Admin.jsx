import React, {useState,useEffect} from 'react';
import axios from 'axios';
import "./Admin.css"


function Admin() {

       

const [userEmail,setuserEmail] = useState([])

const [usersCount, setusersCount] = useState([])

const [userDetails,setuserDetails] = useState([])
const [id, setid] = useState()

const [input, setInput] = useState({
   
    name: "",
    email:"",
    password:"",
})


const handleChange = (e) =>{
    const newData = {...input}
    newData[e.target.id] = e.target.value
    setInput(newData)
    
  }



const removeUser = (email) =>{
    let text;
    if (window.confirm("Are you sure you want to delete this user?") === true) {
      text = 1;
    } else {
      text = 0;
    }
console.log(text)
    text===1 ? axios.post("http://localhost:5000/delete/",{email})
    .then(res => {
        setuserEmail(res.data)
    }):console.log()
   
}

const readCount = () => {
    axios.get('http://localhost:5000/readCount')       
    .then(res => {      
       setusersCount(res.data) 
    })

}

  const  readDetails = () => {
    axios.get('http://localhost:5000/readservice')
    .then(res => {
        setuserDetails(res.data)
        
    })
  }
       useEffect(() => {
    readCount();
    readDetails();
       }, [userEmail])           
    
//   const clicks = (e) => {

//     axios.post('http://localhost:5000/admin',userMail)       
//     .then(res => {
//             console.log(res.data.message)
//     })

// }
const handle = (Id) => {
   
  setid(Id)
  
}

const updateUser = () => {}

const handleClick = (e) => {
    e.preventDefault();
    const {  fname, sname, phone, email, district, blood, service  } = input
    if( fname && sname && phone && email && district && blood && service){
        axios.put("http://localhost:5000/updateService", {input,id})
        .then( res => {
            if(res.data.message=== "Successfully Registered, Please login now." )
            {
               console.log("updated")
            }
            alert(res.data.message)
           
           
        })
    }
}



    return (
        <div>
            <div className="admin">     
                {/* <h1 >Admin  </h1>

                 <button onClick={clicks}>nothing</button>
                   <p value="users" className=""></p>

                   <input type="text" onChange={onChange} name="email" value={userMail.email} ></input>
                     */}

                    <div className="container-fluid">
                    <div className='panel row'>
                        <div className="left-panel col-lg-2 col-md-4  col-3">
                            <div classname="admin-title row col-12">
                            <h3>Admin panel</h3>
                            </div>
                            <div className="">
                                <div className="user-tab col-12 bg-success p-5"></div>
                                <div className="service-tab col-12 bg-warning p-5"></div>
                                <div className="col-12 bg-light p-5"></div>
                            </div>
                            </div>
                         <div  className="right-panel col-9 col-md-8 col-lg-10 container">
                             <div className="count row ">   
                                 <div className="users "><div className="user-count"><h1>{usersCount.users}</h1></div></div>
                                 <div className="services"><div className="service-count"><h1>{usersCount.service}</h1></div></div>
                                 </div>
                                 <div className="details">
                                        {userDetails.map((user ,key) => {
                                            return(
                                                <div key={key}>
                                                          <div className="details-panel">
                                                              <p>{user.fname}</p>                                                             
                                                              <button className="btn btn-primary" onClick={(e) =>removeUser(user.email)}>Delete</button>
                                                              <button className="btn btn-primary" onClick={(e) =>updateUser(user.email)}>Update</button>
                                                              <form action="" className="register-form" onSubmit={(e) =>handleClick(e)}>
            <div className="registration-h1-div bg-danger">
              <h2 className="registration-h1  text-light p-3 text-center">Emergency Service Registation</h2>
            </div>
            <div className="container">
            <div className="row">
              <div className="reg-fname col-md-6 pt-4">
                <label htmlFor="" className="reg-fname-label">First Name *</label><br />
                <input className="form-control" onChange={(e)=>handleChange(e)} type="text" id="fname" defaultValue={user.fname} value={input.fname}  required=" "></input>
              </div>
              <div className="reg-sname col-md-6 pt-4">
                <label htmlFor="" className="reg-sname-label">Last Name</label><br />
                <input className="form-control" onChange={(e)=>handleChange(e)} type="text"  id="sname" value={input.sname} />
              </div>
              <div className="reg-phone col-sm-12 pt-4">
                <label htmlFor="" className="reg-label-phone">Phone *</label><br />
                <input className="form-control" onChange={(e)=>handleChange(e)} type="number" id="phone" value={input.phone} required=" "/>
              </div>
              <div className="reg-email col-sm-12 pt-4">
                <label htmlFor="" className="reg-label-email">Email *</label><br />
                <input className="form-control" onChange={(e)=>handleChange(e)} type="email"  id="email" value={input.email} required=" "/>
              </div>
              <div className="reg-district col-sm-12 pt-4">
                <label htmlFor="" className="reg-label-district">District *</label><br />
                <select  className="form-control" onChange={(e)=>handleChange(e)} id="district" value={input.district} required=" " >
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
                <select className="form-control" onChange={(e)=>handleChange(e)} id="blood" value={input.blood}  required=" ">
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
                <select className="form-control" onChange={(e)=>handleChange(e)} id="service" value={input.service}  required=" ">
                  <option value=" " selected hidden >Select Your Service</option>
                  <option value="Ambulance">Ambulance Service</option>
                  <option value="Blood Bank">Blood Bank</option>
                  <option value="Tow Truck">Tow Truck Service</option>
                </select>
              </div>
              <div className="reg-submit  pt-5 pb-4">
                <input className="btn btn-danger" onClick={(e) => handle(user._id)} type="submit" value="ADD SERVICE" />
              </div>
            </div>
            </div>
          </form>
                    {id}
                                                              </div>                          
                                                </div>
                                            )
                                        })}
                                 </div>


                        </div> 
    
                     </div>
                    </div>
           </div>

        </div>
    );
}

export default Admin;