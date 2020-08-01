import React, { useState, useEffect } from 'react';

import styles from './Tecnologias.module.css';
import Button from '../../components/Button';
import screenshot from '../../assets/img/screenshot.jpg';


const Tecnologias = () => {
  const initialValues = {
    name: '', 
    color: '#6925D9'
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

  useEffect(() => {
    const URL = window.location.hostname.includes('localhost') 
      ? 'http://localhost:8080/technologies'
      : 'https://apidevflix.herokuapp.com/technologies';

    fetch(URL)
      .then(async data => {
        const response = await data.json();

        setTechnologies([...response]);
      });
  }, []);

  return (
    <div className={styles.container} style={{ backgroundImage: `url(${screenshot})` }}>
      <h1 className={styles.title}>Cadastro de Tecnologia</h1>

      <div className={styles.form_container}>
        <form onSubmit={handleSubmit}>
          <div className={styles.form}>
            <div className={styles.input_container}>
              <span>Digite a Tecnologia:</span>
              <div className={styles.label_float}>
                <input
                  className={styles.input}
                  type="text" 
                  id="name" 
                  name="name"
                  value={values.name} 
                  placeholder=" "
                  autoComplete="off"
                  required
                  onChange={handleChange} 
                />
                <label className={styles.label} htmlFor="name">Nome da Tecnologia</label>
              </div>
            </div>

            <div className={styles.input_color_container}>
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
          </div>
          
          <Button />
        </form>
      </div>
    </div>
  );
};

export default Tecnologias;
