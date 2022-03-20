//implementação publica

class Televisao {
    constructor(marca, modelo, resolucao='hd', smart=false, tamanho=20, preco=400) {
        this.marca = marca;
        this.modelo = modelo;
        this.resolucao = resolucao;
        this.tamanho = tamanho;
        this.preco = preco;
        this.ligada = false;
        this.smart = smart;
        this.canal = {
            min: 1,
            max: 120,
            atual: 1
        };
        this.volume = {
            min: 0,
            max: 100,
            atual: 30
        }
    }

    ligar() {
        return this.ligada = true;
    }

    desligar() {
        return this.ligada = false;
    }

    sobeCanal() {
        if(this.ligada && this.canal.atual < this.canal.max) {
            ++this.canal.atual
        }
        return this.canal.atual;
    }

    desceCanal() {
        if (this.ligada && this.canal.atual > this.canal.min) {
            --this.canal.atual
        }
        return this.canal.atual;
    }

    aumentaVolume() {
        if (this.ligada && this.volume.atual < this.volume.max) {
            ++this.volume.atual
        }
        return this.volume.atual;
    }

    diminuiVolume() {
        if (this.ligada && this.volume.atual > this.volume.min) {
            --this.volume.atual
        }
        return this.volume.atual;
    }

}


// fim da implementação pública

// implementação privada
class TelevisaoPrivada {
    constructor(marca, modelo, resolucao='hd', smart=false, tamanho=20, preco=400) {
        this.marca = marca;
        this.modelo = modelo;
        this.resolucao = resolucao;
        this.tamanho = tamanho;
        this.#preco = preco;
        this.ligada = false;
        this.smart = smart;
        this.canal = {
            min: 1,
            max: 120,
            atual: 1
        };
        this.volume = {
            min: 0,
            max: 100,
            atual: 30
        }
    }

    #preco

    get mostraPreco() {
        return this.#preco;
    }

    ligar() {
        return this.ligada = true;
    }

    desligar() {
        return this.ligada = false;
    }

    sobeCanal() {
        if(this.ligada && this.canal.atual < this.canal.max) {
            ++this.canal.atual
        }
        return this.canal.atual;
    }

    desceCanal() {
        if (this.ligada && this.canal.atual > this.canal.min) {
            --this.canal.atual
        }
        return this.canal.atual;
    }

    aumentaVolume() {
        if (this.ligada && this.volume.atual < this.volume.max) {
            ++this.volume.atual
        }
        return this.volume.atual;
    }

    diminuiVolume() {
        if (this.ligada && this.volume.atual > this.volume.min) {
            --this.volume.atual
        }
        return this.volume.atual;
    }

}


// fim da implementação privada

const televisao1 = new Televisao('Samsung', 'LED', 'FULLHD', true, 40, 1800);
console.log(televisao1)

const televisao2 = new TelevisaoPrivada('LG', 'OLED', '4k', true, 55, 4500);
console.log(televisao2)