import React from 'react';
import { FaPlay } from 'react-icons/fa';

import styles from './BannerMain.module.css';
import Iframe from '../Iframe';

const getYouTubeId = youtubeURL => {
  return youtubeURL
    .replace(
      /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/,
      '$7',
    );
};

const BannerMain = ({ videoTitle, videoDescription, url }) => {
  const youTubeID = getYouTubeId(url);
  const bgUrl = `https://img.youtube.com/vi/${youTubeID}/maxresdefault.jpg`;

  return (
    <section className={`${styles.container} ${styles.glitch}`} style={{ backgroundImage: `url(${bgUrl})` }}>
      <div className={styles.glitch_img} style={{ backgroundImage: `url(${bgUrl})` }}></div>
      <div className={styles.glitch_img} style={{ backgroundImage: `url(${bgUrl})` }}></div>
      <div className={styles.glitch_img} style={{ backgroundImage: `url(${bgUrl})` }}></div>
      <div className={styles.glitch_img} style={{ backgroundImage: `url(${bgUrl})` }}></div>
      <div className={styles.glitch_img} style={{ backgroundImage: `url(${bgUrl})` }}></div>
      <div className={styles.area_container}>
        <div className={styles.item}>
          <h2 className={styles.title}>
            {videoTitle}
          </h2>

          <p className={styles.description}>
            {videoDescription}
          </p>
        </div>

        <div className={styles.item}>
          <Iframe youtubeID={youTubeID} />
          <a 
            className={styles.watch_button}
            href={`https://youtube.com/watch?v=${youTubeID}`} 
            rel="noopener noreferrer"
            target="_blank" 
          >
            <FaPlay />
          </a>
        </div>
      </div>
    </section>
  );
};

export default BannerMain;
