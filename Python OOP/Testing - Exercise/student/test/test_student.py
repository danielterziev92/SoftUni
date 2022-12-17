from unittest import TestCase, main

from project.student import Student


class StudentTest(TestCase):
    NAME = 'student_test'

    def setUp(self) -> None:
        self.student = Student(self.NAME)

    def test_class_initialization_without_courses(self):
        self.assertEqual({}, self.student.courses)
        self.assertEqual(self.NAME, self.student.name)

    def test_class_initialization_with_courses(self):
        courses = {'Python Advance': ['test 1', 'test 2']}

        student = Student(self.NAME, courses)
        self.assertEqual(courses, student.courses)
        self.assertEqual(self.NAME, student.name)

    def test_enroll_method_when_course_does_not_exist_returned_massage(self):
        course_name = 'Python OOP'
        note = ['test1', 'test 2']
        add_course_note = 'add course note'
        self.assertEqual({}, self.student.courses)
        result = self.student.enroll(course_name, note, add_course_note)
        expected_result = "Course has been added."
        self.assertEqual(expected_result, result)

    def test_enroll_method_when_courses_does_not_exist_and_add_empty_courses_notes_returned_massage(self):
        course_name = 'Python Basic'
        note = ['test1', 'test 2']
        self.assertEqual({}, self.student.courses)
        result = self.student.enroll(course_name, note)
        expected_result = "Course and course notes have been added."
        self.assertEqual(expected_result, result)

    def test_enroll_method_when_courses_does_not_exist_and_add_empty_courses_notes_is_equal_to_Y_returned_massage(self):
        course_name = 'Python Basic'
        note = ['test1', 'test 2']
        add_courses_notes = 'Y'
        self.assertEqual({}, self.student.courses)
        result = self.student.enroll(course_name, note, add_courses_notes)
        expected_result = "Course and course notes have been added."
        self.assertEqual(expected_result, result)

    def test_enroll_method_when_course_exists_returned_message(self):
        course_name = 'Python Basic'
        note = ['test1', 'test 2']
        add_course_note = 'add course note'
        self.assertEqual({}, self.student.courses)
        self.student.enroll(course_name, note, add_course_note)
        self.assertEqual({course_name: []}, self.student.courses)
        result = self.student.enroll(course_name, note)
        expected_result = "Course already added. Notes have been updated."
        self.assertEqual(expected_result, result)

    def test_add_notes_method_when_course_does_not_exist_raises(self):
        course_name = 'Python Web'
        note = ['test1', 'test 2']
        self.assertEqual({}, self.student.courses)
        with self.assertRaises(Exception) as ex:
            self.student.add_notes(course_name, note)
        result = str(ex.exception)
        expected_result = "Cannot add notes. Course not found."
        self.assertEqual(expected_result, result)

    def test_add_notes_method_when_course_exist_returned_massage(self):
        course_name = 'Python OOP'
        note = []
        self.assertEqual({}, self.student.courses)
        self.student.enroll(course_name, note)
        self.assertEqual({course_name: []}, self.student.courses)
        result = self.student.add_notes(course_name, note)
        expected_result = "Notes have been updated"
        self.assertEqual(expected_result, result)

    def test_leave_course_method_when_course_name_does_not_exist_in_main_courses_raises(self):
        course_name = 'Python OOP'
        self.assertEqual({}, self.student.courses)
        with self.assertRaises(Exception) as ex:
            self.student.leave_course(course_name)
        result = str(ex.exception)
        expected_result = "Cannot remove course. Course not found."
        self.assertEqual(expected_result, result)

    def test_leave_courses_method_when_course_exist_returned_massage(self):
        course_name = 'Python OOP'
        note = []
        self.assertEqual({}, self.student.courses)
        self.student.enroll(course_name, note)
        self.assertEqual({course_name: []}, self.student.courses)
        result = self.student.leave_course(course_name)
        expected_result = "Course has been removed"
        self.assertEqual(expected_result, result)


if __name__ == '__main__':
    main()
