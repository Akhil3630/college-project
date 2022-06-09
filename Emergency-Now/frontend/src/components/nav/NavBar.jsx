import React from 'react'
import './NavBar.css'
import { Link } from 'react-router-dom'
function NavBar() {
    
  return (
    <div>
            <nav className="navbar navbar-expand-md navbar-light bg-light ">
                <Link to={" "} className="navbar-brand text-danger " >Emergency Now</Link>
                <button className="navbar-toggler " type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon "></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item  ">
                            <Link className="nav-link m-2"  to={""}>Home </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link m-2"  to={"/Home2/About"}>About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link m-2"  to={"/Home2/Service"}>Service</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link m-2"  to={"/Home2/Contact"}>Contact</Link>
                        </li>
                    </ul>
                    <Link to={'/Home2/Registration'}>
                        <button type="button" className="m-2 btn btn-danger">Add Service</button>
                    </Link>
                </div>
            </nav>  
    </div>
  )
}
export default NavBar