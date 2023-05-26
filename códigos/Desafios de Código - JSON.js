// DESAFIO 1: DIO DELIVERY

//Desafios JavaScript na DIO têm funções "gets" e "print" acessíveis globalmente:
//- "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
//- "print": imprime um texto de saída (output), pulando linha.

//Aqui cria-se o objeto pedido com as informações do cliente, endereço, itens do pedido e taxa:
const pedidoMaisProximo = {
    cliente: gets(),
    endereco: gets(),
    itens: [],
    taxaEntrega: 5.0
};

// Para popular o array de itens, criamos a seguinte estrutura de repetição:
const quantidadeItens = parseInt(gets());
while (pedidoMaisProximo.itens.length < quantidadeItens) {
    const nomeItem = gets();
    const precoItem = parseFloat(gets());
    pedidoMaisProximo.itens.push({ nome: nomeItem, preco: precoItem });
}

//TODO: Percorra o array de itens do pedido e calcule o seu valor total.
let totalCalculado = pedidoMaisProximo.taxaEntrega;
pedidoMaisProximo.itens.forEach(item => {
    totalCalculado += item.preco;
});

//TODO: Imprima a saída no padrão descrito neste desafio.
print(`Pedido: ${pedidoMaisProximo.cliente}\nEndereco de entrega: ${pedidoMaisProximo.endereco}\nTotal: R$ ${totalCalculado.toFixed(2)}`);

// DESAFIO 2 - ACOMPANHANDO OS PEDIDOS

//Desafios JavaScript na DIO têm funções "gets" e "print" acessíveis globalmente:
//- "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
//- "print": imprime um texto de saída (output), pulando linha.

// Criando um objeto chamado "pedido" as seguintes propriedades:
const pedido = {
    cliente: {
        nome: gets(),       // Lê a primeira linha da "Entrada": Nome do Cliente.
        endereco: gets(),   // Lê a segunda linha da "Entrada": Endereço do Cliente.
    },
    id: parseInt(gets()), // Lê a terceira linha da "Entrada": ID do Pedido.
};

//TODO: Leia a quarta linha da "Entrada": Telefone do Cliente.
//TODO: Crie dinamicamente a propriedade "telefone" no objeto JSON "pedido.cliente".
pedidoMaisProximo.cliente.telefone = gets();

//TODO: Imprima a saída formatada de acordo com este desafio.
print(`Cliente: ${pedidoMaisProximo.cliente.nome}, ${pedidoMaisProximo.cliente.endereco}`);
print(`ID: ${pedidoMaisProximo.id}`);
print(`Tel: ${pedidoMaisProximo.cliente.telefone}`);

// DESAFIO 3

//Desafios JavaScript na DIO têm funções "gets" e "print" acessíveis globalmente:
//- "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
//- "print": imprime um texto de saída (output), pulando linha.

// JSON do Cliente 1
const cliente1 = { 
    nome: gets(), 
    item: gets(), 
    preco: parseFloat(gets())
};

// JSON do Cliente 2
const cliente2 = { 
    nome: gets(), 
    item: gets(), 
    preco: parseFloat(gets()) 
};

//TODO: Comparar os JSONs dos Clientes, verificando se todas as propriedades são iguais.
let iguais = true;
for (const dado in cliente1) {
    if (cliente1[dado] !== cliente2[dado]) {
        iguais = false;
        break;
    }
}

//TODO: Imprimir a saída conforme o enunciado deste desafio.
if (iguais) {
    print('Os pedidos são iguais')
} else {
    print('Os pedidos são diferentes')
}

// DESAFIO 4

//Desafios JavaScript na DIO têm funções "gets" e "print" acessíveis globalmente:
//- "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
//- "print": imprime um texto de saída (output), pulando linha.

const restaurantes = [
    {
        nome: gets(), 
        avaliacao: parseFloat(gets())
    },
    {
        nome: gets(), 
        avaliacao: parseFloat(gets())
    }
];

//TODO: Usando o array acima identifique o restaurante com a melhor avaliação.
//Dica: Explore o conceito de "reduce" em seu array, ele pode muito útil neste desafio.
//Referência: https://stackoverflow.com/a/34087850/3072570
const melhorAvaliado = restaurantes.reduce((ant, atual) => (ant.avaliacao >= atual.avaliacao) ? ant : atual);

//TODO: Imprima a saída de acordo com o enunciado deste desafio.
print(`Restaurante: ${melhorAvaliado.nome}, Avaliação: ${melhorAvaliado.avaliacao.toFixed(1)}`);

// DESAFIO 5

const pedidos = [
    { 
        nome: gets(), 
        tipo: gets(), 
        distancia: parseFloat(gets())
    },
    { 
        nome: gets(), 
        tipo: gets(), 
        distancia: parseFloat(gets())
    },
    { 
        nome: gets(), 
        tipo: gets(), 
        distancia: parseFloat(gets())
    }
];

//TODO: Usando o array acima identifique o pedido mais próximo (menor distância).
//Dica: Explore o conceito de "reduce" em seu array, ele pode muito útil neste desafio.
//Referência: https://stackoverflow.com/a/34087850/3072570
const pedidoMaisProximo = pedidos.reduce((ant, atual) => (ant.distancia < atual.distancia) ? ant : atual);

//TODO: Imprima a saída de acordo com o enunciado deste desafio.
print(`O pedido mais próximo é o de ${pedidoMaisProximo.nome}, do tipo ${pedidoMaisProximo.tipo}`);
