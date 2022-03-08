/*

    |----------|
    |  Objeto  |
    |----------|
   /            \
Propriedades   Métodos

*/
//objeto literal

const carro = {};

//dot notation (notação ponto)
//objeto.propriedade; ---> ler propriedade
//objeto.propriedade = valor; ---> definir uma propriedade

//add propriedade
carro.marca = "Troller";
carro.modelo = "T4";
carro.cor = "Verde Maragogi";

//add metodos
//objeto.metodo(); ---> executar o método
//objeto.metodo = function() {}; ---> definir um método
carro.ligar = function() {
    return 'carro ligado'
};


//bracket notation (notação colchetes)
//objeto["propriedade"];  ---> ler propriedade
//objeto["propriedade"] = valor; ---> definir uma propriedade

//add propriedade
carro["ano"] = 2023;
carro["motor"] = "3.2, 5 cilindros/Diesel";
carro["acessorios"] = ["pintura fosca", "hack"]

//add metodo
//objeto["metodo"] ---> executar o método
//objeto["metodo"] = function () {}; ---> definir um metodo

carro["desligar"] = function () {
    return 'carro desligado'
};
carro["buzinar"] = function () {
    return 'bibiii'
};

console.log(carro);
console.log(carro.ano, carro["modelo"]); //lendo propriedades
console.log(carro.ligar(), carro["desligar"]() );// executando metodos
