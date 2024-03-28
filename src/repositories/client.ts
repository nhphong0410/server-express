import { MongoClient, ServerApiVersion } from 'mongodb';
import { configDotenv } from 'dotenv';

configDotenv();

const client = new MongoClient(process.env.MONGODB_URI as string, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true
  }
});

export default client;
