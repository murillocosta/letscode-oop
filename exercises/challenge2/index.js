const pessoa1 = {
    nome: "Fulano",
    sobrenome: "de Tal",
    dataNascimento: "26/10/1989",
    nacionalidade: "brasileiro",
    naturalidade: "Caeté-açu/Bahia",
    altura: 1.83,
    peso: 70,
    profissao: "agricultor/permacultor",
    calorias: 0,
    comer: function () {
        this.calorias += 1000;
        if (this.calorias == 7000) {
            this.peso += 1;
            this.calorias = 0;
            return `${this.nome} ingeriu 7000 calorias e engordou 1kg. Agora está pesando: ${this.peso}kgs. Faça-o malhar.`
        } else {
            return this.calorias
        }
    },
    malhar: function () {
        this.calorias -= 1000;
        if (this.calorias == -7000) {
            this.peso -= 1;
            this.calorias = 0;
            return `${this.nome} perdeu 7000 calorias e emagreceu um 1kg. Agora está pesando: ${this.peso}kgs.`
        } else {
            return this.calorias
        }
    }
}