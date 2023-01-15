import { Express, Request, response, Response } from 'express';
import {
  getFavoriteRuns,
  createFavoriteRun,
  getFavoriteRun,
  updateFavoriteRun,
  deleteFavoriteRun,
} from '../services/favorites';

async function Get(req: Request, res: Response) {
  if (req.params.id) {
    const fav = await getFavoriteRun(req.params.id);
    res.send(fav).status(200);
    return;
  }

  const list = await getFavoriteRuns();
  res.send(list).status(200);
}

async function Create(req: Request, res: Response) {
  const data = {
    runId: req.body.runId,
    comment: req.body.comment,
  };

  const favorite = await createFavoriteRun(data);

  res.send(favorite).status(200);
}

async function Update(req: Request, res: Response) {
  const data = {
    id: req.params.id,
    runId: req.body.runId,
    comment: req.body.comment,
  };

  const favorite = await updateFavoriteRun(data.id, data);

  res.send(favorite).status(200);
}

async function Delete(req: Request, res: Response) {
  const result = await deleteFavoriteRun(req.params.id);

  res.send().status(200);
}

function registerFavoriteRoutes(app: Express) {
  app.get('/favorites/:id', Get);
  app.post('/favorites', Create);
  app.put('/favorites/:id', Update);
  app.patch('/favorites/:id', Update);
  app.delete('/favorites/:id', Delete);
}

export default registerFavoriteRoutes;
