import './style/index.css';
import React from "react";
import {HashRouter as Router, Route, Switch} from "react-router-dom";
import Home from "./components/Home";
import Blogs from "./components/Blogs";
import Nav from "./components/Nav";
import Products from "./components/Products";

function App() {


  return (
      <Router>
        <div className="App">
          <Nav/>
          <Switch>
            <Route exact path={"/"} component={Home}/>
            <Route path={"/about"} component={Blogs}/>
              <Route path={"/products"} component={Products}/>
          </Switch>
        </div>
      </Router>
  );
}

export default App;
