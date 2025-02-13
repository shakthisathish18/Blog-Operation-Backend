const chai = require('chai');
const expect = chai.expect;
const request = require('supertest');
const app = require('../app'); // Assuming app.js is the entry point

describe('POST /posts', () => {
    it('should create a new post', async () => {
        const response = await request(app)
            .post('/posts')
            .set('api-key', 'P001-14-02-2025') // Pass API Key
            .send({ title: 'Test Post', content: 'This is a test post', author: 'Tester' });
        
        expect(response.status).to.equal(201);
        expect(response.body).to.have.property('id');
        expect(response.body.title).to.equal('Test Post');
    });

    it('should return error for missing fields', async () => {
        const response = await request(app)
            .post('/posts')
            .set('api-key', 'P001-14-02-2025') // Pass API Key
            .send({ title: 'Test Post', content: '' });
        
        expect(response.status).to.equal(400);
        expect(response.body.message).to.equal('Title, content, and author are required');
    });
});
