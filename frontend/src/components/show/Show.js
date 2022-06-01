import React from 'react'
import {useEffect,useState} from 'react'
function Show() {
    let selected;
    let tableItem;
    const [services,setServices] =useState([{
        name: '',
        district: '',
        mobile: "",
        blood: '',
        service: '',
    }])


        useEffect(()=>{
            fetch("http://localhost:5000/emergenc")
            .then((response)=>response.json())
            .then((jres) => setServices(jres))
            .catch((err)=>(console.log(err)))
        },[])


    
        const handleSelect = (e) => {
             selected = e.target.value;
            console.log( typeof selected)
        }
 
        
  return (
    <div className='bg-light'>
        <div className='m-5'>

        <select className='select-box' onChange={handleSelect}  name="district" id="district" >
                  <option disabled value="">Select District</option>
                  <option value="kasargod">Kasaragod</option>
                  <option value="kannur">Kannur</option>
                  <option value="kozhikoe">Kozhikode</option>
                  <option value="wayanad">Wayanad</option>
                  <option value="malappuram">Malappuram</option>
                  <option value="thrissur">Thrissur</option>
                  <option value="eranamkulam">Ernakulam</option>
                  <option value="alappuzha">Alappuzha</option>
                  <option value="palakkad">Palakkad</option>
                  <option value="idukki">Idukki</option>
                  <option value="perinthalmann">Pathanamthitta</option>
                  <option value="kottayam">Kottayam</option>
                  <option value="kollam">Kollam</option>
                  <option value="thiruvanandhapuram">Thiruvananthapuram</option>
                  
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
                            console.log(typeof item.district)

                            //  item.district === selected ? 
                            //    <tr key={index} >
                            //        <td>
                            //            {item.name }
                            //        </td>
                            //        <td>
                            //            {item.district}
                            //        </td>
                            //    </tr>
                            //    :<h1>hello</h1>
                               
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