import React, { useContext, useState } from 'react';

import styles from './Login.module.css';
import screenshot from '../../assets/img/screenshot.jpg';
import Button from '../../components/Button';
import { UserContext } from '../../context/UserContext';

const Login = () => {
  const { authenticate, loading } = useContext(UserContext);

  const initialValues = {
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

    authenticate(values);
  };

  return (
    <div className={styles.container} style={{ backgroundImage: `url(${screenshot})` }}>
      <h1 className={styles.title}>Login</h1>

      <div className={styles.form_container}>
        <form onSubmit={handleSubmit}>
          <div className={styles.form}>
            <div className={styles.input_container}>
              <span>e-mail:</span>
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
            </div>
            <div className={styles.input_container}>
              <span>Senha:</span>
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
          {loading && <Button disabled title="Logar" />}
          {!loading && <Button title="Logar" />}
        </form>
      </div>
    </div>
  );
};

export default Login;
