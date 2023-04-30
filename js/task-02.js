const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
(() => {
  const arrEl = [];
  for (const ingredient of ingredients) {
    const element = document.createElement("li");
    element.textContent = ingredient;
    element.classList.add("item");
    arrEl.push(element)
  }
  document.querySelector("ul#ingredients").prepend(...arrEl);
})();