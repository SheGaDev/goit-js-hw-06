(() => {
    const form = document.querySelector("form.login-form");
    form.addEventListener("submit", submit => {
        submit.preventDefault();
        const { elements } = submit.currentTarget;
        const { email, password } = {
            email: elements.email.value,
            password: elements.password.value
        }
        if (!email.length || !password.length) return alert("Всі поля повинні бути заповнені!");
        console.log({ email, password })
        submit.currentTarget.reset();
    })
})();
