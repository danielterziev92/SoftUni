class Party:

    def __init__(self):
        self.people = list()

    def print_result(self):
        print(f"Going: {', '.join(self.people)}")
        return f"Total: {len(self.people)}"


data = input()
party = Party()
while data != 'End':
    party.people.append(data)
    data = input()

print(party.print_result())