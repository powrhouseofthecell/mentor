"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const mongoose_1 = __importDefault(require("mongoose"));
const app_1 = __importDefault(require("../../app"));
const user_1 = __importDefault(require("../../models/entities/user"));
describe('POST /signup', () => {
    beforeAll(async () => {
        const DB_URI = process.env.DB_URI_TESTING;
        await mongoose_1.default.connect(DB_URI);
    });
    afterAll(async () => {
        await mongoose_1.default.connection.dropDatabase();
        await mongoose_1.default.connection.close();
    });
    beforeEach(async () => {
        await user_1.default.deleteMany({});
    });
    it('should create a new user, and login', async () => {
        const signup_response = await (0, supertest_1.default)(app_1.default)
            .post('/api/v1/auth/signup')
            .send({
            name: 'John Doe',
            email: 'john@example.com',
            password: 'password123'
        });
        const login_response = await (0, supertest_1.default)(app_1.default)
            .post('/api/v1/auth/login')
            .send({
            email: "john@example.com",
            password: "password123"
        });
        expect(login_response.status).toEqual(200);
        expect(signup_response.status).toEqual(200);
        expect(login_response.body._id).not.toBeNull();
        expect(signup_response.body).toHaveProperty('_id');
        expect(signup_response.body).toHaveProperty('name', 'John Doe');
        expect(signup_response.body).toHaveProperty('email', 'john@example.com');
        const user = await user_1.default.findOne({ email: 'john@example.com' });
        expect(user).not.toBeNull();
    });
    it('should fail if email is missing', async () => {
        const response = await (0, supertest_1.default)(app_1.default)
            .post('/api/v1/auth/signup')
            .send({
            name: 'John Doe',
            password: 'password123'
        });
        expect(response.status).toBe(400);
    });
    it('should fail if name is missing', async () => {
        const response = await (0, supertest_1.default)(app_1.default)
            .post('/api/v1/auth/signup')
            .send({
            email: 'john@example.com',
            password: 'password123'
        });
        expect(response.status).toBe(400);
    });
    it('should fail if password is missing', async () => {
        const response = await (0, supertest_1.default)(app_1.default)
            .post('/api/v1/auth/signup')
            .send({
            name: 'John Doe',
            email: 'john@example.com'
        });
        expect(response.status).toBe(400);
    });
    it('should fail if password is less than 6', async () => {
        const response = await (0, supertest_1.default)(app_1.default)
            .post('/api/v1/auth/signup')
            .send({
            name: 'John Doe',
            email: 'john@example.com',
            password: '12345'
        });
        expect(response.status).toBe(400);
    });
});
//# sourceMappingURL=index.test.js.map