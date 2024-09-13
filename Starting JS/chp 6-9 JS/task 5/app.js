function generateTable() {
  var number = document.getElementById("numberInput").value;

  // Use default value if input is empty
  if (number === "") {
    number = 5;
  } else {
    number = parseInt(number);
  }

  var tableHTML = "<h3>Multiplication Table of " + number + "</h3>";
  for (var i = 1; i <= 10; i++) {
    tableHTML += "<p>" + number + " x " + i + " = " + number * i + "</p>";
  }

  document.getElementById("tableResult").innerHTML = tableHTML;
}

window.onload = generateTable;
