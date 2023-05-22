function calcularBhaskara() {
    var a = prompt("Digite o valor de a:");
    var b = prompt("Digite o valor de b:");
    var c = prompt("Digite o valor de c:");

    if (a !== null && b !== null && c !== null) {
        a = parseFloat(a);
        b = parseFloat(b);
        c = parseFloat(c);

        var delta = b * b - 4 * a * c;

        if (delta >= 0) {
            var x1 = (-b + Math.sqrt(delta)) / (2 * a);
            var x2 = (-b - Math.sqrt(delta)) / (2 * a);

            var resultElement = document.getElementById("result");
            resultElement.innerHTML = "Soluções: x1 = " + x1 + ", x2 = " + x2;
        } else {
            var resultElement = document.getElementById("result");
            resultElement.innerHTML = "Não existem soluções reais.";
        }
    }
}