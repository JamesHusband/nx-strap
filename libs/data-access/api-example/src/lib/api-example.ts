import { Router } from 'express';

export function createExampleApiRoutes(): Router {
  const router = Router();

  router.get('/health', (req, res) => {
    res.send({ message: 'OK' });
  });

  return router;
}
