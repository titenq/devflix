import URL from '../config';

const URL_VIDEOS = `${URL}/videos`;

const create = async (video) => {
  const data = await fetch(URL_VIDEOS, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(video)
  });

  if (data.ok) {
    const response = await data.json();

    return response;
  }

  throw new Error('O servidor não está respondendo');
};

export default create;
