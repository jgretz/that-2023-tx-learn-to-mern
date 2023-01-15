import { MongoClient, ServerApiVersion } from 'mongodb';

async function connectToMongo() {
  const client = await MongoClient.connect(process.env.MONGO_CONN_STRING);
  const db = await client.db('JGThatTexas');

  return db;
}

export default connectToMongo;
