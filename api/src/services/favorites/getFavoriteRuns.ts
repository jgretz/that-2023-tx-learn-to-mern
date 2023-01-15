import { FAVORITES } from './constants';
import connectToMongo from './mongo';

async function getFavoriteRuns() {
  const database = await connectToMongo();
  const results = database.collection(FAVORITES).find();

  return results;
}

export default getFavoriteRuns;
