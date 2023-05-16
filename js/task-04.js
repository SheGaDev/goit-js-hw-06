const btnDec = document.querySelector(`[data-action="decrement"]`),
    btnInc = document.querySelector(`[data-action="increment"]`),
    value = document.querySelector("#value");
function changeValue() {
    const current = +value.textContent;
    value.textContent = this.textContent === "+1" ?
        current + 1 : current - 1;
}
btnInc.addEventListener("click", changeValue);
btnDec.addEventListener("click", changeValue);