def forecast(*args):
    weathers = {
        'Sunny': [],
        'Cloudy': [],
        'Rainy': [],
    }

    for city, weather in args:
        weathers[weather].append(city)

    result = ''

    for weather, cities in weathers.items():
        for city in sorted(cities):
            result += f'{city} - {weather}\n'

    return result


print(forecast(
    ("Sofia", "Sunny"),
    ("London", "Cloudy"),
    ("New York", "Sunny")))

print(forecast(
    ("Beijing", "Sunny"),
    ("Hong Kong", "Rainy"),
    ("Tokyo", "Sunny"),
    ("Sofia", "Cloudy"),
    ("Peru", "Sunny"),
    ("Florence", "Cloudy"),
    ("Bourgas", "Sunny")))

print(forecast(
    ("Tokyo", "Rainy"),
    ("Sofia", "Rainy")))