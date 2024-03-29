import client from './client';

export const get = async () => {
  try {
    await client.connect();

    const result = await client.db('Test').collection('Text').findOne();

    return result?.Text;
  } finally {
    await client.close();
  }
};
