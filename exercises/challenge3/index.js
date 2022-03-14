function Conta(agencia = 0, numero = 0, digito = 0, saldo = 0, titular = "", tipo = "Conta Corrente", movimentacoes = []) {
    this.agencia = agencia;
    this.numero = numero;
    this.digito = digito;
    this.saldo = saldo;
    this.titular = titular;
    this.tipo = tipo;
    this.movimentacoes = movimentacoes;
};

Conta.prototype.extrato = function () {
    return this.movimentacoes;
}

Conta.prototype.sacar = function (valorSaque) {
    if (valorSaque <= this.saldo) {
        this.saldo -= valorSaque;
        this.movimentacoes.push(`Saque R$${valorSaque.toFixed(2)}`) 
        return this.saldo;
    } else {
        return `Você não tem saldo suficiente. Tente um outro valor.`
    }

}

Conta.prototype.depositar = function (valorDeposito) {
    this.saldo += valorDeposito;
    this.movimentacoes.push(`Depósito R$${valorDeposito.toFixed(2)}`)
    return this.saldo;
}


Conta.prototype.transferir = function (valorTransferencia, contaBeneficiada) {
    if (valorTransferencia <= this.saldo) {
        this.sacar(valorTransferencia); 
        contaBeneficiada.depositar(valorTransferencia);
        //elimina registro feito pelo .sacar .depositar pra inserir formatado como transferência
        this.movimentacoes.pop()
        contaBeneficiada.movimentacoes.pop()
        //formatação
        this.movimentacoes.push(`R$${valorTransferencia.toFixed(2)} Transferido para: ${contaBeneficiada.titular}.`)
        contaBeneficiada.movimentacoes.push(`R$${valorTransferencia.toFixed(2)} Recebido de: ${this.titular}.`)
        return `Transferência realizada com sucesso.`
}
}


const contaMurillo = new Conta(336, 3387, 0, 5000, "Murillo Costa", "Conta Corrente");
console.log(contaMurillo);
const contaMarina = new Conta(336, 3389, 0, 0, "Marina Melo", "Conta Corrente")
console.log(contaMarina);
