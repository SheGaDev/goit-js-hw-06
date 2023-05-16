const form = document.querySelector(".login-form");
form.addEventListener("submit", event => {
    event.preventDefault();
    const { elements } = event.currentTarget;
    const { email, password } = {
        email: elements.email.value,
        password: elements.password.value
    }
    if (!email.length || !password.length) return alert("Всі поля повинні бути заповнені!");
    console.log({ email, password })
    event.currentTarget.reset();
})