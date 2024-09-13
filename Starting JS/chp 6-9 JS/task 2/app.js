function displayArithmeticResults() {
  var a = 2,
    b = 1;
  var result = --a - --b + ++b + b--;
  var resultHTML = "<h3>Arithmetic Operations Results</h3>";
  resultHTML += "<p>The value of a is: " + a + "</p>";
  resultHTML += "<p>The value of b is: " + b + "</p>";
  resultHTML += "<p>The result is: " + result + "</p>";
  document.getElementById("arithmeticResult").innerHTML = resultHTML;
}

window.onload = displayArithmeticResults;

/*
    
    Pre-decrement a and b:
    --a makes a equal to 1
    --b makes b equal to 0
    
    Increment b:
    ++b makes b equal to 1
    
    Post-decrement b:
    b-- uses b's current value 1 and then decrements it to 0
    
    So, the calculation is as follows:
    Initial: a = 2, b = 1
    
    After --a: a = 1
    After --b: b = 0
    After ++b: b = 1
    After b--: b = 0 (used value 1)
    The result:
    
    result = 1 - 0 + 1 + 1 = 3
    
    */
