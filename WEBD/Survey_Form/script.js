document.getElementById("surveyForm").addEventListener("submit", function (event) {
  event.preventDefault();

  let nameField = document.getElementById("name");
  let ageField = document.getElementById("age");
  let errorText = document.getElementById("errorText");

  let name = nameField.value.trim();
  let age = ageField.value.trim();

  // Validate: Name must have English letters and spaces
  let Regex = /^[A-Za-z ]+$/;
  if (!name.match(Regex)) {
    nameField.classList.add("error");
    errorText.innerHTML = "Name should only contain English alphabets and spaces";
    errorText.className = "errorText";
    return;
  }

  // Validate: Age between 1 and 150
  if (isNaN(age) || age < 1 || age > 150) {
    ageField.classList.add("error");
    errorText.innerHTML = "Age should only contain valid values (1 - 150)";
    errorText.className = "errorText";
    return;
  }

  // Remove error styles if valid
  nameField.classList.remove("error");
  ageField.classList.remove("error");
  errorText.innerHTML = "Submitted Successfully";
  errorText.className = "successText";
  
  setTimeout(function() {
    document.getElementById("surveyForm").reset();
    errorText.innerHTML = "";
  }, 1800);
});
