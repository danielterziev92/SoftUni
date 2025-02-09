hours = int(input())
day = input()
working_day = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
working_hours = [10, 11, 12, 13, 14, 15, 16, 17, 18]
if day in working_day and hours in working_hours:
    print('open')
else:
    print('closed')