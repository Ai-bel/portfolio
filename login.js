document.getElementById("loginForm").addEventListener("submit", function (event) {
  event.preventDefault();

  const phoneInput = document.getElementById("phone").value.trim();
  const message = document.getElementById("message");

  const phonePattern = /^[0-9]{10}$/;

  if (!phonePattern.test(phoneInput)) {
    message.textContent = "Please enter a valid 10-digit phone number.";
    message.style.color = "#fca5a5";
    return;
  }

  localStorage.setItem("isLoggedIn", "true");
  localStorage.setItem("phoneNumber", phoneInput);

  message.textContent = "Login successful. Redirecting...";
  message.style.color = "#86efac";

  setTimeout(() => {
    window.location.href = "home.html";
  }, 1000);
});
