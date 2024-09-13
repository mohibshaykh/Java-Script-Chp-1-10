function addNumbers() {
  var number1 = 8;
  var number2 = 12;
  var sum = number1 + number2;

  document.getElementById("result").innerText =
    "The result of adding " + number1 + " and " + number2 + " is " + sum + ".";
}

window.onload = addNumbers;
