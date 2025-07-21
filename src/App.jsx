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

    window.addEventListener('mousemove', moveEyes);
    window.addEventListener('mouseleave', () => {
      eyes.forEach((eye) => {
        eye.style.transform = `translate(0, 0)`;
      });
    });

    return () => {
      window.removeEventListener('mousemove', moveEyes);
      window.removeEventListener('mouseleave', () => {});
    };
  }, []);

  return (
    <div>
      <div className="container">
        <img src={assets.group1} alt="" className='group-1' />
        <img src={assets.group2} alt="" className="group-2" />
        <img src={assets.vector} alt="" className="frame-1" />
        <img src={assets.group} alt="" className="frame-2" />
        <img src={assets.eye_position} alt="" className="eye-frame" />

        <div className="eye-wrap">
          <div className="left-eye">
            <img src={assets.eye_outer} alt="" className="left-outer" />
            <img src={assets.eye_inner} alt="" className="left-inner" />
            <img src={assets.little_eye} alt="" className='left-little-eye' />
          </div>
          <div className="right-eye">
            <img src={assets.eye_outer} alt="" className="right-outer" />
            <img src={assets.eye_inner} alt="" className="right-inner" />
            <img src={assets.little_eye} alt="" className="right-little-eye" />
          </div>
        </div>

        <div className="mouth">
          {/* <img src={assets.outer_mouth} alt="" className='outer-mouth' /> */}
          <img src={assets.mouth} alt="" className='inner-mouth' />
        </div>
      </div>
    </div>
  );
};

export default App;
