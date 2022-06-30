const items = document.querySelectorAll(".item");
console.log(`Number of categories: ${items.length}`);

items.forEach((item) => {
  const title = item.querySelector("h2");
  console.log(`Category: ${title.innerText}`);

  const liList = item.querySelectorAll("li");
  console.log(`Elements: ${liList.length}`);
});
