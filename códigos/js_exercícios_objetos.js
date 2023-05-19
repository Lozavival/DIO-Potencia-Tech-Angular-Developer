/*
    1) Crie uma classe para representar carros. 
    Os carros possuem uma marca, uma cor e um gasto médio de combustível por Quilômetro rodado.
    Crie um método que dado a quantidade de quilômetros e o preço do combustível nos dê o valor 
    gasto em reais para realizar este percurso.
*/

class Carro {
    marca;
    cor;
    litrosPorKm;

    constructor(marca, cor, gastoMedio) {
        this.marca = marca;
        this.cor = cor;
        this.litrosPorKm = gastoMedio;
    }

    calculaGastoEmPercurso(distanciaEmKm, precoCombustivel) {
        return distanciaEmKm * this.litrosPorKm * precoCombustivel;
    }
}

/*
    2) Crie uma classe para representar pessoas.
    Para cada pessoa teremos os atributos nome, peso e altura.
    As pessoas devem ter a capacidade de dizer o valor do seu IMC (IMC = peso / (altura * altura));
    Instancie uma pessoa chamada José que tenha 70kg de peso e 1,75 de altura e peça ao José para
    dizer o valor do seu IMC;
    Altere sua classe para que, além de calcular o IMC, uma pessoa seja capaz também de dizer a
    classificação de seu IMC.
*/

class Pessoa {
    nome;
    peso;
    altura;

    constructor(nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    calculaImc() {
        return this.peso / (this.altura * this.altura);
    }

    classificaImc(imc) {
        if (imc < 18.5) {
            return 'Abaixo do peso';
        } else if (imc < 25) {
            return 'Peso normal';
        } else if (imc < 30) {
            return 'Acima do peso';
        } else if (imc < 40) {
            return 'Obeso';
        } else {
            return 'Obesidade Grave';
        }
    }
}

const jose = new Pessoa('José', 70, 1.75);
console.log(jose.calculaImc());
console.log(jose.classificaImc());
