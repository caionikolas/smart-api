import { randomUUID } from 'node:crypto'

export class DatabaseMemory{
    #ambientes = new Map()

    list(){
        return this.#ambientes.values()
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
}