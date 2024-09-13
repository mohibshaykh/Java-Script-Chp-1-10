function calculatePercentage() {
  var totalMarks = 500;
  var marksObtained = 400;
  var percentage = (marksObtained / totalMarks) * 100;

  var resultHTML = "<h3>Marks Sheet</h3>";
  resultHTML += "<p>Total Marks: " + totalMarks + "</p>";
  resultHTML += "<p>Marks Obtained: " + marksObtained + "</p>";
  resultHTML += "<p>Percentage Obtained: " + percentage.toFixed(2) + "%</p>";

  document.getElementById("percentageResult").innerHTML = resultHTML;
}

window.onload = calculatePercentage;
