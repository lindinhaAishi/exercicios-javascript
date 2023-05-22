function converterTemperatura() {
    var temperaturaCelsius = prompt("Digite a temperatura em graus Celsius (˚C):");
  
    var temperaturaKelvin = parseFloat(temperaturaCelsius) + 273.15;
    var temperaturaFahrenheit = (parseFloat(temperaturaCelsius) * 9 / 5) + 32;
  
    var resultado = "Temperatura em Kelvin: " + temperaturaKelvin.toFixed(2) + " ˚K<br>";
    resultado += "Temperatura em Fahrenheit: " + temperaturaFahrenheit.toFixed(2) + " ˚F";
  
    document.getElementById("resultado").innerHTML = resultado;
  }