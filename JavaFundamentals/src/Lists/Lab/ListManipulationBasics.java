package Lists.Lab;

import java.util.Arrays;
import java.util.List;
import java.util.Scanner;
import java.util.stream.Collectors;

public class ListManipulationBasics {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        List<Integer> numbers = Arrays.stream(scanner.nextLine().split(" ")).map(Integer::parseInt).collect(Collectors.toList());

        while (true) {
            String input = scanner.nextLine();
            if (input.equals("end")) {
                break;
            }

            String[] parts = input.split(" ");
            String command = parts[0];

            switch (command) {
                case "Add" -> {
                    int number = Integer.parseInt(parts[1]);

                    numbers.add(number);
                }
                case "Remove" -> {
                    int number = Integer.parseInt(parts[1]);

                    numbers.remove(Integer.valueOf(number));
                }
                case "RemoveAt" -> {
                    int index = Integer.parseInt(parts[1]);

                    numbers.remove(index);
                }
                case "Insert" -> {
                    int number = Integer.parseInt(parts[1]);
                    int index = Integer.parseInt(parts[2]);

                    numbers.add(index, number);
                }
            }
        }

        for (int number : numbers) {
            System.out.print(number + " ");
        }
    }
}
