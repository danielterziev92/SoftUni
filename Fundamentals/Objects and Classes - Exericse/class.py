class Class:

    __students_count = 22

    def __init__(self, name):
        self.name = name
        self.students = list()
        self.grades = list()

    def add_student(self, name: str, grade: float):
        if self.__students_count > 0:
            self.students.append(name)
            self.grades.append(grade)
            self.__students_count -= 1

    def get_average_grade(self):
        self.average_grade = round(sum(self.grades) / len(self.grades), 2)
        return self.average_grade

    def __repr__(self):
        return f"The students in {self.name}: {', '.join([student for student in self.students])}. Average grade: {self.get_average_grade()}"


a_class = Class("11B")
a_class.add_student("Peter", 4.80)
a_class.add_student("George", 6.00)
a_class.add_student("Amy", 3.50)
print(a_class)