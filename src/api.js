const http = require('http');

const routes = (route) => {
	switch (route) {
		default: return (request, response) => {
			response.write('Hello World!')
			return response.end();
		}
	}
}

const handler = function (request, response) {
	const { url, method } = request
	const routeKey = `${url}:${method.toLowerCase()}`
	const chosen = routes(routeKey)

	response.writeHead(200, {
		'Content-Type': 'text/html'
	})
	return chosen(request, response)
}

const app = http.createServer(handler)
	.listen(3000, () => console.log('runing on port 3000'));

module.exports = app