fist_tine = int(input())
second_tine = int(input())
third_tine = int(input())
total_time = fist_tine + second_tine + third_tine
minutes = total_time // 60
seconds = total_time % 60
if seconds < 10:
    print(f'{minutes:.0f}:0{seconds:.0f}')
else:
    print(f'{minutes:.0f}:{seconds:.0f}')