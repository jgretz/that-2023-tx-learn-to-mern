import { FavoriteRun } from 'src/Types';
import { FAVORITES } from './constants';
import connectToMongo from './mongo';

interface Props {
  runId: number;
  comment: string;
}

async function updateFavoriteRun(id: string, props: Props) {
  const database = await connectToMongo();
  const result = await database.collection(FAVORITES).updateOne({ id }, props);

  return {
    id,
    ...props,
  };
}

export default updateFavoriteRun;
