from project.hardware.hardware import Hardware


class PowerHardware(Hardware):
    __HARDWARE_TYPE = 'Power'
    __CAPACITY_SPACE = 0.25
    __MEMORY_SPACE = 1.75

    def __init__(self, name: str, capacity: int, memory: int):
        super().__init__(name, PowerHardware.__HARDWARE_TYPE, int(capacity * PowerHardware.__CAPACITY_SPACE),
                         int(memory * PowerHardware.__MEMORY_SPACE))
