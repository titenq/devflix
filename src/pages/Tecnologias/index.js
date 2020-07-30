import React, { useState } from 'react';

import styles from './Tecnologias.module.css';
import Button from '../../components/Button';


const Tecnologias = () => {
  /* const initialValues = [
    {
      name: 'HTML', 
      color: '#EF652A'
    },
    {
      name: 'CSS', 
      color: '#008DD2'
    },
    {
      name: 'JavaScript', 
      color: '#F7DF1E'
    },
    {
      name: 'React', 
      color: '#61DAFB'
    },
    {
      name: 'Angular', 
      color: '#DD0031'
    },
    {
      name: 'Vue', 
      color: '#41B883'
    }
  ]; */

  const initialValues = {
    name: '', 
    color: '#ff0000'
  };
 
  const [values, setValues] = useState(initialValues);

  const [technologies, setTechnologies] = useState([]);

  const setValue = (key, value) => {
    setValues({
      ...values,
      [key]: value
    });
  };
  
  const handleChange = event => setValue(
    event.target.getAttribute('name'), 
    event.target.value
  );

  const handleSubmit = event => {
    event.preventDefault();

    setTechnologies([...technologies, values]);
    setValues(initialValues);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Cadastro de Tecnologia</h1>

      <div className={styles.form_container}>
        <form onSubmit={handleSubmit}>
          <div className={styles.form}>
            <div className={styles.label_float}>
              <input
                className={styles.input}
                type="text" 
                id="name" 
                name="name"
                value={values.name} 
                placeholder=" "
                autoComplete="off"
                onChange={handleChange} 
              />
              <label className={styles.label} htmlFor="name">Nome da Tecnologia</label>
            </div>

            <label className={styles.label_color} htmlFor="color">Escolha a Cor:</label>
            <div className={styles.color_container}>
            <input
                className={styles.color}
                type="color" 
                id="color" 
                name="color"
                value={values.color}
                onChange={handleChange} 
              />
            </div>
          </div>
          
          <Button />
        </form>
      </div>

      <ul>
        {technologies.map((technology, index) => {
          return (
            <li key={index}>{technology.name} - {technology.color}</li>
          )
        })}
      </ul>
    </div>
  );
};

export default Tecnologias;
