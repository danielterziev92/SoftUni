package MapsLambdaAndStreamAPI.Exercise;

import java.util.*;

public class StudentAcademy {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        Map<String, List<Double>> studentGrades = new LinkedHashMap<>();
        int n = Integer.parseInt(scanner.nextLine());
        for (int i = 0; i < n; i++) {
            String name = scanner.nextLine();
            double grade = Double.parseDouble(scanner.nextLine());

            studentGrades.computeIfAbsent(name, k -> new ArrayList<>()).add(grade);
        }

        for (Map.Entry<String, List<Double>> student : studentGrades.entrySet()) {
            List<Double> grades = student.getValue();
            double averageGrades = grades.stream().mapToDouble(Double::doubleValue).average().orElse(0.0);
            if (averageGrades < 4.50) continue;

            System.out.printf("%s -> %.2f%n", student.getKey(), averageGrades);
        }
    }
}
