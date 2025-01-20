package Methods.Exercise;

import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class AddAndSubtract {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        List<Integer> numbers = new ArrayList<>();
        for (int i = 0; i < 3; i++) {
            int number = Integer.parseInt(scanner.nextLine());
            numbers.add(number);
        }

        System.out.println(subtractNumbers(addNumbers(numbers.getFirst(), numbers.get(1)), numbers.getLast()));
    }

    private static int addNumbers(int first, int second) {
        return first + second;
    }

    private static int subtractNumbers(int first, int second) {
        return first - second;
    }
}
