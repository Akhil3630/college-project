import React from 'react'
import NavBar from '../nav/NavBar'
import { Outlet } from 'react-router-dom'
function Home2() {
  return (
    <>
        <div className="home-nav"style={{position:'fixed',zIndex:"1",width:"100%"}}>
            <NavBar/>
        </div>
        <div className="outlet"style={{position:"relative",top:'3rem'}}>
            <Outlet/>
        </div>
          
        
    </>
  )
}

export default Home2