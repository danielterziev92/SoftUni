package Methods.Lab;

import java.util.Arrays;
import java.util.Scanner;

public class MultiplyEvensByOdds {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int number = Math.abs(Integer.parseInt(scanner.nextLine()));
        String numberAsString = String.valueOf(number);

        int[] digits = Arrays.stream(numberAsString.split(""))
                .mapToInt(Integer::parseInt)
                .toArray();
        int sumOddNumbers = sumAllOddNumbers(digits);
        int sumEvenNumbers = sulAllEvenNumbers(digits);

        System.out.println(sumEvenNumbers * sumOddNumbers);
    }

    private static int sulAllEvenNumbers(int[] numbers) {
        return Arrays.stream(numbers).filter(number -> number % 2 == 0).sum();
    }

    private static int sumAllOddNumbers(int[] numbers) {
        return Arrays.stream(numbers).filter(number -> number % 2 != 0).sum();
    }
}
