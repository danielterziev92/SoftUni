from typing import List

from project.hardware.hardware import Hardware
from project.hardware.heavy_hardware import HeavyHardware
from project.hardware.power_hardware import PowerHardware
from project.software.express_software import ExpressSoftware
from project.software.light_software import LightSoftware
from project.software.software import Software


class System:
    _hardware: List[Hardware] = list()
    _software: List[Software] = list()

    @staticmethod
    def register_power_hardware(name: str, capacity: int, memory: int):
        System._hardware.append(PowerHardware(name, capacity, memory))

    @staticmethod
    def register_heavy_hardware(name: str, capacity: int, memory: int):
        System._hardware.append(HeavyHardware(name, capacity, memory))

    @staticmethod
    def register_express_software(hardware_name: str, name: str, capacity_consumption: int, memory_consumption: int):
        try:
            hardware = [h for h in System._hardware if h.name == hardware_name][0]
            software = ExpressSoftware(name, capacity_consumption, memory_consumption)
            hardware.install(software)
            System._software.append(software)
        except IndexError:
            return 'Hardware does not exist'
        except Exception as ex:
            return str(ex)

    @staticmethod
    def register_light_software(hardware_name: str, name: str, capacity_consumption: int, memory_consumption: int):
        try:
            hardware = [h for h in System._hardware if h.name == hardware_name][0]
            software = LightSoftware(name, capacity_consumption, memory_consumption)
            hardware.install(software)
            System._software.append(software)
        except IndexError:
            return 'Hardware does not exist'
        except Exception as ex:
            return str(ex)

    @staticmethod
    def release_software_component(hardware_name: str, software_name: str):
        try:
            hardware = [h for h in System._hardware if h.name == hardware_name][0]
            software = [s for s in System._software if s.name == software_name][0]
            hardware.uninstall(software)
            System._software.remove(software)
        except IndexError:
            return 'Some of the components do not exist'

    @staticmethod
    def analyze():
        result = f'System Analysis\n' \
                 f'Hardware Components: {len(System._hardware)}\n' \
                 f'Software Components: {len(System._software)}\n' \
                 f'Total Operational Memory: {sum([h.used_memory for h in System._hardware])} / ' \
                 f'{sum([h.memory for h in System._hardware])}\n' \
                 f'Total Capacity Taken: {sum([h.used_capacity for h in System._hardware])} / ' \
                 f'{sum([h.capacity for h in System._hardware])}'

        return result

    @staticmethod
    def system_split():
        result = ''
        for hardware in System._hardware:
            express_software_components = [1 for s in hardware.software_components if
                                           s.software_type == "Express"]
            light_software_components = [1 for s in hardware.software_components if
                                         s.software_type == "Light"]
            result += f'Hardware Component - {hardware.name}\n' \
                      f'Express Software Components: {sum(express_software_components)}\n' \
                      f'Light Software Components: {sum(light_software_components)}\n' \
                      f'Memory Usage: {hardware.used_memory} / {hardware.memory}\n' \
                      f'Capacity Usage: {hardware.used_capacity} / {hardware.capacity}\n' \
                      f'Type: {hardware.hardware_type}\n' \
                      f'Software Components: {", ".join([s.name for s in hardware.software_components]) or None}\n'
        return result
