countries = input().split(", ")
capitals = input().split(", ")
country_dict = {country: capital for country, capital in zip(countries, capitals)}
for country, capital in country_dict.items():
    print(f"{country} -> {capital}")
