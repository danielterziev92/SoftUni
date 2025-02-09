day = int(input())
weekend_day = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
error = 'Error'
if day >= 1 and day <= 7:
    current_day = weekend_day[day-1]
    print(current_day)
else:
    print(error)