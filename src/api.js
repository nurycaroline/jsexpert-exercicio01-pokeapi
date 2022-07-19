const http = require('http');
const TeamService = require('./service/teamService')

const routes = (route) => {
	switch (route) {
		case '/team:get': return async (request, response) => {
			const service = new TeamService()
			const data = await service.getTeamPokemon()
			response.write(JSON.stringify(data))
			return response.end()
		}
		default: return (request, response) => {
			response.write(JSON.stringify({
				text: 'Hello World',
			}))
			return response.end();
		}
	}
}

const handler = function (request, response) {
	const { url, method } = request
	const routeKey = `${url}:${method.toLowerCase()}`
	console.log(routeKey)
	const chosen = routes(routeKey)

	response.writeHead(200, {
		'Content-Type': 'application/json',
	})
	return chosen(request, response)
}

const app = http.createServer(handler)
	.listen(3000, () => console.log('runing on port 3000'));

module.exports = app