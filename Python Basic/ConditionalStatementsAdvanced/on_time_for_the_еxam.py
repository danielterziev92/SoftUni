hour_of_the_exam = int(input())
minute_of_the_exam = int(input())
hour_of_arrival = int(input())
minute_of_arrival = int(input())
hours_of_the_exam_in_seconds = hour_of_the_exam * 3600
hours_of_the_arrival_in_seconds = hour_of_arrival * 3600
minute_of_the_exam_in_seconds = minute_of_the_exam * 60
minute_of_the_arrival_in_seconds = minute_of_arrival * 60
seconds_exam = hours_of_the_exam_in_seconds + minute_of_the_exam_in_seconds
seconds_arrival = hours_of_the_arrival_in_seconds + minute_of_the_arrival_in_seconds
diff_minute = (seconds_exam - seconds_arrival) / 60
if seconds_exam >= seconds_arrival: # On time -> Early
    if diff_minute <= 30:
        print('On Time')
        if diff_minute == 0:
            pass
        else:
            print(f'{diff_minute:.0f} minutes before the start')
    elif diff_minute > 30 and diff_minute <= 59:
        print('Early')
        print(f'{diff_minute:.0f} minutes before the start')
    elif diff_minute >= 60:
        print('Early')
        if diff_minute % 60 == 0:
            print(f'{diff_minute//60:.0f}:00 hours before the start')
        else:
            diff_hours = diff_minute//60
            remaining_minutes = diff_minute - (diff_hours*60)
            if remaining_minutes < 10:
                print(f'{diff_hours:.0f}:0{remaining_minutes:.0f} hours before the start')
            else:
                print(f'{diff_hours:.0f}:{remaining_minutes:.0f} hours before the start')
else:
    diff_minute = abs(diff_minute)
    print('Late')
    if diff_minute > 0 and diff_minute < 60:
        print(f'{diff_minute:.0f} minutes after the start')
    elif diff_minute >= 60:
        diff_hours = (diff_minute//60)
        remaining_minutes = diff_minute - (diff_hours * 60)
        if diff_minute % 60 == 0:
            print(f'{diff_hours:.0f}:00 hours after the start')
        elif remaining_minutes < 10:
            print(f'{diff_hours:.0f}:0{remaining_minutes:.0f} hours after the start')
        elif remaining_minutes > 10:
            print(f'{diff_hours:.0f}:{remaining_minutes:.0f} hours after the start')