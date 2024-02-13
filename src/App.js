import React from 'react';
import Navbar from './components/navbar';
import img1 from './components/assets/celeb.jpg';  // Import the image

function App() {
  return (
    <div>
      <Navbar />

      <div style={{ padding: '10px', textAlign: 'center' }}>
        <h2 style={{ color: 'skyblue', textAlign: 'left', marginLeft: '300px', fontWeight: 'normal', fontSize:'50px', fontFamily: 'Arial, sans-serif' }}>Unlock Exclusive Benefits</h2>
        <br />
        <h2 style={{ color: 'black', textAlign: 'left', marginLeft: '300px', fontWeight: 'normal', fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>P H O N E   N U M B E R</h2>

        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div style={{ marginRight: '10px' }}>
            <select style={{width: '200px', height: '30px', textAlign: 'left',marginLeft: '300px', borderRadius: '15px', border: '1px solid black', fontSize: '14px' }}>
              <option value="india">+91 India </option>
              <option value="country2">Country 2</option>
              <option value="country3">Country 3</option>
            </select>
          </div>
          <input type="text" style={{ width: '200px', height: '30px', borderRadius: '15px', border: '1px solid black', fontSize: '14px' }} />
        </div>

        <div>
          <h2 style={{ color: 'black', textAlign: 'left', marginLeft: '300px', fontWeight: 'normal', fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>N A M E</h2>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <div style={{ marginRight: '10px' }}>
              <input 
                type="text" 
                style={{ 
                  width: '410px',
                  height: '30px', 
                  textAlign: 'left',
                  marginLeft: '300px', 
                  borderRadius: '15px', 
                  border: '1px solid black', 
                  fontSize: '14px' 
                }} 
              />
            </div> 
          </div>
        </div>

        <div>
          <h2 style={{ color: 'black', textAlign: 'left', marginLeft: '300px', fontWeight: 'normal', fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>E M A I L [O P T A I O N A L]</h2>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <div style={{ marginRight: '10px' }}>
              <input 
                type="text" 
                style={{ 
                  width: '410px',
                  height: '30px', 
                  textAlign: 'left',
                  marginLeft: '300px', 
                  borderRadius: '15px', 
                  border: '1px solid black', 
                  fontSize: '14px' 
                }} 
              />
            </div> 
          </div>
        </div>

        <br /> 
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <div style={{ marginRight: '10px' }}>
              <button
                style={{ 
                  width: '420px', 
                  height: '30px', 
                  textAlign: 'center',
                  marginLeft: '300px', 
                  borderRadius: '15px', 
                  border: '1px solid black', 
                  backgroundColor: 'skyblue', 
                  color: 'white', 
                  fontSize: '14px' 
                }}
              >
                C O N T I N U E
              </button>
            </div> 
          </div>
        </div>

        <div>
          <h2 style={{ color: 'silver', textAlign: 'left', marginLeft: '300px', fontWeight: 'normal', fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>Get ready to receive a secret code [OTP] on your phone.</h2>
        </div>
        <img 
  src={img1} 
  alt="Celebrity" 
  style={{ 
    width: '450px', 
    height: '300px',
    position: 'relative', // Set the position to relative
    top: '-300px',          // Move the image 20 pixels down from its original position
    left: '200px'          // Move the image 50 pixels to the right from its original position
  }} 
/>


      </div>
    </div>
  );
}

export default App;
