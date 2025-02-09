const loginForm = document.querySelector('form#login');
loginForm.addEventListener('submit', userLogin)

const url = 'http://localhost:3030/users/login';

async function userLogin(e) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const {email, password} = Object.fromEntries(formData);
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({email, password}),
        })

        if (!response.ok) {
            const error = response.json()
            throw new Error(error.message);
        }

        const data = await response.json();

        const userData = {
            email: data.email,
            id: data._id,
            token: data.accessToken,
        };

        localStorage.setItem('userData', JSON.stringify(userData));
        window.location = './index.html'

    } catch (e) {
        document.querySelector('form#login').reset();
        alert(e.message)
    }


}