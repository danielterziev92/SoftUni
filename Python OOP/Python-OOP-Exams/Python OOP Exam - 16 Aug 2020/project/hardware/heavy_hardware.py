from project.hardware.hardware import Hardware


class HeavyHardware(Hardware):
    __HARDWARE_TYPE = 'Heavy'
    __CAPACITY_SPACE = 2
    __MEMORY_SPACE = 0.75

    def __init__(self, name: str, capacity: int, memory: int):
        super().__init__(name, HeavyHardware.__HARDWARE_TYPE, capacity * HeavyHardware.__CAPACITY_SPACE,
                         int(memory * HeavyHardware.__MEMORY_SPACE))
