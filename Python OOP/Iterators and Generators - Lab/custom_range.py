class custom_range_iterator:
    def __init__(self, cr):
        self.cr = cr
        self.current_value = self.cr.start

    def __next__(self):
        if self.current_value > self.cr.end:
            raise StopIteration

        value_to_return = self.current_value
        self.current_value += 1
        return value_to_return


class custom_range:
    def __init__(self, start, end):
        self.start = start
        self.end = end

    def __iter__(self):
        return custom_range_iterator(self)


one_to_ten = custom_range(1, 10)
for numb in one_to_ten:
    print(numb)
