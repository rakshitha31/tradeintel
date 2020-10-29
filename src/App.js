import React, { Component } from "react";
import {
  Route, NavLink, HashRouter
}from  "react-router-dom"

import Home from "./Home"
import Stuff from "./Stuff"
import Contact from "./Contact"

class App extends Component {
  render() {
    return (
       <HashRouter>
         <div>
            <h1 style={{fontStyle:'courier'}} >TradeIntel  <div style={{float:'right'}}><img src={require('./images/logo2.png')} height={100}/></div></h1>
           
           
           <ul className="header">
           <li><NavLink exact to="/">Who we are</NavLink></li>
            <li><NavLink to="/Stuff">Services</NavLink></li>
            <li><NavLink to="/Contact">Contact</NavLink></li>
           </ul>

           <div className="content">

            <Route exact path="/" component={Home}/>
            <Route path="/Stuff" component={Stuff}/>
            <Route path="/Contact" component={Contact}/>


           </div>
         </div>
       </HashRouter>
    );
  }
}
 
export default App;