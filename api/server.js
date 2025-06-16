// express server
const express = require("express")

const server = express()

server.get('/api/pets', (req, res, next) => {
    res.status(200).json([
        {
            id: 1,
            name: 'Fido',
        },
        {
            id: 2,
            name: 'Bicho',
        },
    ])
})

server.get('/favicon.ico', (req, res) => res.status(204).end())

server.use("/{*splat}", (req, res, next) => {
	res.status(200).json("You called the server")
})

module.exports = server
