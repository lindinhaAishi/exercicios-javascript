function converterDistancia() {
    var distanciaMetros = prompt("Digite a distância em metros (m):");

    if (distanciaMetros !== null) {
        distanciaMetros = parseFloat(distanciaMetros);

        var km = distanciaMetros / 1000;
        var hm = distanciaMetros / 100;
        var dam = distanciaMetros / 10;
        var dm = distanciaMetros * 10;
        var cm = distanciaMetros * 100;
        var mm = distanciaMetros * 1000;

        var resultadoElement = document.getElementById("resultado");
        resultadoElement.innerHTML = `
            <p>Kilômetro (Km): ${km} km</p>
            <p>Hectômetro (Hm): ${hm} hm</p>
            <p>Decâmetro (Dam): ${dam} dam</p>
            <p>Decímetro (dm): ${dm} dm</p>
            <p>Centímetro (cm): ${cm} cm</p>
            <p>Milímetro (mm): ${mm} mm</p>
        `;
    }
}