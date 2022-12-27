from unittest import TestCase, main

from project.student_report_card import StudentReportCard


class TestStudentReportCard(TestCase):
    student_name = 'test'
    school_year = 11

    def setUp(self) -> None:
        self.student_report_card = StudentReportCard(self.student_name, self.school_year)

    def test_student_name_property_without_data_raises(self):
        student_name = ''
        with self.assertRaises(ValueError) as ex:
            StudentReportCard(student_name, self.school_year)
        result = str(ex.exception)
        expected_result = "Student Name cannot be an empty string!"
        self.assertEqual(expected_result, result)

    def test_student_name_property_with_correct_data(self):
        student_name = 'test'
        student = StudentReportCard(student_name, self.school_year)
        self.assertEqual(student_name, student.student_name)

    def test_school_year_property_with_zero_input_raiser(self):
        school_year = 0
        with self.assertRaises(ValueError) as ex:
            StudentReportCard(self.student_name, school_year)
        result = ex.exception.__str__()
        expected_result = "School Year must be between 1 and 12!"
        self.assertEqual(expected_result, result)

    def test_school_year_property_with_negative_input_raiser(self):
        school_year = -1
        with self.assertRaises(ValueError) as ex:
            StudentReportCard(self.student_name, school_year)
        result = ex.exception.__str__()
        expected_result = "School Year must be between 1 and 12!"
        self.assertEqual(expected_result, result)

    def test_school_year_property_with_greater_then_twelve_raiser(self):
        school_year = 13
        with self.assertRaises(ValueError) as ex:
            StudentReportCard(self.student_name, school_year)
        result = ex.exception.__str__()
        expected_result = "School Year must be between 1 and 12!"
        self.assertEqual(expected_result, result)

    def test_school_year_property_with_correct_input_raiser(self):
        school_year = 1
        student = StudentReportCard(self.student_name, school_year)
        self.assertEqual(school_year, student.school_year)
        school_year = 12
        student2 = StudentReportCard(self.student_name, school_year)
        self.assertEqual(school_year, student2.school_year)

    def test_attributes_on_initialization_with_correct_data(self):
        self.assertEqual(self.student_name, self.student_report_card.student_name)
        self.assertEqual(self.school_year, self.student_report_card.school_year)
        self.assertEqual({}, self.student_report_card.grades_by_subject)

    def test_add_grade_method_with_subject_list_raises(self):
        subjects = ['test1', 'test2']
        with self.assertRaises(TypeError) as ex:
            self.student_report_card.add_grade(subjects, 11)
        result = str(ex.exception)
        expected_result = f"unhashable type: 'list'"
        self.assertEqual(expected_result, result)

    def test_add_grade_method_with_grade_string_and_get_average_grade_by_subject_raises(self):
        subject = 'test1'
        grade = '12'
        self.student_report_card.add_grade(subject, grade)
        with self.assertRaises(TypeError) as ex:
            self.student_report_card.average_grade_by_subject()
        result = str(ex.exception)
        expected_result = f"unsupported operand type(s) for +: 'int' and 'str'"
        self.assertEqual(expected_result, result)

    def test_add_grade_method(self):
        subject = 'Python OOP'
        grade = 6
        self.student_report_card.add_grade(subject, grade)
        self.assertTrue(subject in self.student_report_card.grades_by_subject)
        self.assertEqual({subject: [grade]}, self.student_report_card.grades_by_subject)

    def test_average_grade_by_subject_method_without_data(self):
        self.assertEqual('', self.student_report_card.average_grade_by_subject())

    def test_average_grade_by_subject_method_return(self):
        subject = 'Python OOP'
        subject2 = 'Python Web'
        grade = 6
        grade2 = 6
        expected_result = '\n'.join([f'{subject}: {grade:.2f}' for subject in [subject, subject2]])
        self.student_report_card.add_grade(subject, grade)
        self.student_report_card.add_grade(subject2, grade2)
        self.assertEqual(expected_result, self.student_report_card.average_grade_by_subject())

    def test_average_grade_by_subjects_method_return(self):
        self.student_report_card.add_grade('Python web', 6)
        self.student_report_card.add_grade('Python web', 6)
        self.student_report_card.add_grade('Python OOP', 6)
        self.assertEqual([6, 6], self.student_report_card.grades_by_subject['Python web'])
        self.assertEqual([6], self.student_report_card.grades_by_subject['Python OOP'])
        result = self.student_report_card.average_grade_by_subject()
        self.assertEqual('Python web: 6.00\nPython OOP: 6.00', result)

    def test_average_grade_for_all_subject_without_data_raises(self):
        with self.assertRaises(ZeroDivisionError) as ex:
            self.student_report_card.average_grade_for_all_subjects()
        result = str(ex.exception)
        expected_result = 'division by zero'
        self.assertEqual(expected_result, result)

    def test_average_grade_for_all_subject_return(self):
        subject = 'Python OOP'
        subject2 = 'Python Web'
        grade = 10
        grade2 = 6
        expected_result = f'Average Grade: {(grade + grade2) / len([grade, grade2]):.2f}'
        self.student_report_card.add_grade(subject, grade)
        self.student_report_card.add_grade(subject2, grade2)
        self.assertEqual(expected_result, self.student_report_card.average_grade_for_all_subjects())

    def test_repr_method_without_data_raises(self):
        with self.assertRaises(ZeroDivisionError) as ex:
            self.student_report_card.__repr__()
        result = str(ex.exception)
        expected_result = 'division by zero'
        self.assertEqual(expected_result, result)

    def test_repr_method_return(self):
        subject = 'Python OOP'
        subject2 = 'Python Web'
        grade = 6
        grade2 = 6
        self.student_report_card.add_grade(subject, grade)
        self.student_report_card.add_grade(subject2, grade2)
        average_grade_by_subject = '\n'.join([f'{subject}: {grade:.2f}' for subject in [subject, subject2]])
        average_grade_for_all_subjects = f'Average Grade: {(grade + grade2) / len([grade, grade2]):.2f}'
        result = self.student_report_card.__repr__()
        expected_result = f"Name: {self.student_name}\n" \
                          f"Year: {self.school_year}\n" \
                          f"----------\n" \
                          f"{average_grade_by_subject}\n" \
                          f"----------\n" \
                          f"{average_grade_for_all_subjects}"
        self.assertEqual(expected_result, result)


if __name__ == '__main__':
    main()
