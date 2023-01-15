import { Router, Request, Response } from 'express';
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

function registerFavoriteRoutes(router: Router) {
  router.get('/favorites/:id', Get);
  router.post('/favorites', Create);
  router.put('/favorites/:id', Update);
  router.patch('/favorites/:id', Update);
  router.delete('/favorites/:id', Delete);
}

export default registerFavoriteRoutes;
