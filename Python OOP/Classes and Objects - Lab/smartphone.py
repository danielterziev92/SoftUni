class Smartphone:

    def __init__(self, memory):
        self.memory = memory
        self.memory_used = 0
        self.apps = list()
        self.is_on = False

    def power(self):
        self.is_on = not self.is_on

    def install(self, app, app_memory):
        left_memory = self.calculate_left_memory() - app_memory

        if left_memory > 0 and not self.is_on:
            return f'Turn on your phone to install {app}'

        if left_memory < 0:
            return f'Not enough memory to install {app}'

        self.memory_used += app_memory
        self.apps.append(app)
        return f'Installing {app}'

    def status(self):
        memory_left = self.calculate_left_memory()
        total_apps_count = len(self.apps)
        return f'Total apps: {total_apps_count}. Memory left: {memory_left}'

    def calculate_left_memory(self):
        return self.memory - self.memory_used


smartphone = Smartphone(100)
print(smartphone.install("Facebook", 60))
smartphone.power()
print(smartphone.install("Facebook", 60))
print(smartphone.install("Messenger", 20))
print(smartphone.install("Instagram", 40))
print(smartphone.status())
