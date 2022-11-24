class vowels:
    all_vowels = ['a', 'e', 'i', 'o', 'u', 'y']

    def __init__(self, chars):
        self.chars = chars
        self.index = 0

    def __iter__(self):
        return self

    def __next__(self):
        if self.index == len(self.chars):
            raise StopIteration
        char_to_return = self.chars[self.index]

        if char_to_return.lower() not in self.all_vowels:
            self.index += 1
            return self.__next__()

        self.index += 1
        return char_to_return


my_string = vowels('Abcedifuty0o')
for char in my_string:
    print(char)
