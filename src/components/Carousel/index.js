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

const Carousel = ({ ignoreFirstVideo, technology }) => {
  const { name, color, link_extra, videos} = technology;
  const { text, url } = link_extra;

  return (
    <section className={styles.container}>
      {name && (
        <>
          <h3 
            className={styles.title} 
            style={{ backgroundColor: color || '#ff0000' }}>
            {name}
          </h3>
          {link_extra && 
            <a 
              className={styles.link} 
              href={url} 
              target="_blank" 
              rel="noopener noreferrer"
            >
              {text === 'Documentação React' && <FaReact />}
              {text === 'Documentação JavaScript' && <FaJs />}
              {text === 'Documentação Angular' && <FaAngular />}
              {text === 'Documentação Vue' && <FaVuejs />}
              {text === 'Documentação HTML' && <FaHtml5 />}
              {text === 'Documentação CSS' && <FaCss3Alt />}
              {text}  
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
            <SliderItem key={index}>
              <VideoCard
                videoTitle={video.name}
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
