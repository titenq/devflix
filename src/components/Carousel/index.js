import React from 'react';

import styles from './Carousel.module.css';
import VideoCard from '../VideoCard';
import Slider from '../Slider/index';
import SliderItem from '../Slider/index';

const Carousel = ({ ignoreFirstVideo, technology }) => {
  const { name, color, videos} = technology;

  return (
    <section className={styles.container}>
      {name && (
        <h3 
          className={styles.title} 
          style={{ backgroundColor: color || '#ff0000' }}>
          {name}
        </h3>
      )}
      <Slider className={styles.video_list}>
        {videos.map((video, index) => {
          if (ignoreFirstVideo && index === 0) {
            return null;
          }

          return (
            <SliderItem key={index}>
              <VideoCard
                videoTitle={video.title}
                videoURL={video.url}
                technologyColor={color}
              />
            </SliderItem>
          );
        })}
      </Slider>
    </section>
  );
};

export default Carousel;
