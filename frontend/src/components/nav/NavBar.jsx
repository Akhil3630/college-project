import React from 'react'
import './NavBar.css'
import { Link } from 'react-router-dom'
function NavBar() {
  return (
    <div>
        <header className="header1">

        <nav className="navbar navbar-expand-md navbar-light bg-light ">
            <a className="navbar-brand text-danger " href="#">Emergency Now</a>
            <button className="navbar-toggler " type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                 <span className="navbar-toggler-icon "></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                 <ul className="navbar-nav ml-auto mr-auto">
                     <li className="nav-item active ">
                         <Link to={""}><a className="nav-link m-2" >Home </a></Link>
                     </li>
                     <li className="nav-item">
                         <Link to={"/Home2/About"}><a className="nav-link  m-2" >About</a></Link>
                     </li>
                     <li className="nav-item">
                         <Link to={"/Home2/Service"}><a className="nav-link  m-2" >Service</a></Link>
                     </li>
                     <li className="nav-item">
                         <Link to={"/Home2/Contact"}><a className="nav-link  m-2" >Contact</a></Link>
                     </li>
                 </ul>
                 <button type="button" className="m-2 btn btn-danger">Support</button>
            </div>
        </nav>
                
        </header>
    </div>
  )
}

export default NavBar