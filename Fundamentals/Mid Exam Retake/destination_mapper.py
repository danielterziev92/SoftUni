import re
cities = input()
match_cities = re.finditer(r"([=/])(?P<cities>[A-Z][A-Za-z]{2,})\1", cities)
destinations = list()
for match in match_cities:
    city = match.group('cities')
    destinations.append(city)
travel_points = sum([len(city) for city in destinations])
print(f'Destinations: {", ".join(destinations)}')
print(f"Travel Points: {travel_points}")