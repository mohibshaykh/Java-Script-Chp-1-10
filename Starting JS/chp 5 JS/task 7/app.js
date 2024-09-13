function displayReceipt() {
  // a. Price of item 1
  var priceItem1 = 700;

  // b. Price of item 2
  var priceItem2 = 850;

  // c. Ordered quantity of item 1
  var quantityItem1 = 2;

  // d. Ordered quantity of item 2
  var quantityItem2 = 3;

  // e. Shipping charges
  var shippingCharges = 100;

  // total cost
  var totalCostItem1 = priceItem1 * quantityItem1;
  var totalCostItem2 = priceItem2 * quantityItem2;
  var totalCost = totalCostItem1 + totalCostItem2 + shippingCharges;

  // receipt
  var receiptHTML = "<h3>Receipt</h3>";
  receiptHTML +=
    "<p>Item 1: Price = " +
    priceItem1 +
    " PKR, Quantity = " +
    quantityItem1 +
    ", Total = " +
    totalCostItem1 +
    " PKR</p>";
  receiptHTML +=
    "<p>Item 2: Price = " +
    priceItem2 +
    " PKR, Quantity = " +
    quantityItem2 +
    ", Total = " +
    totalCostItem2 +
    " PKR</p>";
  receiptHTML += "<p>Shipping Charges: " + shippingCharges + " PKR</p>";
  receiptHTML += "<h4>Total Cost: " + totalCost + " PKR</h4>";

  // Display the receipt
  document.getElementById("receipt").innerHTML = receiptHTML;
}

window.onload = displayReceipt;
