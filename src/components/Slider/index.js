import React from 'react';
import SlickSlider from 'react-slick';

import styles from './Slider.module.css';

const Slider = ({ children }) => (
  <ul className={styles.container}>
    <SlickSlider {...{
      dots: false,
      infinite: true,
      speed: 300,
      centerMode: false,
      variableWidth: true,
      adaptiveHeight: true
    }}
    >
      {children}
    </SlickSlider>
  </ul>
);

export default Slider; 
