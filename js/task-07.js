(() => {
    const controller = document.querySelector("#font-size-control");
    const text = document.querySelector("#text");
    controller.addEventListener("input", function changeSize(event) {
        text.style.fontSize = `${event.currentTarget.value}px`
    })
})();