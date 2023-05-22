function calcularAumento() {
    var nome = prompt("Qual é o nome do funcionário?");
    var salarioAtual = parseFloat(prompt("Qual é o salário atual do funcionário?"));
    var porcentagemAumento = parseFloat(prompt("Qual é a porcentagem de aumento salarial?"));

    var aumento = salarioAtual * (porcentagemAumento / 100);
    var novoSalario = salarioAtual + aumento;
    var aumentoPorMes = aumento / 12;

    alert("O funcionário " + nome + " terá um aumento salarial de R$ " + aumento.toFixed(2) + ".");
    alert("O novo salário será de R$ " + novoSalario.toFixed(2) + ".");
    alert("O funcionário receberá R$ " + aumentoPorMes.toFixed(2) + " a mais por mês.");
  }