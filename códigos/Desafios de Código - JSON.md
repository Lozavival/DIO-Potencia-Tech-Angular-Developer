# Desafios de Código - Explorando JSON na Prática

## - Desafio 1: "DIO Delivery"

A empresa DIO Delivery precisa calcular o valor total de um pedido e imprimir na tela as seguintes informações: o nome do cliente, o endereço de entrega e o total do pedido, incluindo a taxa de entrega, fixa de R$ 5.00.

### Entrada 1

Entrada deverá receber os valores que preencherão o objeto JSON , ele deverá conter as seguintes propriedades:

- `cliente`: uma string com o nome do cliente.
- `endereco`: uma string com o endereço de entrega.
- `quantidade de itens`: indica a quantidade de itens que devem ser lidos no array a seguir.
- `itens`: um array de objetos que representam um item do pedido, com as seguintes propriedades:
    - nome (string)
    - preço (number)

**Importante:** a entrada deverá ocorrer de acordo com a ordem de informações fornecidas acima.

### Saída 1

Deverá retornar uma mensagem (string) que informa o nome do cliente, o endereço de entrega e o total do pedido, da seguinte maneira:

```js
Pedido: ${pedido.cliente}
Endereço de entrega: ${pedido.endereco}
Total: R$ ${totalCalculado}
```

### Exemplos 1

A tabela abaixo apresenta exemplos com alguns dados de entrada e suas respectivas saídas esperadas. Certifique-se de testar seu programa com esses exemplos e com outros casos possíveis.

<!-- Entrada 	Saída
João
Rua B, 456
2
Hambúrguer 
15
Batata frita
8 	Pedido: João
Endereco de entrega: Rua B, 456
Total: R$ 28.00
Carlos
Rua Dio, 123
2
Esfiha de Carne
5
Kibe
5 	Pedido: Carlos
Endereco de entrega: Rua Dio, 123
Total: R$ 15.00
Sirius
Av. C, 789
1
Pizza
25 	Pedido: Sirius
Endereco de entrega: Av. C, 789
Total: R$ 30.00 -->

## Desafio 2: "Acompanhando os Pedidos"

Imagine que você é um desenvolvedor de uma plataforma de entregas de comida que está trabalhando em um novo recurso que permitirá que os entregadores vejam informações sobre os clientes dos pedidos que devem entregar, incluindo o nome, endereço, ID e número de telefone da pessoa.

Sua tarefa é criar um programa em JavaScript que leia os dados de um pedido, que incluem (principalmente) as informações do Cliente. Com os dados de entrada em mãos, seu programa deve apresentá-los em uma tela (Saída) para os entregadores orquestrarem as entregas dos pedidos.

### Entrada 2

A entrada do programa será feita pelo usuário e terá as seguintes informações (propriedades):

- `nome`: o nome do cliente, representado por uma string;
- `endereco`: endereço do cliente, representado por uma string;
- `id`: identificador do pedido do cliente, representado por um valor numérico;
- `telefone`: telefone do cliente, representado por uma string;

**Importante:** a entrada deverá ocorrer de acordo com a ordem de informações fornecidas acima.

### Saída 2

Deverá retornar uma mensagem (string) que mostre as informações do cliente e do pedido na tela, veja exemplo abaixo:

```js
Cliente: ${pedido.cliente.nome}, ${pedido.cliente.endereco}
ID: ${pedido.id}
Tel: ${pedido.cliente.telefone}
```

### Exemplos 2

A tabela abaixo apresenta exemplos com alguns dados de entrada e suas respectivas saídas esperadas. Certifique-se de testar seu programa com esses exemplos e com outros casos possíveis.

<!-- Entrada            	Saída
Ana
Rua DIO, 5
12
1111-9999 	Cliente: Ana, Rua DIO, 5
ID: 12
Tel: 1111-9999
Renato
Rua ABC, 9
99
5555-0000 	Cliente: Renato, Rua ABC, 9
ID: 99
Tel: 5555-0000
Leo
Rua DIO, 12
92
1234-5678 	Cliente: Leo, Rua DIO, 12
ID: 92
Tel: 1234-5678 -->

## Desafio 3: "Comparando os Pedidos"

O objetivo desse desafio é criar um programa em JavaScript que compare dois objetos JSON de pedidos de entrega e determine se eles possuem ou não as mesmas informações. O programa deve criar dois objetos JSON contendo o nome do cliente, além do nome e preço de um item selecionado.

### Entrada 3

O programa receberá os dados necessários para criar dois Clientes com seu respectivo Item de Pedido para comparação:

- Cliente 1:
    - Nome (string): nome do primeiro cliente.
    - Nome do Item (string): nome do item de pedido selecionado para o primeiro cliente.
    - Preço do Item (number): preço do item de pedido selecionado para o primeiro cliente.
- Cliente 2:
    - Nome (string): nome do segundo cliente.
    - Nome do Item (string): nome do item de pedido selecionado para o segundo cliente.
    - Preço do Item (number): preço do item de pedido selecionado para o segundo cliente.

**Importante:** a entrada deverá ocorrer de acordo com a ordem de informações fornecidas acima.

### Saída 3

Se todos os dados dos clientes forem estritamente iguais, o programa deverá retornar a mensagem:\
`Os pedidos são iguais`

Caso contrário, o programa deverá retornar a mensagem:\
`Os pedidos são diferentes`

### Exemplos 3

A tabela abaixo apresenta exemplos com alguns dados de entrada e suas respectivas saídas esperadas. Certifique-se de testar seu programa com esses exemplos e com outros casos possíveis.

<!-- Entrada 	Saída
Renan
Massa
45.0
Bianca
Kibe
8.0 	Os pedidos são diferentes
Rafael
Pizza de calabresa
25.0
Rafael
Pizza de calabresa
25.0 	Os pedidos são iguais
Aline
Hambúrguer
15.0
Camila
Pizza
15.0 	Os pedidos são diferentes -->

## Desafio 4: "Avaliando Restaurantes"

Você é um desenvolvedor de um aplicativo de delivery de comida muito popular na sua cidade. O aplicativo permite que os usuários encontrem e peçam comida de seus restaurantes favoritos diretamente do conforto de suas casas.

Um dos seus colegas de trabalho, que é responsável pela integração de novos restaurantes ao aplicativo, pediu sua ajuda para criar um código que exiba o restaurante com a melhor avaliação em uma página web. Para isso, ele forneceu um array de objetos JSON contendo informações sobre dois restaurantes.

Você, como um excelente desenvolvedor, decide ajudar seu colega de trabalho com este desafio e começa a escrever o código necessário para exibir as informações na tela. Seu desafio é criar um código em JavaScript que percorra uma array de dois objetos JSON contendo informações sobre os restaurantes, exibindo o nome e a avaliação do restaurante com a melhor avaliação.

### Entrada 4

A entrada do seu código será os valores (nome e avaliação) dos seus objetos JSON, contendo informações necessárias sobre cada restaurante. Cada objeto terá as seguintes propriedades:

- `nome`: o nome do restaurante, representado por uma string;
- `avaliacao`: a avaliação média do restaurante, representado por um número de 0 a 5.

### Saída 4

A saída do seu código será o nome e a avaliação do restaurante melhor avaliado. Lembre-se de formatar a avaliação com 1 casa decimal após a virgula, conform o exemplo a seguir:\
`Restaurante: ${restaurante.nome}, Avaliação: ${restaurante.avaliacao}`

Caso eles tenham a mesma avaliação, imprima o primeiro a ser lido na Entrada.

### Exemplos 4

A tabela abaixo apresenta exemplos com alguns dados de entrada e suas respectivas saídas esperadas. Certifique-se de testar seu programa com esses exemplos e com outros casos possíveis.

<!-- Entrada 	Saída
DIO
5.0
Feijuca
4.5 	Restaurante: DIO, Avaliação: 5.0
Bar do Zé  
3.5
Pizza Boa
4.2 	Restaurante: Pizza Boa, Avaliação: 4.2
Pizza Mania
4.0
Sabor Oriental
4.0 	Restaurante: Pizza Mania, Avaliação: 4.0 -->

## Desafio 5: "Encontrando o Pedido Mais Próximo"

Um restaurante está buscando otimizar a entrega dos pedidos, e para isso precisa de um programa que encontre o pedido mais próximo a partir de uma lista de pedidos. O programa deve exibir o nome e o tipo de comida do pedido mais próximo.

Seu desafio é criar um código em JavaScript que manipule um array com três objetos JSON, contendo as informações de cada pedido (nome, tipo e distância).

### Entrada 5

 A entrada consiste em uma lista com 3 pedidos, os quais terão as seguintes propriedades:

- `nome`: o nome do cliente, representado por uma string;
- `tipo`: o tipo de comida do restaurante, representado por uma string.
- `distancia`: a distância em quilômetros do pedido até o restaurante, representado por um valor de 0 a 15.

### Saída 5

O programa deve exibir no console um texto contendo o nome do cliente e o tipo do pedido mais próximo encontrado na lista de pedidos. Conforme o exemplo abaixo:\
`O pedido mais próximo é o de ${pedido.nome}, do tipo ${pedido.tipo}`

### Exemplos 5

A tabela abaixo apresenta exemplos com alguns dados de entrada e suas respectivas saídas esperadas. Certifique-se de testar seu programa com esses exemplos e com outros casos possíveis.

<!-- Entrada 	Saída
Rafael
Massa
3.5
Julia
Árabe
4.2
Carla
Hambúrguer
2.0 	O pedido mais próximo é o de Carla, do tipo Hambúrguer
João
Pizza
2.5
Pedro
Comida Japonesa
3.2
Ana
Sorvete
2.0 	O pedido mais próximo é o de Ana, do tipo Sorvete
Renan
Risoto
2.8
Fernanda
Bolo
1.2
Arthur
Esfiha
4.9 	O pedido mais próximo é o de Fernanda, do tipo Bolo -->