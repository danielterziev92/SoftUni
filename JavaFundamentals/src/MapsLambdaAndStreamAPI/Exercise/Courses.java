package MapsLambdaAndStreamAPI.Exercise;

import java.util.*;

public class Courses {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        Map<String, List<String>> courses = new LinkedHashMap<>();
        String input;
        while (!(input = scanner.nextLine()).equals("end")) {
            String[] data = input.split(" : ");

            String courseName = data[0];
            String studentName = data[1];

            courses.computeIfAbsent(courseName, k -> new ArrayList<>()).add(studentName);
        }

        for (Map.Entry<String, List<String>> course : courses.entrySet()) {
            System.out.printf("%s: %d%n", course.getKey(), course.getValue().size());
            for (String student : course.getValue()) {
                System.out.printf("-- %s%n", student);
            }
        }
    }
}
