from project.customer import Customer
from project.dvd import DVD


class MovieWorld:

    def __init__(self, name: str):
        self.name = name
        self.customers = list()
        self.dvds = list()

    def __repr__(self):
        result = ''
        for customer in self.customers:
            result += customer.__repr__() + '\n'

        for dvd in self.dvds:
            result += dvd.__repr__() + '\n'

        return result

    @staticmethod
    def dvd_capacity():
        dvd_capacity = 15
        return dvd_capacity

    @staticmethod
    def customer_capacity():
        customer_capacity = 10
        return customer_capacity

    def add_customer(self, customer: Customer):
        if len(self.customers) < self.customer_capacity():
            self.customers.append(customer)

    def add_dvd(self, dvd: DVD):
        if len(self.dvds) < self.dvd_capacity():
            self.dvds.append(dvd)

    def rent_dvd(self, customer_id: int, dvd_id: int):
        for customer in self.customers:
            if customer.id == customer_id:
                for dvd in customer.rented_dvds:
                    if dvd.id == dvd_id:
                        return f'{customer.name} has already rented {dvd.name}'

                for dvd in self.dvds:
                    if dvd.id == dvd_id:
                        if dvd.is_rented:
                            return f'DVD is already rented'

                        if customer.age < dvd.age_restriction:
                            return f'{customer.name} should be at least {dvd.age_restriction} to rent this movie'

                        dvd.is_rented = True
                        customer.rented_dvds.append(dvd)
                        return f'{customer.name} has successfully rented {dvd.name}'

    def return_dvd(self, customer_id: int, dvd_id: int):
        for customer in self.customers:
            if customer.id == customer_id:
                for idx, dvd in enumerate(customer.rented_dvds):
                    if dvd.id == dvd_id:
                        customer.rented_dvds.pop(idx)
                        dvd.is_rented = False
                        return f'{customer.name} has successfully returned {dvd.name}'
                return f'{customer.name} does not have that DVD'
