import { configDotenv } from 'dotenv';
import { MongoClient, ServerApiVersion } from 'mongodb';

configDotenv();

class HelloWorldService {
  private client;

  constructor() {
    this.client = new MongoClient(process.env.MONGODB_URI as string, {
      serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true
      }
    });
  }

  async hello() {
    try {
      await this.client.connect();

      const result = await this.client.db('Test').collection('Text').findOne();

      return result?.Text;
    } catch (error) {
      throw error;
    } finally {
      await this.client.connect();
    }
  }
};

export const helloWorldService = new HelloWorldService();
