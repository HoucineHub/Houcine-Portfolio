import React, { useEffect, useRef } from 'react';
import './Hero.css';
import houcine from '../../assets/houcine.jpg';
import cvFile from '../../assets/CV_EL_HOUCINE_ASSAD.png';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Typed from 'typed.js';

function Hero() {
  const typedTextRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedTextRef.current, {
      strings: [
        "I am a young graduate with a professional bachelor's degree in Computer Systems Engineering (Bac+3), with a solid academic background and a strong passion for new technologies."
      ],
      typeSpeed: 35, // slower for readable paragraph animation
      backSpeed: 0,  // no backspace effect
      showCursor: true,
      cursorChar: '|',
      loop: false,
    });

    return () => typed.destroy();
  }, []);

  return (
    <div id='home' className='hero'>
      <img src={houcine} alt="El Houcine Assad" />
      <h1>
        <span>I'm El Houcine Assad,</span><br />
        Full Stack Web Developer.
      </h1>
      <p className="animated-text">
        <span ref={typedTextRef}></span>
      </p>
      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className='anchor-link' offset={50} href='#contact'>
            Contact me!
          </AnchorLink>
        </div>
        <div className="hero-cv">
          <a href={cvFile} download="CV_EL_HOUCINE_ASSAD.png">
            <span>Download CV!</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Hero;
