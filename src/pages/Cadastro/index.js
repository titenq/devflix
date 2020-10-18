import React, { useContext, useState } from 'react';

import styles from './Cadastro.module.css';
import screenshot from '../../assets/img/screenshot.jpg';
import Button from '../../components/Button';
import { UserContext } from '../../context/UserContext';

const Cadastro = () => {
  const { loading, error, signUp } = useContext(UserContext);

  const initialValues = {
    name: '',
    email: '', 
    password: ''
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

    signUp(values);
  };

  return (
    <div className={styles.container} style={{ backgroundImage: `url(${screenshot})` }}>
      <h1 className={styles.title}>Cadastro</h1>

      <div className={styles.form_container}>
        <form onSubmit={handleSubmit}>
          <div className={styles.form}>
            <div className={styles.input_container}>
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
                <label className={styles.label} htmlFor="name">Nome</label>
              </div>
            </div>
            <div className={styles.input_container}>
              <div className={styles.label_float}>
                <input
                  className={styles.input}
                  type="email" 
                  id="email" 
                  name="email"
                  value={values.email} 
                  placeholder=" "
                  autoComplete="off"
                  required
                  onChange={handleChange} 
                />
                <label className={styles.label} htmlFor="name">e-mail</label>
              </div>
              {error && <p className={styles.error}>{error}</p>}
            </div>
            <div className={styles.input_container}>
              <div className={styles.label_float}>
                <input
                  className={styles.input}
                  type="password" 
                  id="password" 
                  name="password"
                  value={values.password} 
                  placeholder=" "
                  autoComplete="off"
                  required
                  onChange={handleChange} 
                />
                <label className={styles.label} htmlFor="name">Senha</label>
              </div>
            </div>
          </div>
          {loading && <Button disabled title="Cadastrar" />}
          {!loading && <Button title="Cadastrar" />}
        </form>
      </div>
    </div>
  );
};

export default Cadastro;
