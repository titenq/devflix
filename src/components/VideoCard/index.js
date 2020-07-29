import React from 'react';

import styles from './VideoCard.module.css';

const getYouTubeId = youtubeURL => {
  return youtubeURL
    .replace(
      /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/,
      '$7',
    );
};


const VideoCard = ({ videoTitle, videoURL, categoryColor }) => {
  const image = `https://img.youtube.com/vi/${getYouTubeId(videoURL)}/hqdefault.jpg`;

  return (
    <a
      className={styles.container}
      href={videoURL}
      alt="imagem"
      target="_blank"
      rel="noopener noreferrer"
      style={{ borderColor: categoryColor || '#ff0000', backgroundImage: `url(${image})` }}
      title={videoTitle}
    >
      &nbsp;
    </a>
  );
};

export default VideoCard;
