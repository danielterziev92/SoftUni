package Arrays.Exercise;

import java.util.Arrays;
import java.util.Scanner;

public class CondenseArrayToNumber {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int[] numbers = Arrays.stream(scanner.nextLine().split(" ")).mapToInt(Integer::parseInt).toArray();

        if (numbers.length == 1) {
            System.out.println(numbers[0]);
            return;
        }

        while (numbers.length > 1) {
            int[] condensed = new int[numbers.length - 1];

            for (int i = 0; i < numbers.length - 1; i++) {
                condensed[i] = numbers[i] + numbers[i + 1];
            }

            numbers = condensed;
        }

        System.out.println(numbers[0]);
    }
}
