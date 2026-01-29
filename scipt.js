// Simple login system
document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // Demo credentials (you can change these)
  const validUser = "teacher";
  const validPass = "class123";

  if (username === validUser && password === validPass) {
    document.getElementById("loginMessage").innerText = "Login successful!";
    document.getElementById("loginSection").style.display = "none";
    document.getElementById("projectInfo").style.display = "block";
  } else {
    document.getElementById("loginMessage").innerText = "Invalid username or password.";
  }
});