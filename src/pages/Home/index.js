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
        videoDescription={"Eu tô aqui pra nesse vídeo dizer que a gente vai aprender a começar uma app inspirada no desenho Pokémon com Nextjs e React, ver algumas dicas sobre performance e de quebra conhecer uma plataforma sensacional pra fazer deploy que é a Vercel. Tudo em 22 minutos nesse vídeo feito com todo o carinho do mundo construindo uma 'Pokedex'! 😍 bora ver? \\o"}
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
