function phoneBook(people) {
    const personalInfo = {}

    for (const person of people) {
        const info = person.split(' ');
        const [name, phone] = [...info]
        personalInfo[name] = phone;
    }

    for (const [key, value] of Object.entries(personalInfo)) {
        console.log(`${key} -> ${value}`);
    }
}

phoneBook(['Tim 0834212554',
    'Peter 0877547887',
    'Bill 0896543112',
    'Tim 0876566344']);

phoneBook(['George 0552554',
    'Peter 087587',
    'George 0453112',
    'Bill 0845344']);