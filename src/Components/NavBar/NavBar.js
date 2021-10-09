import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes,faBars } from '@fortawesome/free-solid-svg-icons'
import {
    Link
  } from "react-router-dom";
  import "./NavBar.css"
const NavBar = () => {
    const showmenu=()=>{
        document.getElementById("nav-links").style.right="0";
        console.log("object");
    }
  const hidemenu=()=>{
        document.getElementById("nav-links").style.right="-200px";
    }
    return (
        <section class="headerr">
        <nav>
        <Link  className="logo text-link" to="/">Web-Resorce_Bank</Link>
            <div class="nav-links" id="nav-links">
                <h5 onClick={hidemenu}><FontAwesomeIcon style={{color:"red"}} icon={faTimes} /></h5>
                {/* <FontAwesomeIcon onClick={hidemenu} icon={faCoffee} /> */}
                <ul onClick={hidemenu}>
                    <li><Link to="/">HOME</Link></li>
                    <li><Link to="/resources">RESOURCES</Link></li>
                    <li><Link to="/err">ERRORS</Link></li>
                    <li><Link to="/contributors">INTERVIEW-Q</Link></li>
                    <li><Link to="/blogs">BLOGS</Link></li>
                    <li><Link to="/about">ABOUT</Link></li>
                    <li><Link to="/about">BASIC</Link></li>
                    {/* <li><Link to="/contact">CONTACT</Link></li> */}
                    <li><Link to="/login">SIGN IN</Link></li>
                    <li><Link to="/contributors">CONTRIBUTORS</Link></li>
                </ul>
            </div>
            {/* <img style={{width:"60px"}} src="Images/logofortitle.png" alt="" /> */}
            <div className="navend">
            <h5 onClick={showmenu}> <FontAwesomeIcon style={{color:"red"}} icon={faBars} /></h5>
            </div>
        </nav>
    </section>
    );
};

export default NavBar;