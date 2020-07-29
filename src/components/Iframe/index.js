import React from 'react';

import styles from './Iframe.module.css';

const Iframe = ({ youtubeID }) => {
  return (
    <div className={styles.container}>
      <iframe
        className={styles.iframe}
        title="Titulo do Iframe"
        src={`https://www.youtube.com/embed/${youtubeID}?autoplay=0&mute=1`}
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
};

export default Iframe;
