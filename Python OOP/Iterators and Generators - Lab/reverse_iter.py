class reverse_iter:
    def __init__(self, value):
        self.param = value
        self.index = -1

    def __iter__(self):
        return self

    def __next__(self):
        if self.index < -len(self.param):
            raise StopIteration

        value_to_return = self.param[self.index]
        self.index -= 1

        return value_to_return


reversed_list = reverse_iter([1, 2, 3, 4])
for item in reversed_list:
    print(item)
