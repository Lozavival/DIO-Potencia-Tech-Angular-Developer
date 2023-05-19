/* 
1) Faça um programa que receba um número e escreva a sua respectiva tabuada.
    Exemplo:
        Entrada:
            2

        Saída:
            2x1 = 2
            2x2 = 4
            2x3 = 6
            2x4 = 8
            2x5 = 10
            2x6 = 12
            2x7 = 14
            2x8 = 16
            2x9 = 18
            2x10 = 20
*/

const numero = gets();
for (let i = 1; i <= 10; i++) {
    print(`${numero}x${i} = ${i * numero}`);    
}

/*
2) Faça um programa que receba a quantidade de números e seus respectivos valores. 
Imprima o maior e o menor número deste conjunto.

Exemplo:
    Entrada:
        4
        100
        150
        90
        200

    Saída:
        Maior número: 200
        Menor número: 90
*/

const n = gets();
let maior = -1e9;
let menor = 1e9;
for (let i = 0; i < n; i++) {
    const num = gets();
    if (num > maior) {
        maior = num;
    } else if (num < menor) {
        menor = num;
    }
}
console.log(`Maior número: ${maior}`);
console.log(`Menor número: ${menor}`);

/*
3) Faça um programa que receba a quantidade de números e seus respectivos valores.
Imprima todos os números pares.
Exemplo:
    Entrada:
        5
        1
        3
        9
        10
        12

    Saída:
        Números Pares: 10, 12
*/

const n = gets();
let pares = [];
for (let i = 0; i < n; i++) {
    const num = gets();
    if (num % 2 === 0) {
        pares.push(num);
    }
}
console.log(`Maior número: ${pares.toString()}`);
