const registerForm = document.querySelector('form#register');
registerForm.addEventListener('submit', registerUser)

const url = 'http://localhost:3030/users/register'

async function registerUser(e) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const {email, password, rePass} = Object.fromEntries(formData);

    if (!email || !password) {
        throw new Error('All fields are require!');
    }

    if (password !== rePass) {
        throw new Error('The passwords miss match!');
    }

    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({email, password, rePass})
        })

        if (!response.ok) {
            const error = await response.json()
            throw new Error(error.message)
        }

        const data = await response.json();
        const user = {
            email: data.email,
            id: data._id,
            token: data.accessToken,
        }

        localStorage.setItem('userData', JSON.stringify(user));
        window.location = './index.html'
    } catch (e) {
        registerForm.reset();
        alert(e.message)
    }
}