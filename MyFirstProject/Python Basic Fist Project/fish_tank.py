length = int(input())
width = int(input())
height = int(input())
persent = float(input())
volume_fish_tank =  length * width * height
volume_water = volume_fish_tank / 1000
occupied_space =  persent / 100
required_liters = volume_water * ( 1 - occupied_space )
print(required_liters)