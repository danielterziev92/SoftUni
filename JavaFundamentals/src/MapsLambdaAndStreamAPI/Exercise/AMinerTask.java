package MapsLambdaAndStreamAPI.Exercise;

import java.util.LinkedHashMap;
import java.util.Map;
import java.util.Scanner;

public class AMinerTask {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        Map<String, Integer> recourses = new LinkedHashMap<>();
        while (true) {
            String recourse = scanner.nextLine();

            if (recourse.equals("stop")) break;

            int quantity = Integer.parseInt(scanner.nextLine());
            recourses.put(recourse, recourses.getOrDefault(recourse, 0) + quantity);
        }

        for (Map.Entry<String, Integer> entry : recourses.entrySet()) {
            System.out.printf("%s -> %d%n", entry.getKey(), entry.getValue());
        }
    }
}
