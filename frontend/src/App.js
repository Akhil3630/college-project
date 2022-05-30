import React from "react";
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import './App.css';
import Home from './components/home/Home';
import Registration from "./components/registration/Registration";
import Emergency from "./components/emergency/Emergency";
import Signup from "./components/signup/Signup";
import Login from "./components/login/Login";
import Home2 from "./components/home2/Home2";
import About from './components/about/About'
import Service from './components/service/Service'
import Contact from "./components/contact/Contact";
import Land from "./components/land/Land";
function App() {
  return(
    <Router>
      <Routes>
        <Route path="/" element = {<Home/>}/>
        <Route path="/Registration" element={<Registration/>} />
        <Route path="/Emergency" element={<Emergency/>} />
        <Route path="/Signup" element={<Signup/>} />
        <Route path="/Login" element={<Login/>}/>
        <Route path='Home2' element={<Home2/>}>
          <Route path="" element={<Land/>}/>
          <Route path='About' element={<About/>}/>
          <Route path='Service' element={<Service/>}/>
          <Route path="Contact" element={<Contact/>}/>
        </Route>
      </Routes>
    </Router>
     
  )}
export default App;
