document.getElementById("regForm").addEventListener("submit", function(event) {
  event.preventDefault();
  const name = document.getElementById("name").value.trim();
  const password = document.getElementById("password").value;
  const msg = document.getElementById("msg");

  // Check name: only alphabets, at least 6 characters
  const nameValid = /^[A-Za-z]{6,}$/.test(name);

  if (!nameValid) {
    msg.textContent = "Name must contain only alphabets and be at least 6 characters.";
    msg.style.color = "red";
    return;
  }

  // Check password: at least 6 characters
  if (password.length < 6) {
    msg.textContent = "Password must be at least 6 characters.";
    msg.style.color = "red";
    return;
  }

  msg.textContent = "Registration successful!";
  msg.style.color = "green";
  this.reset();
});
