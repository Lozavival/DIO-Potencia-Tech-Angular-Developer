/* 
    1) Crie um programa que dado um número imprima a sua tabuada.
*/

const numero = 7;
for (let i = 1; i < 11; i++) {
    console.log(numero * i);
}

/* 
    2) Crie um programa que seja capaz de percorrer uma lista de números e imprima cada número Par encontrado.
*/

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const pares = numeros.filter(n => n % 2 === 0);
for (let i = 0; i < numeros.length; i++) {
    const elemento = numeros[i];
    if (elemento % 2 === 0) {
        console.log(elemento);
    }
}

/* 
    3) Faça um programa que dado uma lista de nomes imprima os nomes que comecem com a letra "V".
*/

const nomes = ['João', 'Maria', 'Vitor', 'Renan', 'Vitória', 'Cláudio', 'Viserys'];
for (let i = 0; i < nomes.length; i++) {
    const nome = nomes[i];
    if (nome[0] === 'V') {
        console.log(nome);
    }
}

/* 
    4) Faça um programa que preencha uma lista com todos os números pares contidos no intervalo de 10 a 50;
*/

const pares = [];
for (let i = 10; i < 51; i++) {
    if (i % 2 === 0) {
        pares.push(i);
    }
}

/* 
    5) Dado uma lista com as médias tiradas pelos alunos. Imprima todas as médias que ficaram de recuperação (média < 5).
    Ex de lista = [2, 7, 3, 8, 10, 4]
*/

const medias = [2, 7, 3, 8, 10, 4];
for (let i = 0; i < medias.length; i++) {
    const media = medias[i];
    if (media < 5) {
        console.log(media);
    }
}

/* 
    6) Dado uma lista com as notas tiradas pelos alunos. imprima a maior nota.
   Ex de lista de notas = [2, 7, 3, 8, 10, 4]
*/

const notas = [2, 7, 3, 8, 10, 4];
// console.log(Math.max(...notas));
let max = notas[0];
for (let i = 1; i < notas.length; i++) {
    const nota = notas[i];
    if (nota > max) {
        max = nota;
    }
}
console.log(max);
