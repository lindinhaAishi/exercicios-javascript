function calcularDesconto() {
    var produto = prompt("Qual é o produto que está sendo comprado?");
    var preco = parseFloat(prompt("Qual é o preço do produto?"));
  
    var desconto = preco * 0.1;
    var precoComDesconto = preco - desconto;
  
    var resultado = "Produto: " + produto + "<br>";
    resultado += "Preço original: R$ " + preco.toFixed(2) + "<br>";
    resultado += "Desconto (10%): R$ " + desconto.toFixed(2) + "<br>";
    resultado += "Preço com desconto: R$ " + precoComDesconto.toFixed(2) + "<br>";
    resultado += "Você economizou: R$ " + desconto.toFixed(2);
  
    document.getElementById("resultado").innerHTML = resultado;
  }