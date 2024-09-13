function convertTemperatures() {
  var celsius = 25;
  var fahrenheitFromCelsius = (celsius * 9) / 5 + 32;
  document.getElementById("celsiusToFahrenheit").innerText =
    celsius + "°C is " + fahrenheitFromCelsius.toFixed(2) + "°F";

  var fahrenheit = 77;
  var celsiusFromFahrenheit = ((fahrenheit - 32) * 5) / 9;
  document.getElementById("fahrenheitToCelsius").innerText =
    fahrenheit + "°F is " + celsiusFromFahrenheit.toFixed(2) + "°C";
}

window.onload = convertTemperatures;
