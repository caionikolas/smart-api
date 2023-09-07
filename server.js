import { fastify } from 'fastify' 
import { DatabaseMemory } from  './database-memory.js'

const server = fastify()

const database = new DatabaseMemory()

server.post('/ambiente', (request, reply) => {
    database.create({
        descricao: "Sala",
        itens: []
    })

    return reply.status(201).send()
})

server.get('/ambiente', (request, reply) => {
    database.list()

    console.log(database.list())

    return reply.status(201).send()
})


server.put('/ambiente/:id', () => {
    return 'Hello Node'
})

server.delete('/ambiente/:id', () => {
    return 'Hello Node'
})

server.listen({
    port: 3000
})



