package Lists.Exercise;

import java.util.Arrays;
import java.util.List;
import java.util.Scanner;
import java.util.stream.Collectors;

public class ListOperations {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        List<Integer> numbers = Arrays.stream(scanner.nextLine().split(" "))
                .map(Integer::parseInt)
                .collect(Collectors.toList());

        while (true) {
            String command = scanner.nextLine();
            if (command.equals("End")) {
                break;
            }

            String[] tokens = command.split(" ");

            switch (tokens[0]) {
                case "Add":
                    int numberToAdd = Integer.parseInt(tokens[1]);
                    numbers.add(numberToAdd);
                    break;

                case "Insert":
                    int numberToInsert = Integer.parseInt(tokens[1]);
                    int insertIndex = Integer.parseInt(tokens[2]);
                    if (isValidIndex(insertIndex, numbers.size())) {
                        numbers.add(insertIndex, numberToInsert);
                    } else {
                        System.out.println("Invalid index");
                    }
                    break;

                case "Remove":
                    int removeIndex = Integer.parseInt(tokens[1]);
                    if (isValidIndex(removeIndex, numbers.size())) {
                        numbers.remove(removeIndex);
                    } else {
                        System.out.println("Invalid index");
                    }
                    break;

                case "Shift":
                    int count = Integer.parseInt(tokens[2]);
                    if (tokens[1].equals("left")) {
                        shiftLeft(numbers, count);
                    } else { // right
                        shiftRight(numbers, count);
                    }
                    break;
            }
        }

        System.out.println(numbers.stream()
                .map(String::valueOf)
                .collect(Collectors.joining(" ")));
    }

    private static boolean isValidIndex(int index, int size) {
        return index >= 0 && index < size;
    }

    private static void shiftLeft(List<Integer> numbers, int count) {
        count = count % numbers.size();
        for (int i = 0; i < count; i++) {
            numbers.add(numbers.remove(0));
        }
    }

    private static void shiftRight(List<Integer> numbers, int count) {
        count = count % numbers.size();
        for (int i = 0; i < count; i++) {
            numbers.add(0, numbers.remove(numbers.size() - 1));
        }
    }
}
