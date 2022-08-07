import re

count = int(input())
for _ in range(count):
    password = input()
    expression = r'^(?P<start_symbols>[\W\w]+)(?P<greater_sign>[>])(?P<numbers>[0-9]+)[|](?P<lower_letter>[a-z]+)[|]' \
                 r'(?P<upper_letter>[A-Z]+)[|](?P<pass_symbols>[\W\w]+[^<>]+)(?P<end_sign>[<])(?P=start_symbols)$'
    matches = re.finditer(expression, password)
    result = 'Try another password!'
    for match in matches:
        pass_number = match.group('numbers')
        pass_lower_letter = match.group('lower_letter')
        pass_upper_letter = match.group('upper_letter')
        pass_symbols = match.group('pass_symbols')
        encrypted_password = pass_number + pass_lower_letter + pass_upper_letter + pass_symbols
        result = f'Password: {encrypted_password}'
    print(result)
