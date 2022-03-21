const CALCULATOR = (function () {
    var calculadora = {
        resultado: 0,
        historico: []
    };


    calculadora.somar = function (a, b) {
        calculadora.historico.push(`${a} + ${b} = ${a + b}`)
        return calculadora.resultado = a + b;
    }

    calculadora.subtrair = function (a, b) {
        calculadora.historico.push(`${a} - ${b} = ${a - b}`)
        return calculadora.resultado = a - b;
    }

    calculadora.multiplicar = function (a, b) {
        calculadora.historico.push(`${a} x ${b} = ${a * b}`)
        return calculadora.resultado = a * b;
    }

    calculadora.dividir = function (a, b) {
        if (b === 0) {
            return "Não é possível dividir por zero."
        } else {
        calculadora.historico.push(`${a} / ${b} = ${a / b}`)
        return calculadora.resultado = a / b;}
    }

    calculadora.exibir = function () {
        return calculadora.historico
    }

    return {
        soma: calculadora.somar,
        diminui: calculadora.subtrair,
        multiplica: calculadora.multiplicar,
        divide: calculadora.dividir,
        historico: calculadora.exibir
    }

})();