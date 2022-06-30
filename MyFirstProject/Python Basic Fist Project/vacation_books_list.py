number_of_pages = int(input())
pages = int(input())
day = int(input())
reading_time = number_of_pages / pages
reading_days = reading_time // day
print(int(reading_days))