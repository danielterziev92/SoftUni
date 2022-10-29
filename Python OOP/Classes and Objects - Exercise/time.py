class Time:
    max_hours = 23
    max_minutes = 59
    max_seconds = 59

    def __init__(self, hours, minutes, seconds):
        self.hours = hours
        self.minutes = minutes
        self.seconds = seconds

    def set_time(self, hours, minutes, seconds):
        self.hours, self.minutes, self.seconds = hours, minutes, seconds

    def get_time(self):
        hours_to_string = f'{self.hours}' if self.hours > 9 else f'0{self.hours}'
        minutes_to_string = f'{self.minutes}' if self.minutes > 9 else f'0{self.minutes}'
        seconds_to_string = f'{self.seconds}' if self.seconds > 9 else f'0{self.seconds}'
        return f'{hours_to_string}:{minutes_to_string}:{seconds_to_string}'

    def next_second(self):
        self.seconds += 1
        if self.seconds >= self.max_seconds:
            self.minutes += 1
            self.seconds = 0

        if self.minutes >= self.max_minutes:
            self.hours += 1
            self.minutes = 0

        if self.hours >= self.max_hours:
            self.hours = 0

        return self.get_time()


time = Time(9, 30, 59)
print(time.next_second())

time2 = Time(10, 59, 59)
print(time2.next_second())

time3 = Time(23, 59, 59)
print(time3.next_second())

time4 = Time(1, 20, 30)
print(time4.next_second())
