class Animal {
    constructor(nome=null, especie=null, tipo=null, vivo=false) {

    this.nome = nome;
    this.#especie = especie;
    this.#tipo = tipo;
    this.#vivo = vivo;
};

#especie
#tipo
#vivo

    comer(){
        if(this.#vivo) {
            return `${this.nome} comeu.`
        }
    }

    locomover() {
        if(this.#vivo) {
            return `${this.nome} se locomoveu.`
        }
    }

    vocalizar() {
        if(this.#vivo) {
            return `${this.nome} vocalizou.`
        }
    }

    get vivo() {
        return this.#vivo
    }


}


export { Animal };