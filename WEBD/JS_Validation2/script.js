document.getElementById("contactForm").addEventListener("submit", function(event) {
      event.preventDefault();
      
      const email = document.getElementById("email").value.trim();
      const phone = document.getElementById("phone").value.trim();
      const message = document.getElementById("message");

      const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      const phonePattern = /^\d{10}$/;

      if (!emailPattern.test(email)) {
        message.textContent = "Please enter a valid email address (e.g., name@domain.com).";
        message.style.color = "red";
        return;
      }

      if (!phonePattern.test(phone)) {
        message.textContent = "Please enter a valid 10-digit phone number.";
        message.style.color = "red";
        return;
      }

      message.textContent = "Form submitted successfully!";
      message.style.color = "green";

      // Reset the form if needed
      this.reset();
    });