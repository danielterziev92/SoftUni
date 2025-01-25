class Zoo:

    __animals = 0

    def __init__(self, name):
        self.name = name
        self.mammals = list()
        self.fishes = list()
        self.birds = list()

    def add_animal(self, species, name):
        if species == "mammal":
            self.mammals.append(name)
        elif species == "fish":
            self.fishes.append(name)
        elif species == "bird":
            self.birds.append(name)
        self.__animals += 1

    def get_info(self, species):
        if species == "mammal":
            print(f"Mammals in {self.name}: {', '.join([animal for animal in self.mammals])}")
            return f"Total animals: {self.__animals}"
        elif species == "fish":
            print(f"Fishes in {self.name}: {', '.join([animal for animal in self.fishes])}")
            return f"Total animals: {self.__animals}"
        elif species == "bird":
            print(f"Birds in {self.name}: {', '.join([animal for animal in self.birds])}")
            return f"Total animals: {self.__animals}"


name_of_zoo = input()
zoo = Zoo(name_of_zoo)
counter = int(input())
for _ in range(counter):
    animals = input().split(" ")
    species = animals[0]
    name = animals[1]
    zoo.add_animal(species, name)
print(zoo.get_info(input()))