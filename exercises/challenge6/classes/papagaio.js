import { Animal } from "./animal.js";

class Papagaio extends Animal {
    constructor(nome=null, especie=null, tipo=null, vivo=false, idade=null) {
        super(nome, especie, tipo, vivo);
        this.idade = idade;
    }


    imitar() {
        return `${this.nome} imitou um som.`
    }

    vocalizar() {
        if(this.vivo) {
            return `${this.nome} cantar.`
        }
    }
}

export { Papagaio };