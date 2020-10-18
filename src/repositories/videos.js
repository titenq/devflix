import URL from '../config';

const URL_VIDEOS = `${URL}/videos`;

const getVideos = async () => {
  const data = await fetch(URL_VIDEOS);

  if (data.ok) {
    const response = await data.json();
    
    return response;
  }

  throw new Error('O servidor não está respondendo');
};

const createVideo = async (video, token) => {
  const data = await fetch(`${URL_VIDEOS}/create`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify(video)
  });

  if (data.ok) {
    const response = await data.json();

    return response;
  }

  throw new Error('O servidor não está respondendo');
};

export { getVideos, createVideo };
