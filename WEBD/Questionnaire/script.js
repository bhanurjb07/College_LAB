const form = document.getElementById("surveyForm");
const msg = document.getElementById("msg");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  
  msg.textContent = "Thank you for submitting the survey!";


  form.reset();

  
  setTimeout(() => {
    msg.textContent = "";
  }, 3000);
});
