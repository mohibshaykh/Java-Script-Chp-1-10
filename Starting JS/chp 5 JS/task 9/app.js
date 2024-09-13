function convertToPKR() {
  // Exchange rates
  var usdToPKR = 104.8;
  var sarToPKR = 28;

  // Amounts in USD and SAR
  var usdAmount = 10;
  var sarAmount = 25;

  // Calculate total in PKR
  var totalPKR = usdAmount * usdToPKR + sarAmount * sarToPKR;

  document.getElementById("currencyResult").innerText =
    "Total amount in Pakistani Rupees: " + totalPKR.toFixed(2) + " PKR";
}

window.onload = convertToPKR;
