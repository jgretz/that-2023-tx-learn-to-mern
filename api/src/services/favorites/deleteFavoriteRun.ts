import { FAVORITES } from './constants';
import connectToMongo from './mongo';

async function deleteFavoriteRun(id: string) {
  const database = await connectToMongo();
  const results = database.collection(FAVORITES).deleteOne({ id });

  return results;
}

export default deleteFavoriteRun;
