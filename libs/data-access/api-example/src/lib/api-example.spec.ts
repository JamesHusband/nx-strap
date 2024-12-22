import { createExampleApiRoutes } from './api-example';
import * as express from 'express';
import * as request from 'supertest';

describe('apiExample', () => {
  it('should return OK for health check', async () => {
    const app = express();
    app.use('/api', createExampleApiRoutes());

    const response = await request(app).get('/api/health');
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ message: 'OK' });
  });
});
