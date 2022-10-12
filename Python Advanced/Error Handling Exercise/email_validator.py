import sys
from io import StringIO

test1 = '''abc@abv.bg'''
test2 = '''peter@gmail.com
petergmail.com '''
test3 = '''peter@gmail.hotmail'''
test4 = '''mymail@.com'''

sys.stdin = StringIO(test4)

# Task start from here

import re


class NameTooShortError(Exception):
    pass


class MustContainAtSymbolError(Exception):
    pass


class InvalidDomainError(Exception):
    pass


def validation_email_name(email):
    regex = r'^[a-zA-Z0-9]{5,}'
    matches = re.search(regex, email)
    return matches


def validation_email_spec_char(email):
    regex = r'[@]'
    matches = re.search(regex, email)
    return matches


def validation_email_domain(email):
    regex = r'(.com)$|(.bg)$|(.net)$|(.org)$'
    matches = re.search(regex, email)
    return matches


while True:
    line = input()
    if line == 'End':
        break

    if validation_email_name(line) is None:
        raise NameTooShortError('Name must be more than 4 characters')
    if validation_email_spec_char(line) is None:
        raise MustContainAtSymbolError('Email must contain @')
    if validation_email_domain(line) is None:
        raise InvalidDomainError('Domain must be one of the following: .com, .bg, .org, .net')
    print('Email is valid')
