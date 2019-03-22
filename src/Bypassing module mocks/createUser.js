import fetch from 'node-fetch';

/* eslint-disable-next-line */
export const createUser = async () => {
  const response = await fetch('https://zh.wikipedia.org/w/api.php?action=opensearch&format=json&limit=5&origin=*&search=馬', {
    method: 'POST',
  });
  const userId = await response.test();
  return userId;
};

createUser();
