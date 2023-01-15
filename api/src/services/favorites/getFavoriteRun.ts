import { FAVORITES } from './constants';
import connectToMongo from './mongo';

async function getFavoriteRun(id: string) {
  const database = await connectToMongo();
  const results = database.collection(FAVORITES).findOne({ id });

  return results;
}

export default getFavoriteRun;
