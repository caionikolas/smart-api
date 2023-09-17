import { sql } from './db.js'

sql`
CREATE TABLE pessoas (
    apelido VARCHAR(50),
    nome VARCHAR(150),
    nascimento DATE,
    stack VARCHAR(10)[]
);
`.then(() => {
  console.log('tabela criada')
})
