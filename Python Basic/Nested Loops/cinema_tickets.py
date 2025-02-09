movie = input()
total_amount_seat = 0
student_ticket = 0
standard_ticket = 0
kid_ticket = 0
while movie != 'Finish':
    seats = int(input())
    amount_seats = 0
    for ticket in range(seats):
        type_ticket = input()
        if type_ticket == 'End':
            break
        elif type_ticket == 'student':
            student_ticket += 1
        elif type_ticket == 'standard':
            standard_ticket += 1
        elif type_ticket == 'kid':
            kid_ticket += 1
        amount_seats += 1
    print(f'{movie} - {(amount_seats/seats)*100:.2f}% full.')
    total_amount_seat += amount_seats
    movie = input()
print(f'Total tickets: {total_amount_seat}')
print(f'{(student_ticket/total_amount_seat)*100:.2f}% student tickets.')
print(f'{(standard_ticket/total_amount_seat)*100:.2f}% standard tickets.')
print(f'{(kid_ticket/total_amount_seat)*100:.2f}% kids tickets.')