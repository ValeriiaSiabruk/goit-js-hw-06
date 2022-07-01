function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const buttonElement = document.querySelector(".change-color");
const colorElement = document.querySelector(".color");

buttonElement.addEventListener("click", () => {
  const randomColor = getRandomHexColor();

  document.body.style.backgroundColor = randomColor;
  colorElement.textContent = randomColor;
});
