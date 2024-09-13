function performArithmetic() {
  var initialNumber = 7;
  var result = ((initialNumber + 5) * 10) / 2;

  document.getElementById("arithmeticResult").innerText =
    "The result of the arithmetic operations is: " + result.toFixed(2);
}

window.onload = performArithmetic;
