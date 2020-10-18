import React from 'react';

import styles from './Button.module.css';

const Button = props => {
  return (
    <button className={styles.button}>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      {props.title}
    </button>
  );
};

export default Button;
