import { Router } from 'express';

export function createHealthRoutes(): Router {
  const router = Router();

  router.get('/', (req, res) => {
    res.send({ message: 'OK' });
  });

  return router;
}
