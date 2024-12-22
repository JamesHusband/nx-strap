import { createUsersRoutes } from './users.routes';
import * as express from 'express';
import * as request from 'supertest';

describe('usersRoutes', () => {
  let app: express.Express;

  beforeEach(() => {
    app = express();
    app.use('/users', createUsersRoutes());
  });

  it('should return list of users', async () => {
    const response = await request(app).get('/users');
    expect(response.status).toBe(200);
    expect(response.body).toHaveLength(3);
    expect(response.body[0]).toHaveProperty('name');
    expect(response.body[0]).toHaveProperty('email');
    expect(response.body[0]).toHaveProperty('role');
  });
});
