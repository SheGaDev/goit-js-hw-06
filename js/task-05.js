(() => {
    const input = document.querySelector("#name-input"),
        greeting = document.querySelector("#name-output");

    function changeName(event) {
        greeting.textContent = event.currentTarget.value.length ?
            event.currentTarget.value : "Anonymous";
    }
    input.addEventListener("input", changeName);
})();