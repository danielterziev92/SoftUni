package DataTypesAndVariables.Exercise;

import java.util.Scanner;

public class Elevator {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int persons = Integer.parseInt(scanner.nextLine());
        int capacity = Integer.parseInt(scanner.nextLine());

        int courses = (int) Math.ceil((double) persons / capacity);
        System.out.println(courses);
    }
}
