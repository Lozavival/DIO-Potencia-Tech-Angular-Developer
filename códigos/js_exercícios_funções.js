function aplicaDesconto(valor, desconto) {
    return (1 - desconto/100) * valor;
}

function aplicaJuros(valor, juros) {
    return (1 + juros/100) * valor;
}

function calculaPrecoAPagar(precoEtiqueta, condicaoPagamento) {
    if (condicaoPagamento === 1) {
        return aplicaDesconto(precoEtiqueta, 10);
    } else if (condicaoPagamento === 2) {
        return aplicaDesconto(precoEtiqueta, 15);
    } else if (condicaoPagamento === 3) {
        return precoEtiqueta;
    } else {
        return aplicaJuros(precoEtiqueta, 10);
    }
}

(function () {
    const precoEtiqueta = 59.99;
    const condicaoPagamento = 2;
    
    console.log(calculaPrecoAPagar(precoEtiqueta, condicaoPagamento).toFixed(2));
})();
