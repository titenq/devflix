import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';

import styles from './Tecnologias.module.css';
import Button from '../../components/Button';
import screenshot from '../../assets/img/screenshot.jpg';
import { createTechnology } from '../../repositories/technologies';
import { UserContext } from '../../context/UserContext';

const Tecnologias = () => {
  const { token } = useContext(UserContext);
  const history = useHistory();

  const initialValues = {
    name: '', 
    color: '#6925D9'
  };
 
  const [values, setValues] = useState(initialValues);

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
    
    createTechnology(values, token)
    .then(() => history.push('/'));
  };

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
          
          <Button title="Cadastrar" />
        </form>
      </div>
    </div>
  );
};

export default Tecnologias;
