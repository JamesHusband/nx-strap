import { createExampleApiRoutes } from './api-example';
import * as express from 'express';
import * as request from 'supertest';

describe('apiExample', () => {
  let app: express.Express;

  beforeEach(() => {
    app = express();
    app.use('/api', createExampleApiRoutes());
  });

  it('should return OK for health check', async () => {
    const response = await request(app).get('/api/health');
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ message: 'OK' });
  });

  it('should return list of users', async () => {
    const response = await request(app).get('/api/users');
    expect(response.status).toBe(200);
    expect(response.body).toHaveLength(3);
    expect(response.body[0]).toHaveProperty('name');
    expect(response.body[0]).toHaveProperty('email');
    expect(response.body[0]).toHaveProperty('role');
  });
});
