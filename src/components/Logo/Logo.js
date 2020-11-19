import React from 'react';
import Tilt from 'react-tilt';
import brain from './brain.png';
import './Logo.css';

const Logo = () => {
    return (
       <div className = 'ma4 mt0'>
           <Tilt 
    className = "Tilt br2 shadow-2" options={{max: 45}}
  data-tilt-reverse="true"
  data-tilt-axis="x"
  style={{ height: 100, width: 100 }}
  settings = {{
    scale: 1.2,
    perspective: 900,
    reset: false
  }}>
      <div className="Tilt-inner pa3"><img style ={{paddingTop:'5px'}} alt='logo'src={brain}/> </div>
</Tilt>
       </div>
    );
}

export default Logo;