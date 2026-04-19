document.addEventListener("DOMContentLoaded", function () {
  const savedPhone = localStorage.getItem("phoneNumber");
  const phoneDisplay = document.getElementById("savedPhone");

  if (savedPhone) {
    phoneDisplay.textContent = savedPhone;
  } else {
    phoneDisplay.textContent = "Not Available";
  }
});

function logout() {
  localStorage.removeItem("isLoggedIn");
  localStorage.removeItem("phoneNumber");
  window.location.href = "index.html";
}
