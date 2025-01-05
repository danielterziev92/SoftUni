package BasicSyntaxConditionalStatementsAndLoops.Lab;

import java.util.Scanner;
import java.util.stream.IntStream;

public class RefactorSumOfOddNumbers {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int oddSum = IntStream.rangeClosed(0, Integer.parseInt(scanner.nextLine()) * 2)
                .filter(i -> i % 2 != 0)
                .peek(System.out::println)
                .sum();

        System.out.printf("Sum: %d", oddSum);
    }
}
