// RightPanel.js
import React from 'react';
import "./rightPanel.css";
import { Link } from 'react-router-dom';

const RightPanel = () => {
  return (
    <div style={{ width: '50%', float: 'left', height: '100vh', backgroundColor: '#F8FAFF' }}>
      <div>

      <div style={textStyleSignIn}>
        <h1>Sign In</h1>
      </div>

      <div style={{ fontFamily:'Lato', fontSize:"16px",fontStyle:'normal',fontWeight:'400',lineHeight:'normal',flexShrink:'0',marginLeft:'93px'} }>
      <h3>Sign in to your account</h3>
      </div>

      <div className="button-container">
        <button className="button-style">Sign in with Google</button>
        <button className="button-style">Sign in with Apple</button>
      </div>

      <div className="loginContainer">
  
    
        <div className="input-container">
          <label>Email address </label>
          <input type="text" name="uname" required />
          
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" name="pass" required />
         
        </div>

        <a href="#">Forgot password?</a>
        
        <Link to="/home">
        <button className="loginBut">
          <p>Sign In</p>
        </button>
        </Link>

        {/* <button className="siG">
          <img
            src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-suite-everything-you-need-know-about-google-newest-0.png"
            alt="Trees"
            height="30"
          />
          <p>Sign in with Google</p>
          
        </button> */}
      
      </div>

      </div>
    </div>
  );
};

const textStyleSignIn = {
color: "#000",
fontFamily: "Montserrat",
fontSize: "27px",
fontStyle: "normal",
fontWeight: "700",
lineHeight: "normal",
marginLeft:'93px',
marginTop:'150px'

}
export default RightPanel;