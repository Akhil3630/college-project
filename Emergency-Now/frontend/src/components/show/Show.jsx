import React from 'react'
import {useEffect,useState} from 'react'
import {useLocation} from 'react-router'
import './Show.css'
function Show(props) {

    const loc = useLocation()
    
    const[selected,setSelected] = useState("")

    const [services,setServices] =useState([{
        fname: '',
        sname: '',
        district: '',
        phone: "",
        blood: '',
        service: '',
    }])

        useEffect(()=>{
            fetch("http://localhost:5000/emergency")
            .then((response)=>response.json())
            .then((jres) => setServices(jres))
            .catch((err)=>(console.log(err)))
        },[])

        const handleSelect = (e) => {

            setSelected(e.target.value)
            
        }
        console.log(services)
  return (
    <div className='container  mt-5'>
       <h1 className='show-heading text-center text-danger '>{loc.state}</h1>
        <div className='  m-5 row'>
            <label className='col-md-4' htmlFor="">SELECT YOUR DISTRICT:</label>
            <select className="form-control col-md-8" onChange={handleSelect} id="district"  required=" " >
                  <option value=" " disabled >Select a District</option>
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
        <div className="show-table-div">
        {
            selected === "" || services.district === selected ? <h3 className='text-danger m-5 pt-3 text-center'>Please Select Your District...</h3> :
            <table className='show-table  table table-bordered table-hover mt-5'>
            <thead className=' bg-danger text-light'>
                <tr >
                    <th>NAME</th>
                    <th>BLOOD GROUP</th>
                    <th>MOBILE</th>
                </tr>
            </thead>
            {
                
                services.map((item, index) =>{
                    return(
                        item.district === selected && item.service === loc.state ?
                        <tr className=' table-danger text-dark' key={index}>
                            <td>{item.fname+" "+item.sname}</td>
                            <td>{item.blood}</td>
                            <td><a href={"tel:+91"+item.phone}>{item.phone}</a></td>
                        </tr>
                        :null
                    )
                })
            }
                
            </table>         
        }
        </div>
    </div>
  )
}

export default Show