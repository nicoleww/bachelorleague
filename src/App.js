import React from "react";
import "./styles/style.css"
import { Route, Switch, Redirect, useHistory } from "react-router-dom";
import { useState } from "react";
import Signup from "./pages/Signup"
import Login from "./pages/Login"
import Home from "./pages/Home"

const App = () => {

  const history = useHistory()

  const [user, setUser] = useState(null)
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isAdmin, setIsAdmin] = useState(false)
  const [isSuper, setIsSuper] = useState(false)

  const handleSignup = async (e) => {
    e.preventDefault()
    try {
      const fetchResponse = await fetch("/api/user/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: firstName,
          lastName: lastName,
          email: email,
          password: password,
          isSuper: isSuper
        })
      })
      let token = await fetchResponse.json()
      localStorage.setItem("token", token)
      const userInfo = JSON.parse(atob(token.split(".")[1])).user
      setUser(userInfo)
      history.push("/home")
    } catch (err) {
      console.log(err)
    }
  }

  const handleLogin = async (e) => {
    e.preventDefault()
    try {
      const fetchResponse = await fetch("/api/user/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: email,
          password: password
        })
      })
      let token = await fetchResponse.json()
      localStorage.setItem("token", token)
      const userInfo = JSON.parse(atob(token.split(".")[1])).user;
      setUser(userInfo)
      history.push("/home")
    } catch (err) {
      console.log(err)
    }
  }


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
