const form = document.querySelector(".login-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const email = event.target.elements.email;
  const password = event.target.elements.password;

  if (email.value === "" || password.value === "") {
    alert("Error! All field must be filled");
    return;
  }

  console.log({ email: email.value, password: password.value });
  form.reset();
});
