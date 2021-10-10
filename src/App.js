import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from "./Components/Header/Header";
import NavBar from './Components/NavBar/NavBar';
import Resource from "./Components/Resource/Resource";
import Resources from "./Components/Resources/Resources";
import Hello from "./FakeData/hello";

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
