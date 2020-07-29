import React from 'react';

import styles from './PageNotFound.module.css';

const PageNotFound = () => {
  return (
    <div className={styles.container}>
      <h1>Erro 404</h1>
      <h2>Página não encontrada</h2>
      <h2>Verifique se o endereço digitado está correto</h2>
      <h2>Ou navegue pelos links acima</h2>
    </div>
  );
};

export default PageNotFound;
