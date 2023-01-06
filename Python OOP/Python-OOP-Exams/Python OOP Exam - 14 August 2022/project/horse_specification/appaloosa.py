from project.horse_specification.horse import Horse


class Appaloosa(Horse):
    max_speed = 120
    train_speed = 2

    def __init__(self, name: str, speed: int):
        super().__init__(name, speed)

    def train(self):
        self.speed += min(self.train_speed + self.speed, self.max_speed)
