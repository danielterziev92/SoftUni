function attachEvents() {
    const studentsTableElement = document.querySelector('table tbody');
    const notificationElement = document.querySelector('.notification');
    const form = document.querySelector('form');
    form.addEventListener('submit', addStudentData)

    // document.getElementById('submit').addEventListener('click', addStudentData);
    const BASE_URL = 'http://localhost:3030/jsonstore/collections/students';

    window.onload = loadStudentsData;

    async function loadStudentsData() {

        studentsTableElement.replaceChildren();

        try {
            const response = await fetch(BASE_URL)
            if (response.status !== 200) {
                throw new Error('Can\'t fetch data');
            }

            const data = await response.json();

            Object.values(data).forEach(r => {
                const student = createElements('tr',
                    createElements('td', r.firstName),
                    createElements('td', r.lastName),
                    createElements('td', r.facultyNumber),
                    createElements('td', r.grade,)
                )

                studentsTableElement.appendChild(student);
            });
        } catch (e) {
            alert(e.message);
        }

    }

    function createElements(type, ...content) {
        const element = document.createElement(type)
        content.forEach(c => {
            if (typeof c === 'number' || typeof c === "string") {
                c = document.createTextNode(c)
            }
            element.appendChild(c)
        })

        return element;
    }

    async function addStudentData(e) {
        e.preventDefault()

        const dataForm = new FormData(form);
        const info = [...dataForm.values()]


        try {
            const response = await fetch(BASE_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    firstName: info[0],
                    lastName: info[1],
                    facultyNumber: info[2],
                    grade: Number(info[3].trim()),
                })
            })

            if (response.ok === false) {
                throw new Error('Can not create new student');
            }

            loadStudentsData();
        } catch (e) {
            alert(e.message);
        }
        //
        //
        //     if (!firstName.value || !lastName.value || !facultyNumber.value || !grade.value) {
        //         return notificationElement.textContent = 'Please field all fields'
        //     }
        //
        //     if (isNaN(grade.value)) {
        //         return notificationElement.textContent = 'Please fill the grade with number'
        //     }
        //
        //     const fetch_body = {
        //         method: 'POST',
        //         headers: {
        //             'Accept': 'application/json, text/plain, */*',
        //             'Content-Type': 'application/json',
        //         },
        //         body: JSON.stringify({
        //             firstName: firstName.value,
        //             lastName: lastName.value,
        //             facultyNumber: facultyNumber.value,
        //             grade: Number(grade.value),
        //         })
        //     }
        //
        //     fetch(BASE_URL, fetch_body)
        //         .then(resp => resp.json())
        //         .then(data => {
        //             loadStudentsData()
        //         })
        //         .catch(e => console.log(e));
        //
        //     firstName.value = '';
        //     lastName.value = '';
        //     facultyNumber.value = '';
        //     grade.value = '';
        // }
    }

}

attachEvents();