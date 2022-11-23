class sequence_repeat:
    def __init__(self, text, numb):
        self.text = text
        self.numb = numb
        self.index = 0

    def __iter__(self):
        return self

    def __next__(self):
        if self.numb == 0:
            raise StopIteration

        if self.index >= len(self.text):
            self.index = 0
        index = self.index
        self.index += 1
        result = self.text[index]
        self.numb -= 1
        return result


result = sequence_repeat('abc', 5)
for item in result:
    print(item, end='')
