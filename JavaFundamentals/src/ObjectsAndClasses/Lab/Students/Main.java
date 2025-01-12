package ObjectsAndClasses.Lab.Students;

import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        List<Students> students = new ArrayList<>();

        while (true) {
            String input = scanner.nextLine();
            if (input.equals("end")) break;

            String[] data = input.split(" ");
            String firstName = data[0];
            String lastName = data[1];
            short age = Short.parseShort(data[2]);
            String hometown = data[3];

            Students student = new Students(firstName, lastName, age, hometown);
            students.add(student);
        }

        String town = scanner.nextLine();

        for (Students student : students) {
            if (!town.equals(student.getHometown())) continue;

            System.out.printf("%s %s is %d years old\n", student.getFirstName(), student.getLastName(), student.getAge());
        }
    }
}
