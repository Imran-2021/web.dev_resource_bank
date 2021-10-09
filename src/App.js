import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from "./Components/Header/Header";
import NavBar from './Components/NavBar/NavBar';

function App() {
  return (
      <Router>
           <NavBar/>
           <Switch>
          <Route path="/">
            <Header/>
          </Route>
          <Route path="/users">
            {/* <Users /> */}
          </Route>
          <Route path="/">
            {/* <Home /> */}
          </Route>
        </Switch>
      </Router>
  );
}

export default App;
