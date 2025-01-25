def data_type(type: str, parametur):
    if type == 'int':
        return int(parametur) * 2
    elif type == 'real':
        return f'{float(parametur)*1.5:.2f}'
    elif type == 'string':
        return f'${parametur}$'


current_type = input()
current_paramentur = input()
print(data_type(type=current_type, parametur=current_paramentur))