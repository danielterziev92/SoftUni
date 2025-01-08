package Arrays.Lab;

import java.util.Arrays;
import java.util.Scanner;

public class EvenAndOddSubtraction {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int[] numbers = Arrays.stream(scanner.nextLine().split(" ")).mapToInt(Integer::parseInt).toArray();
        int sum = 0;

        for (int number : numbers) {
            if (number % 2 == 0) {
                sum += number;
            } else {
                sum -= number;
            }
        }

        System.out.println(sum);
    }
}
