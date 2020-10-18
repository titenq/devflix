import React, { useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';

import styles from './Videos.module.css';
import Button from '../../components/Button';
import screenshot from '../../assets/img/screenshot.jpg';
import { createVideo } from '../../repositories/videos';
import { getTechnologies } from '../../repositories/technologies';
import { UserContext } from '../../context/UserContext';

const Videos = () => {
  const { token } = useContext(UserContext);
  const [select, setSelect] = useState(true);
  const history = useHistory();

  const initialValues = {
    technology: [],
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

    if (values.technology.length === 0) {
      setSelect(false);

      return;
    } else {
      setSelect(true);
    }
  
    createVideo(
      {
        technology: values.technology.split(','),
        title: values.title,
        url: values.url
      },
      token
    )
    .then(() => history.push('/'));
  };

  useEffect(() => {
    getTechnologies()
      .then(technologies => setTechnologies(technologies));
  }, []);

  return (
    <div className={styles.container} style={{ backgroundImage: `url(${screenshot})` }}>
      <h1 className={styles.title}>Cadastro de Vídeo</h1>

      <div className={styles.form_container}>
        <form onSubmit={handleSubmit}>
          <div className={styles.form}>
            <div className={styles.input_container}>
              <span className={select ? '' : styles.no_select}>Selecione a Tecnologia: &nbsp;</span>
                <select 
                  defaultValue={"DEFAULT"}
                  className={styles.select}
                  name="technology" 
                  id="technology" 
                  onChange={handleChange} 
                  autoFocus
                  required>
                    <option value="DEFAULT" disabled>Selecione:</option>
                  {technologies.map(technology => (
                    <option key={technology._id} value={[technology.name, technology.color]}>{technology.name}</option>
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
          
          <Button title="Cadastrar" />
        </form>
      </div>
    </div>
  );
};

export default Videos;
