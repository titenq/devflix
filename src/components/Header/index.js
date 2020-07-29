import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import styles from './Header.module.css';

const links = [
  {
    name: 'Home',
    to: '/'
  },
  {
    name: 'Tecnologias',
    to: '/tecnologias'
  }
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    isOpen ? setIsOpen(false) : setIsOpen(true);

  };

  return (
    <header className={styles.navbar}>
      <svg className={styles.svg} 
        width="500" 
        height="150" 
        viewBox="0 0 500 150" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg">
          <path d="M446 66c-4,-12 -8,-23 -13,-34 -4,-11 -8,-21 -12,-32 8,0 16,0 24,0 3,7 5,15 8,22 2,7 5,15 8,23 0,0 0,0 0,0 3,-8 5,-15 8,-22 3,-8 5,-15 8,-23 7,0 14,0 22,0 -5,12 -9,24 -13,36 -4,11 -8,22 -13,33 5,13 9,26 14,39 4,14 9,28 13,42 -8,-3 -16,-5 -24,-8 -3,-9 -6,-18 -9,-26 -2,-9 -5,-18 -8,-26 0,0 0,0 -1,0 -2,7 -5,14 -8,22 -3,7 -6,14 -9,21 -7,-1 -14,-3 -22,-5 5,-10 9,-20 14,-30 4,-11 9,-21 13,-32z" stroke="red" strokeWidth="3" strokeLinecap="round" />
          <path d="M386 0c7,0 15,0 23,0 0,21 0,42 0,63 0,21 0,42 0,63 -8,-1 -16,-3 -23,-4 0,-20 0,-41 0,-61 0,-20 0,-41 0,-61z" stroke="red" strokeWidth="3" strokeLinecap="round" />
          <path d="M313 0c8,0 16,0 23,0 0,17 0,33 0,50 0,16 0,33 0,49 13,2 26,3 38,4 0,6 0,12 0,18 -20,-3 -40,-5 -61,-7 0,-19 0,-38 0,-57 0,-19 0,-38 0,-57z"stroke="red" strokeWidth="3" strokeLinecap="round" />
          <path d="M241 0c21,0 41,0 61,0 0,5 0,11 0,16 -12,0 -25,0 -38,0 0,5 0,10 0,16 0,5 0,10 0,15 10,0 20,0 30,1 0,5 0,10 0,16 -10,0 -20,-1 -30,-1 0,8 0,17 0,25 0,8 0,16 0,24 -7,0 -15,0 -23,0 0,-19 0,-37 0,-56 0,-19 0,-37 0,-56z" stroke="red" strokeWidth="3" strokeLinecap="round" />
          <path d="M155 0c8,0 16,0 23,0 3,15 5,29 8,44 2,15 5,29 8,44 0,0 0,0 0,0 2,-15 5,-30 7,-44 3,-15 5,-29 8,-44 7,0 14,0 21,0 -4,19 -7,37 -11,56 -4,19 -7,38 -11,57 -10,0 -20,1 -31,1 -3,-19 -7,-37 -11,-56 -3,-20 -7,-39 -11,-58z" stroke="red" strokeWidth="3" strokeLinecap="round"/>
          <path d="M85 0c21,0 42,0 63,0 0,6 0,11 0,17 -13,0 -27,0 -40,0 0,6 0,11 0,17 0,5 0,10 0,16 11,-1 21,-2 32,-2 0,6 0,11 0,17 -11,0 -21,1 -32,2 0,6 0,13 0,19 0,6 0,12 0,18 13,-1 27,-3 40,-4 0,6 0,11 0,17 -21,2 -42,5 -63,9 0,-21 0,-42 0,-63 0,-21 0,-42 0,-63z" stroke="red" strokeWidth="3" strokeLinecap="round"/>
          <path d="M0 0c12,0 23,0 35,0 12,0 20,3 26,8 6,6 9,13 9,24 0,11 0,22 0,32 0,11 0,22 0,33 0,10 -3,19 -9,26 -6,6 -14,11 -26,14 -12,3 -23,7 -35,10 0,-24 0,-49 0,-73 0,-25 0,-49 0,-74zm35 117c4,0 6,-2 9,-4 2,-3 3,-6 3,-11 0,-12 0,-23 0,-35 0,-12 0,-23 0,-35 0,-4 -1,-8 -3,-10 -3,-2 -5,-3 -9,-2 -4,0 -8,0 -12,0 0,17 0,33 0,50 0,17 0,34 0,50 4,-1 8,-2 12,-3z" stroke="red" strokeWidth="3" strokeLinecap="round"/>
        </svg>
        <ul className={`${styles.links} ${isOpen ? styles.links_on : ''}`}>
        {links.map((link, index) => {
          return (
            <li key={index} className={styles.hover_link}>
              <NavLink to={link.to} exact onClick={toggleOpen}>{link.name}</NavLink>
            </li>
          );
        })}
      </ul>
      <div className={`${styles.hamburger} ${isOpen ? styles.open : ''}`} onClick={toggleOpen}>
        <div className={styles.btn_hamburger}></div>
      </div>
    </header>
  );
};

export default Header;
