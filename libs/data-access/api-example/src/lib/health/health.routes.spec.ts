import { createHealthRoutes } from './health.routes';
import * as express from 'express';
import * as request from 'supertest';

describe('healthRoutes', () => {
  let app: express.Express;

  beforeEach(() => {
    app = express();
    app.use('/health', createHealthRoutes());
  });

  it('should return OK for health check', async () => {
    const response = await request(app).get('/health');
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ message: 'OK' });
  });
});
