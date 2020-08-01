import URL from '../config';

const URL_TECHNOLOGIES = `${URL}/technologies`;

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

export default getAllWithVideos;
export { getAll };
