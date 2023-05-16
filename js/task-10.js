function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const btnCreate = document.querySelector("button[data-create]"),
  btnDestroy = document.querySelector("button[data-destroy]"),
  boxes = document.querySelector("#boxes"),
  input = document.querySelector("div>input");
btnCreate.addEventListener("click", createDiv);
btnDestroy.addEventListener("click", destroyDiv);
function createDiv() {
  const count = Number(input.value);
  if (count > Number(input.max) || count < Number(input.min)) return;
  boxes.innerHTML = "";
  const arrElDiv = [];
  for (let i = 0; i < count; i++) {
    const px = `${30 + (10 * i)}px`;
    const div = document.createElement("div");
    div.style.cssText = `width: ${px}; height: ${px}; background-color: ${getRandomHexColor()};`
    arrElDiv.push(div);
  }
  boxes.prepend(...arrElDiv);
}
function destroyDiv() {
  boxes.innerHTML = "";
}