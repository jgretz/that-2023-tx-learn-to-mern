// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();

import * as express from 'express';
import * as cors from 'cors';
import { registerFavoriteRoutes, registerStravaRoutes } from './routes';

const PORT = process.env.PORT || 8000;

async function main() {
  const app = express();
  app.use(cors());
  app.use(express.json());

  registerStravaRoutes(app);
  registerFavoriteRoutes(app);

  app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
  });
}

main();
