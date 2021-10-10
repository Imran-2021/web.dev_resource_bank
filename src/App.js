import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import About from "./Components/About/About";
import Admin from "./Components/Admin/Admin";
import Basic from "./Components/Basic/Basic";
import Blogs from "./Components/Blogs/Blogs";
import Errors from "./Components/Errors/Errors";
import Header from "./Components/Header/Header";
import InterviewQ from "./Components/Interview-Q/InterviewQ";
import NavBar from './Components/NavBar/NavBar';
import Notes from "./Components/Notes/Notes";
import NpmOrYarn from "./Components/NPMorYARN/NpmOrYarn";
import Resource from "./Components/Resource/Resource";
import Resources from "./Components/Resources/Resources";
import Signn from "./Components/SignIn/Sign";

function App() {
  return (
      <Router>
           <NavBar/>
           <Switch>
          <Route exact path="/">
            <Header/>
          </Route>
          <Route path="/resources">
           <Resources/>
          </Route>
          <Route path="/admin">
           <Admin/>
          </Route>
          <Route path="/command">
           <NpmOrYarn/>
          </Route>
          <Route path="/basic">
           <Basic/>
          </Route>
          <Route path="/errors">
           <Errors/>
          </Route>
          <Route path="/blogs">
           <Blogs/>
          </Route>
          <Route path="/about">
           <About/>
          </Route>
          <Route path="/login">
           <Signn/>
          </Route>
          <Route path="/notes">
           <Notes/>
          </Route>
          <Route path="/inverviewQ">
           <InterviewQ/>
          </Route>
          <Route path="/resource/:idd">
           <Resource/>
          </Route>
          <Route path="/">
            {/* <Home /> */}
          </Route>
        </Switch>
        <p style={{padding:"10px",background:"red",textAlign:"center"}}>end the game here. </p>
      </Router>
  );
}

export default App;
