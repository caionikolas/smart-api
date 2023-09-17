import { randomUUID } from 'node:crypto'
import { sql } from './db.js'

export class DatabasePostgres {
  async list(search) {
    let pessoas

    if (search) {
      pessoas =
        await sql`select * from pessoas where apelido ilike "%${search}%"`
    } else {
      pessoas = await sql`select * from pessoas`
    }

    return pessoas
  }

  create(pessoa) {}

  update(id, pessoa) {}

  delete(pesID) {}
}
