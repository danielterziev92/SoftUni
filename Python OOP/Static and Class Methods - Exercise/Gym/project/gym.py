from project.customer import Customer
from project.trainer import Trainer

from project.equipment import Equipment

from project.exercise_plan import ExercisePlan

from project.subscription import Subscription


class Gym:

    def __init__(self):
        self.customers = list()
        self.trainers = list()
        self.equipment = list()
        self.plans = list()
        self.subscriptions = list()

    def add_customer(self, customer: Customer):
        if customer not in self.customers:
            self.customers.append(customer)

    def add_trainer(self, trainer: Trainer):
        if trainer not in self.trainers:
            self.trainers.append(trainer)

    def add_equipment(self, equipment: Equipment):
        if equipment not in self.equipment:
            self.equipment.append(equipment)

    def add_plan(self, plan: ExercisePlan):
        if plan not in self.plans:
            self.plans.append(plan)

    def add_subscription(self, subscription: Subscription):
        if subscription not in self.subscriptions:
            self.subscriptions.append(subscription)

    def subscription_info(self, subscription_id: int):
        subscription = self.__find_by_id(subscription_id, self.subscriptions)
        customer = self.__find_by_id(subscription_id, self.customers)
        trainer = self.__find_by_id(subscription_id, self.trainers)
        plan = self.__find_by_id(subscription_id, self.plans)
        equipment = self.__find_by_id(subscription_id, self.equipment)
        result = '\n'.join(map(str, [subscription, customer, trainer, equipment, plan]))
        return result

    def __find_by_id(self, entity_id, entities):
        for entity in entities:
            if entity.id == entity_id:
                return entity
