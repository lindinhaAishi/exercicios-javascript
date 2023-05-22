function calcularTroco() {
    var nomeProduto = prompt("Digite o nome do produto:");
    var preco = parseFloat(prompt("Digite o preço do produto:"));
    var valorPago = parseFloat(prompt("Digite o valor pago pelo cliente:"));

    var troco = valorPago - preco;

    alert("Produto: " + nomeProduto);
    alert("Troco: R$ " + troco.toFixed(2));
  }