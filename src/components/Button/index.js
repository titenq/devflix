import React from 'react';

import styles from './Button.module.css';

const Button = () => {
  return (
    <button className={styles.button}>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      Cadastrar
    </button>
  );
};

export default Button;
