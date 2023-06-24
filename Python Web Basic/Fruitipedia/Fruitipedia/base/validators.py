from django.core.exceptions import ValidationError


def start_with_letter_validator(value: str):
    if not value[0].isalpha():
        raise ValidationError('Your name must start with a letter!')


def only_letters_validator(value: str):
    if not all([ch.isalpha() for ch in value]):
        raise ValidationError('Fruit name should contain only letters!')
