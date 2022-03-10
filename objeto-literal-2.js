console.log("=== Objeto literal ===")

const pessoa = {
    nome: 'Murillo',
    altura: 1.83,
    peso: 70,
    idade: 32,
    profissao: "desenvolvedor",
    comer: function () {
        return `${pessoa.nome} está comendo.`
    },
    dormir: function () {
        return `${pessoa.nome} está dormindo.`
    },
    andar: function () {
        return `${pessoa.nome} está andando.`
    },
    falar: function () {
        return `${pessoa.nome} está falando.`
    },
};

console.log(pessoa);