the_number_of_days_off = int(input())
year = 365
total_playtime = 30000
work_day_playtime = 63
day_off_playtime = 127
remaining_days = year - the_number_of_days_off
time_for_play = (remaining_days * work_day_playtime) + (the_number_of_days_off * day_off_playtime)
if time_for_play < total_playtime:
    time_in_hours = (total_playtime - time_for_play) // 60
    time_in_minutes = total_playtime - time_for_play - time_in_hours * 60
    print('Tom sleeps well')
    print(f'{time_in_hours} hours and {time_in_minutes} minutes less for play')
else:
    time_in_hours = (time_for_play - total_playtime) // 60
    time_in_minutes = time_for_play - total_playtime - time_in_hours * 60
    print('Tom will run away')
    print(f'{time_in_hours} hours and {time_in_minutes} minutes more for play')