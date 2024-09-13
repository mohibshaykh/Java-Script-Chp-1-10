function performMathOperations() {
  // a. Declare a variable
  var myNumber;

  // b. Show the value of variable in your browser
  document.getElementById("variableDeclaration").innerText =
    "Value after variable declaration is: " + myNumber;

  // c. Initialize the variable with some number
  myNumber = 5;

  // d. Show the initial value of the variable
  document.getElementById("initialValue").innerText =
    "Initial value: " + myNumber;

  // e. Increment the variable
  myNumber++;

  // f. Show the value after increment
  document.getElementById("afterIncrement").innerText =
    "Value after increment is: " + myNumber;

  // g. Add 7 to the variable
  myNumber += 7;

  // h. Show the value after addition
  document.getElementById("afterAddition").innerText =
    "Value after addition is: " + myNumber;

  // i. Decrement the variable
  myNumber--;

  // j. Show the value after decrement
  document.getElementById("afterDecrement").innerText =
    "Value after decrement is: " + myNumber;

  // k. Show the remainder after dividing the variable’s value by 3
  var remainder = myNumber % 3;

  // l. Output the remainder
  document.getElementById("remainder").innerText =
    "The remainder is: " + remainder;
}

window.onload = performMathOperations;
