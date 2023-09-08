import { fastify } from 'fastify'
import { DatabaseMemory } from './database-memory.js'

const server = fastify()

const database = new DatabaseMemory()

server.post('/ambiente', (request, reply) => {
  const { descricao, dispositivos } = request.body

  database.create({
    descricao,
    dispositivos
  })

  return reply.status(201).send()
})

server.get('/ambiente', request => {
  const search = request.query.search

  const ambiente = database.list(search)

  return ambiente
})

server.put('/ambiente/:id', (request, reply) => {
  const ambienteId = request.params.id
  const { descricao, dispositivos } = request.body

  database.update(ambienteId, {
    descricao,
    dispositivos
  })

  return reply.status(204).send()
})

server.delete('/ambiente/:id', (request, reply) => {
  const ambienteID = request.params.id

  database.delete(ambienteID)

  return reply.status(204).send()
})

//Itens
server.post('/ambiente/:id/dispositivo', (request, reply) => {
  const { nome, conexao, status } = request.body
  const ambienteID = request.params.id

  database.add(ambienteID, {
    nome,
    conexao,
    status
  })

  return reply.status(201).send()
})

server.delete('/ambiente/:id/dispositivo/:dipid', (request, reply) => {
    const ambienteID = request.params.id
    const dispositivoID = request.params.dipid
  
    database.dispDelete(ambienteID, dispositivoID)
  
    return reply.status(204).send()
  })

server.listen({
  port: 3000
})
