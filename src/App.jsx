import React, { useEffect } from 'react';
import './App.css';
import 'animate.css';
import { assets } from './assets/assets';

const App = () => {
  useEffect(() => {
    const eyes = document.querySelectorAll('.left-inner, .right-inner');

    const moveEyes = (e) => {
      eyes.forEach((eye) => {
        const eyeBox = eye.getBoundingClientRect();
        const eyeCenterX = eyeBox.left + eyeBox.width / 2;
        const eyeCenterY = eyeBox.top + eyeBox.height / 2;

        const dx = e.clientX - eyeCenterX;
        const dy = e.clientY - eyeCenterY;

        const angle = Math.atan2(dy, dx);
        const radius = 5;

        const offsetX = Math.cos(angle) * radius;
        const offsetY = Math.sin(angle) * radius;

        eye.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
      });
    };

    const resetEyes = () => {
      eyes.forEach((eye) => {
        eye.style.transform = `translate(0, 0)`;
      });
    };

    window.addEventListener('mousemove', moveEyes);
    window.addEventListener('mouseleave', resetEyes);

    return () => {
      window.removeEventListener('mousemove', moveEyes);
      window.removeEventListener('mouseleave', resetEyes);
    };
  }, []);

  const handleEyeClick = (e) => {
    const eye = e.currentTarget;
    eye.classList.add('animate__animated', 'animate__bounce');
    setTimeout(() => {
      eye.classList.remove('animate__animated', 'animate__bounce');
    }, 1000)
  };

  

  return (
    <div>
      <div className="container">
        <img src={assets.group1} alt="Antenna Base" className='group-1' />
        <img src={assets.group2} alt="Antenna Vibration" className="group-2" />
        <img src={assets.vector} alt="Triangle Frame" className="frame-1" />
        <img src={assets.group} alt="Inner Frame" className="frame-2" />
        <img src={assets.eye_position} alt="Eye Background Frame" className="eye-frame" />

        <div className="eye-wrap">
          <div className="left-eye" onClick={handleEyeClick}>
            <img src={assets.eye_outer} alt="Left Eye Outer" className="left-outer" />
            <img src={assets.eye_inner} alt="Left Eye Inner" className="left-inner" />
            <img src={assets.little_eye} alt="Left Eye Small" className='left-little-eye' />
          </div>
          <div className="right-eye" onClick={handleEyeClick}>
            <img src={assets.eye_outer} alt="Right Eye Outer" className="right-outer" />
            <img src={assets.eye_inner} alt="Right Eye Inner" className="right-inner" />
            <img src={assets.little_eye} alt="Right Eye Small" className="right-little-eye" />
          </div>
        </div>

        <div className="mouth">
          <img src={assets.mouth} alt="Mouth" className='inner-mouth' />
        </div>
      </div>
    </div>
  );
};

export default App;
