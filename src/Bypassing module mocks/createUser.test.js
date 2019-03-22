jest.mock('node-fetch');

// import fetch, { Response } from 'node-fetch'; // eslint-disable-line
import fetch from 'node-fetch'; // eslint-disable-line
const { Response } = jest.requireActual('node-fetch'); // eslint-disable-line
import { createUser } from './createUser'; // eslint-disable-line

test('createUser calls fetch with the right args and returns the user id', async () => {
  fetch.mockReturnValue(Promise.resolve('4'));

  const userId = await createUser();

  expect(fetch).toHaveBeenCalledTimes(1);
  expect(fetch).toHaveBeenCalledWith('https://zh.wikipedia.org/w/api.php?action=opensearch&format=json&limit=5&origin=*&search=馬', {
    method: 'POST',
  });
  expect(userId).toBe(4);
});
