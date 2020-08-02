import URL from '../config';

export const URL_TECHNOLOGIES = `${URL}/technologies`;

const getAllWithVideos = async () => {
  const data = await fetch(`${URL_TECHNOLOGIES}?_embed=videos`);

  if (data.ok) {
    const response = await data.json();

    return response;
  }
  
  throw new Error('O servidor não está respondendo');
};

const getAll = async () => {
  const data = await fetch(URL_TECHNOLOGIES);

  if (data.ok) {
    const response = await data.json();

    return response;
  }

  throw new Error('O servidor não está respondendo');
};

const createTechnology = async technology => {
  const data = await fetch(URL_TECHNOLOGIES, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(technology)
  });

  if (data.ok) {
    const response = await data.json();

    return response;
  }

  throw new Error('O servidor não está respondendo');
};


export default getAllWithVideos;
export { getAll, createTechnology };
