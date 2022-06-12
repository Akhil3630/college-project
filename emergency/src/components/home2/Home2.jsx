import React from 'react';
import NavBar from '../nav/NavBar'
import { Outlet,useNavigate } from 'react-router-dom'
function Home2() {
  
  const navigation = useNavigate()

  return (
    <>   
      {!JSON.parse(localStorage.getItem('token-user')) ?
      <> { alert("mo")}
      {navigation("/login")}
      </>
    
      :
         <div>
         <div className="home-nav"style={{position:'fixed',zIndex:"1",width:"100%"}}>
             <NavBar/>
         </div>
         <div className="outlet"style={{position:"relative",top:'3rem'}}>
             <Outlet/>
         </div>
         </div> 
       

      }
        
        
          
        
    </>
  )
}

export default Home2