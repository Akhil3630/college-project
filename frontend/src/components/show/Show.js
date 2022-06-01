import React from 'react'
import {useEffect,useState} from 'react'


function Show() {
    
 
    const [services,setServices] =useState([{
        fname: '',
        sname: '',
        district: '',
        mobile: "",
        blood: '',
        service: '',
    }])

    const[selected,setSelected] = useState("");


        useEffect(()=>{
            fetch("http://localhost:5000/emergenc")
            .then((response)=>response.json())
            .then((jres) => setServices(jres))
            .catch((err)=>(console.log(err)))
        },[])


    
        const handleSelect = (e) => {
            setSelected(e.target.value)
            

        }
       
        

        
  return (
    <div className='bg-light'>
        <div className='m-5'>

        <select className="form-control" onChange={handleSelect} id="district"  required=" " >
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

            
                <table border='1px solid' cellSpacing="10px"   >
                    <thead>
                    <tr>
                <th>Name</th>
                <th>District</th>
            </tr>
                        </thead>
                        <tbody>
                        {

                            

services.map((item,index) =>{
    return (
     

      item.district === selected ? 
        <tr key={index} >
            <td>
                {item.fname +" "+ item.sname}
            </td>
            <td>
                {item.district}
            </td>
            <td>
                {item.mobile}
            </td>
        </tr>
        :null
        
        )
})
                        }
            
      
                        </tbody>
           
           
    
            </table>
        </div>
    
   
    
    
    <input type="button" value="nothing" name="btn" />
        
        
    </div>
  )
}

export default Show