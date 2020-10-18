import URL from '../config';
import { getVideos } from './videos';

const URL_TECHNOLOGIES = `${URL}/technologies`;

const getTechnologies = async () => {
  const videos = await getVideos();
  const data = await fetch(URL_TECHNOLOGIES);
  
  if (data.ok) {
    const response = await data.json();

    for (let i = 0; i < response.length; i++) {
      for (let j = 0; j < videos.length; j++) {
        if (response[i].name === videos[j].technology[0]) {
          response[i].videos.push({ title: videos[j].title, url: videos[j].url });
        }
      }
    }
    
    return response;
  }
  throw new Error('O servidor não está respondendo');
};

const createTechnology = async (technology, token) => {
  const data = await fetch(`${URL_TECHNOLOGIES}/create`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify(technology)
  });

  if (data.ok) {
    const response = await data.json();

    return response;
  }

  throw new Error('O servidor não está respondendo');
};

export { getTechnologies, createTechnology };
