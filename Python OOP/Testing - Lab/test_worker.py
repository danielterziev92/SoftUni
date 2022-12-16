class Worker:

    def __init__(self, name, salary, energy):
        self.name = name
        self.salary = salary
        self.energy = energy
        self.money = 0

    def work(self):
        if self.energy <= 0:
            raise Exception('Not enough energy.')

        self.money += self.salary
        self.energy -= 1

    def rest(self):
        self.energy += 1

    def get_info(self):
        return f'{self.name} has saved {self.money} money.'


from unittest import TestCase, main


class WorkerTest(TestCase):

    def test_worker_initialization(self):
        worker = Worker('Test', 100, 1)

        self.assertEqual('Test', worker.name)
        self.assertEqual(100, worker.salary)
        self.assertEqual(1, worker.energy)
        self.assertEqual(0, worker.money)

    def test_worker_energy_incremented_after_rest(self):
        worker = Worker('test', 100, 10)

        self.assertEqual(10, worker.energy)
        worker.rest()
        self.assertEqual(11, worker.energy)

    def test_worker_can_not_work_with_zero_energy_raises(self):
        worker = Worker('test', 100, 0)

        self.assertEqual(0, worker.energy)

        with self.assertRaises(Exception) as context:
            worker.work()

        self.assertEqual('Not enough energy.', str(context.exception))

    def test_worker_can_not_work_with_negative_energy_raises(self):
        worker = Worker('test', 100, -1)

        self.assertEqual(-1, worker.energy)

        with self.assertRaises(Exception) as context:
            worker.work()

        self.assertEqual('Not enough energy.', str(context.exception))

    def test_worker_increase_salary_after_work(self):
        worker = Worker('test', 100, 10)

        self.assertEqual(0, worker.money)
        worker.work()
        self.assertEqual(100, worker.money)
        worker.work()
        self.assertEqual(200, worker.money)

    def test_worker_energy_decrease_after_work(self):
        worker = Worker('test', 100, 10)

        self.assertEqual(10, worker.energy)
        worker.work()
        self.assertEqual(9, worker.energy)
        worker.work()
        self.assertEqual(8, worker.energy)

    def test_get_info(self):
        worker = Worker('test', 100, 10)

        self.assertEqual('test has saved 0 money.', worker.get_info())
        worker.work()
        self.assertEqual('test has saved 100 money.', worker.get_info())


if __name__ == '__main__':
    main()
