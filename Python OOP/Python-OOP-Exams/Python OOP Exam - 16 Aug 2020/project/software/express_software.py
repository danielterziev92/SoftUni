from project.software.software import Software


class ExpressSoftware(Software):
    __SOFTWARE_TYPE = 'Express'
    __MEMORY_CONSUMPTION = 2

    def __init__(self, name: str, capacity_consumption: int, memory_consumption: int):
        super().__init__(name, ExpressSoftware.__SOFTWARE_TYPE, capacity_consumption,
                         memory_consumption * ExpressSoftware.__MEMORY_CONSUMPTION)
