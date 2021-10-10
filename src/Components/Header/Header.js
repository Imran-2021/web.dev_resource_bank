import React from 'react';
import { Link } from 'react-router-dom';
import About from '../About/About';
import Basic from '../Basic/Basic';
import Blogs from '../Blogs/Blogs';
import Errors from '../Errors/Errors';
import InterviewQ from '../Interview-Q/InterviewQ';
import Resources from '../Resources/Resources';
import Signn from '../SignIn/Sign';
import './Header.css'
const Header = () => {
    return (
        <>
        <div className="header" style={{backgroundImage: "linear-gradient(rgba(4,9,30,0.7),rgba(4,9,30,0.7)),url(Images/background.jpg)"}}>
            <div className="header-in">
                <div class="text-box">
                    <h1>Welcome web dev. Learners !!</h1>
                    <p>Web development is the process of building and maintaining a website for the Internet or an intranet that is accessed <br/>through a web browser and hosted on a server, either on on-premises hardware or in the cloud. This includes everything from single plain-text webpages up to complex web applications.</p>
                    <Link to="/resources" class="text-link btn">Let's start learning !</Link>
                </div>
            </div>
            
        </div>
        <Resources/>
        <Errors/>
        <InterviewQ/>
        <Blogs/>
        <Basic/>
        <Signn/>
        <About/>
        <div>
        </div>
        
        </>
    );
};

export default Header;
