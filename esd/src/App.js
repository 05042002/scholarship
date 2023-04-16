import React from 'react'
import {Route,Routes, Switch } from "react-router-dom";
import './App.css';
import Contact from './components/Contact'
import Navbar from "./components/Navbar"
import Login from "./components/Login"
import Register from "./components/Register"
import Application from "./components/Application"

function App() {
  return (
    <>
<Navbar/>
{/* <Switch>

  <Route exact path='/' component={Contact}/>
</Switch> */}
<Routes>
<Route path="/contact" element={<Contact/>}/>
<Route path="/login" element={<Login/>}/>
<Route path="/register" element={<Register/>}/>
<Route path="/application" element={<Application/>}/>
    


    
    </Routes>
    </>
  );
}

export default App;
