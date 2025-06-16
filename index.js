// entry point of the program
const server = require("./api/server")

const PORT = process.env.PORT || 3000

server.listen(PORT, () => {
	console.log(`Server listening on ${PORT}`)
})

