import React, { useState, useEffect } from 'react';

import styles from './Home.module.css';
import BannerMain from '../../components/BannerMain/index';
import Carousel from '../../components/Carousel/index';
import { getTechnologies } from '../../repositories/technologies';
import Loading from '../../components/Loading';

const Home = () => {
  const [technologies, setTechnologies] = useState([]);

  useEffect(() => {
    getTechnologies()
      .then(data => setTechnologies(data))
      .catch(error => console.log(error.message))
  }, []);
  
  const description = <>
    DEVFLIX é um projeto pessoal feito para criar playlists de vídeos relacionados a Programação, Desenvolvimento Web, Mobile e Desktop.<br />Sinta-se à vontade para se cadastrar e incluir Tecnologias e Vídeos.
  </>;

  return (
    <div className={styles.container}>
      {technologies.length === 0 && <Loading />}

      {technologies.length >= 1 && (
        <>
          <BannerMain
            videoTitle={technologies[2].videos[0].title}
            url={technologies[2].videos[0].url}
            videoDescription={description}
          />
          {technologies.map((technology, index) => <Carousel key={index} technology={technology} />)}
        </>
      )}
    </div>
  );
};

export default Home;
