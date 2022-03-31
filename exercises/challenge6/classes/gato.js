import { Animal } from "./animal.js";

class Gato extends Animal {
    constructor(nome=null, especie=null, tipo=null, vivo=false, pelo=null){
        super(nome, especie, tipo, vivo);
        this.pelo = pelo;
    }

    derrubarCaneta (){
        return `${this.nome} derrubou uma caneta.`
    }

   
    vocalizar() {
        if(this.vivo) {
            return `${this.nome} miou.`
        }
    }
}

export { Gato };