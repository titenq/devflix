import React from 'react';
import { FaReact } from 'react-icons/fa';
import { FaJs } from 'react-icons/fa';
import { FaAngular } from 'react-icons/fa';
import { FaVuejs } from 'react-icons/fa';
import { FaHtml5 } from 'react-icons/fa';
import { FaCss3Alt } from 'react-icons/fa';

import styles from './Carousel.module.css';
import VideoCard from '../VideoCard';
import Slider from '../Slider/index';
import SliderItem from '../Slider/index';

const Carousel = ({ ignoreFirstVideo, category, icon }) => {
  const categoryTitle = category.title;
  const categoryColor = category.color;
  const categoryExtraLink = category.link_extra;
  const videos = category.videos;

  return (
    <section className={styles.container}>
      {categoryTitle && (
        <>
          <h3 
            className={styles.title} 
            style={{ backgroundColor: categoryColor || '#ff0000' }}>
            {categoryTitle}
          </h3>
          {categoryExtraLink && 
            <a 
              className={styles.link} 
              href={categoryExtraLink.url} 
              target="_blank" 
              rel="noopener noreferrer"
            >
              {categoryExtraLink.text === 'React' && <FaReact />}
              {categoryExtraLink.text === 'JavaScript' && <FaJs />}
              {categoryExtraLink.text === 'Angular' && <FaAngular />}
              {categoryExtraLink.text === 'Vue' && <FaVuejs />}
              {categoryExtraLink.text === 'HTML' && <FaHtml5 />}
              {categoryExtraLink.text === 'CSS' && <FaCss3Alt />}
              {categoryExtraLink.text}  
            </a>
          }
        </>
      )}
      <Slider className={styles.video_list}>
        {videos.map((video, index) => {
          if (ignoreFirstVideo && index === 0) {
            return null;
          }

          return (
            <SliderItem key={video.title}>
              <VideoCard
                videoTitle={video.title}
                videoURL={video.url}
                categoryColor={categoryColor}
              />
            </SliderItem>
          );
        })}
      </Slider>
    </section>
  );
};

export default Carousel;
