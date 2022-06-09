import React, {useState,useEffect} from 'react';
import { Icon } from '@iconify/react'
import axios from 'axios';

const ServiceTrash = () => {
    const [serviceDetails,setserviceDetails] = useState([])

    const [userEmail,setuserEmail] = useState([])

    const  readDetails = () => {
        axios.get('http://localhost:5000/readServiceTrash')
        .then(res => {
            setserviceDetails(res.data)
            
        })
      }


     const  removeService = (email) => {
        let text;
        if (window.confirm("Are you sure you want to permenantly remove this Service?") === true) {
          text = 1;
        } else {
          text = 0;
        }
         
             text===1 ? axios.post("http://localhost:5000/removeServiceTrash/",{email})
             .then(res => {
            setuserEmail(res.data)
             }):console.log()
       
      }

      const restoreService = (email) =>{
        let text;
        if (window.confirm("Are you sure you want to restore this Service?") === true) {
          text = 1;
        } else {
          text = 0;
        }
         
             text===1 ? axios.post("http://localhost:5000/restoreService/",{email})
             .then(res => {
            setuserEmail(res.data)
             }):console.log()
       
        }

           useEffect(() => {
        readDetails();
           }, [userEmail])   
    return (
        <div className='container-fluid p-4'>
        <h2 className='text-danger'>SERVICE TRASH</h2>
       <div className="admin-page-table">
                <table className='table table-bordered table-hover'>
                    <thead className=' bg-danger text-light'>
                        <tr >
                            <th>Name</th>
                            <th>Phone</th>
                            <th>Email</th>
                            <th>District</th>
                            <th>Blood Group</th>
                            <th>Service</th>
                            <th>Restore</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    {serviceDetails.map((service,key) => {
                         return(
                                <tr key={key} className=' table-danger text-dark'>
                             <td>{service.fname + " "+service.sname}</td>
                             <td>{service.phone}</td>    
                             <td>{service.email}</td>
                             <td>{service.district}</td>
                             <td>{service.blood}</td>
                             <td>{service.service}</td>
                             <td><div className='delete-restore-icon' onClick={(e) => restoreService(service.email)}><Icon fontSize={30} icon="ic:baseline-restore-from-trash" /></div></td>
                            <td><div className='delete-restore-icon' onClick={(e) => removeService(service.email)}><Icon className='text-danger mr-3 sidebar-icons' fontSize={20} icon="bi:trash-fill" /></div></td>
                         </tr>
                             )
                    })

                    }
               
                    </table>
                </div>
        </div>
    );
}

export default ServiceTrash
;
