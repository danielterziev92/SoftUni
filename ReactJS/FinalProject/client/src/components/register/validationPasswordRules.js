export default function validationPasswordRules(password, repeat_password) {
    if (password.length < 8) {
        return 'Паролата трябва да бъде по-голяма или равна на 8 символа';
    }

    if (password.length > 128) {
        return 'Паролата трябва да бъде максимум 128 символа';
    }

    if (!/\d/.test(password)) {
        return 'Паролата трябва да съдържа поне 1 цифра';
    }

    if (password !== repeat_password) {
        return 'Паролите не съвпадат';
    }

    return true;
}