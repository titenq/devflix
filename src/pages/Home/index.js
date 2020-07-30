import React from 'react';

import styles from './Home.module.css';
import data from '../../data/data.json';
import BannerMain from '../../components/BannerMain/index';
import Carousel from '../../components/Carousel/index';

const Home = () => {
  return (
    <div className={styles.container}>
      <BannerMain
        videoTitle={data.categories[3].videos[0].title}
        url={data.categories[3].videos[0].url}
        videoDescription={"Já parou pra pensar como uma biblioteca tipo o Formik lida com as suas validações de formulário? Nesse vídeo aqui, vamos fazer passo a passo uma forma super bacana de lidar com validações de formulário usando custom hooks, useEffect de um jeito bem natural e que você conseguiria aplicar no seu projeto amanhã! O mais legal é que com tudo que a gente fizer aqui, você também tá aprendendo a usar o Formik :D Bora ver? 🛠️"}
      />
      <Carousel category={data.categories[0]} />
      <Carousel category={data.categories[1]} />
      <Carousel category={data.categories[2]} />
      <Carousel category={data.categories[3]} ignoreFirstVideo />
      <Carousel category={data.categories[4]} />
      <Carousel category={data.categories[5]} />
    </div>
  );
};

export default Home;
