function greetUser() {
  var name = document.getElementById("nameInput").value;

  var greetingMessage = "Hello, " + name + "! Welcome to our website.";

  document.getElementById("greetingMessage").innerText = greetingMessage;
}
