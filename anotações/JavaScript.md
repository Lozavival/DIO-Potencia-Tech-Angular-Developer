# JavaScript

Descrição

---

```toc
```

---

## Primeiros Passos com JavaScript

Para imprimir no terminal, chamamos a função `console.log()`:

```js
console.log("Hello World!")
```

### Variáveis e Operadores

No JavaScript, há duas formas mais usadas de declarar variáveis:

```js
let variavel = 10;  // podemos alterar o valor ("variável de fato")
const pi = 3.1415;  // não é possível alterar o valor (constante)
```

Variáveis declaradas com `let` ou `const` existem apenas dentro do escopo na qual foram definidas.

Em JavaScript, a convenção é escrever os nomes das variáveis no formato camelCase.

Os operadores matemáticos básicos são os mesmos: `+` para soma, `-` para subtração, `*` para multiplicação e `/` para divisão. O operador `%` é utilizado quando desejamos o resto da divisão.

```js
/* EXEMPLO: Faça um programa para calcular o valor de uma viagem.

Você deve definir 3 variáveis, sendo elas:
- preço do combustível;
- gasto médio de combustível do carro por km;
- distância em km da viagem.
*/

const precoCombustivel = 5.37;
const kmPorLitro = 10;
const distanciaEmKm = 120;

const litrosConsumidos = distanciaEmKm / kmPorLitro;
const valorGasto = litrosConsumidos * precoCombustivel;
console.log(valorGasto.toFixed(2));
```

### Estruturas Condicionais

Um tipo de variável muito usado na computação é o tipo *boolean*, que representa valores lógicos (verdadeiro ou falso):

```js
const ehNumeroPrimo = false;
const ehNumeroPar = true;
```

Os operadores de comparação de desigualdade seguem os símbolos matemáticos correspondentes: `>`, `>=`, `<`, `<=`. Em JavaScript, a igualdade entre dois operandos é verificada pelo operador `===` (além de comparar os valores, ele verifica também o tipo). O operador `==` também pode ser utilizado, porém ele compara apenas os valores e ignora o tipo (ocorre uma conversão implícita), de forma que uma boa prática é sempre usar `===`. O operador de negação é uma barra de exclamação (`!`).

```js
const numero = 10;
const isNumeroPar = (numero % 2) === 0;
```

Por convenção, quando uma variável representa um valor booleano, seu nome é iniciado com "is". Além disso, também é considerado boa prática utilizar aspas simples para representar strings.

Uma estrutura condicional é um estrutura que avalia uma condição e executa diferentes tarefas baseada na validade da condição.

```js
const numero = 10;
const numeroPar = (numero % 2) === 0;

if (numeroPar) {
    console.log("O número é par!");
} else {
    console.log("O número é ímpar!");
}
```

---

## Referência

[Repositório de Referência do Módulo](https://github.com/digitalinnovationone/javascript-developer-m1)
