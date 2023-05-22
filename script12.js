function calcularMedia() {
    var nome = prompt("Digite o nome do aluno:");
    var nota1 = parseFloat(prompt("Digite a primeira nota:"));
    var nota2 = parseFloat(prompt("Digite a segunda nota:"));

    var media = (nota1 + nota2) / 2;

    var status;
    if (media < 3) {
      status = "Reprovado";
    } else if (media >= 3 && media < 6) {
      status = "Recuperação";
    } else {
      status = "Aprovado";
    }

    alert("Nome do aluno: " + nome);
    alert("Média: " + media.toFixed(2));
    alert("Situação: " + status);
}