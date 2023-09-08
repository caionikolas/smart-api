import { randomUUID } from 'node:crypto'

export class DatabaseMemory{
    #ambientes = new Map()

    list(search){
        return Array.from(this.#ambientes.entries())
            .map((ambienteArray) => {
                const id = ambienteArray[0]
                const data = ambienteArray[1]

                return {
                    id,
                    ...data
                }
            })
            .filter(ambiente => {
                if(search) {
                    return ambiente.descricao.includes(search)
                }

                return true
            })
    }

    create(ambiente){
        const ambienteID = randomUUID()

        this.#ambientes.set(ambienteID, ambiente)
    }

    update(id, ambiente) {
        this.#ambientes.set(id, ambiente)
    }

    delete(id){
        this.#ambientes.delete(id)
    }

    add(id, dispositivo){
        const dispositivoId = randomUUID()

        this.#ambientes.set(id)

        return
    }
}