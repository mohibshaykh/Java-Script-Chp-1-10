function displayArithmeticResults() {
  var a = 10;

  // Perform arithmetic operations
  var preIncrement = ++a;
  var postIncrement = a++;
  var preDecrement = --a;
  var postDecrement = a--;

  // Output the results
  var resultHTML = "<h3>Arithmetic Operations Results</h3>";
  resultHTML += "<p>The value of a is: 10</p>";
  resultHTML +=
    "<p>The value of ++a is: " +
    preIncrement +
    " Now the value of a is: " +
    preIncrement +
    "</p>";
  resultHTML +=
    "<p>The value of a++ is: " +
    postIncrement +
    " Now the value of a is: " +
    (postIncrement + 1) +
    "</p>";
  resultHTML +=
    "<p>The value of --a is: " +
    preDecrement +
    " Now the value of a is: " +
    preDecrement +
    "</p>";
  resultHTML +=
    "<p>The value of a-- is: " +
    postDecrement +
    " Now the value of a is: " +
    (postDecrement - 1) +
    "</p>";

  document.getElementById("arithmeticResult").innerHTML = resultHTML;
}

window.onload = displayArithmeticResults;
