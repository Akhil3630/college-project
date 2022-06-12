import React, {useState,useEffect} from 'react';
import { Icon } from '@iconify/react'
import axios from 'axios';

const AdminUser = () => {

    const [userDetails,setuserDetails] = useState([])

    const [userEmail,setuserEmail] = useState([])

    const  readDetails = () => {
        axios.get('http://localhost:5000/readUser')
        .then(res => {
            setuserDetails(res.data)
            
        })
      }

      const removeUser = (email) =>{
        let text;
        if (window.confirm("Are you sure you want to delete this user?") === true) {
          text = 1;
        } else {
          text = 0;
        }
         
             text===1 ? axios.post("http://localhost:5000/delete/",{email})
             .then(res => {
            setuserEmail(res.data)
             }):console.log()
       
        }

           useEffect(() => {
        readDetails();
           }, [userEmail])    

    return (
        <div className='container-fluid p-4'>
            <h2 className='text-danger'>USER TABLE</h2>
           <div className="admin-page-table">
                    <table className=' table table-bordered table-hover'>
                        <thead className=' bg-danger text-light'>
                            <tr >
                                <th>Name</th>
                                <th>Email</th>
                                <th>Password</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        {userDetails.map((user,key) => {
                             return(
                                    <tr className=' table-danger text-dark'>
                                        <td>{user.name}</td>
                                        <td>{user.email}</td>    
                                        <td>{user.password}</td>                           
                                        <td><div className='delete-restore-icon' onClick={(e) => removeUser(user.email)}><Icon className='text-danger mr-3 sidebar-icons' fontSize={20} icon="bi:trash-fill" /></div></td>
                                    </tr>)
                        })

                        }
                    </table>
                </div>
        </div>
    );
}

export default AdminUser