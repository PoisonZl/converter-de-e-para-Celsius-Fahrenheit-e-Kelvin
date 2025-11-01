function converter() {
  const valor = parseFloat(document.getElementById('valor').value);
  const de = document.getElementById('de').value;
  const para = document.getElementById('para').value;
  const resultado = document.getElementById('resultado');

  if (isNaN(valor)) {
    resultado.textContent = "Digite um valor válido!";
    resultado.style.color = "red";
    return;
  }

  let tempC;

  // Converter tudo para Celsius primeiro
  if (de === "C") tempC = valor;
  else if (de === "F") tempC = (valor - 32) * 5/9;
  else if (de === "K") tempC = valor - 273.15;

  // Converter de Celsius para destino
  let convertido;
  if (para === "C") convertido = tempC;
  else if (para === "F") convertido = (tempC * 9/5) + 32;
  else if (para === "K") convertido = tempC + 273.15;

  resultado.style.color = "#023e8a";
  resultado.textContent = `${valor}°${de} = ${convertido.toFixed(2)}°${para}`;
}
