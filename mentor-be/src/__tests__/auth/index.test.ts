import request from 'supertest';
import mongoose from 'mongoose';
import app from '../../app';
import User from '../../models/entities/user';

describe('POST /signup', () => {
  beforeAll(async () => {
    const DB_URI = process.env.DB_URI_TESTING as string
    // const DB_URI = "mongodb+srv://zuhaib:zuhaibnazir@cluster0.dtssipk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    await mongoose.connect(DB_URI);
  });

  afterAll(async () => {
    await mongoose.connection.dropDatabase();
    await mongoose.connection.close();
  });

  beforeEach(async () => {
    await User.deleteMany({});
  });

  it('should create a new user, and login', async () => {
    const signup_response = await request(app)
      .post('/api/v1/auth/signup')
      .send({
        name: 'John Doe',
        email: 'john@example.com',
        password: 'password123'
      });

    const login_response = await request(app)
      .post('/api/v1/auth/login')
      .send({
        email: "john@example.com",
        password: "password123"
      })

    expect(login_response.status).toEqual(200)
    expect(signup_response.status).toEqual(200);

    expect(login_response.body._id).not.toBeNull();

    expect(signup_response.body).toHaveProperty('_id');
    expect(signup_response.body).toHaveProperty('name', 'John Doe');
    expect(signup_response.body).toHaveProperty('email', 'john@example.com');

    const user = await User.findOne({ email: 'john@example.com' });
    expect(user).not.toBeNull();
  });

  it('should fail if email is missing', async () => {
    const response = await request(app)
      .post('/api/v1/auth/signup')
      .send({
        name: 'John Doe',
        password: 'password123'
      });

    expect(response.status).toBe(400);
  });

  it('should fail if name is missing', async () => {
    const response = await request(app)
      .post('/api/v1/auth/signup')
      .send({
        email: 'john@example.com',
        password: 'password123'
      });

    expect(response.status).toBe(400);
  });

  it('should fail if password is missing', async () => {
    const response = await request(app)
      .post('/api/v1/auth/signup')
      .send({
        name: 'John Doe',
        email: 'john@example.com'
      });

    expect(response.status).toBe(400);
  });

  it('should fail if password is less than 6', async () => {
    const response = await request(app)
      .post('/api/v1/auth/signup')
      .send({
        name: 'John Doe',
        email: 'john@example.com',
        password: '12345'
      })

    expect(response.status).toBe(400)
  })
});
