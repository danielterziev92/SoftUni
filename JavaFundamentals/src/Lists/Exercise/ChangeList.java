package Lists.Exercise;

import java.util.Arrays;
import java.util.List;
import java.util.Scanner;
import java.util.stream.Collectors;

public class ChangeList {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        List<Integer> numbers = Arrays.stream(scanner.nextLine().split(" ")).map(Integer::parseInt).collect(Collectors.toList());
        while (true) {
            String input = scanner.nextLine();

            if (input.equals("end")) break;

            if (input.startsWith("Delete")) {
                int number = Integer.parseInt(input.split(" ")[1]);

                while (numbers.contains(number)) {
                    numbers.remove(Integer.valueOf(number));
                }
            } else if (input.startsWith("Insert")) {
                int number = Integer.parseInt(input.split(" ")[1]);
                int index = Integer.parseInt(input.split(" ")[2]);

                numbers.add(index, number);
            }
        }

        System.out.println(numbers.stream()
                .map(String::valueOf)
                .collect(Collectors.joining(" ")));
        scanner.close();
    }
}
