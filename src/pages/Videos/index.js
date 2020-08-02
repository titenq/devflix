import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { FaArrowAltCircleDown } from 'react-icons/fa';

import styles from './Videos.module.css';
import Button from '../../components/Button';
import screenshot from '../../assets/img/screenshot.jpg';
import URL_VIDEOS from '../../repositories/videos';
import  { create } from '../../repositories/videos';
import { getAll } from '../../repositories/technologies';

const Videos = () => {
  const history = useHistory();

  const initialValues = {
    technologyId: null,
    title: '', 
    url: ''
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
  
    create({
      technologyId: Number(values.technologyId),
      title: values.title,
      url: values.url,
    })
    .then(() => history.push('/'));
  };

  useEffect(() => {
    fetch(URL_VIDEOS, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(values)
  });
    getAll()
      .then(technologies => setTechnologies(technologies))
  }, []);

  return (
    <div className={styles.container} style={{ backgroundImage: `url(${screenshot})` }}>
      <h1 className={styles.title}>Cadastro de Vídeo</h1>

      <div className={styles.form_container}>
        <form onSubmit={handleSubmit}>
          <div className={styles.form}>
            <div className={styles.input_container}>
              <span>Selecione a Tecnologia: &nbsp;</span>
                <select 
                  className={styles.select}
                  name="technologyId" 
                  id="technologyId" 
                  onChange={handleChange} 
                  required>
                    <option>Selecione:</option>
                  {technologies.map(technology => (
                    <option key={technology.id} value={technology.id}>{technology.name}</option>
                  ))}
                </select>
            </div>
            <div className={styles.input_container}>
              <span>Digite o Título do Vídeo no YouTube:</span>
              <div className={styles.label_float}>
                <input
                  className={styles.input}
                  type="text" 
                  id="title" 
                  name="title"
                  value={values.title} 
                  placeholder=" "
                  autoComplete="off"
                  required
                  onChange={handleChange} 
                />
                <label className={styles.label} htmlFor="title">Digite o Título</label>
              </div>
            </div>
            <div className={styles.input_container}>
              <span>&nbsp; Digite a URL do Vídeo no YouTube: &nbsp;</span>
              <div className={styles.label_float}>
                <input
                  className={styles.input}
                  type="url" 
                  id="url" 
                  name="url"
                  value={values.url} 
                  placeholder=" "
                  autoComplete="off"
                  required
                  onChange={handleChange} 
                />
                <label className={styles.label} htmlFor="url">Digite a URL</label>
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
