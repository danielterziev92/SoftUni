class Worker:

    def __init__(self, name: str, age: int, salary: int):
        self.name = name
        self.age = age
        self.salary = salary

    def __repr__(self):
        return ', '.join([f'{key.capitalize()}: {value}' for key, value in self.__dict__.items()])
