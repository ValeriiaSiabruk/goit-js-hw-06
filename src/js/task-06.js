const textInput = document.querySelector("#validation-input");
const inputValidLength = +textInput.getAttribute("data-length");

const validateInputLength = () => {
  const inputValueLength = textInput.value.trim().length;

  if (inputValueLength === inputValidLength) {
    textInput.classList.add("valid");
    textInput.classList.remove("invalid");
  } else {
    textInput.classList.add("invalid");
    textInput.classList.remove("valid");
  }
};

textInput.addEventListener("blur", validateInputLength);
