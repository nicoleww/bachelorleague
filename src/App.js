import React from "react";
import "./styles/style.css"
import { Route, Switch, Redirect, useHistory, Link } from "react-router-dom";
import { useState } from "react";
import Signup from "./pages/Signup"
import Login from "./pages/Login"
import Home from "./pages/Home"
import Team from "./pages/Team"
import Account from "./pages/Account"

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
    if (email === 'nwitherall@crewcms.com') {
      setIsSuper(true)
    }
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

  const handleLogout = () => {
    localStorage.clear("token")
    setUser(null)
    history.push("/home")
  }


  return (
    <div className="App">
      <nav>
        {user == null ? 
        (
        <>
          <div className="logo">
            <Link to="/home">Rose Battle</Link>
          </div>
          <div className="nav-links">
            <Link to="/login">Login</Link>
            <Link to="/signup">Sign Up</Link>
          </div>
        </>
        ) 
        : 
        (
          <>
          <div className="logo">
            <Link to="/home">Rose Battle</Link>
          </div>
          <div className="nav-links">
            <Link to="/team">Team</Link>
            <Link to="/account">Account</Link>
          </div>
        </>
        )
        }
      </nav>
      <Switch>
      <Route path='/home' render={(props) => (
            <Home {...props} user={user} />
          )}/>
      <Route path='/signup' render={(props) => (
            <Signup {...props}/>
          )}/>
      <Route path='/login' render={(props) => (
            <Login {...props}/>
          )}/>
      <Route path='/team' render={(props) => (
            <Team {...props} user={user} />
          )}/>
      <Route path='/account' render={(props) => (
            <Account {...props} user={user} />
          )}/>
      <Redirect to="/home" />
      </Switch>
      
    </div>
  );
}

export default App;
