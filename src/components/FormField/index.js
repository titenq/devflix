import React from 'react';

import styles from './FormField.module.css';

const FormField = ({ label, htmlFor, type, id, name, value, onChange }) => {
  return (
    <div className={styles.container}>
      <label htmlFor={htmlFor}>
        {label}
        <input 
          type={type} 
          id={id} 
          name={name} 
          value={value} 
          onChange={onChange} 
        />
      </label>
    </div>
  );
};

export default FormField;
