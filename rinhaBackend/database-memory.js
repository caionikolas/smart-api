import { randomUUID } from 'node:crypto'

export class DatabaseMemory {
  #pessoas = new Map()

  list(search) {
    return Array.from(this.#pessoas.entries())
      .map(pessoaArray => {
        const id = pessoaArray[0]
        const data = pessoaArray[1]

        return {
          id,
          ...data
        }
      })
      .filter(pessoa => {
        if (search) {
          return pessoa.nome.includes(search)
        }

        return true
      })
  }

  create(pessoa) {
    const pessoaID = randomUUID()

    const pessoaComArray = Array.from(this.#pessoas.entries()).map(
      pessoaArray => {
        const id = pessoaArray[0]
        const data = pessoaArray[1]

        return {
          id,
          ...data
        }
      }
    )
    const { apelido, nome, nascimento } = pessoa
    
    if (apelido == null || nome == null || nascimento == null){
      return 422
    }
    if (typeof apelido != "string" || typeof nome != "string" || typeof nascimento != "string"){
      return 423
    }
    if (pessoaComArray.length == 0){
      this.#pessoas.set(pessoaID, pessoa)
    } else {
      
      for (let i = 0; i < pessoaComArray.length; i++) {
        if (apelido == pessoaComArray[i].apelido){
          return 424
        }
        if (nome == pessoaComArray[i].nome){
          return 425
        }
        if (nascimento == pessoaComArray[i].nascimento){
          return 426
        }
      }
      this.#pessoas.set(pessoaID, pessoa)
    }




      
    

    
  }

  update(id, pessoa) {
    this.#pessoas.set(id, pessoa)
  }

  delete(pesID) {
    const ambienteComArray = Array.from(this.#pessoas.entries()).map(
        pessoaArray => {
          const id = pessoaArray[0]
          const data = pessoaArray[1]
  
          return {
            id,
            ...data
          }
        }
      )

    function teste(pesID) {
    for (let i = 0; i < ambienteComArray.length; i++) {
        if (pesID == ambienteComArray[i].id) {
        return i
        }
    }
    return false
    }

    this.#pessoas.delete(pesID)
  }
}
