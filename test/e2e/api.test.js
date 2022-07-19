const { describe, it } = require('mocha');
const request = require('supertest');
const api = require('../../src/api');

const assert = require('assert')

describe("API Test", () => {
	describe("should request an inexistent route /hi and redirect to /hello", () => {
		it("should return hello word", async () => {
			const resDefault = await request(api).get('/').expect(200)
			assert.deepStrictEqual(resDefault.body.text, 'Hello World');
		
			const resHello = await request(api).get('/hello').expect(200)
			assert.deepStrictEqual(resHello.body.text, 'Hello World');
		})
	})

	describe("/team", () => { 
		it("should return a list of pokemon", async () => {
			const res = await request(api).get('/team').expect(200)
			assert.deepStrictEqual(res.body.length, 3);
		})

		it("should return a list of moves to each pokemon", async () => {
			const res = await request(api).get('/team').expect(200)
			const team = res.body;
			
			team.forEach(pokemon => { 
				assert.notEqual(pokemon.moves.length, 0);
			})
		})
	})
})