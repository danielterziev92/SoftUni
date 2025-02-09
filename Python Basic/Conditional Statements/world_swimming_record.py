word_record_second = float(input())
meters_for_record = float(input())
second_for_meter = float(input())
swiming_time = meters_for_record * second_for_meter
slowing_time = (meters_for_record // 15) * 12.5
total_time = swiming_time + slowing_time
if total_time >= word_record_second :
    print(f'No, he failed! He was {total_time - word_record_second:.2f} seconds slower.')
elif word_record_second >= total_time :
    print(f'Yes, he succeeded! The new world record is {total_time:.2f} seconds.')