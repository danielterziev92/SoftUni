from project.animal import Animal


class Zoo:

    def __init__(self, name: str, budget: int, animal_capacity: int, workers_capacity: int):
        self.name = name
        self.__budget = budget
        self.__animal_capacity = animal_capacity
        self.__workers_capacity = workers_capacity
        self.animals = list()
        self.workers = list()

    def add_animal(self, animal: Animal, price):
        if self.__budget < price:
            return 'Not enough budget'
        if len(self.animals) == self.__animal_capacity:
            return 'Not enough space for animal'

        self.__budget -= price
        self.animals.append(animal)
        return f'{animal.name} the {type(animal).__name__} added to the zoo'

    def hire_worker(self, worker):
        if len(self.workers) == self.__workers_capacity:
            return 'Not enough space for worker'

        self.workers.append(worker)
        return f'{worker.name} the {type(worker).__name__} hired successfully'

    def fire_worker(self, worker_name):
        for worker in self.workers:
            if worker.name == worker_name:
                self.workers.remove(worker)
                return f'{worker_name} fired successfully'

        return f'There is no {worker_name} in the zoo'

    def pay_workers(self):
        total_workers_salary = 0
        for worker in self.workers:
            total_workers_salary += worker.salary

        if self.__budget < total_workers_salary:
            return 'You have no budget to pay your workers. They are unhappy'

        self.__budget -= total_workers_salary
        return f'You payed your workers. They are happy. Budget left: {self.__budget}'

    def tend_animals(self):
        needed_budget_for_all_animals = 0
        for animal in self.animals:
            needed_budget_for_all_animals += animal.money_for_care

        if self.__budget < needed_budget_for_all_animals:
            return 'You have no budget to tend the animals. They are unhappy.'

        self.__budget -= needed_budget_for_all_animals
        return f'You tended all the animals. They are happy. Budget left: {self.__budget}'

    def profit(self, amount):
        self.__budget += amount

    def animals_status(self):
        result = f'You have {len(self.animals)} animals\n'
        animals_dict = {
            'Lion': [],
            'Tiger': [],
            'Cheetah': [],
        }
        for animal in self.animals:
            class_name = animal.__class__.__name__
            animals_dict[class_name].append(repr(animal))

        for class_name, animals in animals_dict.items():
            if not animals:
                continue
            result += f'----- {len(animals)} {class_name}s:\n'
            result += '\n'.join(animals) + '\n'

        return result.strip()

    def workers_status(self):
        result = f'You have {len(self.workers)} workers\n'
        workers_dict = {
            'Keeper': [],
            'Caretaker': [],
            'Vet': [],
        }
        for worker in self.workers:
            class_name = worker.__class__.__name__
            workers_dict[class_name].append(worker)

        for class_name, workers in workers_dict.items():
            if not workers:
                continue
            result += f'----- {len(workers)} {class_name}s:\n'
            result += '\n'.join(workers) + '\n'

        return result.strip()
