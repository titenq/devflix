import React, { useState, useEffect } from 'react';

import styles from './Videos.module.css';
import Button from '../../components/Button';
import screenshot from '../../assets/img/screenshot.jpg';


const Videos = () => {
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
      ? 'http://localhost:8080/tecnologies'
      : 'https://apidevflix.herokuapp.com/tecnologies';

    fetch(URL)
      .then(async data => {
        const response = await data.json();

        setTechnologies([...response]);
      });
  }, []);

  return (
    <div className={styles.container} style={{ backgroundImage: `url(${screenshot})` }}>
      <h1 className={styles.title}>Cadastro de Vídeo</h1>

      <div className={styles.form_container}>
        <form onSubmit={handleSubmit}>
          <div className={styles.form}>
            <div className={styles.input_container}>
              <span>Digite o Título do Vídeo no YouTube:</span>
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
                <label className={styles.label} htmlFor="name">Digite o Título</label>
              </div>
            </div>
            <div className={styles.input_container}>
              <span>&nbsp; Digite a URL do Vídeo no YouTube: &nbsp;</span>
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
                <label className={styles.label} htmlFor="name">Digite a URL</label>
              </div>
            </div>
          </div>
          
          <Button />
        </form>
      </div>
    </div>
  );
};

export default Videos;
