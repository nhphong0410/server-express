import client from '../repos';

class HelloWorldService {
  private client;

  constructor() {
    this.client = client;
  }

  async hello() {
    try {
      const result = await this.client.db('Test').collection('Text').findOne();

      return result?.Text;
    } catch (error) {
      throw error;
    }
  }
};

export const helloWorldService = new HelloWorldService();
