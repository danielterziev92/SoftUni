export default function validationPasswordRules(password, repeat_password) {
    if (password) {
        if (password.length < 8) {
            return {message: 'Паролата трябва да бъде по-голяма или равна на 8 символа', status: 'error'}
        }

        if (password.length > 128) {
            return {message: 'Паролата трябва да бъде максимум 128 символа', status: 'error'}
        }

        if (!/\d/.test(password)) {
            return {message: 'Паролата трябва да съдържа поне 1 цифра', status: 'error'}
        }
    }

    if (password !== repeat_password) {
        return {message: 'Паролите не съвпадат', status: 'error'}
    }

    return true;
}