import { randomUUID } from 'node:crypto'

export class DatabaseMemory {
  #ambientes = new Map()

  list(search) {
    return Array.from(this.#ambientes.entries())
      .map(ambienteArray => {
        const id = ambienteArray[0]
        const data = ambienteArray[1]

        return {
          id,
          ...data
        }
      })
      .filter(ambiente => {
        if (search) {
          return ambiente.descricao.includes(search)
        }

        return true
      })
  }

  create(ambiente) {
    const ambienteID = randomUUID()

    this.#ambientes.set(ambienteID, ambiente)
  }

  update(id, ambiente) {
    this.#ambientes.set(id, ambiente)
  }

  delete(ambId) {
    const ambienteComArray = Array.from(this.#ambientes.entries()).map(
        ambienteArray => {
          const id = ambienteArray[0]
          const data = ambienteArray[1]
  
          return {
            id,
            ...data
          }
        }
      )

    function teste(ambId) {
    for (let i = 0; i < ambienteComArray.length; i++) {
        if (ambId == ambienteComArray[i].id) {
        return i
        }
    }
    return false
    }
  
    const vai = teste(ambId)

    if (ambienteComArray[vai].dispositivos.length == 0){
        this.#ambientes.delete(ambId)
    } else {
       console.log("Ambiente possui dispositivos conectados")
       return false
    }
    
  }

  add(ambId, dispositivo) {
    const dispositivoId = randomUUID()

    const ambienteComArray = Array.from(this.#ambientes.entries()).map(
      ambienteArray => {
        const id = ambienteArray[0]
        const data = ambienteArray[1]

        return {
          id,
          ...data
        }
      }
    )

    function teste(ambId) {
      for (let i = 0; i < ambienteComArray.length; i++) {
        if (ambId == ambienteComArray[i].id) {
          return ambienteComArray[i]
        }
      }
      return false
    }

    const vai = teste(ambId)
    vai.dispositivos.push({
      dispositivoId,
      ...dispositivo
    })

    this.#ambientes.set(ambId, vai)
  }

  dispDelete(ambId, disID) {
    const ambienteComArray = Array.from(this.#ambientes.entries()).map(
        ambienteArray => {
          const id = ambienteArray[0]
          const data = ambienteArray[1]
  
          return {
            id,
            ...data
          }
        }
      )

      function teste(ambId) {
        for (let i = 0; i < ambienteComArray.length; i++) {
          if (ambId == ambienteComArray[i].id) {
            return ambienteComArray[i]
          }
        }
        return false
      }

      const vai = teste(ambId)

      function testeDisp(disID) {
        for (let j = 0; j < vai.dispositivos.length; j++) {
          if (disID == vai.dispositivos[j].dispositivoId) {
            return j
          }
        }
        return false
      }

    const vem = testeDisp(disID)
    vai.dispositivos.splice(vem, 1)

    this.#ambientes.set(ambId, vai)
  }


}
