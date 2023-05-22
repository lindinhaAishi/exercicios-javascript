function verificarVariacao() {
    var precoAnterior = parseFloat(prompt("Informe o preço anterior do produto:"));
    var precoAtual = parseFloat(prompt("Informe o preço atual do produto:"));
  
    var diferenca = precoAtual - precoAnterior;
    var percentualVariacao = (diferenca / precoAnterior) * 100;
  
    if (diferenca > 0) {
      alert("Houve um aumento no valor do produto.");
      alert("A diferença total da variação foi de R$" + diferenca.toFixed(2));
      alert("O percentual de aumento foi de " + percentualVariacao.toFixed(2) + "%");
    } else if (diferenca < 0) {
      alert("Houve uma redução no valor do produto.");
      alert("A diferença total da variação foi de R$" + Math.abs(diferenca).toFixed(2));
      alert("O percentual de desconto foi de " + Math.abs(percentualVariacao).toFixed(2) + "%");
    } else {
      alert("O preço do produto permaneceu o mesmo.");
    }
  }