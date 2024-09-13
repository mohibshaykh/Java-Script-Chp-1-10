function displayMultiplicationTable() {
  var number = 7;
  var resultDiv = document.getElementById("multiplicationTable");
  resultDiv.innerHTML = "";

  var tableHTML = "<h2>Multiplication Table of " + number + "</h2><ul>";
  for (var i = 1; i <= 10; i++) {
    tableHTML += "<li>" + number + " x " + i + " = " + number * i + "</li>";
  }
  tableHTML += "</ul>";

  resultDiv.innerHTML = tableHTML;
}

window.onload = displayMultiplicationTable;
