// LeftPanel.js
import React from 'react';

const LeftPanel = () => {
  return (
    <div style={leftPanelStyle}>
      <img
        src="logo.png" 
        style={imageStyle} 
       
      />
    <div>
    <div style={textStyle}>
        <h1>BASE</h1>
      </div>
    
     <div> <img
src="social_media_logo.png" 
style={bottomImageStyle}
/>
</div>
</div>
      
    </div>


  );
};

const leftPanelStyle = {
    width: '50%',
    float: 'left',
    height: '100vh',
    backgroundColor: '#605BFF', // Set background color to blue
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
    justifyContent: 'center', // Center the content horizontally
    alignItems: 'center', // Center the content vertically
    color: '#F8FAFF', 
    clipPath: 'polygon(0 0, 100% 0, 75% 100%, 0% 100%)',
    
};


const imageStyle = {
    width: '80.15px',
    height: '80.15px',
    position: 'absolute',
    top: '54.32px',
    left: '61.03px',
    
    
  };

  const textStyle = {
    fontFamily: 'Montserrat',
    fontSize: '52px',
    fontWeight: 700,
    lineHeight: '88px',
    letterSpacing: '0em',
    textAlign: 'left',
    position:'absolute',
    top:'40%',
    left:'24%',
    
  };

  const bottomImageStyle = {
    
height: 'Hug (50px)',
width:'355px',
position:'absolute',
top:' 909px',
left: '22.5%',





  };



export default LeftPanel;