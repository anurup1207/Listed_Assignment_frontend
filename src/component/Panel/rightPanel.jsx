// RightPanel.js
import React from 'react';
import "./rightPanel.css";
import { Link } from 'react-router-dom';

const RightPanel = () => {
  return (
    <div style={{ width: '50%', float: 'left', height: '100vh', backgroundColor: '#F8FAFF' }}>
      <div style={{marginLeft:'14%',marginTop:'19%'}}>
      <div>

      <div style={textStyleSignIn}>
        <h1>Sign In</h1>
      </div>

      <div style={{ fontFamily:'Lato', fontSize:"16px",fontStyle:'normal',fontWeight:'400',lineHeight:'normal',flexShrink:'0',marginLeft:'93px'} }>
      <h3>Sign in to your account</h3>
      </div>

      <div className="button-container">
        <button className="button-style">
        <img
            src="google-icon.png"
            style={{marginRight:'8%'}}
          />
          Sign in with Google
          </button>
        <button className="button-style">
          <img src="apple.png" 
          style={{marginRight:'8%'}}
           />
          Sign in with Apple</button>
      </div>

      <div className="loginContainer">
        <div style={{height:'10%'}}></div>
    
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
      <div style={{display:'flex',fontStyle:'Lato',fontWeight:'400',fontSize:'16px'}}>
      <p style={{marginLeft:'20%',marginRight:'1.3%', color:'#858585'}}>Don’t have an account? </p>
      <p style={{color:'#346BD4'}}>Register here</p>
      </div>
      
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