function performOperations() {
  var number1 = 20;
  var number2 = 5;
  var subtraction = number1 - number2;
  var multiplication = number1 * number2;
  var division = number1 / number2;
  var modulus = number1 % number2;

  document.getElementById("subtraction").innerText =
    "The result of subtracting " +
    number2 +
    " from " +
    number1 +
    " is " +
    subtraction +
    ".";
  document.getElementById("multiplication").innerText =
    "The result of multiplying " +
    number1 +
    " and " +
    number2 +
    " is " +
    multiplication +
    ".";
  document.getElementById("division").innerText =
    "The result of dividing " +
    number1 +
    " by " +
    number2 +
    " is " +
    division +
    ".";
  document.getElementById("modulus").innerText =
    "The result of the modulus of " +
    number1 +
    " and " +
    number2 +
    " is " +
    modulus +
    ".";
}

window.onload = performOperations;
