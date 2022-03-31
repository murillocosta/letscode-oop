import { Animal } from "./animal.js";

class Cachorro extends Animal {
    constructor(nome=null, especie=null, tipo=null, vivo=false, raca=null) {
        super(nome, especie, tipo, vivo);
        this.raca = raca;
    }


    mijarPoste() {
        return `${this.nome} mijou no poste.`
    }

    vocalizar() {
        if(this.vivo) {
            return `${this.nome} latiu.`
        }
    }
}

export { Cachorro };