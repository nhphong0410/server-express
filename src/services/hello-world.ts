import client from '@repos';

class HelloWorldService {
  private client;

  constructor() {
    this.client = client;
  }

  async hello() {
    try {
      await this.client.connect();

      const result = await this.client.db('Test').collection('Text').findOne();

      return result?.Text;
    } catch (error) {
      throw error;
    } finally {
      await this.client.close();
    }
  }
};

export const helloWorldService = new HelloWorldService();
