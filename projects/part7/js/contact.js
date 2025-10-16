document.getElementById("contact-form").onsubmit = (event) => {
    event.preventDefault();
  
    const form = event.currentTarget;
    const result = document.getElementById('contact-result');
  
    const formData = new FormData(form);
    const json = JSON.stringify(Object.fromEntries(formData));
  
    result.style.display = "";
    result.textContent = "Please wait...";
  
    fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body: json
    })
    .then(async (response) => {
      const data = await response.json();
      if (response.status === 200) {
        result.className = "success";
        result.textContent = "Email sent!";
      } else {
        result.className = "error";
        result.textContent = data.message || "Something went wrong.";
      }
    })
    .catch((err) => {
      console.log(err);
      result.className = "error";
      result.textContent = "Network error. Please try again.";
    })
    .then(() => {
      form.reset();
      setTimeout(() => { result.style.display = "none"; }, 3000);
    });
  };
  