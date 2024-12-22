import { Router } from 'express';
import { createHealthRoutes } from './health/health.routes';
import { createUsersRoutes } from './users/users.routes';

export function createExampleApiRoutes(): Router {
  const router = Router();

  router.use('/health', createHealthRoutes());
  router.use('/users', createUsersRoutes());

  return router;
}
