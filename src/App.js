import React from "react";
import "./styles/style.css"
import { Route, Switch, Redirect } from "react-router-dom";
import { useState } from "react";
import Signup from "./pages/Signup"
import Login from "./pages/Login"
import Home from "./pages/Home"

const App = () => {

  return (
    <div className="App">

      <Switch>
      <Route path='/home' render={(props) => (
            <Home {...props}/>
          )}/>
      <Route path='/signup' render={(props) => (
            <Signup {...props}/>
          )}/>
      <Route path='/login' render={(props) => (
            <Login {...props}/>
          )}/>
      <Redirect to="/home" />
      </Switch>
      
    </div>
  );
}

export default App;
