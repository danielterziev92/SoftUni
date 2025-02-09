name_of_movie = input()
# Продължителност на епизод
episode_duration = int(input())
# Продължителност на почивката
duration_of_the_break = int(input())
# Времето за обяд
time_for_lunch = duration_of_the_break / 8
# Времето за отдих
leisure_time = duration_of_the_break / 4
free_time = duration_of_the_break - time_for_lunch - leisure_time
import math
if free_time > episode_duration :
    print(f'You have enough time to watch {name_of_movie} and left with {math.ceil(free_time - episode_duration):.0f} minutes free time.')
elif free_time < episode_duration :
    print(f"You don't have enough time to watch {name_of_movie}, you need {math.ceil(episode_duration - free_time):.0f} more minutes.")