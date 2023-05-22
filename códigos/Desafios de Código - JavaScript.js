// DESAFIO 1: TEMPO ESTIMADO DE ENTREGA

//Desafios JavaScript na DIO têm funções "gets" e "print" acessíveis globalmente:
//- "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
//- "print": imprime um texto de saída (output), pulando linha.

const nomeRestaurante = gets();
const tempoEstimadoEntrega = parseInt(gets());

//TODO: Imprimir a saída no padrão definido no enunciado deste desafio.
//Dica: Para simplificar a formatação, utilize o conceito de interpolação de strings.

print(`O restaurante ${nomeRestaurante} entrega em ${tempoEstimadoEntrega} minutos.`);

// DESAFIO 2: CALCULAR O PREÇO FINAL DE UM PRODUTO

//Desafios JavaScript na DIO têm funções "gets" e "print" acessíveis globalmente:
//- "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
//- "print": imprime um texto de saída (output), pulando linha.

const valorHamburguer = parseFloat(gets());
const quantidadeHamburguer = parseInt(gets());
const valorBebida = parseFloat(gets());
const quantidadeBebida = parseInt(gets());
const valorPago = parseFloat(gets());

//TODO: Calcular o preço final do pedido (total dos hambúrgueres + total das bebidas).
const valorFinal = valorHamburguer * quantidadeHamburguer + valorBebida * quantidadeBebida;

//TODO: Calcular o troco do pedido, considerando o preço final e o valor pago pelo usuário.
const troco = valorPago - valorFinal;

//TODO: Imprimir a saída no formato especificado neste desafio.
print(`O preço final do pedido é R$ ${valorFinal.toFixed(2)}. Seu troco é R$ ${troco.toFixed(2)}.`);

// DESAFIO 3: GANHE UMA SOBREMESA ESPECIAL!

//Desafios JavaScript na DIO têm funções "gets" e "print" acessíveis globalmente:
//- "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
//- "print": imprime um texto de saída (output), pulando linha.

const valorPedido = parseInt(gets());

//TODO: Criar as condições necessárias para impressão da saída conforme o enunciado.
if (valorPedido >= 50) {
    console.log('Parabens, você ganhou uma sobremesa gratis!');
} else {
    console.log('Que pena, você nao ganhou nenhum brinde especial.');
}

// DESAFIO 4: IDENTIFICANDO PEDIDOS VEGANOS

//Desafios JavaScript na DIO têm funções "gets" e "print" acessíveis globalmente:
//- "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
//- "print": imprime um texto de saída (output), pulando linha.

const numPedidos = parseInt(gets());

for (let i = 1; i <= numPedidos; i++) {
    const prato = gets();
    const calorias = parseInt(gets());
    //Explicação: atribui "true" se o valor lido via gets() for estritamente igual a 's'.
    //Referência: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Expressions_and_operators
    const ehVegano = gets().toLowerCase() === 's';

    //TODO: Tendo em vista a variável booleana "ehVegano", imprima a saída deste desafio.
    print(`Pedido ${i}: ${prato} (${ehVegano ? 'Vegano' : 'Nao-vegano'}) - ${calorias} calorias`);
}

// DESAFIO 5: GERENCIAMENTO DE PEDIDOS DE COMIDA ONLINE

//Desafios JavaScript na DIO têm funções "gets" e "print" acessíveis globalmente:
//- "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
//- "print": imprime um texto de saída (output), pulando linha.

function calcularValorTotal(n, pedidos, cupom) {
    let total = 0;
    for (let i = 0; i < n; i++) {
        //Explicação: Aplica o conceito de destructuring para atribuição do nome e valor.
        //Referência: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
        let [nome, valor] = pedidos[i].split(' ');
        valor = parseFloat(valor);
        total += valor;
    }

    //TODO: Criar as condições para aplicar o cupom de desconto (10% ou 20%).
    total *= 1 - cupom;

    return total.toFixed(2);
}

//Recupera os valores de entrada, criando um array para os pedidos:
const n = parseInt(gets());
const pedidos = [];
for (let i = 0; i < n; i++) {
    pedidos.push(gets());
}
const cupom = gets();

//TODO: Analisar e completar a função "calcularValorTotal", invocando-a para obtenção do total.
const valorTotal = calcularValorTotal(n, pedidos, cupom.slice(0, 2)/100);

//TODO: Imprimir o valor total obtido de acordo com o padrão solicitado neste desafio.
print(`Valor total: ${valorTotal}`);
