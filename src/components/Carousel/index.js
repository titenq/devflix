import React from 'react';
import { 
  FaReact,
  FaJs,
  FaAngular,
  FaVuejs,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaDocker,
  FaJava,
  FaLess,
  FaGit,
  FaLinux,
  FaLaravel,
  FaPhp,
  FaPython,
  FaSass
} from 'react-icons/fa';

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
              {name === 'React' && <FaReact />}
              {name === 'JavaScript' && <FaJs />}
              {name === 'Angular' && <FaAngular />}
              {name === 'Vue' && <FaVuejs />}
              {name === 'HTML' && <FaHtml5 />}
              {name === 'CSS' && <FaCss3Alt />}
              {name === 'NodeJS' && <FaNodeJs />}
              {name === 'Docker' && <FaDocker />}
              {name === 'Java' && <FaJava />}
              {name === 'Linux' && <FaLinux />}
              {name === 'Laravel' && <FaLaravel />}
              {name === 'Python' && <FaPython />}
              {(name === 'Less' || name === 'LESS') && <FaLess />}
              {(name === 'Sass' || name === 'SASS') && <FaSass />}
              {(name === 'GIT' || name === 'Git') && <FaGit />}
              {(name === 'Php' || name === 'PHP') && <FaPhp />}
              {name}  
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
