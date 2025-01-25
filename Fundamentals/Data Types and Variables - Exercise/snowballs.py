numb_of_snowballs = int(input())
heghest_ball = {'weight': 0,'time': 0,'value': 0,'quality': 0}
for numb in range(numb_of_snowballs):
    weight = int(input())
    time = int(input())
    quality = int(input())
    value = int((weight/time) ** quality)
    if value > heghest_ball['value']:
        heghest_ball['weight'] = weight
        heghest_ball['time'] = time
        heghest_ball['quality'] = quality
        heghest_ball['value'] = value
print(f"{heghest_ball['weight']} : {heghest_ball['time']} = {heghest_ball['value']} ({heghest_ball['quality']})")