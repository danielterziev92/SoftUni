package Arrays.Exercise;

import java.util.Arrays;
import java.util.Scanner;
import java.util.stream.Collectors;

public class ArrayModifier {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int[] numbers = Arrays.stream(scanner.nextLine().split(" "))
                .mapToInt(Integer::parseInt)
                .toArray();

        String command;
        while (!(command = scanner.nextLine()).equals("end")) {
            String[] parts = command.split(" ");

            switch (parts[0]) {
                case "swap" -> {
                    int index1 = Integer.parseInt(parts[1]);
                    int index2 = Integer.parseInt(parts[2]);

                    int temp = numbers[index1];
                    numbers[index1] = numbers[index2];
                    numbers[index2] = temp;
                }
                case "multiply" -> {
                    int index1 = Integer.parseInt(parts[1]);
                    int index2 = Integer.parseInt(parts[2]);

                    numbers[index1] = numbers[index1] * numbers[index2];
                }
                case "decrease" -> {
                    for (int i = 0; i < numbers.length; i++) {
                        numbers[i]--;
                    }
                }
            }
        }

        System.out.println(Arrays.stream(numbers)
                .mapToObj(String::valueOf)
                .collect(Collectors.joining(", ")));
    }
}
