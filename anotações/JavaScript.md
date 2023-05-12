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

Em JavaScript, a convenção é escrever os nomes das variáveis no formato camelCase. 

Os operadores matemáticos básicos são os mesmos: `+` para soma, `-` para subtração, `*` para multiplicação e `/` para divisão.

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

Um tipo de variável muito usado na computação é o tipo *boolean*, que representa valores lógicos (verdadeiro ou falso).

```js
const ehNumeroPrimo = false;
const ehNumeroPar = true;
```

Uma estrutura condicional 

Os operadores de comparação também seguem os símbolos matemáticos correspondentes: `>`, `>=`, `<`, `<=`

---

## Referência

[Repositório de Referência do Módulo](https://github.com/digitalinnovationone/javascript-developer-m1)
