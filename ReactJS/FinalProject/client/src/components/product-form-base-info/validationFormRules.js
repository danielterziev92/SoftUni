const isValueEmpty = (value) => value.trim() !== '';
const checkMaxLength = (value, maxLength) => value.length < maxLength;

const fieldsMaxLength = {
    name: 100,
    code: 10,
    barcode: 128,
}

export const validationFormRules = {

    name: [
        {
            condition: (value) => isValueEmpty(value),
            errorMessage: 'Името не може да бъде празно',
        },
        {
            condition: (value) => checkMaxLength(value, fieldsMaxLength.name),
            errorMessage: `Може да съдържа максимум ${fieldsMaxLength.name} символа`,
        }
    ],
    code: [
        {
            condition: (value) => checkMaxLength(value, fieldsMaxLength.code),
            errorMessage: `Може да съдържа максимум ${fieldsMaxLength.code} символа`,
        }
    ],
    barcode: [
        {
            condition: (value) => checkMaxLength(value, fieldsMaxLength.barcode),
            errorMessage: `Може да съдържа максимум ${fieldsMaxLength.barcode} символа`,
        }
    ],
    quantity: [
        {
            condition: (value) => Number.isInteger(value) && value > 0,
            errorMessage: 'Количеството трябва да бъде позитивно число',
        },
        {
            condition: (value) => Number.isInteger(value),
            errorMessage: 'Количеството трябва да бъде цяло число',
        }
    ],
    price: [
        {
            condition: (value) => /^\d{0,10}(\.\d{1,3})?$/.test(value),
            errorMessage: 'Числото трябва да бъде максимум 10 символа преди десетичната запетая и 3 след нея'
        }
    ],
    group: [
        {
            condition: (value) => Number.isInteger(value) && value > 0,
            errorMessage: 'Трябва да изберете група',
        }
    ],
    user: []
}