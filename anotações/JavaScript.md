# Primeiras Páginas Interativas com JavaScript

Descrição

---

## Tabela de Conteúdos

- [Introdução ao JavaScript](#introdução-ao-javascript)
    - [Primeiros Passos](#primeiros-passos)
        - [Variáveis e Operadores](#variáveis-e-operadores)
        - [Estruturas Condicionais](#estruturas-condicionais)
    - [Funções](#funções)
    - [Objetos e Classes](#objetos-e-classes)
        - [Objetos](#objetos)
        - [Classes](#classes)
    - [Arrays e Estruturas de Repetição](#arrays-e-estruturas-de-repetição)
        - [Método "Map"](#método-map)
    - [Importação e Exportação](#importação-e-exportação)
- [Introdução ao Desenvolvimento Web com JavaScript](#introdução-ao-desenvolvimento-web-com-javascript)
    - [Introdução](#introdução)
        - [Configuração do Ambiente](#configuração-do-ambiente)
        - [Introdução ao HTML e CSS](#introdução-ao-html-e-css)
    - [Criando um Projeto com HTML/CSS](#criando-um-projeto-com-htmlcss)
        - [Configurações Gerais](#configurações-gerais)
        - [Estilização da Listagem](#estilização-da-listagem)
        - [Entendendo o Funcionamento do Protocolo HTTP](#entendendo-o-funcionamento-do-protocolo-http)
        - [Enviando e Processando Requests](#enviando-e-processando-requests)
        - [Manipulando HTML pelo JavaScript](#manipulando-html-pelo-javascript)
        - [Manipulando Múltiplas Requisições em Paralelo](#manipulando-múltiplas-requisições-em-paralelo)
- [Referências](#referências)

---

## Introdução ao JavaScript

### Primeiros Passos

Para imprimir no terminal, chamamos a função `console.log()`:

```js
console.log("Hello World!")
```

#### Variáveis e Operadores

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

#### Estruturas Condicionais

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
Estruturas condicionais permitem que um programa execute diferentes comandos de acordo com as condições estabelecidas.

```js
const numero = 10;
const numeroPar = (numero % 2) === 0;

if (numeroPar) {
    console.log("O número é par!");
} else {
    console.log("O número é ímpar!");
}
```

Uma prática comum, ao resolver problemas, é substituir algo mais legível por humanos para uma abstração (principalmente ao usarmos enumerate ou salvarmos algo em um banco de dados).

### Funções

Funções são blocos de código cuja execução pode ser invocada a qualquer momento. Declaramos funções de acordo com a seguinte estrutura: `function nomeDaFunção(parâmetros) {código}`, e invocamos uma função simplesmente escrevendo seu nome e passando seus parâmetros entre parênteses:

```js
function foo() {
    console.log('Função!!');
}

foo();
```

Para retornarmos um valor calculado dentro de uma função, utilizamos a palavra-chave `return`:

```js
function incrementarJuros(valor, percentualJuros) {
    const valorDeAcrescimo = (percentualJuros / 100) * valor;
    return valor + valorDeAcrescimo;
}

console.log(incrementarJuros(60, 15));
```

Além de permitir a replicação de código, funções são utilizadas para organizar nosso código. Dessa forma, é uma boa prática que o código principal do programa esteja dentro de uma função chamada `main` e que sejam declaradas funções auxiliares a serem chamadas dentro da `main` ou de outras funções auxiliares.

```js
function aux1() {
    // código da função auxiliar
} 

function aux2() {
    // código da outra função auxiliar
}

...

function main() {
    // código principal do programa
}

main();
```

Por exemplo, voltando ao segundo desafio do tópico anterior, podemos refatorar nosso código para que ele utilize funções:

```js
function calculaImc(peso, altura) {
    return peso / Math.pow(altura, 2);
}

function classificaImc(imc) {
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

function main() {
    const peso = 48;
    const altura = 1.64;

    const imc = calculaImc(peso, altura);
    console.log(classificaImc(imc));
}

main();
```

Funções, em JavaScript, são representadas como qualquer outro objeto. Assim, podemos por exemplo, armazenar funções em variáveis, passar funções como parâmetros de outras funções, atribuir novos comportamentos a uma função existente, entre outros.

```js
function main() {
    console.log('Hello World!');
}

const main2 = main;   // atribuímos a função main à variável main2

main2();   // será executada a função main
```

```js
function main() {
    console.log('Hello World!');
}

main = function () {   // é reatribuída outra função à main
    console.log(42);
}

main();   // será impresso o valor 42
```

Utilizando o fato de funções serem objetos, podemos também criar funções anônimas, que são executadas apenas uma vez e possuem escopo isolado do resto do código:

```js
// Main
(function () {
    const peso = 48;
    const altura = 1.64;

    const imc = calculaImc(peso, altura);
    console.log(classificaImc(imc));
})();
```

Isso é muito utilizado para declarar a função main (a função é criada dentro dos parênteses e executada logo em seguida).

### Objetos e Classes

#### Objetos

Um objeto é uma coleção de dados, ou seja, ele agrupa valores por meio de pares chave-valor. A forma mais fácil de atribuir um objeto a uma variável é criando um objeto literal:

```js
const pessoa = {
    nome: 'Vitor',
    idade: 25
};
```

Para acessar um campo específico de um objeto, utilizamos a notação `objeto.chave`. Por exemplo:

```js
console.log(obj.nome);
```

Após definirmos um objeto, podemos incrementá-lo dinamicamente, ou seja, adicionar mais campos ao longo da execução do código. A forma mais fácil é por meio da notação anterior:

```js
pessoa.altura = 1.69;
```

Para deletar um campo, utilizamos a palavra chave `delete` seguida do campo que desejamos excluir:

```js
delete pessoa.idade;
```

Podemos também definir funções dentro de objetos. Essas funções são chamadas de **métodos**:

```js
const pessoa = {
    nome: 'Vitor',
    idade: 25,
    altura: 1.69,

    descrever: function () {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}.`);
    }
};

pessoa.descrever();
```

Note que, no parâmetro da função `console.log()`, foram utilizados acentos graves (`` ` ``) em vez de aspas simples (`'`). Isso faz com que a string seja entendida como um *template literal*, possibilitando a inserção da estrutura `${}` para substituir expressões dentro da string.

Além disso, a palavra reservada `this`, que diz respeito ao contexto no qual a função está sendo executada (no caso, o objeto `pessoa`), foi utilizada para acessar campos do objeto dentro da chamada do método.

Outra forma de acessar atributos de objetos de forma mais dinâmica é armazenar o nome do atributo em uma variável e utilizar a sintaxe `objeto['atributo']`:

```js
const atributo = 'idade';
console.log(pessoa[atributo]);
```

Isso permite, por exemplo, que possamos acessar determinado atributo de um objeto sem saber o nome de tal atributo (podemos receber como variável de algum outro lugar).

A notação acima também pode ser utilizada para atribuir um novo valor ao campo.

Para armazenarmos o valor de um ou mais campos de um objeto em uma variável, podemos também utilizar o processo de desestruturação:

```js
const pessoa = {
    nome: 'Vitor',
    idade: 25,
    altura: 1.69
}

const { nome } = pessoa;
// const nome = pessoa.nome;
const { idade, altura } = pessoa;
// const idade = pessoa.idade;
// const pessoa = pessoa.altura;
```

#### Classes

Uma classe é uma forma de dinamizar a criação de objetos, ou seja, de criar um modelo a partir do qual vários objetos podem ser criados sem repetição de código. Isso permite que possamos criar diferentes *instâncias* (objetos) a partir de uma mesma *definição* (classe).

```js
class Pessoa {
    nome;
    idade;
    anoNascimento;

    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
        this.anoNascimento = 2023 - idade;
    }

    descrever() {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}.`);
    }
}

const vitor = new Pessoa("Vitor", 25);
```

Construtor = obrigatório;

```js
function comparaPessoas(p1, p2) {
    if (p1.idade > p2.idade) {
        console.log(`${p1.nome} é mais velho(a) que ${p2.nome}`);
    } else if (p2.idade > p1.idade) {
        console.log(`${p2.nome} é mais velho(a) que ${p1.nome}`);
    } else {
        console.log(`${p1.nome} e ${p2.nome} têm a mesma idade`);
    }
}

const vitor = new Pessoa('Vitor', 25);
const renan = new Pessoa('Renan', 30);

comparaPessoas(vitor, renan);
```

### Arrays e Estruturas de Repetição

Arrays são listas que podem ser utilizadas para armazenar, em uma única variável, vários objetos (não necessariamente do mesmo tipo). Eles são representados entre colchetes (`[]`) e, para acessar um objeto dessa lista, utilizamos a notação de indexação (começando em zero).

```js
const alunos = ['João', 'Vitor', 'Marina'];
const joao = alunos[0];
```

Para adicionar um item em um array, podemos utilizar o método `push` ou indexar diretamente pela posição em que ele será armazenado (não recomendado):

```js
alunos.push('Renan');
alunos[4] = 'Vinicius';
```

O método `pop` remove o último elemento da lista e o retorna. O método `shift` realiza uma operação similar, porém com o primeiro elemento.

```js
const primeiro = alunos.shift()
const ultimo = alunos.pop()
```

Para sabermos o tamanho de uma lista, utilizamos o método `length`.

Estruturas de repetição são úteis para percorrermos uma lista dinamicamente, sem precisarmos saber seu tamanho previamente ao escrevermos o código. Para percorrer um número determinado de elementos ou executar uma ação um número determinado de vezes, utilizamos um laço `for`, composto de três partes:

- declaração da variável de controle (tradicionalmente, utilizamos uma variável `i` iniciada em 0 - índice inicial de arrays);
- expressão condicional (valor booleano que define a condição de parada do laço);
- alteração da variável de controle (executado ao final de cada iteração, atualiza o valor da variável de controle - por exemplo, incrementa-a em 1 unidade - para que haja uma nova avaliação da expressão condicional).

```js
for (let i = 0; i < 10; i++) {
    console.log(i);
}   // imprime os valores de 0 a 9
```

**Observação:** strings nada mais são que arrays de caracteres, logo, podemos indexá-las da mesma forma que listas (por exemplo, `string[2]` retorna o terceiro caractere da string).

Por exemplo, para calcular a média de uma lista de notas, podemos utilizar o seguinte código:

```js
const notas = [5, 7, 8, 2, 5, 8];

let soma = 0;
for (let i = 0; i < notas.length; i++) {
    const nota = notas[i];
    soma += nota;
}
const media = soma / notas.length;
```

#### Método "Map"

O método `map()` é uma forma de simplificar o processo de iteração sobre arrays. Ele recebe como parâmetro uma função e aplica essa função a todos os elementos do array, retornando um novo array com os elementos modificados.

Por exemplo, para elevar ao quadrado todos os números de uma lista, os dois trechos de código a seguir produzem o mesmo resultado:

```js
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const quadrados = [];
for (let i = 0; i < numeros.length; i++) {
    const num = numeros[i];
    quadrados.push(num * num);
}
```

```js
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const quadrados = numeros.map((num) => num * num);
```

Caso o processamento de cada elemento seja mais complexo que uma simples multiplicação, podemos separar o código em uma função própria e apenas passar a nossa função para o método `map()`:

```js
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function elevaAoQuadrado(num) {
    return num * num;
}

const quadrados = numeros.map(elevaAoQuadrado);
```

### Importação e Exportação

Uma das formas de organizar um projeto e dividir as responsabilidades dos códigos é separar trechos de código com diferentes funções em arquivos separados e importar essas arquivos em outros para utilizar o código contido.

A forma mais simples de se fazer isso no Node.js é , no arquivo em que as funções foram declaradas (por exemplo, `aux.js`), exportá-las por meio do comando `module.export = { func1, func2, ..., funcN }` e, no arquivo onde elas serão usadas (digamos, `main.js`), importá-las por meio da função `require`:

```js
<aux.js>
const entradas = [10, 5, 50, 10, 98, 23, 33, 44, 100, 1, 7];
let i = 0;

function gets() {
    const valor = entradas[i];
    i++;
    return valor;
}

function print(texto) {
    console.log(texto);
}

module.exports = { gets, print };
```

```js
<main.js>
const { gets, print } = require('./funcoes-auxiliares');

const quantidadeDeAlunos = gets();
let maiorValorEncontrado = 0;

for (let i = 0; i < quantidadeDeAlunos; i++) {
    const numeroSorteado = gets();
    if (numeroSorteado > maiorValorEncontrado) {
        maiorValorEncontrado = numeroSorteado;
    }
}

print(maiorValorEncontrado);
```

## Introdução ao Desenvolvimento Web com JavaScript

### Introdução

#### Configuração do Ambiente

Após instalar o Node.js no computador, é necessário apenas instalar uma biblioteca utilizando o npm:

```bash
npm install -g http-server
```

Essa biblioteca servirá para simularmos um servidor http no nosso computador. Para isso, devemos executar nossa aplicação por meio do comando `http-server ./`.

#### Introdução ao HTML e CSS

HTML monta a estrutura do site (títulos, parágrafos, seções etc.), CSS define o estilo do site (ou seja, faz as alterações visuais nos elementos definidos no HTML) e JavaScript adiciona comportamento dinâmico (responsividade) ao site.

A forma mais básica de escrever o CSS e o JavaScript de uma página web é, no documento HTML, utilizar as tags `style` (ao final do `head`) e `script` (ao final do `body`), respectivamente. Abaixo segue o exemplo de um site simples com um botão:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exemplo</title>

    <style>  /* define o CSS */
        h1 {
            color: red;
        }
    </style>
</head>
<body>
    <h1>Exemplo</h1>
    <p>Esta página é um exemplo básico de como usar HTML, CSS e JvaScript para desenvolvimento web.</p>
    <button id="btnTeste" type="button">
        Teste
    </button>

    <script>   /* define o JavaScript */
        const btnTeste = document.getElementById("btnTeste");
        btnTeste.addEventListener("click", () => {
            console.log('Clicou no botão!');
        });
    </script>
</body>
</html>
```

### Criando um Projeto com HTML/CSS

#### Configurações Gerais

Um problema que pode acontecer no desenvolvimento web é que diferentes browsers possuem diferentes estilos padrão definidos (consequentemente, as modificações que fizermos em CSS podem não aplicar o mesmo resultado em dois browsers distintos). Por esse motivo, é importante adicionar um *normalize* ao nosso projeto, de forma que, independentemente do browser utilizado, o site será construído sobre o mesmo estilo base.

Para incluir um *normalize css* ao nosso projeto devemos, no `head` dos nossos arquivos HTML, adicionar a seguinte tag:

```html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"
    integrity="sha512-NhSC1YmyruXifcj/KFRWoC561YpHpc5Jtzgvbuzx5VozKpWvQ+4nXhPdFgmx8xqexRcpAglTj9sIBWINXa8x5w=="
    crossorigin="anonymous" referrerpolicy="no-referrer" />
```

Além disso, uma boa prática para organizar os arquivos do projeto é criar uma pasta `assets` para armazenar arquivos CSS, JavaScript e imagens presentes no site e, dentro da pasta `assets`, criar subdiretórios para os três tipos de arquivo mencionado acima, ou seja, `assets/css`, `assets/js` e `assets/img`.

Dentro da pasta `assets/css`, criamos um arquivo `global.css` para armazenar estilos globais do nosso site (ou seja, presentes em todas as páginas) e, similarmente, criamos um arquivo `main.js` na pasta `assets/js` para scripts de caráter principal no nosso site.\
Para aplicar os estilos globais à uma página específica, devemos, no cabeçalho do nosso arquivo HTML, incluir a tag `<link rel="stylesheet" href="/assets/css/global.css">`. Para incluir os scripts principais, devemos utilizar a tag `<script src="/assets/js/main.js"></script>`.

Por fim, para adicionar um fonte personalizada às nossas páginas, podemos buscar a fonte desejada no site do [Google Fonts](https://fonts.google.com/) e copiar a tag correspondente no cabeçalho do nosso arquivo HTML. Por exemplo, para adicionarmos as fontes Roboto 100, Roboto 300 e Roboto 700 à pagina, utilizamos  a seguinte tag:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;700&display=swap" rel="stylesheet">
```

#### Estilização da Listagem

Uma técnica de desenvolvimento web é o chamado *mobile first*, ou seja, desenvolver o estilo CSS pensando em mobile e, posteriormente, incrementar para desktop. Essa técnica é considerada uma boa prática porque, procedendo dessa forma, a quantidade de reescrita de código é muito menor do que se fizéssemos ao contrário (primeiro desktop e depois adaptar para mobile).

#### Entendendo o Funcionamento do Protocolo HTTP

O protocolo HTTP é um protocolo cliente-servidor, ou seja, sempre há um cliente fazendo requisições e um servidor processando as requisições dos clientes e devolvendo uma resposta.

Uma requisição é composta por diferentes partes:

- **URL Path:** IP (domínio) / Path (caminho de identificação do recurso)
    - Por exemplo: `https://pokeapi.co/api/v2/pokemon`.
        - IP: "<https://pokeapi.co>"
        - Path: "/api/v2/pokemon"
        - "Do servidor <https://pokeapi.co>, desejo a API na versão 2 e, dessa API versão 2, quero o recurso 'pokemon' ".
- **Request Method:** tipo da solicitação (GET, POST, PUT, DELETE etc). O método da requisição diz ao servidor o que queremos fazer com o recurso (ler, adicionar, atualizar, deletar etc).
- **Áreas de Transferência de Dados:** ao realizarmos uma requisição, precisamos enviar dados ao servidor para que ele reconheça o que deve fazer.
    - **Path Params:**  uma área de transferência de dados, já vista anteriormente, é o Path do URL, no qual podemos, por exemplo, escolher dinamicamente um Pokémon por meio de seu id para acessar informações detalhadas sobre ele: `https://pokeapi.co/api/v2/pokemon/${id}`.
    - **Query String:** a outra área de transferência de dados que temos é a query string, ou seja, a descrição da consulta, que também é incluída na URL da consulta (logo após os recursos). Ela sempre é iniciada por um ponto de interrogação (`?`) e é representada como um conjunto de pares chave-valor; para concatenar pares, utilizamos o símbolo `&`. Por exemplo, podemos passar o parâmetro `v` ao fazermos uma requisição ao servidor do YouTube para informarmos qual vídeo queremos assistir: `https://www.youtube.com/watch?v=dQw4w9WgXcQ`.
    - **Headers:** dentro da requisição, existem ainda duas áreas de transferência de dados: os *response headers* e os *request headers*. Esses cabeçalhos, geralmente, são metadados da nossa requisição, ou seja, as configurações da requisição enviada e da resposta recebida. Geralmente, um dos itens mais importantes no request header são as credenciais de autenticação, dentro do item `Authorization`.
    - **Body:** dependendo do método de requisição utilizado, temos também a área de *body*, ou seja, o "corpo" da requisição (os dados que queremos trafegar). Por exemplo, requisições do tipo GET não têm corpo, porque ele funciona apenas com o path e os headers, porém o POST precisa, além dessas informações, dos dados que serão enviados ao servidor. Uma forma comum de se fazer isso é incluir no request header o item `content-type: application/json` e, como body, enviar um JSON com os dados.

Em resumo, uma requisição terá um URL, um Request Method, um Request Header e, possivelmente, um Request Body, enquanto uma resposta terá um Status Code (um número que indica o que aconteceu com a requisição - por exemplo, 2XX = sucesso, 3XX = redirect, 4XX = erro por parte do cliente e 5XX = erro por parte do servidor), um Response Header e, possivelmente um Response Body (no caso de um GET, geralmente um JSON com as informações requisitadas).

#### Enviando e Processando Requests

Para fazermos uma requisição em JavaScript, utilizamos o método `fetch()` e passamos como parâmetro a URL. O método `fetch()` retorna uma Promise, ou seja, uma "promessa de resposta" (devido ao tempo necessário para retornar a resposta).

Para tratar essa Promise, utilizamos o método `then()`, passando como parâmetro uma função que recebe o parâmetro `response` e descreve como tratar o resultado a promessa (quando ele for recebido). Para manipular um fracasso, caso ele ocorra, utilizamos o método `catch()` e, caso desejemos executar alguma ação independentemente de sucesso ou fracasso, utilizamos o método `finally()` (de forma muito similar a um bloco `try-catch`).

```js
const url = 'https://pokeapi.co/api/v2/pokemon?limit=10'

fetch(url)
    .then(function (response) {
        console.log(response)
    })
    .catch(function (error) {
        console.error(error)
    })
    .finally(function () {
        console.log('Requisição concluída!')
    })
```

Para transformarmos nossa response em um JSON, utilizamos o método `response.json()` e, para extrair os resultados JSON, acessamos o item `results`. Podemos executar essa sequência de ações em um encadeamento de `then()`, em que cada `then()` recebe o retorno do anterior como parâmetro, como no exemplo abaixo:

```js
fetch(url)
    .then(function (response) {
        return response.json()
    })
    .then(function (jsonBody) {
        return jsonBody.results
    })
    .then(function (results) {
        console.log(results)
    })
```

Note, porém, que podemos utilizar "arrow functions", substituindo a declaração das funções pela seguinte sintaxe: `(parâmetros) => {código}`. Ademais, caso a função tenha apenas uma linha de código, podemos omitir o corpo da função e o valor resultante do processamento é retornado automaticamente. Dessa forma, o código anterior pode ser reescrito da seguinte forma:

```js
fetch(url)
    .then((response) => response.json())
    .then((jsonBody) => jsonBody.results)
    .then((results) => console.log(results))
```

#### Manipulando HTML pelo JavaScript

Para acessar um elemento do HTML no código JavaScript (e armazená-lo em uma variável, por exemplo), utilizamos o método `document.getElementById()`. Para adicionar manipular dinamicamente esse elemento e adicionar filhos a ele, concatenamos a mudança desejada com seu atributo `innerHTML`, como no exemplo abaixo:

```js
const myList = document.getElementById('myList')
myList.innerHTML += '<p>Esse parágrafo foi adicionado pelo JavaScript!!!</p>'
```

Para remover um elemento do HTML, utilizamos o seguinte comando (supondo que `elemento` seja uma variável que armazena o elemento que desejamos remover):

```js
element.parent.removeChild(element)
```

#### Manipulando Múltiplas Requisições em Paralelo

Quando precisamos fazer várias ao mesmo tempo (por exemplo, requisitar informações detalhadas de cada elemento de uma lista), utilizamos o método `Promise.all()`, que recebe um array de *promises* e cujo método `then()` só será executado quando todas as promessas terminarem (com os resultados de todas):

```js
Promise.all([
    fetch('https://pokeapi.co/api/v2/pokemon/1').then((response) => response.json()),
    fetch('https://pokeapi.co/api/v2/pokemon/2').then((response) => response.json()),
    fetch('https://pokeapi.co/api/v2/pokemon/3').then((response) => response.json()),
    fetch('https://pokeapi.co/api/v2/pokemon/4').then((response) => response.json())
]).then((results) => console.log(results))
```

Fazendo um exemplo mais complexo:

```js
function getPokemonDetail(pokemon) {
    return fetch(pokemon.url).then((response) => response.json())
}

function getPokemon() {
    const url = 'https://pokeapi.co/api/v2/pokemon';
    return fetch(url)
        .then((response) => response.json())
        .then((jsonBody) => jsonBody.results)
        .then((pokemonList) => pokemonList.map(getPokemonDetail))
        .then((detailRequest) => Promise.all(detailRequest))
        .then((pokemonDetails) => pokemonDetails)
}

getPokemon().then((pokemon) => console.log(pokemon)
```

---

## Referências

[Repositório de Referência do Módulo "Introdução ao JavaScript"](https://github.com/digitalinnovationone/javascript-developer-m1)

[Projeto Desenvolvido ao longo do Módulo "Introdução ao Desenvolvimento Web com JavaScript"](https://github.com/digitalinnovationone/js-developer-pokedex)
