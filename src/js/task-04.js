const btnDecrement = document.querySelector('[data-action="decrement"]');
const btnIncrement = document.querySelector('[data-action="increment"]');
const result = document.querySelector("#value");
let counter = 0;

btnDecrement.addEventListener("click", () => {
  counter--;
  result.innerHTML = counter;
});

btnIncrement.addEventListener("click", () => {
  counter++;
  result.innerHTML = counter;
});
