const { describe, it } = require('mocha');
const TeamRepository = require('../../src/repository/teamRepository');
const sinon = require('sinon');
const assert = require('assert');

describe('TeamRepository Suite Tests', () => {
	let teamRepository = {};

	before(() => {
		teamRepository = new TeamRepository();
	});

	it('should call the specified url when makeRequest is called', async () => {
		const url = 'https://pokeapi.co/api/v2/pokemon';
		const expectedResponse = require('../mocks/list-valid.json');

		const stub = sinon.stub(teamRepository, teamRepository.makeRequest.name)
		stub.withArgs(url).resolves(expectedResponse);
		
		const response = await teamRepository.makeRequest(url);

		assert.deepEqual(response, expectedResponse);
	});

	it('should return a list of pokemons when listPokemons is called', async () => {
		const expectedResponse = require('../mocks/list-valid.json');

		const stub = sinon.stub(teamRepository, teamRepository.listPokemons.name)
		stub.resolves(expectedResponse);
		
		const response = await teamRepository.listPokemons();

		assert.deepEqual(response, expectedResponse);
	});

	it('should return an specific pokemon when getPokemon is called', async () => {
		const url = 'https://pokeapi.co/api/v2/pokemon/6/';
		const expectedResponse = require('../mocks/pokemon-valid.json');

		const stub = sinon.stub(teamRepository, teamRepository.getPokemon.name)
		stub.withArgs(url).resolves(expectedResponse);
		
		const response = await teamRepository.getPokemon(url);

		assert.deepEqual(response, expectedResponse);
	});
});