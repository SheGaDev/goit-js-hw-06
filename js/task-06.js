(() => {
    const input = document.querySelector(`[data-length="6"]`);
    let currentLength = 0;
    input.addEventListener("input", changeInput)
    input.addEventListener("blur", checkInput);
    function changeInput(event) {
        currentLength = event.currentTarget.value.length;
    }
    function checkInput() {
        if (currentLength === 6) {
            input.classList.add("valid");
            input.classList.toggle("invalid");
        } else {
            input.classList.add("invalid");
            input.classList.toggle("valid");
        }
    }
})();