function obterInformacoes() {
    var nome = prompt("Digite seu nome:");
    var idade = prompt("Digite sua idade:");

    if (nome !== null && idade !== null) {
        alert("Acabei de conhecer " + nome + ", que tem " + idade + " anos de idade!");
    }
}