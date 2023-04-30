function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
(()=> {
  const bodyStyle = document.body.style;
  const btn = document.querySelector("button.change-color");
  btn.addEventListener("click", function changeColor(){
    const generatedColor = getRandomHexColor();
    bodyStyle.backgroundColor = generatedColor;
    document.querySelector("span.color").textContent = generatedColor;
  })
})();