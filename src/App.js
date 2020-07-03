import React from 'react';
import logo from './logo.svg';
import Checkbox from './Components/Checkbox'
import './App.sass';
import './Login.js'

function App() {
return (
<div className="container">
   <div className="login-window">
      <div className="loginSubsection">
         <img className="logo" src={logo} aria-hidden="true" alt="Green logo"/>
      </div>
      <div className="loginSubsection">
         <h1>Example login screen</h1>
         <h2>&nbsp;Getting started with Green.</h2>
      </div>
      <div className="loginSubsection">
         <p>Email Address</p>
         <input className="emailInput" type="email" /><br />
           <div className="checkboxes">
        <label >
        <input className="checkButton" type="checkbox" defaultChecked id="Remember"/>
        {/*Custom Checkbox component was not fully implemented so wont be used in final design*/}
        {/* <Checkbox></Checkbox> */}
        <span>Remember this device</span>
        </label>

          </div>
         <br />
        <button className="button" type="button">Sign In</button>
      </div>
   </div>
</div>
);
}
export default App;
