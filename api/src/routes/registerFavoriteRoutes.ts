import { Express, Request, Response } from 'express';
import { FavoriteRun } from '../Types';

const database = {
  all: () => [],
  get: (id: number) => ({}),

  create: (run: FavoriteRun) => ({}),
  update: (id: number, run: FavoriteRun) => ({}),
  delete: (id: number) => ({}),
};

async function Get(req: Request, res: Response) {
  if (req.params.id) {
    return database.get(parseInt(req.params.id, 10));
  }

  return database.all();
}

async function Create(req: Request, res: Response) {
  const run = req.body;
}

async function Update(req: Request, res: Response) {}

async function Delete(req: Request, res: Response) {}

function registerFavoriteRoutes(app: Express) {
  app.get('/favorites/activities/:id', Get);
  app.post('/favorites/activities', Create);
  app.put('/favorites/activities/:id', Update);
  app.delete('/favorites/activities/:id', Delete);
}

export default registerFavoriteRoutes;
