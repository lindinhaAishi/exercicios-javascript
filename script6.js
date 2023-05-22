function calcularDolares() {
    var quantidadeReais = prompt("Quantos R$ você tem na carteira?");
    
    if (quantidadeReais !== null) {
        quantidadeReais = parseFloat(quantidadeReais);
        
        var cotacaoDolar = 5.2;
        
        var quantidadeDolares = quantidadeReais / cotacaoDolar;
        
        alert("Com R$" + quantidadeReais + " você pode comprar US$" + quantidadeDolares.toFixed(2));
    }
}