const http = require('http');

class TeamService { 

	async getTeamPokemon() {
		const url = 'https://pokeapi.co/api/v2/pokemon/';
		const response = await http.get(url);
		const body = await response.json();
		return body;
	}
}

module.exports = TeamService