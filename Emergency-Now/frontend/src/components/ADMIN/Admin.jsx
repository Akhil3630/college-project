import React,{useEffect,useState} from 'react';
import './Admin.css'
import { Outlet,Link } from 'react-router-dom'
import { Icon } from '@iconify/react'
import axios from 'axios'
import logo from './assets/Screenshot from 2022-06-06 23-19-10.png'

const Admin = () => {
    const [isLoggedin, setIsLoggedin] = React.useState(false);

    const [usersCount, setusersCount] = useState([])


    const readCount = () => {
        axios.get('http://localhost:5000/readCount')       
        .then(res => {      
           setusersCount(res.data) 
        })
    
    }
    
      
           useEffect(() => {
        readCount();
           }, []) 

    const [log,setLog] = React.useState({
        username:"",
        password:""
    })

    const logChange = (e) =>{
        
        const newLog = {...log}
        newLog[e.target.name] = e.target.value
        setLog(newLog)
    }

    const logSubmit = (e) =>{

        if(log.username === "admin@123"&& log.password === "123"){
            e.preventDefault();
            localStorage.setItem('token-info', JSON.stringify(log.username));
            setIsLoggedin(true);
            setLog({})
        }

    }
    const logout = () => {
        localStorage.removeItem('token-info');
        setIsLoggedin(false);
    };

    console.log(isLoggedin);
    return (
        <>
        { !JSON.parse(localStorage.getItem('token-info')) ?

            <div className='adminlog container-fluid p-4'>
            <div className="adminlog-div bg-light">
                <h2 className='text-danger'>Admin Log...</h2>
                <div className="adminlog-form-div">
                    <form action=""  className="admin-form" onSubmit={logSubmit}>
                        <label htmlFor="">UserName</label>
                        <input className='form-control' onChange={(e) =>logChange(e)}  type="text" name="username" value={log.username} /><br />
                        <label htmlFor="">Password</label>
                        <input  className='form-control' onChange={(e) =>logChange(e)} type="password" name="password" value={log.password} /><br />
                        <input className='btn btn-danger' type="submit" value="SUBMIT" />
                    </form>
                </div>
            </div>
        </div>
            :
        <div className='admin bg-dark'>
            
            <div className="admin-sidebar bg-danger">
                <div className="admin-logo">
                    <img className='mt-2 mr-2' src={logo} alt="" srcset="" />
                    <h3 className='text-light mt-1 text-center border-bottom pt-3'>EMERGENCY NOW</h3>
                </div>
                <div className="contents">
                    <Link to="/" onClickCapture={logout} className='mt-5 btn admin-content-btn bg-danger text-light'>
                        <Icon className='text-light mr-3 sidebar-icons' fontSize={20} icon="ant-design:logout-outlined" />
                        <span>Logout</span>
                    </Link><br />
                    <Link to="/admin" className='btn admin-content-btn bg-danger  text-light  mt-1'>
                        <Icon className=' text-light mr-3 sidebar-icons' fontSize={20} icon="bxs:user" />
                        <span>User</span><br />
                    </Link>
                    <Link to="/admin/service" className='btn admin-content-btn bg-danger text-light mt-1'>
                        <Icon className='text-light mr-3 sidebar-icons' fontSize={20} icon="fa6-solid:screwdriver-wrench" />
                        <span>Service</span><br />   
                    </Link>
                    <Link to="/admin/usertrash" className='btn admin-content-btn bg-danger text-light mt-1'>
                        <Icon className='text-light mr-3 sidebar-icons' fontSize={20} icon="bi:trash-fill" />
                        <span>User Trash</span><br />
                    </Link>
                    <Link to="/admin/Servicetrash" className='btn admin-content-btn bg-danger text-light mt-1'>
                        <Icon className='text-light mr-3 sidebar-icons' fontSize={20} icon="bi:trash-fill" />
                        <span>Service Trash</span><br />
                    </Link>
                   
                </div>
            </div>
            <div className="admin-page admin-page-count container-fluid"> 
                <h3 className='text-light border-bottom p-3'>Admin Page</h3>
                <div className="admin-topbar row">
                    <div className="admin-topbar-divs col-4 col-md-2">
                        <Icon className='text-light admin-topbar-icons' icon="bxs:user" />
                        <h6 className='text-light pt-2' >Total User</h6>
                        <h4 className='text-light'>{usersCount.users}</h4>
                    </div>
                    <div className="admin-topbar-divs col-4 col-md-2">
                        <Icon className='text-light admin-topbar-icons' icon="fa6-solid:screwdriver-wrench" />
                        <h6 className='text-light pt-2' >Total Services</h6>
                        <h4 className='text-light'>{usersCount.service}</h4>
                    </div>
                    <div className="admin-topbar-divs col-4 col-md-2">
                        <Icon className='text-light admin-topbar-icons' icon="bxs:user" />
                        <h6 className='text-light pt-2' >Trashed Users</h6>
                        <h4 className='text-light'>
                                {usersCount.userTrash}
                            </h4>
                    </div>
                    <div className="admin-topbar-divs col-4 col-md-2">
                    <Icon className='text-light admin-topbar-icons' icon="fa6-solid:screwdriver-wrench" />
                        <h6 className='text-light pt-2' >Trashed Services</h6>
                        <h4 className='text-light'>{usersCount.serviceTrashes}
                        </h4>
                    </div>
                </div>
                <div className="admin-outlet bg-light">
                    <Outlet/>
                </div>
            </div>
            </div>
        }
        </>
    );
}

export default Admin;
