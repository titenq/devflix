import React from 'react';
import SlickSlider from 'react-slick';

import styles from './Slider.module.css';

const Slider = ({ children }) => (
  <ul className={styles.container}>
    <SlickSlider {...{
      dots: false,
      infinite: true,
      speed: 500,
      centerMode: false,
      variableWidth: true,
      adaptiveHeight: true,
      swipeToSlide: true,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 4000,
      pauseOnHover: true
    }}
    >
      {children}
    </SlickSlider>
  </ul>
);

export default Slider; 
