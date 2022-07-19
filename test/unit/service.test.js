const { describe, it } = require('mocha');
const TeamService = require('../../src/service/teamService');
const TeamRepository = require('../../src/repository/teamRepository');

const sinon = require('sinon');
const assert = require('assert');

describe('TeamService Suite Tests', () => {
	let teamService = {};
	let teamRepository = {};

	before(() => {
		teamRepository = new TeamRepository();
		teamService = new TeamService({ teamRepository });
	});

	beforeEach(() => {
		sandbox = sinon.createSandbox();
	});

	afterEach(() => {
		sandbox.restore();
	});

	it('should return a random pokemon from an array', () => {
		const list = require('../mocks/list-valid.json');
		const item = teamService.getRandomPokemon(list.results);

		assert.deepEqual(list.results.includes(item), true);
	});

	it('should return a team of 3 pokemon without repeat', async () => { 
		const list = require('../mocks/list-small-valid.json');
		const team = await teamService.generatedTeam(list);

		assert.deepEqual(team.length, 3);
	});

	it("should return a team of 3 pokemon", async () => {
		const list = require('../mocks/list-valid.json');

		const spyTeam = sandbox.spy(
			teamService,
			teamService.getTeamPokemon.name
		);
		const team = await teamService.getTeamPokemon(list.results);

		assert.deepEqual(spyTeam.callCount, 1);
		assert.deepEqual(team.length, 3);
	})

	it("should return a team of 3 pokemon with moves", async () => {
		const list = require('../mocks/list-valid.json');
		const team = await teamService.getTeamPokemon(list.results);

		assert.notEqual(team[0].moves.length, 0);
	});
});