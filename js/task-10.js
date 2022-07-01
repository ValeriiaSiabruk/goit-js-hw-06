function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const createButton = document.querySelector("[data-create]");
const destroyButton = document.querySelector("[data-destroy]");
const amountInput = document.querySelector("#controls input");
const boxes = document.getElementById("boxes");
let createBoxesIndex = 0;

createButton.addEventListener("click", createHandler);
destroyButton.addEventListener("click", destroyBoxes);

function createHandler() {
  const amount = getAmount();
  createBoxes(amount);
}

function getAmount() {
  return +amountInput.value;
}

function createBoxes(amount) {
  const fragment = document.createDocumentFragment();

  for (let i = 0; i < amount; i++) {
    fragment.appendChild(createBox());
    createBoxesIndex++;
  }

  boxes.appendChild(fragment);
}

function createBox(basicSize = 30, stepSize = 10) {
  const size = basicSize + createBoxesIndex * stepSize;
  const div = document.createElement("div");
  div.style.cssText = `width: ${size}px; height: ${size}px; background-color: ${getRandomHexColor()}`;

  return div;
}

function destroyBoxes() {
  boxes.innerHTML = "";
  createBoxesIndex = 0;
}
