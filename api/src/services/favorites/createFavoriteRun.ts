import { FavoriteRun } from 'src/Types';
import { FAVORITES } from './constants';
import connectToMongo from './mongo';

interface Props {
  runId: number;
  comment: string;
}

async function createFavoriteRun(props: Props) {
  const database = await connectToMongo();
  const result = await database.collection(FAVORITES).insertOne(props);

  return {
    ...props,
    id: result.insertedId,
  };
}

export default createFavoriteRun;
