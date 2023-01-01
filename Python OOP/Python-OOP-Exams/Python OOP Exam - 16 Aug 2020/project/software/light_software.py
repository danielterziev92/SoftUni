from project.software.software import Software


class LightSoftware(Software):
    __SOFTWARE_TYPE = 'Light'
    __CAPACITY_CONSUMPTION = 1.5
    __MEMORY_CONSUMPTION = 0.5

    def __init__(self, name: str, capacity_consumption: int, memory_consumption: int):
        super().__init__(name, LightSoftware.__SOFTWARE_TYPE,
                         int(capacity_consumption * LightSoftware.__CAPACITY_CONSUMPTION),
                         int(memory_consumption * LightSoftware.__MEMORY_CONSUMPTION))
