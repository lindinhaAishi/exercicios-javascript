function mostrarAntecessorESucessor() {
    var numero = parseInt(prompt("Digite um número inteiro:"));

    var antecessor = numero - 1;
    var sucessor = numero + 1;

    var mensagem = "O antecessor de " + numero + " é " + antecessor + " e o sucessor é " + sucessor + ".";

    document.getElementById("resultado").innerHTML = mensagem;
  }