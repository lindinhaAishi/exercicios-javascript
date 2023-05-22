function verificarAno() {
    var ano = parseInt(prompt("Digite o ano:"));

    var bissexto = false;

    if ((ano % 4 == 0 && ano % 100 != 0) || ano % 400 == 0) {
      bissexto = true;
    }

    var mensagem = "O ano " + ano + " " + (bissexto ? "é bissexto." : "não é bissexto.");

    document.getElementById("resultado").innerHTML = mensagem;
  }