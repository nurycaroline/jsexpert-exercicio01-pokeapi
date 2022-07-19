const TeamRepository = require('../repository/teamRepository');

const TEAM_SIZE = 3;

class TeamService {
	constructor() {
		this.teamRepository = new TeamRepository();
		this.teamPokemon = [];
	}


	getRandomPokemon(listPokemons) {
		return listPokemons[Math.floor(Math.random() * listPokemons.length)];
	}

	generatedTeam(listPokemons) {
		const randomPokemon = this.getRandomPokemon(listPokemons)

		if (this.teamPokemon.length < TEAM_SIZE) {
			const existingInTeam = this.teamPokemon.find(pokemon => pokemon.name === randomPokemon.name)
			
			if (!existingInTeam) {
				this.teamPokemon.push(randomPokemon)
			}
			return this.generatedTeam(listPokemons)
		}
		return this.teamPokemon
	}

	async getTeamPokemon() {
		const pokemons = await this.teamRepository.listPokemons();
		const randomTeam = this.generatedTeam(pokemons)

		return await Promise.all(randomTeam.map(async pokemon => {
			const pokemonData = await this.teamRepository.getPokemon(pokemon.url);

			return {
				pokemon: pokemon,
				moves: pokemonData.moves.map(move => move.move.name)
			}
		}))
	}
}

module.exports = TeamService