import React, { useState, useEffect } from 'react';

import styles from './Home.module.css';
import BannerMain from '../../components/BannerMain/index';
import Carousel from '../../components/Carousel/index';
import getAllWithVideos from '../../repositories/technologies';

const Home = () => {
  const [technologies, setTechnologies] = useState([]);

  useEffect(() => {
    getAllWithVideos()
      .then(data => setTechnologies(data))
      .catch(error => console.log(error.message))
  }, []);
  
  return (
    <div className={styles.container}>
      {technologies.length === 0 && <div>Loading...</div>}

      {technologies.length >= 1 && (
        <>
          <BannerMain
            videoTitle={technologies[3].videos[0].title}
            url={technologies[3].videos[0].url}
            videoDescription={"Já parou pra pensar como uma biblioteca tipo o Formik lida com as suas validações de formulário? Nesse vídeo aqui, vamos fazer passo a passo uma forma super bacana de lidar com validações de formulário usando custom hooks, useEffect de um jeito bem natural e que você conseguiria aplicar no seu projeto amanhã!"}
          />
            <Carousel technology={technologies[0]} />
            <Carousel technology={technologies[1]} />
            <Carousel technology={technologies[2]} />
            <Carousel technology={technologies[3]} ignoreFirstVideo />
            <Carousel technology={technologies[4]} />
            <Carousel technology={technologies[5]} />
        </>
      )}
    </div>
  );
};

export default Home;
