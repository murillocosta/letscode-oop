const pessoa1 = {};

//Propriedades
pessoa1.nome = "Fulano";
pessoa1.sobrenome = "de Tal";
pessoa1.dataNascimento = "26/10/1989";
pessoa1.nacionalidade = "brasileiro";
pessoa1.naturalidade = "Caeté-açu/Bahia"; 
pessoa1.altura = 1.83;
pessoa1.peso = 70;
pessoa1.profissao = "agricultor/permacultor";

//Métodos
pessoa1.acordar = function () {
    return `${pessoa1.nome} acordou.`
};

pessoa1.dormir = function () {
    return `${pessoa1.nome} dormiu.`
};


pessoa1.alimentar = function () {
    return `${pessoa1.nome} se alimentou.`
};

pessoa1.arar = function () {
    return `${pessoa1.nome} arou a terra.`
};

pessoa1.cobrirSolo = function () {
    return `${pessoa1.nome} cobriu, devidamente, o solo.`
};

pessoa1.semear = function () {
    return `${pessoa1.nome} semeou o solo.`
};

pessoa1.regar = function () {
    return `${pessoa1.nome} regou o solo.`
};

pessoa1.colher = function () {
    return `${pessoa1.nome} fez a colheita.`
};

pessoa1.descansar = function() {
    return `${pessoa1.nome} descansou.`
};

pessoa1.cozinhar = function() {
    return `${pessoa1.nome} cozinhou.`
};

pessoa1.tocar = function() {
    return `${pessoa1.nome} tocou violão.`
};


console.log(pessoa1)