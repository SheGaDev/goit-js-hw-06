const input = document.querySelector(`[data-length="6"]`);
input.addEventListener("blur", checkInput);
function checkInput(event) {
    if (Number(input.getAttribute("data-length")) === event.currentTarget.value.length) {
        input.classList.add("valid");
        input.classList.remove("invalid");
    } else {
        input.classList.add("invalid");
        input.classList.remove("valid");
    }
}