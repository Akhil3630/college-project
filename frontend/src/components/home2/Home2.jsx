import React from 'react'
import './Home2.css'
import NavBar from '../nav/NavBar'
import { Outlet } from 'react-router-dom'
function Home2() {
  return (
    <>
        <div className="home2">
          <NavBar className='nav--'/>
          <Outlet className='out--'/>
        </div>
    </>
  )
}

export default Home2