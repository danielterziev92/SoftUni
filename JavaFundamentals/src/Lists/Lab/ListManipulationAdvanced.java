package Lists.Lab;

import java.util.Arrays;
import java.util.List;
import java.util.Scanner;

public class ListManipulationAdvanced {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        List<Integer> numbers = Arrays.stream(scanner.nextLine().split(" ")).map(Integer::parseInt).toList();

        while (true) {
            String input = scanner.nextLine();

            if (input.contains("end")) {
                break;
            }

            String[] parts = input.split(" ");
            String command = parts[0];

            switch (command) {
                case "Contains" -> {
                    int number = Integer.parseInt(parts[1]);
                    System.out.println(numbers.contains(number) ? "Yes" : "No such number");
                }
                case "Print" -> {
                    String lookUp = parts[1];

                    if (lookUp.equals("even")) {
                        numbers.stream()
                                .filter(n -> n % 2 == 0)
                                .forEach(n -> System.out.print(n + " "));
                    } else {
                        numbers.stream()
                                .filter(n -> n % 2 != 0)
                                .forEach(n -> System.out.print(n + " "));
                    }
                    System.out.print("\n");
                }
                case "Get" -> {
                    System.out.println(numbers.stream().mapToInt(Integer::intValue).sum());
                }
                case "Filter" -> {
                    String condition = parts[1];
                    int number = Integer.parseInt(parts[2]);

                    switch (condition) {
                        case "<" -> numbers.stream()
                                .filter(n -> n < number)
                                .forEach(n -> System.out.print(n + " "));
                        case ">" -> numbers.stream()
                                .filter(n -> n > number)
                                .forEach(n -> System.out.print(n + " "));
                        case ">=" -> numbers.stream()
                                .filter(n -> n >= number)
                                .forEach(n -> System.out.print(n + " "));
                        case "<=" -> numbers.stream()
                                .filter(n -> n <= number)
                                .forEach(n -> System.out.print(n + " "));
                    }

                    System.out.print("\n");
                }
            }
        }

    }
}
