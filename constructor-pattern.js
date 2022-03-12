console.log("===CONSTRUCTOR PATTERN===");

/*
        CONTA:
        /   \
    PROPS  METODOS
    numero   sacar()
    agencia  depositar()
    saldo    transferir()
    titular  extrato()
    tipo

*/

//letra maiscula indica que a funcao foi feita pra criar objetos
function Conta(agencia = 0, numero = 0, digito = 0, saldo = 0, titular = "", tipo = "Conta Corrente") {
    //propriedades
    this.agencia = agencia;
    this.numero = numero;
    this.digito = digito;
    this.saldo = saldo;
    this.titular = titular;
    this.tipo = tipo;
};

Conta.prototype.extrato = function () {
    return this.saldo;
}

Conta.prototype.sacar = function (valorSaque) {
    if (valorSaque <= this.saldo) {
        this.saldo -= valorSaque;
        return this.saldo;
    } else {
        return `Você não tem saldo suficiente. Tente um outro valor.`
    }

}

Conta.prototype.depositar = function (valorDeposito) {
    this.saldo += valorDeposito;
    return this.saldo;
}


Conta.prototype.transferir = function (valorTransferencia, contaBeneficiada) {
    if (valorTransferencia <= this.saldo) {
        this.sacar(valorTransferencia); //origem
        contaBeneficiada.depositar(valorTransferencia); //destino
        return `Transferência realizada com sucesso.`
}
}
//é necessário uso do new para executar funcoes de criação de objeto
const contaMurillo = new Conta(336, 3387, 0, 5000, "Murillo de Alencar Leite Costa", "Conta Corrente");
console.log(contaMurillo);
const contaMarina = new Conta(336, 3389, 0, 0, "Marina", "Conta Corrente")
console.log(contaMarina);


//Desafio:

/*1- implementar um metodo, onde a cada operação executada(ex: saque, deposito, transferencia) ela deve ser registrada dentro do objeto (lançamentos)

2-implementar um metodo onde todos os lançamentos sejam exibidos
*/

