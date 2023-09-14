import { fastify } from 'fastify'
import { DatabaseMemory } from './database-memory.js'

const server = fastify()

const database = new DatabaseMemory()

server.post('/pessoas', (request, reply) => {
  const { apelido, nome, nascimento, stack } = request.body

  if (apelido.length > 32 || nome.length > 100){
    return reply.status(422).send("tamanho de caracteres invalido")
  }

  const teste = database.create({
    apelido,
    nome,
    nascimento,
    stack
  })

  if (teste == 422){
    return reply.status(422).send("valor Não pode ser null")
  } else if (teste == 423){
    return reply.status(400).send("valor deve ser uma string e não número")
  } else if (teste == 424){
    return reply.status(422).send("apelido já adicionado em outra requisição")
  } else if (teste == 425){
    return reply.status(422).send("nome já adicionado em outra requisição")
  } else if (teste == 426){
    return reply.status(422).send("nascimento já adicionado em outra requisição")
  } else {
    return reply.status(201).send()
  }
  
})

server.get('/pessoas', request => {
  const search = request.query.search

  const pessoa = database.list(search)

  return pessoa
})

server.put('/pessoas/:id', (request, reply) => {
  const pessoaID = request.params.id
  const { apelido, nome, nascimento, stack } = request.body

  database.update(pessoaID, {
    apelido,
    nome,
    nascimento,
    stack
  })

    return reply.status(204).send()
})

server.delete('/pessoas/:id', (request, reply) => {
  const pessoaID = request.params.id

  database.delete(pessoaID)

  return reply.status(204).send()
})

server.listen({
  port: 3000
})
