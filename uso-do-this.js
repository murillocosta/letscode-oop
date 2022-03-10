console.log("===USO DO THIS===");

//this ---> palavra-chave que aponta para o objeto que é o contexto da execução de uma determinada ação.

const carro1 = {
    marca: "Troller",
    modelo: "T4",
    cor: "Verde Maragogi",
    ano: 2023,
    velo: {
        min: 0,
        max: 240,
        atual: 0
    },
    status: false,
    ligar: function () {
        return this.status = true;
    },
    desligar: function () {
        return this.status = false;
    },
    freiar: function () {
        if (this.velo.atual == this.velo.min) {
            return this.velo.atual;
        } else {
            return --this.velo.atual
        }
    },
    acelerar: function () {
        if (this.velo.atual == this.velo.max) {
            return this.velo.atual;
        }  else if (this.status){
            return ++this.velo.atual;
        } else {
            return this.velo.atual;
        }
    }
};

console.log(carro1);
console.log(carro1.modelo, carro1.ano, carro1.cor, carro1.velo.max)