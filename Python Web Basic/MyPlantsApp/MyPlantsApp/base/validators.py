from django.core.exceptions import ValidationError


def first_letter_of_string_to_be_capital_validator(value):
    if value[0] != value[0].upper():
        raise ValidationError('Your name must start with a capital letter!')


def only_letter_validator(value: str):
    for ch in value:
        if ch.isalpha():
            continue

        raise ValidationError('Plant name should contain only letters!')
