import React from 'react';

import { FaGithub } from 'react-icons/fa';

import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <h2>TitenQ <sup>&copy;</sup></h2>
      <a 
        href="https://github.com/titenq" 
        target="_blank" 
        rel="noopener noreferrer">
          <FaGithub />
      </a>
    </footer>
  );
};

export default Footer;
