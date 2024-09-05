import client from '../utils/db/mongodb-client';

export const getSampleText = async () => {
  try {
    await client.connect();

    const result = await client
      .db('TestConnection')
      .collection('Sample')
      .findOne();

    return result?.Text;
  } finally {
    await client.close();
  }
};
