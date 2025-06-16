// express server
const express = require("express")
const Pet = require("./pet-model")

const server = express()

server.get("/api/pets", async (req, res, next) => {
	try {
		const pets = await Pet.find(req.query)
		if (pets.length) {
			res.json(pets)
		} else {
			res.status(404).json({ message: "No pets found." })
		}
	} catch (err) {
		next(err)
	}
})

server.get("/favicon.ico", (req, res) => res.status(204).end())

server.use("/{*splat}", (req, res, next) => {
	res.status(404).json("Not found!")
	next()
})

server.use((err, req, res, next) => {
	const { message, status = 500 } = err
	console.log(`${status}: ${message}`)
	res.status(status).json({ message }) // <- does this do anything??
})

module.exports = server
