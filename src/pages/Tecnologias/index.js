import React, { useState } from 'react';

import styles from './Tecnologias.module.css';
import FormField from '../../components/FormField';


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
  
  const handleChange = event => {
    const { getAttribute, value } = event.target;

    setValue(getAttribute('name'), value);
  };

  const handleSubmit = event => {
    event.preventDefault();

    setTechnologies([...technologies, values]);
    setValues(initialValues);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Cadastro de Tecnologia</h1>

      <form onSubmit={handleSubmit}>
        <FormField
          label="Nome da Tecnologia:"
          htmlFor="name"
          type="text"
          id="name"
          name="name"
          value={values.name}
          onChange={handleChange}
        />

        <FormField
          label="Cor da Tecnologia:"
          htmlFor="color"
          type="color"
          id="color"
          name="color"
          value={values.color}
          onChange={handleChange}
        />
        <button>
          Cadastrar
        </button>
      </form>
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
