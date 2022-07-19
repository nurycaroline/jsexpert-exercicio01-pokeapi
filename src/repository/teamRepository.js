const https = require('https');

const BASE_URL = 'https://pokeapi.co/api/v2';

class TeamRepository {
	async makeRequest(url) {
		let chunks = []
		return await new Promise((resolve, reject) => {
			https.get(url, response => {
				response.on('data', function (chunk) {
					chunks.push(chunk);
				});
				response.on('end', function () {
					resolve(JSON.parse(Buffer.concat(chunks)));
				});
				response.on("error", reject)
			})
		})
	}

	async listPokemons() {
		const data = await this.makeRequest(`${BASE_URL}/pokemon`);
		return data.results
	}

	async getPokemon(url) {
		const data = await this.makeRequest(url);
		return data
	}
}

module.exports = TeamRepository