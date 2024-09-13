function calculateTicketCost() {
  var ticketPrice = 600;
  var numberOfTickets = 5;
  var totalCost = ticketPrice * numberOfTickets;

  document.getElementById("costResult").innerText =
    "The cost of buying " +
    numberOfTickets +
    " movie tickets is " +
    totalCost +
    " PKR.";
}

window.onload = calculateTicketCost;
