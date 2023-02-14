import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { NavLink } from 'react-router-dom';
import logo from '../Images/vol.png';
 

const Navbar =()=>{
    return(
        <>
   <nav className="navbar navbar-expand-lg navbar-light">
  <div className="container-fluid">
    <NavLink className="navbar-brand" to ="/">
    <img src={logo} className="feedimg" alt="logo"/>
    </NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse ml-auto" id="navbarSupportedContent">
      <ul className="navbar-nav ml-auto">
        <li className="nav-item active ">
          <NavLink className="nav-link" to ="/"><span className="uper">Feeds</span></NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to ="/Indian"><span className="uper">IndianCricket</span> </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to ="/Stocks"><span className="uper">Stocks</span></NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to ="/Mobiles"><span className="uper">Mobiles</span></NavLink>
        </li>

      
      </ul>

    </div>
  </div>
</nav>
        </>
    )
}

export default Navbar